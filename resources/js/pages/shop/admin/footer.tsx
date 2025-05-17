import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

interface FooterPageProps {
    content: string;
    success?: string;
}

export default function FooterPage({ content = '', success }: FooterPageProps) {
    const { data, setData, patch, processing, errors } = useForm({
        content: content,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('shop.admin.footer.update'));
    };

    return (
        <AdminLayout>
            <Head title="頁尾版權管理" />

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">頁尾版權管理</h1>

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                            頁尾版權內容
                        </label>
                        <textarea
                            id="content"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows={4}
                        />
                        {errors.content && <p className="text-red-500 text-xs italic">{errors.content}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {processing ? '處理中...' : '儲存變更'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
