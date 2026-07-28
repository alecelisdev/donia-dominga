/**
 * Backend de Doña Dominga sobre Google Sheets.
 *
 * Reemplaza a Supabase: esta Sheet tiene 2 pestañas, "eventos" y
 * "carta_eventos_items", cada una con una fila de encabezados que define
 * los nombres de campo del JSON que se lee/escribe (doGet/doPost son
 * genéricos por tabla, no hardcodean columnas).
 *
 * Deploy: Extensiones → Apps Script → pegar este archivo → Configuración
 * del proyecto → Propiedades del script → agregar ADMIN_PASSWORD →
 * Desplegar → Nueva implementación → Aplicación web
 * ("Ejecutar como: Yo", "Quién tiene acceso: Cualquier usuario").
 *
 * IMPORTANTE (evita romper esto sin querer):
 * - Se lee con getDisplayValues() (strings, nunca objetos Date) para que
 *   "fecha" (yyyy-mm-dd) llegue igual a como está escrita en la celda.
 *   La columna "fecha" debe estar formateada como Texto sin formato.
 * - doPost() lee el body con JSON.parse(e.postData.contents) — el cliente
 *   debe mandar el fetch SIN header Content-Type: application/json (si no,
 *   el navegador dispara un preflight OPTIONS que este Web App no maneja).
 */

const ALLOWED_TABLES = ["eventos", "carta_eventos_items"];

function getSheet_(table) {
  if (ALLOWED_TABLES.indexOf(table) === -1) {
    throw new Error("Tabla no permitida: " + table);
  }
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(table);
  if (!sheet) throw new Error("No existe la hoja: " + table);
  return sheet;
}

function readTable_(table) {
  const sheet = getSheet_(table);
  const values = sheet.getDataRange().getDisplayValues();
  if (values.length === 0) return { headers: [], rows: [] };
  const headers = values[0];
  const rows = values
    .slice(1)
    .filter((row) => row.some((cell) => cell !== ""))
    .map((row) => {
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = coerceRead_(row[i]);
      });
      return obj;
    });
  return { headers, rows };
}

// "TRUE"/"FALSE" (checkbox) -> boolean; el resto queda como string tal cual se ve en la celda.
function coerceRead_(value) {
  if (value === "TRUE") return true;
  if (value === "FALSE") return false;
  return value;
}

// boolean -> se escribe tal cual (Sheets lo muestra como checkbox si la columna ya está formateada así).
function coerceWrite_(value) {
  if (value === undefined || value === null) return "";
  return value;
}

function checkPassword_(password) {
  const expected = PropertiesService.getScriptProperties().getProperty(
    "ADMIN_PASSWORD",
  );
  return !!expected && password === expected;
}

function findRowIndexById_(sheet, headers, id) {
  const idCol = headers.indexOf("id");
  if (idCol === -1) throw new Error('La hoja no tiene columna "id"');
  const values = sheet.getDataRange().getDisplayValues();
  for (let r = 1; r < values.length; r++) {
    if (values[r][idCol] === id) return r + 1; // 1-based, +1 por la fila de encabezados
  }
  return -1;
}

function jsonOut_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function doGet(e) {
  try {
    const table = e.parameter.table;
    const { rows } = readTable_(table);
    return jsonOut_({ ok: true, rows: rows });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err.message || err) });
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;

    if (action === "login") {
      return jsonOut_(
        checkPassword_(data.password)
          ? { ok: true }
          : { ok: false, error: "Contraseña incorrecta." },
      );
    }

    if (!checkPassword_(data.password)) {
      return jsonOut_({ ok: false, error: "Contraseña incorrecta." });
    }

    const table = data.table;
    const sheet = getSheet_(table);
    const headers = sheet.getDataRange().getDisplayValues()[0];

    if (action === "create") {
      const id = Utilities.getUuid();
      const payload = Object.assign({}, data.payload, { id: id });
      const row = headers.map((h) => coerceWrite_(payload[h]));
      sheet.appendRow(row);
      return jsonOut_({ ok: true, id: id });
    }

    if (action === "update") {
      const rowIndex = findRowIndexById_(sheet, headers, data.id);
      if (rowIndex === -1) {
        return jsonOut_({ ok: false, error: "No se encontró el id." });
      }
      headers.forEach((h, i) => {
        if (h === "id") return; // el id no se reescribe
        if (Object.prototype.hasOwnProperty.call(data.payload, h)) {
          sheet.getRange(rowIndex, i + 1).setValue(coerceWrite_(data.payload[h]));
        }
      });
      return jsonOut_({ ok: true });
    }

    if (action === "delete") {
      const rowIndex = findRowIndexById_(sheet, headers, data.id);
      if (rowIndex === -1) {
        return jsonOut_({ ok: false, error: "No se encontró el id." });
      }
      sheet.deleteRow(rowIndex);
      return jsonOut_({ ok: true });
    }

    return jsonOut_({ ok: false, error: "Acción no reconocida: " + action });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err.message || err) });
  }
}
