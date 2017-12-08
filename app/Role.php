<?php

namespace App;

use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
  //this defines the relationship between user and role
    public function users(){
      return $this->belongsToMany('App\User');
    }
}
