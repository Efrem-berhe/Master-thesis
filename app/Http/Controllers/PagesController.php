<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function getHome()
    {

    }

    public function getProfile()
    {
        $current_page="profile";
        return view('pages.profile' , ['current_page' => $current_page]);
    }

    public function getSelf_assessments()
    {
        return view('pages.self_assessment');
    }
    public function getSurvey_cake()
    {
        return view('pages.survey_cake');
    }



}
