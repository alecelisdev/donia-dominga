<!-- BEGIN: git-workflow -->
## Flujo Git y GitHub

Antes de empezar cualquier tarea, lee y sigue [GIT_WORKFLOW.md](GIT_WORKFLOW.md). Comunica al usuario los recordatorios de su sección «Estado particular de este repositorio» al iniciar el trabajo.
<!-- END: git-workflow -->


<!-- BEGIN: worktree-cleanup -->
## Limpieza de worktrees

Cuando un worktree (rama de trabajo, por ejemplo en `~/orca/workspaces/`) termine su trabajo:

- **Solo se elimina cuando Ale lo autoriza y declara explícitamente que el worktree está listo.** Nunca lo borres por iniciativa propia, ni siquiera si la rama parece mergeada.
- Antes de eliminarlo, verifica y reporta: (1) cambios sin commit, (2) commits que no estén en ningún remoto, (3) archivos sin versionar o `.env` que no se puedan regenerar. Si hay algo, respáldalo (push de la rama o copia local) y avisa antes de borrar.
- Elimínalo con `git worktree remove` desde el repo principal, no con `rm -rf`. Esto conserva la rama en el repo.
- No hagas merge, force-push ni borres ramas remotas como parte de la limpieza, salvo que Ale lo pida aparte.
<!-- END: worktree-cleanup -->
