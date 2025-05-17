import React from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

interface News {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

interface NewsPageProps {
    news: News[];
    success?: string;
}

export default function NewsPage({ news = [], success }: NewsPageProps) {
    return (
        <AdminLayout>
            <Head title="最新消息管理" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">最新消息管理</h1>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                <div className="mb-4">
                    <a
                        href={route('shop.admin.news.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        新增消息
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">標題</th>
                                <th className="py-2 px-4 border-b">發布日期</th>
                                <th className="py-2 px-4 border-b">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.length > 0 ? (
                                news.map((item) => (
                                    <tr key={item.id}>
                                        <td className="py-2 px-4 border-b">{item.id}</td>
                                        <td className="py-2 px-4 border-b">{item.title}</td>
                                        <td className="py-2 px-4 border-b">{new Date(item.created_at).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b">
                                            <a
                                                href={route('shop.admin.news.edit', item.id)}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            >
                                                編輯
                                            </a>
                                            <button
                                                onClick={() => {
                                                    if (confirm('確定要刪除此消息嗎？')) {
                                                        router.delete(route('shop.admin.news.destroy', item.id));
                                                    }
                                                }}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                            >
                                                刪除
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="py-4 px-4 text-center">
                                        尚無最新消息
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
