<?php

namespace App\Providers;

class EntrustCustomServiceProvider extends \Zizaco\Entrust\EntrustServiceProvider
{
  public function boot(){
    parent::boot();
    $this->bladeDirectives();
  }

  public function register(){
    parent::register();
  }

  private function bladeDirectives(){

    //call to Entrust::hasRole
    \Blade::directive('role',function($expression){
      return "<?php endif; // Entrust::hasRole ?>";
    });

    //Call to Entrust::can
    \Blade::directive('permission',function($expression){
      return "<?php endif; // Entrust::can ?>";
    });
    //call to Entrust::ability
    \Blade::directive('ability',function($expression){
      return "<?php if (\\Entrust::ability{$expression}) : ?>";
    });
    \Blade::directive('endability',function($expression){
      return "<?php endif; // Entrust::ability ?>";
    });
  }
}
