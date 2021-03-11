<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class UserController extends Controller
{
    /**
     * 編輯使用者
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function userEdit(Request $request)
    {
        $request = $request->all();
        // $user = Auth::user();
        $user = User::find((Auth::user())->id);
        // dd($request, $user);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->save();
    }

    // /**
    //  * 編輯使用者密碼
    //  * 
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return void
    //  */
    // public function passwordEdit(Request $request)
    // {
    //     $request = $request->all();
    //     // dd($request);
    //     $user = Auth::user();
    //     $validator = Validator::make($request, [
    //         'oldPassword' => 'required',
    //         'newPassword' => 'required',
    //         'confirmPassword' => 'required|same:newPassword',
    //     ]);

    //     if ($validator->fails()) {
    //         return $this->sendError('Validation Error.', $validator->errors());
    //     }
    //     // dd('ss');

    //     $oldPassword = $request['oldPassword'];
    //     $newPassword = $request['newPassword'];
    //     // $input['password'] = bcrypt($input['password']);
    //     // $user = Auth::user();
    //     $user = User::find((Auth::user())->id);

    //     if ($user->password !== bcrypt($oldPassword)) {
    //         return '舊密碼不正確';
    //     }
    //     // if (Auth::attempt(['account' => $user->account, 'password' => $oldPassword])) {

    //     $user->password = bcrypt($newPassword);
    //     $user->save();
    //     // $user->token()->revoke();
    //     // $token = $user->createToken('newToken')->accessToken;
    //     return '修改成功';
    //     // }

    //     // return '修改失敗';
    // }
}
