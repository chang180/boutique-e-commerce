<?php

namespace App\Http\Controllers\Shop\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class FooterController extends Controller
{
    /**
     * 顯示頁尾版權管理頁面
     */
    public function index()
    {
        // 從檔案或資料庫讀取頁尾版權內容
        $footerContent = $this->getFooterContent();

        return Inertia::render('shop/admin/footer', [
            'footerContent' => $footerContent
        ]);
    }

    /**
     * 更新頁尾版權內容
     */
    public function update(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:500'
        ]);

        // 儲存頁尾版權內容到檔案或資料庫
        $this->saveFooterContent($request->content);

        return redirect()->route('shop.admin.footer')->with('success', '頁尾版權內容已更新');
    }

    /**
     * 從檔案或資料庫獲取頁尾版權內容
     */
    private function getFooterContent()
    {
        // 這裡可以根據實際需求從檔案或資料庫讀取
        // 這是一個簡單的實現，使用檔案儲存
        if (Storage::disk('local')->exists('footer.txt')) {
            return Storage::disk('local')->get('footer.txt');
        }

        return '精品電子商務網站 © ' . date('Y') . ' 版權所有';
    }

    /**
     * 儲存頁尾版權內容到檔案或資料庫
     */
    private function saveFooterContent($content)
    {
        // 這裡可以根據實際需求儲存到檔案或資料庫
        // 這是一個簡單的實現，使用檔案儲存
        Storage::disk('local')->put('footer.txt', $content);
    }
}
