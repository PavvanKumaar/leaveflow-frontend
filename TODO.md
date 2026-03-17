# Debug LeaveFlow Frontend - Fix White Screen

Dev server: http://localhost:5174/
Issue: JSX syntax errors (login.jsx line 155), import issues (App.jsx), halting render.

## Plan Steps:

1. [x] Repo exploration complete (search_files/read_file)
2. [x] Key files analyzed
3. [ ] Fix App.jsx: HR import, AuthController JSX, Routes nesting
4. [ ] Fix login.jsx: JSX fragment around return, add roleOptions, fix classNames, remove stray }}
5. [ ] Minor: auth.jsx setUser full object; confirm manager.jsx export
6. [ ] Test: Browser refresh, login flow, no console errors
7. [ ] attempt_completion

Progress: Vite HMR detecting changes - fixes will apply live.
