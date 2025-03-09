<?php

return [
    'swagger' => [
        'api' => [
            'title' => env('APP_NAME', 'Laravel API'),  // Menggunakan APP_NAME dari .env
            'description' => 'API documentation for the Laravel application',
            'version' => '1.0.0',
        ],
    ],
    'paths' => [
        'docs' => storage_path('api-docs'),  // Lokasi file dokumentasi Swagger
        'annotations' => base_path('app/Http/Controllers'),  // Lokasi controller yang berisi anotasi Swagger
    ],
];

