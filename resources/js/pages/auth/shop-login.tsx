import React, { FormEventHandler } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import ShopAuthLayout from '@/layouts/ShopAuthLayout';

interface LoginForm {
    email: string;
    password: string;
    remember: boolean;
}

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
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
            </form>

            {/* Additional content */}
        </ShopAuthLayout>
    );
}
