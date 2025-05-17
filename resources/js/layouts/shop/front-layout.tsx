import React from 'react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

interface FrontLayoutProps {
    children: React.ReactNode;
    visitorCount?: number;
    announcement?: string;
}

// Define the page props interface to replace any
interface PageProps {
    auth: {
        user: {
            name: string;
            email: string;
        } | null;
    };
}

export default function FrontLayout({ children, visitorCount = 5, announcement = '情人節特惠活動 &nbsp; 為了慶祝七夕情人節，將舉辦情人兩人到現場有七七折之特惠活動~' }: FrontLayoutProps) {
    const { auth } = (usePage().props as unknown as PageProps);

    return (
        <div id="main" className="w-[1034px] p-10 mx-auto my-20 border border-black min-h-[768px]">
            <div id="top">
                <Link href="/">
                    <img src="/images/0416.jpg" alt="Logo" />
                </Link>
                <div className="p-10">
                    <Link href="/" className="text-[#CE631C] no-underline">回首頁</Link> |
                    <Link href="/news" className="text-[#CE631C] no-underline">最新消息</Link> |
                    <Link href="/look" className="text-[#CE631C] no-underline">購物流程</Link> |
                    <Link href="/buycart" className="text-[#CE631C] no-underline">購物車</Link> |
                    {auth?.user ? (
                        <Link href="/profile" className="text-[#CE631C] no-underline">會員中心</Link>
                    ) : (
                        <Link href="/login" className="text-[#CE631C] no-underline">會員登入</Link>
                    )} |
                    <Link href="/admin" className="text-[#CE631C] no-underline">管理登入</Link>
                </div>
                <div>{announcement}</div>
            </div>
            <div id="left" className="inline-block w-1/5 p-[2%] min-h-[550px] align-top border border-black text-center">
                <div className="min-h-[400px]">
                    {/* 商品分類區域 - 這裡將由後端數據填充 */}
                </div>
                <span>
                    <div>進站總人數</div>
                    <div className="text-red-500 text-[28px]">
                        {String(visitorCount).padStart(5, '0')}
                    </div>
                </span>
            </div>
            <div id="right" className="inline-block w-[65%] p-[2%] min-h-[550px] border border-black">
                {children}
            </div>
            <div id="bottom" className="h-[70px] leading-[70px] bg-[url('/images/bot.png')] text-white text-center">
                頁尾版權 :
            </div>
        </div>
    );
}
