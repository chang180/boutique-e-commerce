import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import ShopLayout from '@/layouts/ShopLayout';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    subtotal: number;
    image: string;
}

interface CheckoutProps {
    cartItems: CartItem[];
    total: number;
}

export default function Checkout({ cartItems, total }: CheckoutProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        payment_method: 'credit_card',
        notes: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('shop.order.store'), {
            onSuccess: () => {
                alert('訂單已成功提交！');
            },
        });
    };

    return (
        <ShopLayout>
            <Head title="結帳 - 精品購物" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">結帳</h1>

                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        {/* 訂單摘要 */}
                        <div className="lg:col-span-7">
                            <h2 className="text-lg font-medium text-gray-900">訂單摘要</h2>

                            <ul role="list" className="mt-6 divide-y divide-gray-200 border-t border-b border-gray-200">
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
                                                    <h3>{item.name}</h3>
                                                    <p className="ml-4">${item.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between text-sm">
                                                <p className="text-gray-500">數量 {item.quantity}</p>
                                                <p className="font-medium text-gray-900">小計: ${item.subtotal}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">小計</dt>
                                    <dd className="text-sm font-medium text-gray-900">${total}</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="text-base font-medium text-gray-900">總計</dt>
                                    <dd className="text-base font-medium text-gray-900">${total}</dd>
                                </div>
                            </dl>
                        </div>

                        {/* 結帳表單 */}
                        <div className="mt-10 lg:mt-0 lg:col-span-5">
                            <h2 className="text-lg font-medium text-gray-900">收件資訊</h2>

                            <form onSubmit={handleSubmit} className="mt-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            姓名
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={data.name}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            電子郵件
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={data.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            電話
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={data.phone}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            地址
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={data.address}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        {errors.address && <div className="text-red-500 text-sm mt-1">{errors.address}</div>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="payment_method" className="block text-sm font-medium text-gray-700">
                                            付款方式
                                        </label>
                                        <select
                                            id="payment_method"
                                            name="payment_method"
                                            value={data.payment_method}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="credit_card">信用卡</option>
                                            <option value="bank_transfer">銀行轉帳</option>
                                            <option value="cash_on_delivery">貨到付款</option>
                                        </select>
                                        {errors.payment_method && <div className="text-red-500 text-sm mt-1">{errors.payment_method}</div>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                            訂單備註 (選填)
                                        </label>
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            rows={3}
                                            value={data.notes}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={route('shop.buycart')}
                                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                            <span aria-hidden="true">&larr;</span> 返回購物車
                                        </Link>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            {processing ? '處理中...' : '提交訂單'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
