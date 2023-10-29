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
    Route::post('/logout','AuthController@logout');
    Route::get('/register','AuthController@showRegistrationPage');
    Route::post('/register','AuthController@register');
    Route::middleware('auth')->group(function () {
        Route::get('/home', 'HomeController@index')->name('home');
        Route::get('/company-profile/{name}', 'CompanyController@getCompanyProfileDetails')->name('company-profile');
        Route::get('/company-quote/{name}', 'CompanyController@getCompanyQuoteDetails')->name('company-quote');
    });
});