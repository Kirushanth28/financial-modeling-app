<?php

namespace App\Providers;

use App\Contracts\FinancialModelingInterface;
use App\Services\FinancialModelingService;
use App\Contracts\CacheInterface;
use App\Services\CacheService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
         // Bind FinancialModelingInterface to FinancialModelingService
         $this->app->bind(FinancialModelingInterface::class, FinancialModelingService::class);
         $this->app->bind(CacheInterface::class, CacheService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
