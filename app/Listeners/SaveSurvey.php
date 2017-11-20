<?php

namespace App\Listeners;

use App\Events\NewSurvey;
use App\Events\IncreaseSurvey;
use App\Events\Points;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SaveSurvey
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewSurvey  $event
     * @return void
     */
    public function handle(NewSurvey $event)
    {
      //get event data

      // $answers=collect($event->answers);
      // $user=$event->user;
      // $answers->each(function ($answer) use($user){
      //   if($answer['q_id']!=null && $answer['c_id']!=0){
      //     $response = new \App\Response;
      //     $response->users()->associate($user);
      //     $response->questions()->associate($answer['q_id']);
      //     $response->choices()->associate($answer['c_id']);
      //     $response->save();
      //   }
      // });


      //create a new survey
      // $survey = new \App\Survey;
      // $survey->save();
      //attach user to the survey
      $user=$event->user;
      $survey_id = $event->survey_id;

      $user->surveys()->attach($survey_id);

      $survey_user=\App\Survey_user::where('user_id', $user->id)->get()->last();

      //get answered question;

      $answers=collect($event->answers);


      $answers->each(function ($answer) use($user, $survey_user){
        if($answer['q_id']!=null && $answer['c_id']!=0 && $answer['c_id']!=6){
          $response = new \App\Response;
          $response->users()->associate($user);
          $response->questions()->associate($answer['q_id']);
          $response->choices()->associate($answer['c_id']);
          $response->survey_user()->associate($survey_user->id);
          if (array_has($answer, 'secondsElapsed'))
            $response->seconds_elapsed = $answer['secondsElapsed'];
          $response->save();
        }
      });






      event(new Points($user, $answers->count()));
      event(new IncreaseSurvey($event->user));
    }
}
