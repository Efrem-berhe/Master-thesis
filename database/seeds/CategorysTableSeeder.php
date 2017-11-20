<?php

use Illuminate\Database\Seeder;

class CategorysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorys')->insert([

            ["img_src"=>'/img/categorys/001-mind.svg', "name"=>"Cognition", "description"=>"this is cognition failer questions"],
            ["img_src"=>'/img/categorys/010-fruit-salad.svg', "name"=>"Nutrition", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/008-dumbbell.svg', "name"=>"Fitness", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/005-doctor.svg', "name"=>"Personal care", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/001-chat.svg', "name"=>"Communication", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/004-construction.svg', "name"=>"Housing", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/001-bike.svg', "name"=>"Mobility", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/003-people.svg', "name"=>"Community life", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/006-learning.svg', "name"=>"Education", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'/img/categorys/002-businessman.svg', "name"=>"Recreation", "description"=>"How do you generally accomplish the following activities"],
            ["img_src"=>'', "name"=>"Test", "escription"=>"This questions are only for test"],
        ]);
    }
}
