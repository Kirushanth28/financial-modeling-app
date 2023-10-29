<?php

namespace App\Http\Controllers;

use App\Services\ExternalApiDataProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    private $dataProvider;

    public function __construct(ExternalApiDataProvider $dataProvider)
    {
        $this->dataProvider = $dataProvider;
    }

    public function index()
    {
        return Inertia::render('Home');  
    }

    public function getCompanyProfileDetails($name){
        // $request->validate([
        //     'name' => 'required'
        // ]);

        // Set API URL dynamically based on configuration or user input
        $apiUrl = config('services.api.companyProfileUrl'); // Example of using Laravel configuration
        $apiUrl .= $name;
        $this->dataProvider->setApiUrl($apiUrl);
        $apiData = $this->dataProvider->fetchData();
        return Inertia::render('CompanyProfile', [
            'data' => $apiData,
        ]);

    }

    public function getCompanyQuoteDetails($name){
        // $request->validate([
        //     'name' => 'required'
        // ]);

        // Set API URL dynamically based on configuration or user input
        $apiUrl = config('services.api.companyQuoteUrl'); // Example of using Laravel configuration
        $apiUrl .= $name;
        $this->dataProvider->setApiUrl($apiUrl);
        $apiData = $this->dataProvider->fetchData();
        return Inertia::render('CompanyQuote', [
            'data' => $apiData,
        ]);

    }

}