<?php

use Illuminate\Database\Seeder;

use App\Question;
use Illuminate\Database\Eloquent\Model;
class Question_choicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $questions = DB::table('questions')->where('category_id','=',1)->get();

        $questions->each(function($question){
            DB::table('question_choice')->insert([
                ["choice_id"=>1, 'question_id'=>$question->id],
                ["choice_id"=>2, 'question_id'=>$question->id],
                ["choice_id"=>3, 'question_id'=>$question->id],
                ["choice_id"=>4, 'question_id'=>$question->id],
                ["choice_id"=>5, 'question_id'=>$question->id],

            ]);
        });


        $questions = DB::table('questions')->whereBetween('category_id',[2,10])->get();

        $questions->each(function($question){
            DB::table('question_choice')->insert([
                ["choice_id"=>6, 'question_id'=>$question->id],
                ["choice_id"=>7, 'question_id'=>$question->id],
                ["choice_id"=>8, 'question_id'=>$question->id],
                ["choice_id"=>9, 'question_id'=>$question->id],
                ["choice_id"=>10, 'question_id'=>$question->id],

            ]);
        });

        $questions = DB::table('questions')->where('category_id','=',11)->get();
        $questions->each(function($question){
            DB::table('question_choice')->insert([
                ["choice_id"=>11, 'question_id'=>$question->id],
                ["choice_id"=>12, 'question_id'=>$question->id],
                ["choice_id"=>13, 'question_id'=>$question->id],
                ["choice_id"=>14, 'question_id'=>$question->id],
                ["choice_id"=>15, 'question_id'=>$question->id],

            ]);
        });

    }
}
