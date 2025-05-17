import React, { FormEventHandler } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import ShopAuthLayout from '@/layouts/ShopAuthLayout';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
    [key: string]: string | boolean;
}

interface LoginProps {
    status?: string;
    canResetPassword?: boolean;
    // We'll keep canResetPassword but use it in the component
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('shop.login.store'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <ShopAuthLayout
            title="登入您的帳戶"
            description="請輸入您的電子郵件和密碼以登入"
        >
            <Head title="登入 - 精品購物" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                {/* Form fields and content */}

                {/* Use canResetPassword to conditionally render reset password link */}
                {canResetPassword && (
                    <div className="text-sm mt-2">
                        <Link href={route('password.request')} className="text-blue-600 hover:underline">
                            忘記密碼?
                        </Link>
                    </div>
                )}

                {/* Use the form data, processing, and errors */}
                <div className="mt-4">
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email"
                        className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full bg-blue-500 text-white py-2 mt-4"
                >
                    {processing ? '處理中...' : '登入'}
                </button>
            </form>

            {/* Additional content */}
        </ShopAuthLayout>
    );
}
