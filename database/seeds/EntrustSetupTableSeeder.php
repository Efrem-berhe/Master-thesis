<?php
use App\Role;

use Illuminate\Database\Seeder;

class EntrustSetupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $role_user = new Role();
      $role_user->name='user';
      $role_user->display_name='User';
      $role_user->description= 'Normal user';
      $role_user->save();

      $role_supervisor = new Role();
      $role_supervisor->name='supervisor';
      $role_supervisor->display_name='Supervisor';
      $role_supervisor->description= 'Can access data of all respondent';
      $role_supervisor->save();

      $role_family = new Role();
      $role_family ->name='family';
      $role_family ->display_name='Family';
      $role_family ->description='Can see data that is shared by the respondent';
      $role_family ->save();

      $role_friend = new Role();
      $role_friend ->name='friend';
      $role_friend ->display_name='Friend';
      $role_friend ->description='Can see data that is shared by the respondent';
      $role_friend ->save();


      // DB::table('permissions')->insert([
      //     ["id"=>'1', "name"=>'access-all-respondent-data', "display_name"=>"can access all respondent data", "description"=>"Can access data of all respondent"],
      //     ["id"=>'2', "name"=>'only-see-shared-data', "display_name"=>"only can see respondent data", "description"=>"can see data that is shared by respondent"],
      // ]);

    }
}
