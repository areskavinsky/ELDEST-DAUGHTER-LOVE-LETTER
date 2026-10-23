/*
  Google Apps Script untuk menyimpan jawaban ke Google Sheets.

  Cara pakai:
  1. Buat Google Sheet baru.
  2. Buka Extensions > Apps Script.
  3. Hapus kode bawaan, lalu paste kode ini.
  4. Klik Save.
  5. Deploy > New deployment > Web app.
  6. Execute as: Me.
  7. Who has access: Anyone.
  8. Copy Web app URL ke index.html pada GOOGLE_SCRIPT_URL.
*/

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Jawaban');

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Jawaban');
    sheet.appendRow(['Waktu', 'Persentase Cinta', 'Pesan']);
  }

  var data = JSON.parse((e.postData && e.postData.contents) || '{}');
  var percent = Math.max(0, Math.min(100, Number(data.percent) || 0));
  var message = String(data.message || '').trim().slice(0, 1000);

  sheet.appendRow([
    new Date(),
    percent + '%',
    message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput('Love letter answer endpoint is ready.')
    .setMimeType(ContentService.MimeType.TEXT);
}
