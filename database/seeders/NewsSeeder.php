<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        News::create([
            'title' => '新品上市：夏季新款服飾',
            'content' => '我們很高興地宣布，2024夏季新款服飾已經上市！這個系列包含了多種風格的上衣、褲子和裙子，適合各種場合穿著。歡迎前來選購！',
            'is_published' => true,
            'publish_date' => now(),
        ]);

        News::create([
            'title' => '情人節特惠活動',
            'content' => '為了慶祝七夕情人節，本店將舉辦情人兩人到現場有七七折之特惠活動。活動期間：2024年8月1日至8月7日。',
            'is_published' => true,
            'publish_date' => now(),
        ]);

        News::create([
            'title' => '會員專屬優惠',
            'content' => '成為我們的會員，即可享有專屬優惠！會員可享有9折優惠，並可參加會員專屬活動。立即註冊成為會員，享受更多優惠！',
            'is_published' => true,
            'publish_date' => now(),
        ]);

        News::create([
            'title' => '新店開幕',
            'content' => '我們很高興地宣布，我們的新店將於下個月開幕！新店位於市中心，交通便利。開幕當天將有特別優惠，歡迎大家前來參觀選購！',
            'is_published' => true,
            'publish_date' => now()->addDays(7),
        ]);

        News::create([
            'title' => '網站維護公告',
            'content' => '為了提供更好的購物體驗，我們的網站將於下週進行維護升級。維護時間：2024年6月15日 00:00-06:00。維護期間網站將暫停服務，造成不便，敬請見諒。',
            'is_published' => false,
            'publish_date' => now()->addDays(14),
        ]);
    }
}
