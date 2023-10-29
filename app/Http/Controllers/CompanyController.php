<?php

namespace App\Http\Controllers;

use App\Services\FinancialModelingService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    protected $financialModelingService;

    public function __construct(FinancialModelingService $financialModelingService) {
        $this->financialModelingService = $financialModelingService;
    }

    public function getCompanyProfile($symbol) {
        $profile = $this->financialModelingService->getCompanyProfile($symbol);
        return response()->json($profile);
    }

    public function getCompanyQuote($symbol) {
        $quote = $this->financialModelingService->getCompanyQuote($symbol);
        return response()->json($quote);
    }

}