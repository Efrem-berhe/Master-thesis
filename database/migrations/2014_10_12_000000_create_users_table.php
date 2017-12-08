<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('role')->default("user");
            $table->string('avatar')->default('/img/avatars/default/default-user.png');
            $table->bigInteger('point')->default(0);
            $table->boolean('flag')->default(0);
            $table->boolean('mysurveyflag')->default(0);
            $table->boolean('challengsflag')->default(0);
            $table->boolean('rankflag')->default(0);
            $table->boolean('achievementflag')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
