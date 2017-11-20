<?php

namespace App\Listeners;
use App\Events\Points;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AchievementEventSubscriber
{
    public function handle($event ) {
        //
    }
    /**
     * Handle user login events.
     */
    public function onRegister($event) {
        $badge = \App\Achievement::where('title','Welcome aboard')->first();
        $event->user->achievements()->attach($badge->id, ['complete_rate'=>1, 'is_achieved'=>true ]);
        event(new Points($event->user, $badge->point));
    }

    public function onAvatarUpload($event )
    {
        $collected_badges= $event->user->achievements()
            ->where('is_achieved',1)
            ->get();
        if($collected_badges->contains('title','Avatar') != true) {
            $badge = \App\Achievement::where('title','Avatar')->first();
            $event->user->achievements()->attach($badge->id, ['complete_rate'=>1, 'is_achieved'=>true ]);
            event(new Points($event->user,$badge->point));
        }
    }

    /**
     * Handle user logout events.
     */
    public function onIncreaseSurvey($event) {

        $user = Auth::user();

        //check if the first survey is achieved?
        $collected_badges= $user->achievements()
            ->where('is_achieved',1)
            ->get();
        $inProgress_badges=$user->achievements()
            ->where('is_achieved',0)
            ->get();

        if($collected_badges->contains('title','First survey') != true) {
            $first_survey_badge = \App\Achievement::where('title','First survey')->first();
            $user->achievements()->attach($first_survey_badge->id, ['complete_rate'=>1, 'is_achieved'=>true ]);
            event(new Points($event->user,$first_survey_badge->point));

            $badges = \App\Achievement::where('title', 'Keep it up')->first();
            $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>1]]);
        } else if($collected_badges->contains('title','Keep it up') != true) {
            $badges = \App\Achievement::where('title', 'Keep it up')->first();

            if($inProgress_badges->contains('title','Keep it up')!= true){
                $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>1]]);
            } else{
                $complete_rate = $inProgress_badges->where('title', 'Keep it up')->first()->pivot->complete_rate;
                $steps = $inProgress_badges->where('title', 'Keep it up')->first()->steps;
                $complete_rate += 1;
                if ($complete_rate < $steps) {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate]]);
                }else {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate, 'is_achieved'=>true]]);
                    event(new Points($event->user,$badges->point));
                }
            }
        } else if($collected_badges->contains('title','Beginner') != true) {
            $badges = \App\Achievement::where('title', 'Beginner')->first();

            if($inProgress_badges->contains('title','Beginner')!= true){
                $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>1]]);
            }else{
                $complete_rate = $inProgress_badges->where('title', 'Beginner')->first()->pivot->complete_rate;
                $steps = $inProgress_badges->where('title', 'Beginner')->first()->steps;
                $complete_rate += 1;
                if ($complete_rate < $steps) {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate]]);
                }else {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate, 'is_achieved'=>true]]);
                    event(new Points($event->user,$badges->point));
                }
            }
        }else if($collected_badges->contains('title','Intermediate') != true) {
            $badges = \App\Achievement::where('title', 'Intermediate')->first();

            if($inProgress_badges->contains('title','Intermediate')!= true){
                $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>1]]);
            }else{
                $complete_rate = $inProgress_badges->where('title', 'Intermediate')->first()->pivot->complete_rate;
                $steps = $inProgress_badges->where('title', 'Intermediate')->first()->steps;
                $complete_rate += 1;
                if ($complete_rate < $steps) {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate]]);
                }else {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate, 'is_achieved'=>true]]);
                    event(new Points($event->user,$badges->point));
                }
            }
        }else if($collected_badges->contains('title','Master') != true) {
            $badges = \App\Achievement::where('title', 'Master')->first();

            if($inProgress_badges->contains('title','Master')!= true){
                $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>1]]);
            }else{
                $complete_rate = $inProgress_badges->where('title', 'Master')->first()->pivot->complete_rate;
                $steps = $inProgress_badges->where('title', 'Master')->first()->steps;
                $complete_rate += 1;
                if ($complete_rate < $steps) {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate]]);
                }else {
                    $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$complete_rate, 'is_achieved'=>true]]);
                    event(new Points($event->user,$badges->point));
                }
            }
        }

        $num_category = \App\Category::count();
        $num_finished_category = $user->responses()->join('questions', 'responses.question_id', '=', 'questions.id')->distinct('category_id')->count('category_id');
        $badges = \App\Achievement::where('title', 'Complete')->first();
        if ($num_finished_category < $num_category){ //not finished
            $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$num_finished_category]]);
        }else {
            $user->achievements()->syncWithoutDetaching([$badges->id => ['complete_rate'=>$num_finished_category, 'is_achieved'=>true]]);
            event(new Points($event->user,$badges->point));
        }
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Registered',
            'App\Listeners\AchievementEventSubscriber@onRegister'
        );

        $events->listen(
            'App\Events\IncreaseSurvey',
            'App\Listeners\AchievementEventSubscriber@onIncreaseSurvey'
        );

        $events->listen(
            'App\Events\AvatarUpload',
            'App\Listeners\AchievementEventSubscriber@onAvatarUpload'
        );

    }

}
