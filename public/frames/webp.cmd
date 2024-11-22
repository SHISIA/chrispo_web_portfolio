@echo off

rem Set paths and initialize counter
set inputFolder=%cd%  REM Uses current directory
set outputFolder=%cd%\webp_output
set /a counter=0

rem Ensure output folder exists
if not exist "%outputFolder%" (
    mkdir "%outputFolder%"
)

rem Process all supported image types
for %%f in (*.jpg *.jpeg *.png) do (
    echo Processing: "%%f"
    cwebp  -q 80 "%%f" -o "%outputFolder%\%%~nf.webp"
    if %errorlevel% equ 0 (
        echo Converted: "%%f"
        set /A counter=counter+1
    ) else (
        echo Error processing: "%%f"
    )
)

rem Display summary
echo ************************************
echo %counter% files have been successfully processed.
echo Converted files are in: "%outputFolder%"
echo ************************************
pause
