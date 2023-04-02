@echo off
Rem Ejecutable para publicar el desarrollo en Firebase
Rem

Rem Controles previos 
echo.
echo Antes de publicar en Firebase, recuerde antes verificar lo siguiente:
echo - Haber guardado todos los archivos y cancelado procesos activos. 
echo - En archivos environments\environment.ts, la variable firebaseConfig que apunte correctamente (pruebas o produccion)
echo - En archivos services, la variable url que apunte a la api correcta (pruebas o produccion)
echo.
choice /c s /n /m "Si para continuar, o Ctrl+C para cancelar"

Rem Verificar el proyecto correcto 
echo. 
echo Listando proyectos Firebase...
call firebase projects:list
echo.
echo "Verifique que este en el proyecto correcto (current)"
choice /c s /n /m "Si para continuar, o Ctrl+C para cancelar y cambiarlo"

Rem Generando app
echo.
echo ionic build...
call ionic build --prod --service-worker
echo.
echo "Verifique que terminó correcto el paso anterior (Buil at: xxx)"
choice /c s /n /m "Si para continuar, o Ctrl+C para cancelar"

Rem Subiendo a Firebase
echo.
echo firebase deploy...
call firebase deploy
echo.
echo "Verifique que terminó correcto el paso anterior (links a web)"
