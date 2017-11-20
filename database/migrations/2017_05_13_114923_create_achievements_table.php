<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAchievementsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
      Schema::create('achievements', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('point');
          $table->string('title');
          $table->string('description', 100);
          $table->string('badge', 100);
          $table->boolean('is_hidden')->default(false);
          $table->integer('steps')->default(0); //the number of steps needed to complete achievement.
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
      Schema::dropIfExists('achievements');
  }
}
