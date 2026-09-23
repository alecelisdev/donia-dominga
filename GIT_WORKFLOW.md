# Flujo de trabajo Git y GitHub

Este repositorio usa **GitHub Flow**. Esta guía aplica a cualquier agente o persona que trabaje aquí. Las instrucciones específicas del proyecto y la petición actual del usuario tienen prioridad. La rama principal estable es `main`.

## Al comenzar cada tarea

1. Lee las instrucciones del proyecto y esta guía. Ejecuta `git status --short --branch`, revisa la rama actual, `git remote -v` y la relación con la rama principal remota si existe.
2. Informa al usuario de cualquier aviso de la sección «Estado particular de este repositorio» al **comenzar** el trabajo. Da el aviso una vez y sigue avanzando; no lo uses como bloqueo si la tarea puede continuar.
3. Conserva los cambios preexistentes. Si no pertenecen a la tarea, trabaja en una rama o worktree limpio desde `main` y no los incluyas en tus commits. No hagas `reset --hard`, `clean`, `stash` ni sobrescribas archivos ajenos para despejar el árbol sin autorización.
4. Si hay remoto, actualiza referencias con `git fetch` y crea la rama desde la rama principal actualizada. Si no hay remoto, crea una rama local desde `main` y recuerda que el PR queda pendiente hasta configurar GitHub.

## Para cada cambio

1. Crea una rama corta por objetivo: `feat/descripcion`, `fix/descripcion`, `docs/descripcion` o `chore/descripcion`. Si varias tareas son independientes, usa ramas distintas. Evita trabajo nuevo directo en `main`.
2. Implementa cambios pequeños y coherentes. Haz commits descriptivos solo con archivos de la tarea; no incluyas secretos, archivos generados ni cambios preexistentes ajenos.
3. Ejecuta las verificaciones pertinentes que el proyecto tenga disponibles (por ejemplo lint, tipos, pruebas y build). Reporta qué pasó y qué no pudo ejecutarse. No inventes una aprobación de CI donde no hay CI.
4. Con remoto disponible, publica la rama y abre un pull request hacia `main`. El PR debe indicar objetivo, cambios, verificación, riesgos y, para UI, enlace o capturas de la vista previa cuando existan. Mantén el PR actualizado tras correcciones.
5. Fusiona con **squash merge** cuando el PR esté listo y se hayan cumplido las revisiones o aprobaciones requeridas. Si el merge publica en producción y el usuario no lo autorizó en el encargo, deja el PR listo para su revisión. Si ya autorizó publicar o fusionar, completa ese paso sin pedir la misma aprobación otra vez.
6. Tras fusionar, verifica el despliegue si aplica, elimina la rama de tarea y comunica el resultado. Para revertir una publicación, usa `git revert` o el mecanismo de rollback del despliegue; no reescribas la historia de la rama principal.

## Reglas permanentes

- `main` representa el estado listo para publicar. No se crea una rama `develop` ni ramas `release/*` de forma rutinaria.
- Usa una vista previa por PR si el hosting la ofrece. Un preview no equivale a un despliegue de producción.
- Si una tarea dura mucho, mantén la rama al día y divide el trabajo en PRs integrables. Usa feature flags cuando una función incompleta deba llegar a la rama principal.
- Las versiones que necesiten identificarse o recuperarse se marcan con tags sobre `main`.
- Si un repositorio tiene una rama histórica `develop`, revísala antes de eliminarla o reutilizarla. No la mezcles automáticamente con `main`.

## Estado particular de este repositorio

**Recordatorio al iniciar:** la rama histórica `develop` está pendiente de revisión. Al establecer esta guía, `main` y `develop` apuntaban al mismo historial local. Informa al usuario, verifica las ramas remotas y el objetivo real del despliegue, y continúa el trabajo nuevo desde `main` en una rama de tarea. No borres ni reutilices `develop` hasta cerrar esa revisión.
