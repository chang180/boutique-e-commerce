<?php

namespace App\Http\Controllers\Shop\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * 顯示訂單管理頁面
     */
    public function index()
    {
        $orders = Order::with('user', 'orderItems.product')->latest()->get();

        return Inertia::render('shop/admin/orders', [
            'orders' => $orders
        ]);
    }

    /**
     * 顯示訂單詳情
     */
    public function show($id)
    {
        $order = Order::with('user', 'orderItems.product')->findOrFail($id);

        return Inertia::render('shop/admin/order-detail', [
            'order' => $order
        ]);
    }

    /**
     * 更新訂單狀態
     */
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,processing,shipped,delivered,cancelled'
        ]);

        $order = Order::findOrFail($id);
        $order->status = $request->status;
        $order->save();

        return redirect()->back()->with('success', '訂單狀態已更新');
    }

    /**
     * 刪除訂單
     */
    public function destroy($id)
    {
        $order = Order::findOrFail($id);

        // 可能需要先刪除關聯的訂單項目
        $order->orderItems()->delete();
        $order->delete();

        return redirect()->route('shop.admin.orders')->with('success', '訂單已刪除');
    }
}
