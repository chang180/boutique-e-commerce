<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Support\Facades\Session;

class CartController extends Controller
{
    /**
     * 顯示購物車頁面
     */
    public function index()
    {
        $cart = Session::get('cart', []);
        $cartItems = [];
        $total = 0;

        if (!empty($cart)) {
            foreach ($cart as $id => $quantity) {
                $product = Product::find($id);
                if ($product) {
                    $cartItems[] = [
                        'id' => $product->id,
                        'name' => $product->name,
                        'price' => $product->price,
                        'quantity' => $quantity,
                        'subtotal' => $product->price * $quantity,
                        'image' => $product->image
                    ];
                    $total += $product->price * $quantity;
                }
            }
        }

        return Inertia::render('shop/buycart', [
            'cartItems' => $cartItems,
            'total' => $total
        ]);
    }

    /**
     * 將商品加入購物車
     */
    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $productId = $request->product_id;
        $quantity = $request->quantity;

        $cart = Session::get('cart', []);

        // 如果商品已在購物車中，增加數量
        if (isset($cart[$productId])) {
            $cart[$productId] += $quantity;
        } else {
            $cart[$productId] = $quantity;
        }

        Session::put('cart', $cart);

        return redirect()->back()->with('success', '商品已加入購物車');
    }

    /**
     * 更新購物車中商品數量
     */
    public function update(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $productId = $request->product_id;
        $quantity = $request->quantity;

        $cart = Session::get('cart', []);

        if (isset($cart[$productId])) {
            $cart[$productId] = $quantity;
            Session::put('cart', $cart);
        }

        return redirect()->back()->with('success', '購物車已更新');
    }

    /**
     * 從購物車中移除商品
     */
    public function remove(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id'
        ]);

        $productId = $request->product_id;

        $cart = Session::get('cart', []);

        if (isset($cart[$productId])) {
            unset($cart[$productId]);
            Session::put('cart', $cart);
        }

        return redirect()->back()->with('success', '商品已從購物車中移除');
    }

    /**
     * 清空購物車
     */
    public function clear()
    {
        Session::forget('cart');

        return redirect()->back()->with('success', '購物車已清空');
    }

    /**
     * 結帳頁面
     */
    public function checkout()
    {
        $cart = Session::get('cart', []);

        if (empty($cart)) {
            return redirect()->route('shop.buycart')->with('error', '購物車是空的');
        }

        $cartItems = [];
        $total = 0;

        foreach ($cart as $id => $quantity) {
            $product = Product::find($id);
            if ($product) {
                $cartItems[] = [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => $product->price,
                    'quantity' => $quantity,
                    'subtotal' => $product->price * $quantity,
                    'image' => $product->image
                ];
                $total += $product->price * $quantity;
            }
        }

        return Inertia::render('shop/checkout', [
            'cartItems' => $cartItems,
            'total' => $total
        ]);
    }
}
