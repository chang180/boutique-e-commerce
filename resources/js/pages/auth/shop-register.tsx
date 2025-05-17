import React, { FormEventHandler } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import ShopAuthLayout from '@/layouts/ShopAuthLayout';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <ShopAuthLayout
            title="創建您的帳戶"
            description="請填寫以下資料以創建您的帳戶"
        >
            <Head title="註冊 - 精品購物" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        姓名
                    </label>
                    <div className="mt-1">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            autoFocus
                            autoComplete="name"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        電子郵件
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="email"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="mt-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        密碼
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            autoComplete="new-password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                </div>

                <div className="mt-4">
                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                        確認密碼
                    </label>
                    <div className="mt-1">
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                            autoComplete="new-password"
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {errors.password_confirmation && <p className="mt-2 text-sm text-red-600">{errors.password_confirmation}</p>}
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {processing ? '處理中...' : '註冊'}
                    </button>
                </div>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    已經有帳戶？{' '}
                    <Link href={route('login')} className="font-medium text-indigo-600 hover:text-indigo-500">
                        登入
                    </Link>
                </p>
            </div>
        </ShopAuthLayout>
    );
}
