<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->get();

        return Inertia::render('shop/products/index', [
            'products' => $products
        ]);
    }

    public function show($id)
    {
        $product = Product::with('category')->findOrFail($id);

        return Inertia::render('shop/products/show', [
            'product' => $product
        ]);
    }
}
