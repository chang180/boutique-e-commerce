<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    /**
     * 可批量賦值的屬性
     */
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price',
        'subtotal'
    ];

    /**
     * 獲取訂單項目所屬的訂單
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * 獲取訂單項目對應的商品
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
