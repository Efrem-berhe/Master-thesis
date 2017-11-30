<?php

namespace App;
use App\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Contacts extends Model


{

  protected $fillable = [
      'role', 'contact_id', 'user_id',
  ];

  public function users(){

    return $this->belongsTo('App\User');

  }

  public function contacts(){

     $user = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.contact_id')
            ->select('users.*')
            ->get();

      return $user;

  }

}
