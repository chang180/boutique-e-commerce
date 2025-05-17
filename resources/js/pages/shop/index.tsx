import React from 'react';
import { Head } from '@inertiajs/react';
import FrontLayout from '@/layouts/shop/front-layout';

export default function ShopIndex() {
  return (
    <FrontLayout>
      <Head title="精品電子商務網站" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">歡迎來到精品電子商務網站</h2>
        <p>這裡展示最新的商品和優惠信息</p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {/* 這裡將動態顯示商品列表 */}
          <div className="border p-4 rounded">
            <img src="/images/sample-product.jpg" alt="商品示例" className="w-full h-40 object-cover" />
            <h3 className="font-bold mt-2">商品名稱</h3>
            <p className="text-gray-600">$1,200</p>
            <button className="bg-[#F4C591] text-[#65350A] px-4 py-2 mt-2 rounded">查看詳情</button>
          </div>
        </div>
      </div>
    </FrontLayout>
  );
}
