<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorysTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(ChoicesTableSeeder::class);
        $this->call(Question_choicesTableSeeder::class);
        $this->call(AchievementsTableSeeder::class);
        $this->call(SurveysTableSeeder::class);
        $this->call(Survey_questionTableSeeder::class);
    }
}
