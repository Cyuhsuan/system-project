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
    public function index(Request $request)
    {
        // $msg = Message::all()->user();
        $request = $request->all();
        $id = (int) $request['id'];
        // dd($id);
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
                'created_at as date',
                'user_id',
                'updated_at as update_at'
            ])
            ->limit(10)
            ->orderby('date', 'desc');
        if ($id > 0) {
            $msg = $msg->where('id', '<', $id);
        }
        $msg = $msg->get();
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
                        ->select('id', 'content', 'message_id', 'user_id', 'updated_at as date');
                }
            ])
            ->select('id', 'content', 'updated_at as date', 'user_id')
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

        //??????????????? 
        if ($user->id !== $request['user_id']) {
            return '??????????????????????????????';
        };
        $msg = Message::find($request['id']);
        if (!$msg) {
            return '??????????????????';
        };

        $msg->content = $request['content'];
        $msg->update();
        return '????????????';
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

        //??????????????? 
        if ($user->id !== $request['user_id']) {
            return '??????????????????????????????';
        };
        $msg = Message::find($request['id']);
        if (!$msg) {
            return '??????????????????';
        };

        $msg->delete();
        return '????????????';
    }

    /**
     * ????????????????????????
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
            return '??????????????????';
        }

        $reply = new MessageReply();
        $reply->content = $content;
        $reply->message_id = $msg_id;
        $reply->user_id = $user->id;

        $reply->save();
        return '??????';
    }
}
