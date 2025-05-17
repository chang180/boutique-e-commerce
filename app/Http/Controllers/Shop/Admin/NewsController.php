<?php

namespace App\Http\Controllers\Shop\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * 顯示最新消息管理頁面
     */
    public function index()
    {
        $news = News::latest()->get();

        return Inertia::render('shop/admin/news', [
            'newsList' => $news
        ]);
    }

    /**
     * 顯示添加最新消息表單
     */
    public function create()
    {
        return Inertia::render('shop/admin/news-create');
    }

    /**
     * 儲存新消息
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'is_published' => 'boolean'
        ]);

        News::create([
            'title' => $request->title,
            'content' => $request->content,
            'is_published' => $request->is_published ?? true
        ]);

        return redirect()->route('shop.admin.news')->with('success', '最新消息已成功添加');
    }

    /**
     * 顯示編輯最新消息表單
     */
    public function edit($id)
    {
        $news = News::findOrFail($id);

        return Inertia::render('shop/admin/news-edit', [
            'news' => $news
        ]);
    }

    /**
     * 更新最新消息
     */
    public function update(Request $request, $id)
    {
        $news = News::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'is_published' => 'boolean'
        ]);

        $news->title = $request->title;
        $news->content = $request->content;
        $news->is_published = $request->is_published ?? true;
        $news->save();

        return redirect()->route('shop.admin.news')->with('success', '最新消息已更新');
    }

    /**
     * 刪除最新消息
     */
    public function destroy($id)
    {
        $news = News::findOrFail($id);
        $news->delete();

        return redirect()->route('shop.admin.news')->with('success', '最新消息已刪除');
    }
}
