import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import ShopLayout from '@/layouts/ShopLayout';
import { TrashIcon } from '@heroicons/react/24/outline';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
    image: string;
}

interface CartIndexProps {
    cartItems: CartItem[];
    total: number;
}

export default function BuyCart({ cartItems, total }: CartIndexProps) {
    const { data, setData, post, patch, delete: destroy, processing } = useForm({
        product_id: '',
        quantity: 1,
    });

    const handleQuantityChange = (id: number, quantity: number) => {
        setData({
            product_id: id.toString(),
            quantity: quantity,
        });

        patch(route('shop.buycart.update'), {
            preserveScroll: true,
        });
    };

    const handleRemoveItem = (id: number) => {
        destroy(route('shop.buycart.remove', { product_id: id }), {
            preserveScroll: true,
        });
    };

    const handleClearCart = () => {
        if (confirm('確定要清空購物車嗎？')) {
            destroy(route('shop.buycart.clear'), {
                preserveScroll: true,
            });
        }
    };

    return (
        <ShopLayout>
            <Head title="購物車 - 精品購物" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">購物車</h1>
                    <div className="mt-8">
                        {cartItems && cartItems.length > 0 ? (
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {cartItems.map((item) => (
                                        <li key={item.id} className="py-6 flex">
                                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                <img
                                                    src={item.image || 'https://via.placeholder.com/300x300.png?text=商品圖片'}
                                                    alt={item.name}
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>

                                            <div className="ml-4 flex-1 flex flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <Link href={route('shop.product.show', item.id)}>
                                                                {item.name}
                                                            </Link>
                                                        </h3>
                                                        <p className="ml-4">${item.price}</p>
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex items-end justify-between text-sm">
                                                    <div className="flex items-center">
                                                        <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-500">
                                                            數量
                                                        </label>
                                                        <select
                                                            id={`quantity-${item.id}`}
                                                            name={`quantity-${item.id}`}
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                                            className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            {[...Array(10).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleRemoveItem(item.id)}
                                                            className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                                                            disabled={processing}
                                                        >
                                                            <TrashIcon className="h-5 w-5 mr-1" />
                                                            移除
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-t border-gray-200 py-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>小計</p>
                                        <p>${total}</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">運費和稅金將在結帳時計算。</p>
                                    <div className="mt-6 flex justify-between">
                                        <Link
                                            href={route('shop.checkout')}
                                            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            結帳
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={handleClearCart}
                                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                            disabled={processing}
                                        >
                                            清空購物車
                                        </button>
                                    </div>
                                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                        <p>
                                            或{' '}
                                            <Link
                                                href={route('shop.index')}
                                                className="text-indigo-600 font-medium hover:text-indigo-500"
                                            >
                                                繼續購物<span aria-hidden="true"> &rarr;</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">購物車是空的</h3>
                                <p className="mt-1 text-sm text-gray-500">開始添加商品到您的購物車吧！</p>
                                <div className="mt-6">
                                    <Link
                                        href={route('shop.index')}
                                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        繼續購物
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
