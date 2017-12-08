<?php
use App\User;
namespace App;

use Illuminate\Database\Eloquent\Model;

class Contacts extends Model
{
    public function users(){

      return $this->belongsTo('App\User');

    }
}
