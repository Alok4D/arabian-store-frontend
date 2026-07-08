"use client";

import React, { useEffect, useState } from 'react';
import { Package, RefreshCw, Phone, MapPin, Search } from 'lucide-react';

export default function AdminDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiUrl}/orders`);
      const data = await res.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3 text-neutral-800">
            <Package className="w-8 h-8 text-[#e35a34]" />
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          
          <button 
            onClick={fetchOrders}
            className="flex items-center gap-2 bg-white border border-neutral-200 shadow-sm px-4 py-2 rounded hover:bg-neutral-50 transition-colors text-sm font-medium text-neutral-700"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh Orders
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
            <p className="text-sm font-medium text-neutral-500 mb-1">Total Orders</p>
            <p className="text-3xl font-bold text-neutral-800">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
            <p className="text-sm font-medium text-neutral-500 mb-1">Total Revenue</p>
            <p className="text-3xl font-bold text-green-600">
              {orders.reduce((sum, order) => sum + order.totalAmount, 0).toLocaleString()} ৳
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
            <p className="text-sm font-medium text-neutral-500 mb-1">Pending Orders</p>
            <p className="text-3xl font-bold text-orange-500">
              {orders.filter(o => o.status === 'PENDING').length}
            </p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden text-neutral-800">
          <div className="p-5 border-b border-neutral-200 flex justify-between items-center bg-[#fafafa]">
            <h2 className="text-lg font-bold text-neutral-800">Recent Orders</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 text-neutral-500 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">Order ID / Date</th>
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Product</th>
                  <th className="px-6 py-4 font-semibold">Amount</th>
                  <th className="px-6 py-4 font-semibold">Payment</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {isLoading && orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-neutral-500">
                      Loading orders...
                    </td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-neutral-500">
                      No orders found.
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-neutral-900 mb-1">#{order.id.slice(0, 8)}</div>
                        <div className="text-xs text-neutral-500">
                          {new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-neutral-800 mb-1">{order.customerName}</div>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-600 mb-1">
                          <Phone className="w-3 h-3" /> {order.phoneNumber}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                          <MapPin className="w-3 h-3" /> {order.district ? `${order.district}, ` : ''}{order.fullAddress}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {order.packageType}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-neutral-800">
                        {order.totalAmount.toLocaleString()} ৳
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${order.paymentMethod === 'BKASH' ? 'bg-pink-100 text-pink-800' : 'bg-green-100 text-green-800'}`}>
                          {order.paymentMethod === 'BKASH' ? 'bKash' : 'COD'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          className={`text-xs font-bold rounded-full px-3 py-1 outline-none border ${order.status === 'PENDING' ? 'bg-orange-100 text-orange-800 border-orange-200' : 'bg-emerald-100 text-emerald-800 border-emerald-200'}`}
                          defaultValue={order.status}
                        >
                          <option value="PENDING">Pending</option>
                          <option value="CONFIRMED">Confirmed</option>
                          <option value="SHIPPED">Shipped</option>
                          <option value="DELIVERED">Delivered</option>
                          <option value="CANCELLED">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
