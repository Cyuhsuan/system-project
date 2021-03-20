<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Validator;
use Hash;
use App\Models\Production;
// use Storage;
use Illuminate\Support\Facades\Storage;

class ProductionController extends BaseController
{
    /**
     * 商品列表
     * 
     * @return array
     */
    public function index()
    {
        $productions = Production::select('*')->orderby('created_at', 'desc')->get();
        return $productions;
    }

    /**
     * 上傳商品照片
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function photoUpload(Request $request)
    {
        $image = $request->file('file');
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
            $filename = 'production/' . md5($now) . uniqid() . '.' . $extendname;
            //儲存檔案          配置檔案存放檔案的名字  ，檔名，路徑
            $bool = Storage::disk('uploads')->put($filename, file_get_contents($path));
            //return back();
            return json_encode(['status' => 1, 'filepath' => $filename]);
        } else {
            return response()->json([], 500, '檔案未通過驗證');
        }
    }
    /**
     * 刪除商品照片
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function deletePhotoUpload(Request $request)
    {
        $fileUrl = $request->input('fileUrl');
        Storage::disk('uploads')->delete($fileUrl);
    }
    /**
     * 編輯商品
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function editPhotoUpload(Request $request)
    {
        $request = $request->all();
        $fileUrl = $request['fileUrl'];
        $description = $request['description'];
        $title = $request['title'];
        $id = $request['id'] ?? '';
        $production = Production::find($id);

        // $user = User::find((Auth::user())->id);
        // 如果已有相片,刪除原有相片
        if ($production) {
            Storage::disk('uploads')->delete($production->photo_address);
            $production->photo_address = $fileUrl;
            $production->description = $description;
            $production->title = $title;
            $production->update();
        } else {
            $new_production = new Production();
            $new_production->photo_address = $fileUrl;
            $new_production->description = $description;
            $new_production->title = $title;
            $new_production->save();
        }
        return json_encode(['status' => 1, 'filepath' => $fileUrl]);
    }
}
