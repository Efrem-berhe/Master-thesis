<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    //
    public function users()
    {
        return $this->belongsTo('\App\User', 'user_id');
    }

    public function questions()
    {
        return $this->belongsTo('\App\Question', 'question_id');
    }

    public function choices()
    {
        return $this->belongsTo('\App\Choice', 'choice_id');
    }

    public function survey_user()
    {
        return $this->belongsTo('\App\Survey_user', 'survey_user_id');
    }


}
