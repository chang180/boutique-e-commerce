import React from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

interface Category {
    id: number;
    name: string;
    description: string;
    created_at: string;
}

interface CategoriesPageProps {
    categories: Category[];
    success?: string;
}

export default function CategoriesPage({ categories = [], success }: CategoriesPageProps) {
    return (
        <AdminLayout>
            <Head title="商品分類管理" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">商品分類管理</h1>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                <div className="mb-4">
                    <a
                        href={route('shop.admin.categories.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        新增分類
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">名稱</th>
                                <th className="py-2 px-4 border-b">描述</th>
                                <th className="py-2 px-4 border-b">創建日期</th>
                                <th className="py-2 px-4 border-b">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.length > 0 ? (
                                categories.map((category) => (
                                    <tr key={category.id}>
                                        <td className="py-2 px-4 border-b">{category.id}</td>
                                        <td className="py-2 px-4 border-b">{category.name}</td>
                                        <td className="py-2 px-4 border-b">{category.description}</td>
                                        <td className="py-2 px-4 border-b">{new Date(category.created_at).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b">
                                            <a
                                                href={route('shop.admin.categories.edit', category.id)}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            >
                                                編輯
                                            </a>
                                            <button
                                                onClick={() => {
                                                    if (confirm('確定要刪除此分類嗎？')) {
                                                        router.delete(route('shop.admin.categories.destroy', category.id));
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
                                    <td colSpan={5} className="py-4 px-4 text-center">
                                        尚無分類資料
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
