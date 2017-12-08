<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class AchievementController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }
    public function getAchievement()
    {

        return view('pages.achievement');
    }

    public function getAchievementFlag()
    {

        $achievementFlag = array(

            'flag' =>  Auth::user()->achievementflag,
        );

        Auth::user()->achievementflag = 1;
        Auth::user()->save();

        return response()
            ->json($achievementFlag);
    }
    public function show($id){

      //$respondent_id=$request->input("user_id");
      $user=\App\User::where('id',$id)->first();
      $recentBadge= $user->achievements()->where('is_achieved',1)->orderBy('achievement_user.updated_at', 'desc')->first();

      return response()
          ->json($recentBadge);
    }
    public function getAchievementData()
    {
        $user = Auth::user();
        $array=[];

        $collectedbadges= $user->achievements()->where('is_achieved',1)->orderBy('achievement_user.updated_at', 'desc')->get();

        $inProgressBadges= $user->achievements()->where('is_achieved',0)->get();

        $arrays = $user->achievements()->pluck('achievements.id')->toArray();

        $availableBadges = \App\Achievement::where('is_hidden', '0')
            ->whereNotIn('id', $arrays)
            ->get();

        $achievementData = array(
            'badges' =>$collectedbadges,
            'level' =>Auth::user()->level,
            'inProgressBadges'=>$inProgressBadges,
            'availableBadges' =>$availableBadges

        );

        return response()
            ->json($achievementData);
    }

}
