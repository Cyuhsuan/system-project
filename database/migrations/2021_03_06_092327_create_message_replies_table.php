<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessageRepliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_replies', function (Blueprint $table) {
            $table->id();
            $table->text('content')->nullable(false)->comment('回覆內容');
            $table->integer('user_id')->nullable(false)->comment('作者');
            $table->integer('message_id')->nullable(false)->comment('留言 id');

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
        Schema::dropIfExists('message_replies');
    }
}
