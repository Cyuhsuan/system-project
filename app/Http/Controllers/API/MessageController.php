<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\MessageReply;
use Illuminate\Support\Facades\Auth;
use App\Exceptions\ErrorException;
use Carbon\Carbon;
use DB;

class MessageController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $msg = Message::all()->user();
        $msg = Message::with(
            [
                'user' => function ($q) {
                    $q->select('id', 'name', 'account');
                },
            ]
        )
            ->withCount('replies')
            ->select([
                'id',
                'content',
                DB::raw('DATE_FORMAT(created_at,"%Y-%m-%d %H:%i:%s") as date'),
                'user_id',
                DB::raw('DATE_FORMAT(updated_at,"%Y-%m-%d %H:%i:%s") as update_at')
            ])
            ->limit(10)
            ->get();
        return $msg->map(function ($row) {
            $row->isEdit = ($row->date === $row->update_at) ? false : true;
            $row->replyCount = MessageReply::where('message_id', $row->id)->count();
            return $row;
        });

        // return apiResponse()->data([
        //     'content' => $msg->map(function ($row) {
        //         $row->isEdit = ($row->date === $row->update_at) ? false : true;
        //         $row->replyCount = MessageReply::where('message_id', $row->id)->count();
        //         return $row;
        //     })
        // ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request = $request->all();
        $user = Auth::user();
        $msg = new Message();
        $msg->content = $request['message'];
        $msg->user_id = $user->id;
        $msg->save();
        return 'ok';
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $request = $request->all();
        $id = (int) $request['id'];
        $msg = Message::where('id', $id)
            ->with([
                'user' => function ($q) {
                    $q->select('id', 'name', 'account');
                },
                'replies' => function ($q) {
                    $q->with(['user' => function ($reply_q) {
                        $reply_q->select('id', 'account', 'name');
                    }])
                        ->select('id', 'content', 'message_id', 'user_id', DB::raw('DATE_FORMAT(updated_at,"%Y-%m-%d %H:%i:%s") as date'));
                }
            ])
            ->select('id', 'content', DB::raw('DATE_FORMAT(updated_at,"%Y-%m-%d %H:%i:%s") as date'), 'user_id')
            ->get();
        return $msg;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $request = $request->all();
        $user = Auth::user();

        //操作前檢查 
        if ($user->id !== $request['user_id']) {
            return '該用戶無法刪除此留言';
        };
        $msg = Message::find($request['id']);
        if (!$msg) {
            return '此留言不存在';
        };

        $msg->content = $request['content'];
        $msg->update();
        return '編輯成功';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $request = $request->all();
        $user = Auth::user();

        //操作前檢查 
        if ($user->id !== $request['user_id']) {
            return '該用戶無法刪除此留言';
        };
        $msg = Message::find($request['id']);
        if (!$msg) {
            return '此留言不存在';
        };

        $msg->delete();
        return '刪除成功';
    }

    /**
     * 留言新增回復功能
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function replyStore(Request $request)
    {
        $request = $request->all();
        $user = Auth::user();

        $msg_id = $request['message_id'];
        $content = $request['reply'];
        if (!(Message::find($msg_id))) {
            return '此留言不存在';
        }

        $reply = new MessageReply();
        $reply->content = $content;
        $reply->message_id = $msg_id;
        $reply->user_id = $user->id;

        $reply->save();
        return '成功';
    }
}
