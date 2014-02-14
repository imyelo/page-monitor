@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "./bin/page-monitor" %*
) ELSE (
  node  "./bin/page-monitor" %*
)
