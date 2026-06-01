export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="relative">
              <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* KPI Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Revenue</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">$12,450</p>
                  <p className="text-gray-500 dark:text-gray-400">Revenue</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0l-8 8-8-8 0 16" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Users</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">8,234</p>
                  <p className="text-gray-500 dark:text-gray-400">Users</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-7h2a3 3 0 012 3v2M7 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Conversion Rate</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">4.2%</p>
                  <p className="text-gray-500 dark:text-gray-400">Conversion</p>
                </div>
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Support Tickets</h2>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">12</p>
                  <p className="text-gray-500 dark:text-gray-400">Open Tickets</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <span className="text-gray-800 dark:text-white">Create New Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <span className="text-gray-800 dark:text-white">Generate Report</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <span className="text-gray-800 dark:text-white">Add New User</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A1 1 0 015.76 11h8.48a1 1 0 01.757.094l.25 1a3 3 0 012.864 3M15 19v1a2 2 0 01-2 2h-7a2 2 0 01-2-2v-1" />
                </svg>
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <span className="text-gray-800 dark:text-white">View Analytics</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 013 3h2a3 3 0 013-3 3 3 0 003 3v9a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h6v9H7V6zm3-3v1m-3 0v1m-2-1v1m-2-1v1m-1-1v1m-2-1v1m-2-1v1m1 4v2m7 0v2m-12 0v2m-12 0v2m-12 0v2m0 0v2m0 0v2m0 0v2m0 0v1m12 0v1m8 0v2m0 0v2m0 0v2m0 0v1m0 0v1m0 0v2m0 0v1m0 0v1m0 0v1m0 0v1m-12 0v1m-12 0v1m-12 0v1m-12 0v2m0 0v1m8 0v1m8 0v2m8 0v2m8 0v2m0 0v1m0 0v1m0 0v1m0 0v1m0 0v1m-12 0v1m-8 0v1m-8 0v2m-8 0v2m-4 0V7a2 2 0 012-2 1 1 0 001 1v1zm3 4V7a1 1 0 00-1-1 4 4 0 018 0v3a1 1 0 001 1v5a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm3 7h6v3a2 2 0 01-2 2h-2a2 2 0 01-2-2V18zm-3 0H6v-3a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          {/* Analytics Chart */}
          <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Monthly Analytics</h2>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}