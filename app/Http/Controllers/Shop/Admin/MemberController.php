<?php

namespace App\Http\Controllers\Shop\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class MemberController extends Controller
{
    /**
     * 顯示會員管理頁面
     */
    public function index()
    {
        $members = User::where('is_admin', false)->latest()->get();

        return Inertia::render('shop/admin/members', [
            'members' => $members
        ]);
    }

    /**
     * 顯示會員詳情
     */
    public function show($id)
    {
        $member = User::with('orders')->findOrFail($id);

        return Inertia::render('shop/admin/member-detail', [
            'member' => $member
        ]);
    }

    /**
     * 顯示編輯會員表單
     */
    public function edit($id)
    {
        $member = User::findOrFail($id);

        return Inertia::render('shop/admin/member-edit', [
            'member' => $member
        ]);
    }

    /**
     * 更新會員資訊
     */
    public function update(Request $request, $id)
    {
        $member = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $member->id,
            'password' => $request->password ? ['confirmed', Rules\Password::defaults()] : '',
        ]);

        $member->name = $request->name;
        $member->email = $request->email;

        if ($request->password) {
            $member->password = Hash::make($request->password);
        }

        $member->save();

        return redirect()->route('shop.admin.members')->with('success', '會員資訊已更新');
    }

    /**
     * 刪除會員
     */
    public function destroy($id)
    {
        $member = User::findOrFail($id);

        // 可能需要先處理會員的訂單等關聯數據
        $member->delete();

        return redirect()->route('shop.admin.members')->with('success', '會員已刪除');
    }
}
