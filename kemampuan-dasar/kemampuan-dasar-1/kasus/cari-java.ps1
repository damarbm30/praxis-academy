$string = 'Ada file java di direktori '
$directory = Get-ChildItem "C:\Users\damar\OneDrive - UGM 365\File Kuliah\Akademik\Semester 7\MBKM\praxis-academy\" -Filter *.java -Recurse -File -Name| ForEach-Object {
    [System.IO.Path]::GetDirectoryName($_)
}
if (($directory))
{
$output = $string + "\" + $directory
$output.replace("`n"," ")
}
else
{'Tidak ada file java'}

