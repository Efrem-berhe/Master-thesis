<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class WelcomeController extends Controller
{

    public function welcome(){
        if (Auth::guest())
        {
            return view('pages.welcome_page');
        }else {
            return view('home');
        }

    }
}
