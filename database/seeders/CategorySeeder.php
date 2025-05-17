<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 創建主分類
        $clothing = Category::create([
            'name' => '服飾',
        ]);

        $accessories = Category::create([
            'name' => '配件',
        ]);

        $digital = Category::create([
            'name' => '3C產品',
        ]);

        // 創建子分類
        Category::create([
            'name' => '上衣',
            'parent_id' => $clothing->id,
        ]);

        Category::create([
            'name' => '褲子',
            'parent_id' => $clothing->id,
        ]);

        Category::create([
            'name' => '裙子',
            'parent_id' => $clothing->id,
        ]);

        Category::create([
            'name' => '手錶',
            'parent_id' => $accessories->id,
        ]);

        Category::create([
            'name' => '項鍊',
            'parent_id' => $accessories->id,
        ]);

        Category::create([
            'name' => '手機',
            'parent_id' => $digital->id,
        ]);

        Category::create([
            'name' => '平板',
            'parent_id' => $digital->id,
        ]);
    }
}
