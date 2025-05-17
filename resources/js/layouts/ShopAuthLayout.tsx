import React from 'react';
import { Link } from '@inertiajs/react';

interface ShopAuthLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

export default function ShopAuthLayout({ children, title, description }: ShopAuthLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Link href={route('shop.index')} className="flex items-center">
                        <span className="text-3xl font-extrabold text-indigo-600">精品購物</span>
                    </Link>
                </div>

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
                <p className="mt-2 text-center text-sm text-gray-600">{description}</p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
