<?php

return [

    'api' => [
        'key' => env('API_KEY'),
        'baseUrl' => env('API_BASE_URL','https://financialmodelingprep.com/api/v3/'),
        'companyProfileUrl' => 'profile/',
        'companyQuoteUrl' => 'quote/',
    ]

];
