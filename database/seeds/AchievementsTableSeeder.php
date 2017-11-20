<?php

use Illuminate\Database\Seeder;

class AchievementsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('achievements')->insert([

          ['point' =>(10),
          'title' => ('Welcome aboard'),
          'description' => ('Activate your account on Siniorlife'),
          'badge' => ('/img/badges/welcome_aboard.png'),
          'steps' => (1),
        'is_hidden' => (0),],

          ['point' =>(10),
          'title' => ('First survey'),
          'description' => ('Complete a survey for the first time'),
          'badge' => ('/img/badges/first_survey.png'),
          'steps' => (1),
        'is_hidden' => (0),],

          ['point' =>(50),
          'title' => ('Keep it up'),
          'description' => ('Complete at least 5 surveys'),
          'badge' => ('/img/badges/keep_it_up.png'),
          'steps' => (5),
        'is_hidden' => (0),],

          ['point' =>(100),
          'title' => ('Beginner'),
          'description' => ('Complete at least 10 surveys'),
          'badge' => ('/img/badges/beginner.png'),
          'steps' => (10),
          'is_hidden' => (1),],

          ['point' =>(200),
          'title' => ('Intermediate'),
          'description' => ('Complete at least 20 surveys'),
          'badge' => ('/img/badges/intermediate.png'),
          'steps' => (20),
          'is_hidden' => (1),],

          ['point' =>(400),
          'title' => ('Master'),
          'description' => ('Complete at least 40 surveys'),
          'badge' => ('/img/badges/master.png'),
          'steps' => (40),
          'is_hidden' => (1),],

          ['point' =>(100),
          'title' => ('Complete'),
          'description' => ('Fill all category once'),
          'badge' => ('/img/badges/complete.png'),
          'steps' => (10),
        'is_hidden' => (0),],

          ['point' =>(10),
          'title' => ('Avatar'),
          'description' => ('Upload an profile image'),
          'badge' => ('/img/badges/avatar.png'),
          'steps' => (1),
        'is_hidden' => (0),],
        ]);
    }
}
