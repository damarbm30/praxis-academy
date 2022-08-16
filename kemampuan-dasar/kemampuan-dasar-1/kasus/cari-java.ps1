$path = "C:\Users\damar\OneDrive - UGM 365\File Kuliah\Akademik\Semester 7\MBKM\praxis-academy\"
$name = Get-ChildItem $path -Filter *.java -Recurse -File -Name| ForEach-Object {
    [System.IO.Path]::GetFileName($_)
    }
$string = 'Ada file java di direktori '
$directory = Get-ChildItem $path -Filter *.java -Recurse -File -Name| ForEach-Object {
    [System.IO.Path]::GetDirectoryName($_)
    }

if (($directory))
    {
    $output_1 = $string + "\" + $directory
    $output_1.replace("`n"," ")
    $output_2 = $name + " ada, diganti namanya (y/t)?"
    Write-Output $output_2
    }
else
{'Tidak ada file java'}

$response = Read-Host -Prompt 'Masukkan respon: '
if (($response -eq 'y'))
    {
    $new_name = Read-Host -Prompt 'Masukkan nama file baru: '
    $output_3 = $directory + "\" + $name
    $fileDirectory = $path + $output_3
    Rename-Item -Path $fileDirectory -NewName $new_name
    }
else
{'Lanjut ke proses berikutnya'}