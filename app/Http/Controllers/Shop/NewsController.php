<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class NewsController extends Controller
{
    /**
     * 顯示最新消息列表
     */
    public function index()
    {
        $news = News::orderBy('created_at', 'desc')->get();

        return Inertia::render('shop/news', [
            'newsList' => $news
        ]);
    }

    /**
     * 顯示特定消息詳情
     */
    public function show($id)
    {
        $news = News::findOrFail($id);

        return Inertia::render('shop/news-detail', [
            'news' => $news
        ]);
    }
}
