<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionChoiceTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
      Schema::create('question_choice', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('question_id')->unsigned();
          $table->integer('choice_id')->unsigned();
          $table->foreign('question_id')->references('id')->on('questions')->onUpdate('cascade')->onDelete('cascade');
          $table->foreign('choice_id')->references('id')->on('choices')->onUpdate('cascade')->onDelete('cascade');
          $table->timestamps();
      });
  }
  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
      Schema::dropIfExists('question_choice');
  }
}
