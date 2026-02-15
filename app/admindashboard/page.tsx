'use client';

import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  gradient: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  gradient,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg p-4 sm:p-6 hover:scale-[1.02] transition">
      <div
        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-20 ${gradient} blur-3xl`}
      ></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${gradient}`}
          >
            <div className="text-white">{icon}</div>
          </div>

          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs sm:text-sm font-semibold ${
              isPositive
                ? 'bg-emerald-50 text-emerald-600'
                : 'bg-rose-50 text-rose-600'
            }`}
          >
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            {Math.abs(change)}%
          </div>
        </div>

        <h3 className="text-slate-500 text-xs sm:text-sm font-semibold uppercase mb-1">
          {title}
        </h3>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: 12.5, icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />, gradient: 'from-violet-500 to-purple-600' },
    { title: 'Active Users', value: '8,282', change: 8.2, icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, gradient: 'from-cyan-500 to-blue-600' },
    { title: 'Conversion', value: '24.8%', change: -3.4, icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />, gradient: 'from-amber-500 to-orange-600' },
    { title: 'Engagement', value: '92.4%', change: 5.7, icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />, gradient: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Placeholder Revenue Chart */}
      <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg p-6 lg:p-8">
          <h2 className="text-lg sm:text-2xl font-bold mb-4">Revenue Overview</h2>
          <div className="h-40 bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl" />
        </div>

        <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg p-6 lg:p-8">
          <h2 className="text-lg sm:text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-2">
            <p className="text-sm text-slate-500">User A purchased item X</p>
            <p className="text-sm text-slate-500">User B started trial</p>
            <p className="text-sm text-slate-500">User C updated profile</p>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white p-6 shadow-lg">
          <h3 className="text-lg font-bold mb-2">Team Performance</h3>
          <p className="text-sm mb-4">Your team exceeded targets by 23%</p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white p-6 shadow-lg">
          <h3 className="text-lg font-bold mb-2">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {['Export', 'Import', 'Share', 'Archive'].map((action, i) => (
              <button key={i} className="bg-white/10 hover:bg-white/20 rounded-lg p-2 font-semibold">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
