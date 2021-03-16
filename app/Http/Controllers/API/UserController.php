<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Carbon\Carbon;
use Validator;
use Hash;
// use Storage;
use Illuminate\Support\Facades\Storage;

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

    /**
     * 編輯使用者密碼
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function passwordEdit(Request $request)
    {
        $input = $request->all();
        $userid = Auth::guard('api')->user()->id;
        $rules = array(
            'old_password' => 'required',
            'new_password' => 'required',
            'confirm_password' => 'required|same:new_password',
        );
        $validator = Validator::make($input, $rules);
        if ($validator->fails()) {
            $arr = array("status" => 400, "message" => $validator->errors()->first(), "data" => array());
        } else {
            try {
                if ((Hash::check(request('old_password'), Auth::user()->password)) == false) {
                    $arr = array("status" => 400, "message" => "Check your old password.", "data" => array());
                } else if ((Hash::check(request('new_password'), Auth::user()->password)) == true) {
                    $arr = array("status" => 400, "message" => "Please enter a password which is not similar then current password.", "data" => array());
                } else {
                    User::where('id', $userid)->update(['password' => Hash::make($input['new_password'])]);
                    $arr = array("status" => 200, "message" => "Password updated successfully.", "data" => array());
                }
            } catch (\Exception $ex) {
                if (isset($ex->errorInfo[2])) {
                    $msg = $ex->errorInfo[2];
                } else {
                    $msg = $ex->getMessage();
                }
                $arr = array("status" => 400, "message" => $msg, "data" => array());
            }
        }
        return \Response::json($arr);
    }

    /**
     * 編輯使用者頭像
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    public function photoUpload(Request $request)
    {
        $image = $request->file('file');
        $user = User::find((Auth::user())->id);
        if ($image) {
            //獲取檔案的原檔名 包括副檔名
            $oldname = $image->getClientOriginalName();

            //獲取檔案的副檔名
            $extendname = $image->getClientOriginalExtension();

            //獲取檔案的型別
            $type = $image->getClientMimeType();

            //獲取檔案的絕對路徑，但是獲取到的在本地不能開啟
            $path = $image->getRealPath();

            //要儲存的檔名 md5(時間)+副檔名
            $now = Carbon::now();
            $filename = 'user/' . md5($now) . uniqid() . '.' . $extendname;
            // 如果已有頭像,刪除原有相片
            if ($user->photo_address) {
                Storage::disk('uploads')->delete($user->photo_address);
            }
            //儲存檔案          配置檔案存放檔案的名字  ，檔名，路徑
            $bool = Storage::disk('uploads')->put($filename, file_get_contents($path));
            $user->photo_address = $filename;
            $user->save();
            //return back();
            return json_encode(['status' => 1, 'filepath' => $filename]);
        } else {
            return response()->json([], 500, '檔案未通過驗證');
        }
    }
}
