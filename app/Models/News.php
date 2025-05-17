<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    /**
     * 可批量賦值的屬性
     */
    protected $fillable = [
        'title',
        'content',
        'is_published',
        'image',
        'publish_date'
    ];

    /**
     * 應該被轉換為日期的屬性
     */
    protected $dates = [
        'publish_date',
    ];

    /**
     * 應該被轉換為原生類型的屬性
     */
    protected $casts = [
        'is_published' => 'boolean',
    ];
}
