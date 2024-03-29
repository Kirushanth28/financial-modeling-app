<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::namespace('App\Http\Controllers')->group(function () {
    Route::get('/','AuthController@showLoginPage');
    Route::get('/login','AuthController@showLoginPage')->name('login');
    Route::post('/login','AuthController@login');
    Route::get('/logout','AuthController@logout');
    Route::get('/register','AuthController@showRegistrationPage');
    Route::post('/register','AuthController@register');

    // Autheticated web routes
    Route::middleware('auth')->group(function () {
        Route::get('/home', 'HomeController@index')->name('home');
        Route::get('/company/profile/{symbol}', 'CompanyController@getCompanyProfile')->name('company-profile');
        Route::get('/company/quote/{symbol}', 'CompanyController@getCompanyQuote')->name('company-quote');
    });
});