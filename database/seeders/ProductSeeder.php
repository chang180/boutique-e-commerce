<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 獲取分類ID
        $tshirtCategoryId = Category::where('name', '上衣')->first()->id;
        $pantsCategoryId = Category::where('name', '褲子')->first()->id;
        $skirtCategoryId = Category::where('name', '裙子')->first()->id;
        $watchCategoryId = Category::where('name', '手錶')->first()->id;
        $necklaceCategoryId = Category::where('name', '項鍊')->first()->id;
        $phoneCategoryId = Category::where('name', '手機')->first()->id;
        $tabletCategoryId = Category::where('name', '平板')->first()->id;

        // 創建商品
        Product::create([
            'name' => '純棉T恤',
            'price' => 590,
            'description' => '舒適透氣的純棉T恤，適合日常穿著。',
            'image' => 'products/tshirt.jpg',
            'category_id' => $tshirtCategoryId,
            'stock' => 100,
            'is_featured' => true,
        ]);

        Product::create([
            'name' => '牛仔褲',
            'price' => 1290,
            'description' => '經典款牛仔褲，修身剪裁，舒適耐穿。',
            'image' => 'products/jeans.jpg',
            'category_id' => $pantsCategoryId,
            'stock' => 50,
            'is_featured' => true,
        ]);

        Product::create([
            'name' => '百褶裙',
            'price' => 890,
            'description' => '優雅百褶裙，適合各種場合穿著。',
            'image' => 'products/skirt.jpg',
            'category_id' => $skirtCategoryId,
            'stock' => 30,
            'is_featured' => false,
        ]);

        Product::create([
            'name' => '石英手錶',
            'price' => 2500,
            'description' => '精緻石英手錶，展現您的品味。',
            'image' => 'products/watch.jpg',
            'category_id' => $watchCategoryId,
            'stock' => 20,
            'is_featured' => true,
        ]);

        Product::create([
            'name' => '銀飾項鍊',
            'price' => 1800,
            'description' => '925純銀項鍊，簡約設計，適合日常配戴。',
            'image' => 'products/necklace.jpg',
            'category_id' => $necklaceCategoryId,
            'stock' => 15,
            'is_featured' => false,
        ]);

        Product::create([
            'name' => '智慧型手機',
            'price' => 15900,
            'description' => '最新款智慧型手機，配備高解析度螢幕和強大的處理器。',
            'image' => 'products/phone.jpg',
            'category_id' => $phoneCategoryId,
            'stock' => 10,
            'is_featured' => true,
        ]);

        Product::create([
            'name' => '平板電腦',
            'price' => 12900,
            'description' => '輕薄平板電腦，適合工作和娛樂。',
            'image' => 'products/tablet.jpg',
            'category_id' => $tabletCategoryId,
            'stock' => 8,
            'is_featured' => true,
        ]);
    }
}
