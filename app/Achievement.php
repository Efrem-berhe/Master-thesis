<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('complete_rate','is_achieved')->withTimestamps();
    }



}
