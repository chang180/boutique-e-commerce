import React from 'react';
import { Head, Link } from '@inertiajs/react';
import ShopLayout from '@/layouts/ShopLayout';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: {
        id: number;
        name: string;
    };
}

interface ProductShowProps {
    product: Product;
}

export default function ProductShow({ product }: ProductShowProps) {
    return (
        <ShopLayout>
            <Head title={`${product.name} - 精品購物`} />

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        {/* 商品圖片 */}
                        <div className="flex flex-col-reverse">
                            <div className="w-full aspect-w-1 aspect-h-1">
                                <div className="h-96 overflow-hidden rounded-lg">
                                    <img
                                        src={product.image || 'https://via.placeholder.com/600x600.png?text=商品圖片'}
                                        alt={product.name}
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 商品資訊 */}
                        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                            <nav aria-label="Breadcrumb">
                                <ol role="list" className="flex items-center space-x-2">
                                    <li>
                                        <div className="flex items-center">
                                            <Link href={route('shop.index')} className="mr-2 text-sm font-medium text-gray-900">
                                                首頁
                                            </Link>
                                            <svg
                                                width={16}
                                                height={20}
                                                viewBox="0 0 16 20"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-4 h-5 text-gray-300"
                                            >
                                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                                                {product.category.name}
                                            </a>
                                            <svg
                                                width={16}
                                                height={20}
                                                viewBox="0 0 16 20"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-4 h-5 text-gray-300"
                                            >
                                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="text-sm">
                                        <span className="font-medium text-gray-500" aria-current="page">
                                            {product.name}
                                        </span>
                                    </li>
                                </ol>
                            </nav>

                            <div className="mt-4">
                                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
                            </div>

                            <div className="mt-4">
                                <h2 className="sr-only">商品資訊</h2>
                                <p className="text-3xl text-gray-900">${product.price}</p>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">商品描述</h3>
                                <div
                                    className="text-base text-gray-700 space-y-6"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>

                            <div className="mt-10 flex sm:flex-col1">
                                <Link
                                    href={route('shop.buycart.add')}
                                    method="post"
                                    data={{ product_id: product.id, quantity: 1 }}
                                    as="button"
                                    className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full"
                                >
                                    加入購物車
                                </Link>

                                <button
                                    type="button"
                                    className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                >
                                    <svg
                                        className="h-6 w-6 flex-shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                    <span className="sr-only">加入收藏</span>
                                </button>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <svg
                                                key={rating}
                                                className="h-5 w-5 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="ml-3 text-sm text-gray-600">5.0 (12 則評價)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
