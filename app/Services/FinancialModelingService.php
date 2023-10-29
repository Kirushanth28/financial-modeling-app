<?php

namespace App\Services;

use App\Contracts\FinancialModelingInterface;
use App\Contracts\CacheInterface;
use Illuminate\Support\Facades\Http;

class FinancialModelingService implements FinancialModelingInterface {
    private $cache;
    private $options;

    public function __construct(CacheInterface $cache) {
        $this->cache = $cache;
    }

    public function getCompanyProfile($symbol) {
        $cacheKey = "company_profile_$symbol";
        $cachedData = $this->cache->get($cacheKey);

        if ($cachedData) {
            return $cachedData;
        }
        $this->options['apikey'] = config('services.api.key');
        $response = Http::get("https://financialmodelingprep.com/api/v3/profile/$symbol");
        $data = $response->json();
        $this->cache->put($cacheKey, $data, 60); // Cache for 60 minutes

        return $data;
    }

    public function getCompanyQuote($symbol) {
        $cacheKey = "company_quote_$symbol";
        $cachedData = $this->cache->get($cacheKey);

        if ($cachedData) {
            return $cachedData;
        }

        $response = Http::get("https://financialmodelingprep.com/api/v3/quote/$symbol");
        $data = $response->json();
        $this->cache->put($cacheKey, $data, 60); // Cache for 60 minutes

        return $data;
    }
}
