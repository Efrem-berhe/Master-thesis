<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Choice extends Model
{


    public function response()
    {
        return $this->hasMany('\App\Response');
    }

}
