<?php

namespace App\Contracts;

interface FinancialModelingInterface {
    public function getCompanyProfile($symbol);
    public function getCompanyQuote($symbol);
}
