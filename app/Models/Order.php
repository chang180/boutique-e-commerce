<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * 可批量賦值的屬性
     */
    protected $fillable = [
        'user_id',
        'total_amount',
        'status',
        'payment_method',
        'payment_status',
        'shipping_address',
        'shipping_method',
        'shipping_fee',
        'note',
        'tracking_number'
    ];

    /**
     * 訂單狀態常量
     */
    const STATUS_PENDING = 'pending';
    const STATUS_PROCESSING = 'processing';
    const STATUS_SHIPPED = 'shipped';
    const STATUS_DELIVERED = 'delivered';
    const STATUS_CANCELLED = 'cancelled';

    /**
     * 付款狀態常量
     */
    const PAYMENT_PENDING = 'pending';
    const PAYMENT_PAID = 'paid';
    const PAYMENT_FAILED = 'failed';
    const PAYMENT_REFUNDED = 'refunded';

    /**
     * 獲取訂單的用戶
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * 獲取訂單的項目
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
