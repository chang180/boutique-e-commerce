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

interface ProductsIndexProps {
    products: Product[];
}

export default function ProductsIndex({ products }: ProductsIndexProps) {
    return (
        <ShopLayout>
            <Head title="精品購物 - 首頁" />

            {/* 英雄區塊 */}
            <div className="relative">
                <div className="max-w-7xl mx-auto">
                    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1541838916-d8c1add42062"
                                alt="精品購物"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">精緻生活</span>
                                <span className="block text-indigo-200">品味時尚</span>
                            </h1>
                            <p className="mt-6 max-w-lg text-xl text-white sm:max-w-3xl">
                                探索我們精選的高品質商品，為您打造獨特的生活風格。從時尚服飾到家居裝飾，滿足您對美好生活的所有想像。
                            </p>
                            <div className="mt-10">
                                <div className="sm:flex">
                                    <Link
                                        href="#featured-products"
                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 sm:px-8"
                                    >
                                        立即選購
                                    </Link>
                                    <Link
                                        href={route('shop.news')}
                                        className="mt-3 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:px-8"
                                    >
                                        最新消息
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 商品類別區塊 */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">商品類別</h2>
                        <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            瀏覽所有類別<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4">
                        <div className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="服飾"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    服飾
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">20 個商品</p>
                        </div>

                        <div className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="配飾"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    配飾
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">15 個商品</p>
                        </div>

                        <div className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="家居"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    家居
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">18 個商品</p>
                        </div>

                        <div className="group relative">
                            <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="電子產品"
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    電子產品
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">12 個商品</p>
                        </div>
                    </div>

                    <div className="mt-6 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            瀏覽所有類別<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 精選商品區塊 */}
            <div id="featured-products" className="bg-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">精選商品</h2>
                        <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            瀏覽所有商品<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="w-full h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                                        <img
                                            src={product.image || 'https://via.placeholder.com/300x300.png?text=商品圖片'}
                                            alt={product.name}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link href={route('shop.product.show', product.id)}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </Link>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500">暫無商品</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-6 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            瀏覽所有商品<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 促銷區塊 */}
            <div className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="特價促銷"
                                className="w-full h-full object-center object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-900 mix-blend-multiply" />
                        </div>
                        <div className="relative py-24 px-8 sm:py-32 sm:px-16 lg:px-20">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                限時優惠
                            </h2>
                            <p className="mt-6 max-w-lg text-xl text-indigo-100">
                                新品上市，全場商品享有限時折扣。即日起至月底，全館滿 $1000 即享 9 折優惠，數量有限，售完為止。
                            </p>
                            <div className="mt-10">
                                <div className="inline-flex rounded-md shadow">
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                                    >
                                        立即選購
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 顧客評價區塊 */}
            <div className="bg-white py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">顧客評價</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            聽聽我們的顧客怎麼說
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">陳小姐</p>
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
                                        </div>
                                    </div>
                                    <div className="mt-4 text-base text-gray-500">
                                        商品質量非常好，包裝精美，送貨速度也很快。客服態度親切，解答問題迅速。非常滿意這次的購物體驗！
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">林先生</p>
                                            <div className="flex items-center">
                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                    <svg
                                                        key={rating}
                                                        className={`h-5 w-5 ${
                                                            rating < 4 ? 'text-yellow-400' : 'text-gray-300'
                                                        }`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-base text-gray-500">
                                        商品與描述相符，價格合理，整體來說是不錯的購物體驗。希望能增加更多款式選擇。
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">王小姐</p>
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
                                        </div>
                                    </div>
                                    <div className="mt-4 text-base text-gray-500">
                                        這是我第三次在這裡購物了，每次都非常滿意。商品品質優良，售後服務也很好。強力推薦給大家！
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 訂閱區塊 */}
            <div className="bg-indigo-700">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
                            訂閱我們的電子報
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                            獲取最新的商品信息、優惠活動和獨家折扣。我們每週發送一次電子報，您隨時可以取消訂閱。
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-8">
                        <form className="sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                                電子郵件地址
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                                placeholder="請輸入您的電子郵件"
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                                >
                                    訂閱
                                </button>
                            </div>
                        </form>
                        <p className="mt-3 text-sm text-indigo-200">
                            我們重視您的隱私，不會分享您的個人信息。
                        </p>
                    </div>
                </div>
            </div>
        </ShopLayout>
    );
}
