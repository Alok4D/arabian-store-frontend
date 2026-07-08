'use client';

import { useEffect, useState } from 'react';
import styles from '../page.module.css';

interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  fullAddress: string;
  packageType: string;
  totalAmount: number;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/orders');
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error('Failed to fetch orders', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 className={styles.sectionTitle}>অ্যাডমিন ড্যাশবোর্ড</h1>
      <p className="text-center mb-8">সবগুলো অর্ডারের তালিকা নিচে দেওয়া হলো</p>
      
      {loading ? (
        <p className="text-center">লোড হচ্ছে...</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--card-bg)', boxShadow: 'var(--shadow-md)', borderRadius: '8px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--text-light)' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>অর্ডার আইডি</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>কাস্টমারের নাম</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>মোবাইল</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>ঠিকানা</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>প্যাকেজ</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>মোট বিল</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>সময়</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>স্ট্যাটাস</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ padding: '2rem', textAlign: 'center' }}>কোনো অর্ডার পাওয়া যায়নি</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '12px', fontSize: '0.875rem', color: '#666' }}>{order.id.slice(0, 8)}...</td>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{order.customerName}</td>
                    <td style={{ padding: '12px' }}>{order.phoneNumber}</td>
                    <td style={{ padding: '12px' }}>{order.fullAddress}</td>
                    <td style={{ padding: '12px' }}>{order.packageType}</td>
                    <td style={{ padding: '12px', color: 'var(--primary-color)', fontWeight: 'bold' }}>৳ {order.totalAmount}</td>
                    <td style={{ padding: '12px' }}>{new Date(order.createdAt).toLocaleString()}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ padding: '4px 8px', borderRadius: '4px', backgroundColor: '#e8f5e9', color: '#2e7d32', fontSize: '0.875rem' }}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
