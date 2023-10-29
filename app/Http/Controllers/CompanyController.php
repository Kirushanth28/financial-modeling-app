<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\FinancialModelingService;
use App\Contracts\CacheInterface;

class CompanyController extends Controller
{
    private $financialModelingService;
    private $cache;

    public function __construct(FinancialModelingService $financialModelingService, CacheInterface $cache) {
        $this->financialModelingService = $financialModelingService;
        $this->cache = $cache;
    }

    public function getCompanyProfile($symbol) {
        $profile = $this->financialModelingService->getCompanyProfile($symbol);
        return Inertia::render('companyprofile', ['profile' => $profile]);
    }

    public function getCompanyQuote($symbol) {
        $quote = $this->financialModelingService->getCompanyQuote($symbol);
        return Inertia::render('companyquote', ['quote' => $quote]);
    }

}