<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Shop\CartController;
use App\Http\Controllers\Shop\NewsController;
use App\Http\Controllers\Shop\ProductController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Shop\Admin\OrderController;
use App\Http\Controllers\Shop\Admin\FooterController;
use App\Http\Controllers\Shop\Admin\MemberController;
use App\Http\Controllers\Shop\Admin\CategoryController;
use App\Http\Controllers\Shop\ShoppingProcessController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Shop\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\Shop\Admin\AdminController as ShopAdminController;

// 主路由 - 直接導向到電子商務首頁
Route::get('/', function () {
    return redirect()->route('shop.index');
});

// 電子商務網站路由
Route::prefix('shop')->group(function () {
    // 前台路由
    Route::get('/', [ProductController::class, 'index'])->name('shop.index');
    Route::get('/product/{id}', [ProductController::class, 'show'])->name('shop.product.show');

    Route::get('/news', [NewsController::class, 'index'])->name('shop.news');
    Route::get('/news/{id}', [NewsController::class, 'show'])->name('shop.news.show');

    Route::get('/look', [ShoppingProcessController::class, 'index'])->name('shop.look');

    Route::get('/buycart', [CartController::class, 'index'])->name('shop.buycart');
    Route::post('/buycart/add', [CartController::class, 'add'])->name('shop.buycart.add');
    Route::patch('/buycart/update', [CartController::class, 'update'])->name('shop.buycart.update');
    Route::delete('/buycart/remove', [CartController::class, 'remove'])->name('shop.buycart.remove');
    Route::delete('/buycart/clear', [CartController::class, 'clear'])->name('shop.buycart.clear');
    Route::get('/checkout', [CartController::class, 'checkout'])->name('shop.checkout');

    // 登入路由
    Route::get('/login', function () {
        return Inertia::render('auth/shop-login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    })->name('shop.login')->middleware('guest');

    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->name('shop.login.store')->middleware('guest');

    // 後台路由，需要身份驗證和管理員權限
    Route::prefix('admin')->middleware(['auth', 'admin'])->group(function () {
        Route::get('/', function () {
            return Inertia::render('shop/admin/index');
        })->name('shop.admin.index');

        // 管理員管理
        Route::get('/admin', [ShopAdminController::class, 'index'])->name('shop.admin.admin');
        Route::get('/admin/create', [ShopAdminController::class, 'create'])->name('shop.admin.admin.create');
        Route::post('/admin', [ShopAdminController::class, 'store'])->name('shop.admin.admin.store');
        Route::get('/admin/{id}/edit', [ShopAdminController::class, 'edit'])->name('shop.admin.admin.edit');
        Route::patch('/admin/{id}', [ShopAdminController::class, 'update'])->name('shop.admin.admin.update');
        Route::delete('/admin/{id}', [ShopAdminController::class, 'destroy'])->name('shop.admin.admin.destroy');

        // 分類管理
        Route::get('/categories', [CategoryController::class, 'index'])->name('shop.admin.categories');
        Route::get('/categories/create', [CategoryController::class, 'create'])->name('shop.admin.categories.create');
        Route::post('/categories', [CategoryController::class, 'store'])->name('shop.admin.categories.store');
        Route::get('/categories/{id}/edit', [CategoryController::class, 'edit'])->name('shop.admin.categories.edit');
        Route::patch('/categories/{id}', [CategoryController::class, 'update'])->name('shop.admin.categories.update');
        Route::delete('/categories/{id}', [CategoryController::class, 'destroy'])->name('shop.admin.categories.destroy');

        // 商品管理
        Route::get('/products', [CategoryController::class, 'products'])->name('shop.admin.products');
        Route::get('/products/create', [CategoryController::class, 'createProduct'])->name('shop.admin.products.create');
        Route::post('/products', [CategoryController::class, 'storeProduct'])->name('shop.admin.products.store');
        Route::get('/products/{id}/edit', [CategoryController::class, 'editProduct'])->name('shop.admin.products.edit');
        Route::patch('/products/{id}', [CategoryController::class, 'updateProduct'])->name('shop.admin.products.update');
        Route::delete('/products/{id}', [CategoryController::class, 'destroyProduct'])->name('shop.admin.products.destroy');

        // 訂單管理
        Route::get('/orders', [OrderController::class, 'index'])->name('shop.admin.orders');
        Route::get('/orders/{id}', [OrderController::class, 'show'])->name('shop.admin.orders.show');
        Route::patch('/orders/{id}/status', [OrderController::class, 'updateStatus'])->name('shop.admin.orders.update-status');
        Route::delete('/orders/{id}', [OrderController::class, 'destroy'])->name('shop.admin.orders.destroy');

        // 會員管理
        Route::get('/members', [MemberController::class, 'index'])->name('shop.admin.members');
        Route::get('/members/{id}', [MemberController::class, 'show'])->name('shop.admin.members.show');
        Route::get('/members/{id}/edit', [MemberController::class, 'edit'])->name('shop.admin.members.edit');
        Route::patch('/members/{id}', [MemberController::class, 'update'])->name('shop.admin.members.update');
        Route::delete('/members/{id}', [MemberController::class, 'destroy'])->name('shop.admin.members.destroy');

        // 頁尾管理
        Route::get('/footer', [FooterController::class, 'index'])->name('shop.admin.footer');
        Route::patch('/footer', [FooterController::class, 'update'])->name('shop.admin.footer.update');

        // 新聞管理
        Route::get('/news', [AdminNewsController::class, 'index'])->name('shop.admin.news');
        Route::get('/news/create', [AdminNewsController::class, 'create'])->name('shop.admin.news.create');
        Route::post('/news', [AdminNewsController::class, 'store'])->name('shop.admin.news.store');
        Route::get('/news/{id}/edit', [AdminNewsController::class, 'edit'])->name('shop.admin.news.edit');
        Route::patch('/news/{id}', [AdminNewsController::class, 'update'])->name('shop.admin.news.update');
        Route::delete('/news/{id}', [AdminNewsController::class, 'destroy'])->name('shop.admin.news.destroy');
    });
});

// 原始 Laravel 路由
Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
