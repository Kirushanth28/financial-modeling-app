<?php

namespace App\Services;

use App\Contracts\FinancialModelingInterface;
use App\Contracts\CacheInterface;
use Illuminate\Support\Facades\Http;

class FinancialModelingService implements FinancialModelingInterface {
    private $cache;
    private $options;
    private $externalApiUrl;

    public function __construct(CacheInterface $cache) {
        $this->cache = $cache;
    }

    public function getCompanyProfile($symbol) {
        $cacheKey = "company_profile_$symbol";

        // Check whether the cachedata exist and not expired
        $cachedData = $this->cache->get($cacheKey);

        if ($cachedData) {
            return $cachedData;
        }
        $this->options['apikey'] = config('financialmodeling.api.key');
        $this->externalApiUrl = config('financialmodeling.api.baseUrl')."profile/".$symbol;
        $response = Http::get($this->externalApiUrl,$this->options);
        $data = $response->json();
        $this->cache->put($cacheKey, $data, 60); // Cache for 60 minutes

        return $data;
    }

    public function getCompanyQuote($symbol) {
        $cacheKey = "company_quote_$symbol";

        // Check whether the cachedata exist and not expired
        $cachedData = $this->cache->get($cacheKey);

        if ($cachedData) {
            return $cachedData;
        }

        $this->options['apikey'] = config('financialmodeling.api.key');
        $this->externalApiUrl = config('financialmodeling.api.baseUrl')."quote/".$symbol;
        $response = Http::get($this->externalApiUrl,$this->options);
        $data = $response->json();
        $this->cache->put($cacheKey, $data, 60); // Cache for 60 minutes

        return $data;
    }
}
