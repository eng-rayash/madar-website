@echo off
chcp 65001 > nul
title مدار وآفاق - Development Server

echo.
echo  ============================================
echo    مدار وآفاق - بدء تشغيل الموقع
echo    Madar Waafaq - Starting Website
echo  ============================================
echo.

cd /d "f:\madar-website"

echo  [INFO] Copying fonts and assets...
xcopy /Y /Q "f:\madar-website\الاصول\الخطوط\*.*" "public\fonts\" 2>nul
xcopy /Y /Q "f:\madar-website\الاصول\الصور\*.*" "public\images\" 2>nul
copy /Y "f:\madar-website\الاصول\الشعار\logo.png" "public\logo\logo.png" 2>nul

echo  [INFO] Checking node_modules...
if not exist "node_modules" (
    echo  [INFO] Installing packages - please wait...
    call npm install
)

echo.
echo  [INFO] Starting dev server on http://localhost:3000
echo  [INFO] Press Ctrl+C to stop the server
echo.

call node node_modules\.bin\next dev --port 3000

pause
