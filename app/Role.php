<?php

namespace App;

use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
  //this defines the relationship between user and role
    public function users(){
      return $this->belongsToMany('App\User');
    }


    //one to many
        public function permissions(){
          return $this->belongsToMany('App\Permission');
        }

    //check if user what type of role he have
        public function hasAnyPermission($permissions){

          if(is_array($permissions)){
            foreach ($permissions as $permission) {
              if($this->hasPermission($permission)){
                return true;
              }
            }
          }else{
            if($this->hasPermission($permissions)){
              return true;
            }
          }

          return false;
        }

        public function hasPermission($permission){

          if($this->permissions()->where('name',$permission)->first())
          {
            return true;
          }
          return false;
        }

}
