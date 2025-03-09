# Proyek Test-RAVI Laravel API

Ini adalah proyek API berbasis Laravel sederhana yang dirancang untuk mengelola pengguna yang dibuat untuk memenuhi Evaluasi Kemampuan Fullstack: Laravel dan Database Rimba Ananta Vikasa Indonesia. Proyek ini mencakup fungsi dasar CRUD untuk pengguna, serta dokumentasi Swagger untuk API.

## Persyaratan
Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal perangkat lunak berikut:
- PHP 8.0+
- Composer
- Laravel 10.x
- MySQL (atau database pilihan lain)

## Instruksi Instalasi

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan proyek ini secara lokal:.

### 1. Clone Repositori
Clone repositori proyek ke mesin lokal Anda:
```sh
git clone https://github.com/username-anda/test-RAVI.git
cd test-RAVI
```
### 2. Instal Dependensi
Jalankan Composer untuk menginstal dependensi PHP yang diperlukan:
```sh
composer install
```
### 3. Menyiapkan Konfigurasi Environment
Salin file .env.example ke .env:
```sh
cp .env.example .env
```
### 4. Generate Application Key
Generate application key dengan menjalankan:
```sh
php artisan key:generate
```
### 5. Konfigurasi Database
Pastikan database MySQL sudah disiapkan dan terkonfigurasi. Update file .env dengan kredensial database Anda:
```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_anda
DB_USERNAME=nama_pengguna_database_anda
DB_PASSWORD=password_database_anda
```
Setelah memperbarui file .env, jalankan perintah berikut untuk migrasi database:
```sh
php artisan migrate
```
### 6. Instal Swagger
Instal Swagger melalui:
```sh
composer require darkaonline/l5-swagger
```
Kemudian, publikasikan file konfigurasi Swagger:
```sh
php artisan vendor:publish --tag=l5-swagger-config
```
### 7. Generate Dokumentasi Swagger
Jalankan perintah berikut untuk menghasilkan dokumentasi API Swagger:
```sh
php artisan l5-swagger:generate
```
Dokumentasi Swagger dapat diakses melalui:
```sh
http://localhost:8000/api/documentation
```
### 8. Jalankan Server
Mulai server menggunakan perintah:
```sh
php artisan serve
```
Secara default, aplikasi dapat diakses di 
```sh
http://localhost:8000.
```
### 9. Menjalankan Unit Test dengan Jest
**1. Instal jest (jika belum terinstal)**
```sh
npm install --save-dev jest
```
**2. Menjalankan Unit Test dengan Jest**
```sh
npm test
```
Perintah di atas akan mencari dan menjalankan semua test yang ada di folder tests (atau sesuai konfigurasi Jest Anda).

Jika Anda ingin menjalankan tes hanya untuk file tertentu, Anda bisa menambahkan nama file test-nya setelah perintah npm jest, seperti:
```sh
npm jest namaFile.test.j
```

## Endpoints API

### 1. GET /api/users
Mengambil semua pengguna.

**Contoh Respons:**
```json
[
    {
        "id": 1,
        "name": "Fairuz",
        "email": "fairuz@gmail.com",
        "age": 30,
        "created_at": "2025-03-09T00:00:00",
        "updated_at": "2025-03-09T00:00:00"
    }
]
```
### 2. GET /api/users/{id}
Mengambil pengguna berdasarkan ID.
**Parameter URL:**
id (wajib): ID pengguna.

**Contoh Respons:**
```json
[
    {
        "id": 1,
        "name": "Fairuz",
        "email": "fairuz@gmail.com",
        "age": 30,
        "created_at": "2025-03-09T00:00:00",
        "updated_at": "2025-03-09T00:00:00"
    }
]
```
### 3. POST /api/users
Membuat pengguna baru.
**Contoh Body Request:**
```json
{
    "name": "Dhiya",
    "email": "dhiya@gmail.com",
    "age": 25
}
```
**Contoh Response:**
```json
{
    "id": 2,
    "name": "Dhiya",
    "email": "dhiya@gmail.com",
    "age": 25,
    "created_at": "2025-03-09T00:00:00",
    "updated_at": "2025-03-09T00:00:00"
}

```
### 4. PUT /api/users/{id}
Memperbarui pengguna yang ada.
**Parameter URL:**
id (wajib): ID pengguna yang akan diperbarui.

**Contoh Body Request:**
```json
{
    "name": "Fairuz Update",
    "email": "fairuzupdate@gmail.com",
    "age": 35
}

```
**Contoh Response:**
```json
{
    "id": 1,
    "name": "Fairuz Update",
    "email": "fairuzupdate@gmail.com",
    "age": 35,
    "created_at": "2025-03-09T00:00:00",
    "updated_at": "2025-03-09T00:00:00"
}

```
### 5. DELETE /api/users/{id}
Menghapus pengguna.
**Parameter URL:**
id (wajib): ID pengguna yang akan dihapus.

**Contoh Response:**
```json
{
    "message": "User deleted successfully"
}

```