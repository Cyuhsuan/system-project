<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PublicController;
use App\Http\Controllers\API\MessageController;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('register', [PublicController::class, 'register']);
Route::post('login', [PublicController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    Route::get('test', [PublicController::class, 'test']);
    Route::post('logout', [PublicController::class, 'logout']);

    // 使用者編輯功能
    Route::prefix('user')->group(function () {
        Route::post('edit', [UserController::class, 'userEdit']);
        Route::post('password-edit', [UserController::class, 'passwordEdit']);
    });

    // 留言板功能
    Route::prefix('message')->group(function () {
        Route::post('add', [MessageController::class, 'store']);
        Route::get('index', [MessageController::class, 'index']);
        Route::post('delete', [MessageController::class, 'destroy']);
        Route::post('edit', [MessageController::class, 'edit']);
        Route::get('find', [MessageController::class, 'show']);

        Route::prefix('reply')->group(function () {
            Route::post('add', [MessageController::class, 'replyStore']);
        });
    });
    // Route::resource('products', ProductController::class);
});
