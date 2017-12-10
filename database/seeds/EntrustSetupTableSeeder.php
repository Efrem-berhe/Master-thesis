<?php
use App\Role;
use App\Permission;

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


      $permission_supervisor = new Permission();
      $permission_supervisor->name='supervisor';
      $permission_supervisor->display_name='Supervisor';
      $permission_supervisor->description= 'Allow user to view all data';
      $permission_supervisor->save();

      $permission_family = new Permission();
      $permission_family ->name='family';
      $permission_family ->display_name='Family';
      $permission_family ->description='Allow user to view only my Survey result and Rank';
      $permission_family ->save();

      $permission_friend = new Permission();
      $permission_friend ->name='friend';
      $permission_friend ->display_name='Friend';
      $permission_friend ->description='Allow user to view only my Survey result and Badges';
      $permission_friend ->save();

      $permission_user = new Permission();
      $permission_user->name='noPermission';
      $permission_user->display_name='NoPermission';
      $permission_user->description= 'has no permission given';
      $permission_user->save();

    }
}
