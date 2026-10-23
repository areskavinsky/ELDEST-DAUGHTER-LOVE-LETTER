# Menyimpan Jawaban ke Google Sheets

Website ini bisa menyimpan persentase cinta dan pesan Khailafa ke Google Sheets. Telegram tidak diperlukan.

## 1. Buat Sheet

1. Buka https://sheets.google.com
2. Buat spreadsheet baru.
3. Klik **Extensions → Apps Script**.
4. Hapus kode bawaan.
5. Buka file `google-apps-script.gs` di folder website ini.
6. Salin seluruh isinya ke Apps Script.
7. Klik **Save**.

## 2. Deploy sebagai Web App

1. Di Apps Script, klik **Deploy → New deployment**.
2. Pilih jenis **Web app**.
3. Isi:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Klik **Deploy**.
5. Jika Google meminta izin, pilih akun Google kamu dan izinkan.
6. Salin **Web app URL** yang berakhir dengan `/exec`.

## 3. Tempel URL ke website

Buka `index.html`, cari:

```javascript
const GOOGLE_SCRIPT_URL = "";
```

Isi URL di antara tanda kutip:

```javascript
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/URL_KAMU/exec";
```

Simpan file website.

## 4. Hasilnya

Setelah Bab 7:

1. Khailafa memilih persentase.
2. Khailafa menulis pesan.
3. Khailafa klik **Simpan Jawaban**.
4. Data masuk ke tab `Jawaban` di Google Sheets.

Kolom yang tersimpan:

- Waktu
- Persentase cinta
- Pesan

Website tidak menampilkan jawaban kembali dan tidak menggunakan Telegram.

## Catatan keamanan

Web app disetel ke **Anyone** supaya website lokal dapat mengirim data tanpa login. Jangan memasukkan data sensitif selain jawaban untuk website ini. Kalau URL web app tersebar, orang lain secara teknis bisa mengirim data palsu ke Sheet.
