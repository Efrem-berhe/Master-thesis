<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Survey_user extends Model
{
  protected $table = 'survey_user';
  public function response()
  {
      return $this->hasMany('\App\Response');
  }
}
