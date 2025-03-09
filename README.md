Laravel API
Ini adalah proyek API berbasis Laravel sederhana yang dirancang untuk mengelola pengguna. Proyek ini mencakup fungsi dasar CRUD untuk pengguna, serta dokumentasi Swagger untuk API.

Persyaratan
Sebelum menjalankan proyek ini, pastikan Anda sudah menginstal perangkat lunak berikut:

PHP 8.0+
Composer
Laravel 10.x
MySQL (atau database pilihan lain)
Instruksi Instalasi
Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan proyek ini secara lokal:

1. Clone Repositori
Clone repositori proyek ke lokal Anda:

bash
Copy
git clone https://github.com/username/test-RAVI.git
cd test-RAVI
2. Instal Dependensi
Jalankan Composer untuk menginstal dependensi PHP yang diperlukan:

bash
Copy
composer install
3. Menyiapkan Konfigurasi Environment
Salin file .env.example ke .env:

bash
Copy
cp .env.example .env
4. Generate Application Key
Generate application key dengan menjalankan:

bash
Copy
php artisan key:generate
5. Menyiapkan Database
Pastikan database MySQL sudah disiapkan dan terkonfigurasi. Update file .env dengan kredensial database Anda:

env
Copy
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database_anda
DB_USERNAME=nama_pengguna_database_anda
DB_PASSWORD=password_database_anda
Setelah memperbarui file .env, jalankan perintah berikut untuk migrasi database:

bash
Copy
php artisan migrate
6. Instal Swagger (Opsional)
Jika Anda ingin menghasilkan dan melihat dokumentasi API Swagger, instal Swagger melalui:

bash
Copy
composer require darkaonline/l5-swagger
Kemudian, publikasikan file konfigurasi Swagger:

bash
Copy
php artisan vendor:publish --tag=l5-swagger-config
7. Generate Dokumentasi Swagger
Jalankan perintah berikut untuk menghasilkan dokumentasi API Swagger:

bash
Copy
php artisan l5-swagger:generate
Dokumentasi Swagger dapat diakses di:

bash
Copy
http://localhost:8000/api/documentation
8. Menjalankan Server Pengembangan
Mulai server pengembangan menggunakan perintah:

bash
Copy
php artisan serve
Secara default, aplikasi dapat diakses di http://localhost:8000.

Endpoints API
1. GET /api/users
Mengambil semua pengguna.

Contoh Respons:
json
Copy
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
2. GET /api/users/{id}
Mengambil pengguna berdasarkan ID.

Parameter URL:
id (wajib): ID pengguna.
Contoh Respons:
json
Copy
{
    "id": 1,
    "name": "Fairuz",
    "email": "fairuz@gmail.com",
    "age": 30,
    "created_at": "2025-03-09T00:00:00",
    "updated_at": "2025-03-09T00:00:00"
}
3. POST /api/users
Membuat pengguna baru.

Contoh Body Request:
json
Copy
{
    "name": "dhiya",
    "email": "dhiya@gmail.com",
    "age": 25
}
Contoh Respons:
json
Copy
{
    "id": 2,
    "name": "dhiya",
    "email": "dhiya@gmail.com",
    "age": 25,
    "created_at": "2025-03-09T00:00:00",
    "updated_at": "2025-03-09T00:00:00"
}
4. PUT /api/users/{id}
Memperbarui pengguna yang ada.

Parameter URL:
id (wajib): ID pengguna yang akan diperbarui.
Contoh Body Request:
json
Copy
{
    "name": "Fairuz Update",
    "email": "fairuzupdate@gmail.com",
    "age": 35
}
Contoh Respons:
json
Copy
{
    "id": 1,
    "name": "Fairuz Update",
    "email": "fairuzupdate@gmail.com",
    "age": 35,
    "created_at": "2025-03-09T00:00:00",
    "updated_at": "2025-03-09T00:00:00"
}
5. DELETE /api/users/{id}
Menghapus pengguna.

Parameter URL:
id (wajib): ID pengguna yang akan dihapus.
Contoh Respons:
json
Copy
{
    "message": "User deleted successfully"
}
Menguji API
Anda dapat menggunakan alat seperti Postman atau Insomnia untuk berinteraksi dengan endpoint API. Atau, Anda dapat menjalankan pengujian PHPUnit dengan:

bash
Copy
php artisan test