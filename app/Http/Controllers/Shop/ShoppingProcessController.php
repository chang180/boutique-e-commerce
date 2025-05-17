<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShoppingProcessController extends Controller
{
    /**
     * 顯示購物流程頁面
     */
    public function index()
    {
        return Inertia::render('shop/look', [
            'processSteps' => [
                [
                    'step' => 1,
                    'title' => '選購商品',
                    'description' => '瀏覽商品並將您想要的商品加入購物車。'
                ],
                [
                    'step' => 2,
                    'title' => '確認購物車',
                    'description' => '檢查購物車中的商品，確認數量和價格。'
                ],
                [
                    'step' => 3,
                    'title' => '填寫資料',
                    'description' => '填寫您的收件資料和付款方式。'
                ],
                [
                    'step' => 4,
                    'title' => '完成訂單',
                    'description' => '確認訂單並完成付款。'
                ],
                [
                    'step' => 5,
                    'title' => '等待出貨',
                    'description' => '我們將盡快處理您的訂單並安排出貨。'
                ]
            ]
        ]);
    }
}
