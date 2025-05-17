<?php

namespace App\Http\Controllers\Shop\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class AdminController extends Controller
{
    /**
     * 顯示管理員列表頁面
     */
    public function index()
    {
        $admins = User::where('is_admin', true)->get();

        return Inertia::render('shop/admin/admin', [
            'admins' => $admins
        ]);
    }

    /**
     * 顯示添加管理員表單
     */
    public function create()
    {
        return Inertia::render('shop/admin/admin-create');
    }

    /**
     * 儲存新管理員
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => true,
        ]);

        return redirect()->route('shop.admin.admin')->with('success', '管理員已成功添加');
    }

    /**
     * 顯示編輯管理員表單
     */
    public function edit($id)
    {
        $admin = User::findOrFail($id);

        return Inertia::render('shop/admin/admin-edit', [
            'admin' => $admin
        ]);
    }

    /**
     * 更新管理員資訊
     */
    public function update(Request $request, $id)
    {
        $admin = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $admin->id,
            'password' => $request->password ? ['confirmed', Rules\Password::defaults()] : '',
        ]);

        $admin->name = $request->name;
        $admin->email = $request->email;

        if ($request->password) {
            $admin->password = Hash::make($request->password);
        }

        $admin->save();

        return redirect()->route('shop.admin.admin')->with('success', '管理員資訊已更新');
    }

    /**
     * 刪除管理員
     */
    public function destroy($id)
    {
        $admin = User::findOrFail($id);

        // 防止刪除最後一個管理員
        $adminCount = User::where('is_admin', true)->count();
        if ($adminCount <= 1) {
            return redirect()->back()->with('error', '無法刪除最後一個管理員');
        }

        $admin->delete();

        return redirect()->route('shop.admin.admin')->with('success', '管理員已刪除');
    }
}
