<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [

        'App\Events\NewSurvey' => [
            'App\Listeners\SaveSurvey',
        ],
        'App\Events\Points' => [
            'App\Listeners\AddPoints',
        ],
        'App\Events\IncreaseSurvey' => [
            'App\Listeners\AchievementEventSubscriber',
        ],
        'App\Events\AvatarUpload' => [
            'App\Listeners\AchievementEventSubscriber',
        ],

    ];

    protected $subscribe = [
        'App\Listeners\AchievementEventSubscriber',
    ];
    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
