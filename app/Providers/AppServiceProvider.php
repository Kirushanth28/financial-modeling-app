<?php

namespace App\Providers;

use App\Contracts\FinancialModelingInterface;
use App\Services\FinancialModelingService;
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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
