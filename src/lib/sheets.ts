// Cliente para el Apps Script Web App que reemplaza a Supabase.
// Ver appscript/Code.gs para el backend (Google Sheets como base de datos).

export type SheetTable = "eventos" | "carta_eventos_items";

const APPS_SCRIPT_URL = import.meta.env.PUBLIC_APPS_SCRIPT_URL as string;

interface ApiResult {
  ok: boolean;
  error?: string;
}

interface ListResult<T> extends ApiResult {
  rows: T[];
}

interface CreateResult extends ApiResult {
  id?: string;
}

// El fetch NO debe llevar Content-Type: application/json — eso dispara un
// preflight OPTIONS que el Web App de Apps Script no responde, y el
// navegador bloquea la llamada. Al mandar el body como string sin
// Content-Type explícito, el navegador lo manda como text/plain (sin
// preflight); Code.gs lo parsea igual con JSON.parse(e.postData.contents).
async function postAction<T extends ApiResult>(
  body: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json() as Promise<T>;
}

export async function fetchTable<T = Record<string, unknown>>(
  table: SheetTable,
): Promise<T[]> {
  const url = `${APPS_SCRIPT_URL}?table=${encodeURIComponent(table)}`;
  const res = await fetch(url);
  const data = (await res.json()) as ListResult<T>;
  if (!data.ok) throw new Error(data.error ?? "Error al leer los datos.");
  return data.rows;
}

export async function login(password: string): Promise<ApiResult> {
  return postAction<ApiResult>({ action: "login", password });
}

export async function createRow(
  table: SheetTable,
  payload: Record<string, unknown>,
  password: string,
): Promise<CreateResult> {
  return postAction<CreateResult>({ action: "create", table, payload, password });
}

export async function updateRow(
  table: SheetTable,
  id: string,
  payload: Record<string, unknown>,
  password: string,
): Promise<ApiResult> {
  return postAction<ApiResult>({
    action: "update",
    table,
    id,
    payload,
    password,
  });
}

export async function deleteRow(
  table: SheetTable,
  id: string,
  password: string,
): Promise<ApiResult> {
  return postAction<ApiResult>({ action: "delete", table, id, password });
}

// ── "Sesión" admin ──────────────────────────────────────────────────────
// No hay tokens ni expiración: la misma contraseña compartida se guarda en
// localStorage y se reenvía en cada mutación (aceptado como trade-off para
// un admin de un solo usuario, sin backend propio).
const ADMIN_PW_KEY = "dd_admin_pw";

export function getStoredPassword(): string | null {
  return localStorage.getItem(ADMIN_PW_KEY);
}

export function setStoredPassword(password: string): void {
  localStorage.setItem(ADMIN_PW_KEY, password);
}

export function clearStoredPassword(): void {
  localStorage.removeItem(ADMIN_PW_KEY);
}
