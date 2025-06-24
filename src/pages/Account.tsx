import React from 'react';

const Account: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="container py-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
              <p className="text-gray-600">Welcome back, John Doe</p>
              <p className="text-sm text-green-600">✓ Verified Account</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Profile Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Edit Profile
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <p className="text-gray-900 font-medium">John Doe</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                    <p className="text-gray-900">January 2024</p>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View All Orders
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop&crop=center"
                      alt="Product"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Order #12345</p>
                      <p className="text-sm text-gray-600">Wireless Headphones</p>
                      <p className="text-sm text-green-600">✓ Delivered on March 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$89.99</p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">Track</button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop&crop=center"
                      alt="Product"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Order #12344</p>
                      <p className="text-sm text-gray-600">Smart Watch</p>
                      <p className="text-sm text-blue-600">📦 Shipped on March 10, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">$156.50</p>
                      <button className="text-blue-600 hover:text-blue-700 text-sm">Track</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">View Orders</span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">Wishlist</span>
                  </button>

                  <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">Addresses</span>
                  </button>
                </div>
              </div>

              {/* Account Stats */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-4">Account Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Total Orders</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Total Spent</span>
                    <span className="font-semibold">$1,247.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Loyalty Points</span>
                    <span className="font-semibold">1,250 pts</span>
                  </div>
                </div>
              </div>

              {/* Eco Impact */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🌱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-900">Your Eco Impact</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-green-700">
                    <span className="font-semibold">12 trees</span> saved through your purchases
                  </p>
                  <p className="text-sm text-green-700">
                    <span className="font-semibold">45 kg CO₂</span> offset this year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
