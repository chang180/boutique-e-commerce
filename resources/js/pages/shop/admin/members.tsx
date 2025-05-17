import React from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

interface Member {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    created_at: string;
}

interface MembersPageProps {
    members: Member[];
    success?: string;
}

export default function MembersPage({ members = [], success }: MembersPageProps) {
    return (
        <AdminLayout>
            <Head title="會員管理" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">會員管理</h1>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">ID</th>
                                <th className="py-2 px-4 border-b">姓名</th>
                                <th className="py-2 px-4 border-b">電子郵件</th>
                                <th className="py-2 px-4 border-b">電話</th>
                                <th className="py-2 px-4 border-b">註冊日期</th>
                                <th className="py-2 px-4 border-b">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.length > 0 ? (
                                members.map((member) => (
                                    <tr key={member.id}>
                                        <td className="py-2 px-4 border-b">{member.id}</td>
                                        <td className="py-2 px-4 border-b">{member.name}</td>
                                        <td className="py-2 px-4 border-b">{member.email}</td>
                                        <td className="py-2 px-4 border-b">{member.phone || '未提供'}</td>
                                        <td className="py-2 px-4 border-b">{new Date(member.created_at).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b">
                                            <a
                                                href={route('shop.admin.members.show', member.id)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            >
                                                查看
                                            </a>
                                            <a
                                                href={route('shop.admin.members.edit', member.id)}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            >
                                                編輯
                                            </a>
                                            <button
                                                onClick={() => {
                                                    if (confirm('確定要刪除此會員嗎？')) {
                                                        router.delete(route('shop.admin.members.destroy', member.id));
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
                                    <td colSpan={6} className="py-4 px-4 text-center">
                                        尚無會員資料
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
