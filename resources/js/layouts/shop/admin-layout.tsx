import React from 'react';
import { Link, router } from '@inertiajs/react';

interface AdminLayoutProps {
    children: React.ReactNode;
    footer?: string;
}

export default function AdminLayout({ children, footer = '© 2025 精品購物, 版權所有.' }: AdminLayoutProps) {

    // 處理登出
    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <div id="main" className="w-[1034px] p-10 mx-auto my-20 border border-black min-h-[768px]">
            <div id="top">
                <Link href={route('shop.index')}>
                    <img src="/images/0416.jpg" alt="Logo" />
                </Link>
                <img src="/images/0417.jpg" alt="Admin" />
            </div>
            <div id="left" className="inline-block w-1/5 p-[2%] min-h-[550px] align-top border border-black text-center">
                <div className="min-h-[400px]">
                    <Link
                        href={route('shop.admin.admin')}
                        className="block py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-[#65350A] hover:bg-[#e6b57d]"
                    >
                        管理權限設置
                    </Link>
                    <Link
                        href={route('shop.admin.categories')}
                        className="block py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-[#65350A] hover:bg-[#e6b57d]"
                    >
                        商品分類與管理
                    </Link>
                    <Link
                        href={route('shop.admin.orders')}
                        className="block py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-[#65350A] hover:bg-[#e6b57d]"
                    >
                        訂單管理
                    </Link>
                    <Link
                        href={route('shop.admin.members')}
                        className="block py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-[#65350A] hover:bg-[#e6b57d]"
                    >
                        會員管理
                    </Link>
                    <Link
                        href={route('shop.admin.footer')}
                        className="block py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-[#65350A] hover:bg-[#e6b57d]"
                    >
                        頁尾版權管理
                    </Link>
                    <Link
                        href={route('shop.admin.news')}
                        className="block py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-[#65350A] hover:bg-[#e6b57d]"
                    >
                        最新消息管理
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="block w-full py-5 px-[5px] no-underline bg-[#F4C591] my-10 mx-auto text-red-500 hover:bg-[#e6b57d] cursor-pointer"
                    >
                        登出
                    </button>
                </div>
            </div>
            <div id="right" className="inline-block w-[65%] p-[2%] min-h-[550px] border border-black">
                {children}
            </div>
            <div id="bottom" className="h-[70px] leading-[70px] bg-[url('/images/bot.png')] text-white text-center">
                頁尾版權: {footer}
            </div>
        </div>
    );
}
