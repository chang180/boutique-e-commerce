import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/layouts/shop/admin-layout';

export default function AdminIndex() {
  return (
    <AdminLayout>
      <Head title="管理後台 - 精品電子商務網站" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">管理後台</h2>
        <p>歡迎回來，管理員。請從左側選單選擇您要管理的項目。</p>

        <div className="mt-8">
          <h3 className="font-bold">網站統計</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border p-4 rounded bg-[#EFCA85]">
              <p className="font-bold">會員數</p>
              <p className="text-2xl">0</p>
            </div>
            <div className="border p-4 rounded bg-[#EFCA85]">
              <p className="font-bold">商品數</p>
              <p className="text-2xl">0</p>
            </div>
            <div className="border p-4 rounded bg-[#EFCA85]">
              <p className="font-bold">訂單數</p>
              <p className="text-2xl">0</p>
            </div>
            <div className="border p-4 rounded bg-[#EFCA85]">
              <p className="font-bold">訪問次數</p>
              <p className="text-2xl">5</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
