<?php

namespace App\Contracts;

interface CacheInterface {
    public function get($key);
    public function put($key, $value, $minutes);
}