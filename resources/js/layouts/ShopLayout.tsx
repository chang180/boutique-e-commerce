import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

interface ShopLayoutProps {
    children: React.ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { auth } = usePage().props as any;

    return (
        <div className="min-h-screen bg-gray-100">
            {/* 頂部導航欄 */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href={route('shop.index')}>
                                    <span className="text-2xl font-bold text-indigo-600">精品購物</span>
                                </Link>
                            </div>
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                <Link
                                    href={route('shop.index')}
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                                >
                                    首頁
                                </Link>
                                <Link
                                    href={route('shop.news')}
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    最新消息
                                </Link>
                                <Link
                                    href={route('shop.look')}
                                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                                >
                                    購物須知
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:flex md:items-center">
                            <Link
                                href={route('shop.buycart')}
                                className="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-800 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                            >
                                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                            </Link>

                            {auth.user ? (
                                <div className="ml-3 relative">
                                    <div>
                                        <Link
                                            href={route('profile.edit')}
                                            className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">開啟使用者選單</span>
                                            <UserIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="ml-6 flex items-center">
                                    <Link
                                        href="/login"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        登入
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        註冊
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* 移動版選單按鈕 */}
                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span className="sr-only">開啟主選單</span>
                                {mobileMenuOpen ? (
                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 移動版選單 */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link
                                href={route('shop.index')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
                            >
                                首頁
                            </Link>
                            <Link
                                href={route('shop.news')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            >
                                最新消息
                            </Link>
                            <Link
                                href={route('shop.look')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            >
                                購物須知
                            </Link>
                            <Link
                                href={route('shop.buycart')}
                                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
                            >
                                購物車
                            </Link>
                        </div>

                        {/* 移動版用戶選單 */}
                        {auth.user ? (
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex items-center px-4">
                                    <div className="flex-shrink-0">
                                        <UserIcon className="h-10 w-10 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">{auth.user.name}</div>
                                        <div className="text-sm font-medium text-gray-500">{auth.user.email}</div>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <Link
                                        href={route('profile.edit')}
                                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                    >
                                        個人資料
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                    >
                                        登出
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex items-center justify-center space-x-2 px-4">
                                    <Link
                                        href="/login"
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        登入
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        註冊
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </header>

            {/* 主要內容區域 */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {children}
            </main>

            {/* 頁尾 */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                        <div className="px-5 py-2">
                            <Link
                                href={route('shop.index')}
                                className="text-base text-gray-500 hover:text-gray-900"
                            >
                                首頁
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                href={route('shop.news')}
                                className="text-base text-gray-500 hover:text-gray-900"
                            >
                                最新消息
                            </Link>
                        </div>
                        <div className="px-5 py-2">
                            <Link
                                href={route('shop.look')}
                                className="text-base text-gray-500 hover:text-gray-900"
                            >
                                購物須知
                            </Link>
                        </div>
                    </nav>
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-8 text-center text-base text-gray-400">
                        &copy; 2025 精品購物, 版權所有.
                    </p>
                </div>
            </footer>
        </div>
    );
}

