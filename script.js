// Contoh If, Else, Nested If
var nilai = 75;
var nilaiOutput;

if (nilai >= 80) {
    nilaiOutput = "Anda mendapatkan nilai A.";
} else if (nilai >= 70) {
    nilaiOutput = "Anda mendapatkan nilai B.";
} else {
    nilaiOutput = "Anda mendapatkan nilai C.";
}

// Contoh Switch Case
var day = "Selasa";
var activity;

switch (day) {
    case "Senin":
        activity = "Meeting";
        break;
    case "Selasa":
        activity = "Belajar";
        break;
    case "Rabu":
        activity = "Olahraga";
        break;
    default:
        activity = "Istirahat";
}

// Contoh For Statement
var outputText = "Contoh For Statement:<br>";
for (var i = 1; i <= 5; i++) {
    outputText += "Nomor: " + i + "<br>";
}

// Contoh While dan Do While
outputText += "<br>Contoh While dan Do While:<br>";
var count = 1;
while (count <= 5) {
    outputText += "Iterasi While ke-" + count + "<br>";
    count++;
}
count = 1;
do {
    outputText += "Iterasi Do While ke-" + count + "<br>";
    count++;
} while (count <= 10);

// Contoh Function
function tambah(a, b) {
    return a + b;
}
var hasil = tambah(5, 3);

//output
document.getElementById("output").innerHTML =
    "Contoh If-Else: " + nilaiOutput + "<br><br>" +
    "Contoh Switch Case: Pada hari " + day + " Anda melakukan: " + activity + "<br><br>" +
    outputText + "<br>" +
    "Contoh Function: Hasil penambahan 5 + 3 = " + hasil;