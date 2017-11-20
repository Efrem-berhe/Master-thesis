<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    //
    public function users()
    {
        return $this->belongsToMany('App\User', 'survey_user')->withPivot('id');
    }
    public function questions()
    {
        return $this->belongsToMany('App\Question', 'survey_question');
    }

}
