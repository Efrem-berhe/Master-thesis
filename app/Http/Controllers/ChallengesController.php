<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ChallengesController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }
    public function getChallenges()
    {

        return view('pages.challenges');
    }

    public function getChallengesData()
    {
        $challengesData =array(
            'flag' =>  Auth::user()->challengsflag,
        );

        Auth::user()->challengsflag = 1;
        Auth::user()->save();

        return response()
            ->json($challengesData);
    }
}
