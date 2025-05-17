<?php

namespace App\Http\Controllers\Shop\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * 顯示商品分類管理頁面
     */
    public function index()
    {
        $categories = Category::with('children', 'products')->whereNull('parent_id')->get();

        return Inertia::render('shop/admin/categories', [
            'categories' => $categories
        ]);
    }

    /**
     * 顯示添加分類表單
     */
    public function create()
    {
        $categories = Category::whereNull('parent_id')->get();

        return Inertia::render('shop/admin/category-create', [
            'parentCategories' => $categories
        ]);
    }

    /**
     * 儲存新分類
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|exists:categories,id'
        ]);

        Category::create([
            'name' => $request->name,
            'parent_id' => $request->parent_id
        ]);

        return redirect()->route('shop.admin.categories')->with('success', '分類已成功添加');
    }

    /**
     * 顯示編輯分類表單
     */
    public function edit($id)
    {
        $category = Category::findOrFail($id);
        $parentCategories = Category::whereNull('parent_id')
            ->where('id', '!=', $id)
            ->get();

        return Inertia::render('shop/admin/category-edit', [
            'category' => $category,
            'parentCategories' => $parentCategories
        ]);
    }

    /**
     * 更新分類資訊
     */
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'parent_id' => 'nullable|exists:categories,id'
        ]);

        // 確保不會將分類設為自己的子分類
        if ($request->parent_id && $request->parent_id == $id) {
            return redirect()->back()->with('error', '無法將分類設為自己的子分類');
        }

        $category->name = $request->name;
        $category->parent_id = $request->parent_id;
        $category->save();

        return redirect()->route('shop.admin.categories')->with('success', '分類資訊已更新');
    }

    /**
     * 刪除分類
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        // 檢查是否有子分類
        if ($category->children()->count() > 0) {
            return redirect()->back()->with('error', '無法刪除有子分類的分類');
        }

        // 檢查是否有關聯的商品
        if ($category->products()->count() > 0) {
            return redirect()->back()->with('error', '無法刪除有商品的分類');
        }

        $category->delete();

        return redirect()->route('shop.admin.categories')->with('success', '分類已刪除');
    }

    /**
     * 顯示商品管理頁面
     */
    public function products()
    {
        $products = Product::with('category')->get();

        return Inertia::render('shop/admin/products', [
            'products' => $products
        ]);
    }

    /**
     * 顯示添加商品表單
     */
    public function createProduct()
    {
        $categories = Category::all();

        return Inertia::render('shop/admin/product-create', [
            'categories' => $categories
        ]);
    }

    /**
     * 儲存新商品
     */
    public function storeProduct(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'category_id' => 'required|exists:categories,id',
            'stock' => 'required|integer|min:0',
            'is_featured' => 'boolean'
        ]);

        $product = new Product([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'stock' => $request->stock,
            'is_featured' => $request->is_featured ?? false
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');
            $product->image = $path;
        }

        $product->save();

        return redirect()->route('shop.admin.products')->with('success', '商品已成功添加');
    }

    /**
     * 顯示編輯商品表單
     */
    public function editProduct($id)
    {
        $product = Product::findOrFail($id);
        $categories = Category::all();

        return Inertia::render('shop/admin/product-edit', [
            'product' => $product,
            'categories' => $categories
        ]);
    }

    /**
     * 更新商品資訊
     */
    public function updateProduct(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'category_id' => 'required|exists:categories,id',
            'stock' => 'required|integer|min:0',
            'is_featured' => 'boolean'
        ]);

        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->category_id = $request->category_id;
        $product->stock = $request->stock;
        $product->is_featured = $request->is_featured ?? false;

        if ($request->hasFile('image')) {
            // 刪除舊圖片
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }

            $path = $request->file('image')->store('products', 'public');
            $product->image = $path;
        }

        $product->save();

        return redirect()->route('shop.admin.products')->with('success', '商品資訊已更新');
    }

    /**
     * 刪除商品
     */
    public function destroyProduct($id)
    {
        $product = Product::findOrFail($id);

        // 刪除商品圖片
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return redirect()->route('shop.admin.products')->with('success', '商品已刪除');
    }
}
