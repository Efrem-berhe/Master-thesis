<?php

namespace App\Listeners;

use App\Events\Points;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Auth;

class AddPoints
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
     * @param  Points  $event
     * @return void
     */
    public function handle(Points $event)
    {
      $user= $event->user;

      $new_point= $user->point + $event->points;

      $user->update(['point' => $new_point]); //update the new point for user


      // $level_score = array( );
      // for($i=1;$i<51;$i++){
      //   $nextscore = $i*($i + 2)*10;
      //   array_push($level_score, array("level"=>$i, "score"=>$nextscore));
      // }
      //
      // $current_level = array_first($level_score, function ($value, $key) use($new_point){
      //   return $value["score"] > $new_point;
      // });
      //
      //
      //
      // $user =  Auth::user();
      // if ($user->level < $current_level['level']) {   // level up
      //
      //   $user->level = $current_level['level'];
      //
      //   $user->save();
      // }


      // $prev_level = array_last($level_score, function ($value, $key) use($new_point) {
      //   return $value["score"] <= $new_point;
      // });
      //
      // $level['current_level'] = $current_level;
      // $level['prev_level'] = $prev_level;
      //

      // $max_score = ($level['current_level']['score'] - $level['prev_level']['score']);
      // $processed_score =  ($this->point - $level['prev_level']['score']);
      // $level_progress['max_score'] = $max_score;
      // $level_progress['processed_score'] = $processed_score;
      // $PlayerStatus =array(
      //     'level_progress' => $level_progress,
      //     'level' => $level['current_level']['level'],
      // );


    }
}
