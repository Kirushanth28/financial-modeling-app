<?php

namespace App\Services;

use App\Contracts\CacheInterface;
use Illuminate\Support\Facades\Cache;

class CacheService implements CacheInterface {
    public function get($key) {
        return Cache::get($key);
    }

    public function put($key, $value, $minutes) {
        Cache::put($key, $value, $minutes);
    }
}
