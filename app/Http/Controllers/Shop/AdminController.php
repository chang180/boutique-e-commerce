<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $stats = [
            'users' => User::count(),
            'products' => Product::count(),
            'categories' => Category::count(),
            'visitors' => 5, // 這裡應該從某個地方獲取訪問次數
        ];

        return Inertia::render('shop/admin/index', [
            'stats' => $stats
        ]);
    }
}
