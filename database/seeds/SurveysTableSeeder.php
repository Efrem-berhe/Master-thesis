<?php

use Illuminate\Database\Seeder;

class SurveysTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $categorys = DB::table('categorys')->select('name')->get();

      $categorys->each(function($category){
        DB::table('surveys')->insert([
            'name' => $category->name,
        ]);
      });
    }
}
