import React, { useState, useEffect } from 'react';
import { Head, usePage, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

interface Admin {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

interface AdminPageProps {
    admins: Admin[];
    success?: string;
}

export default function AdminPage({ admins = [], success }: AdminPageProps) {
    return (
        <AdminLayout>
            <Head title="管理權限設置" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">管理權限設置</h1>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                <div className="mb-4">
                    <a
                        href={route('shop.admin.admin.create')}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        新增管理員
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">姓名</th>
                                <th className="py-2 px-4 border-b">電子郵件</th>
                                <th className="py-2 px-4 border-b">創建日期</th>
                                <th className="py-2 px-4 border-b">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.length > 0 ? (
                                admins.map((admin) => (
                                    <tr key={admin.id}>
                                        <td className="py-2 px-4 border-b">{admin.id}</td>
                                        <td className="py-2 px-4 border-b">{admin.name}</td>
                                        <td className="py-2 px-4 border-b">{admin.email}</td>
                                        <td className="py-2 px-4 border-b">{new Date(admin.created_at).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b">
                                            <a
                                                href={route('shop.admin.admin.edit', admin.id)}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            >
                                                編輯
                                            </a>
                                            <button
                                                onClick={() => {
                                                    if (confirm('確定要刪除此管理員嗎？')) {
                                                        router.delete(route('shop.admin.admin.destroy', admin.id));
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
                                        尚無管理員資料
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
