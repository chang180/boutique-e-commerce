import React from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

interface Order {
    id: number;
    user_name: string;
    total: number;
    status: string;
    created_at: string;
}

interface OrdersPageProps {
    orders: Order[];
    success?: string;
}

export default function OrdersPage({ orders = [], success }: OrdersPageProps) {
    const getStatusClass = (status: string) => {
        switch(status) {
            case '待處理':
                return 'bg-yellow-100 text-yellow-800';
            case '處理中':
                return 'bg-blue-100 text-blue-800';
            case '已完成':
                return 'bg-green-100 text-green-800';
            case '已取消':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <AdminLayout>
            <Head title="訂單管理" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">訂單管理</h1>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">訂單編號</th>
                                <th className="py-2 px-4 border-b">客戶名稱</th>
                                <th className="py-2 px-4 border-b">總金額</th>
                                <th className="py-2 px-4 border-b">狀態</th>
                                <th className="py-2 px-4 border-b">訂單日期</th>
                                <th className="py-2 px-4 border-b">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="py-2 px-4 border-b">{order.id}</td>
                                        <td className="py-2 px-4 border-b">{order.user_name}</td>
                                        <td className="py-2 px-4 border-b">${order.total.toFixed(2)}</td>
                                        <td className="py-2 px-4 border-b">
                                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-2 px-4 border-b">{new Date(order.created_at).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b">
                                            <a
                                                href={route('shop.admin.orders.show', order.id)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            >
                                                查看
                                            </a>
                                            <button
                                                onClick={() => {
                                                    if (confirm('確定要刪除此訂單嗎？')) {
                                                        router.delete(route('shop.admin.orders.destroy', order.id));
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
                                        尚無訂單資料
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
