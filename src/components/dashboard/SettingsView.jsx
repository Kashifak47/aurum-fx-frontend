import React from 'react';
import { User, Shield, Bell } from 'lucide-react';
import Card from '../common/Card';
const SettingsView = () => (
  <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Account Settings</h2>
      <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">Manage your profile, security preferences and notifications.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Profile Settings */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <User size={18} className="text-[#00B5E2]" />
            <h3 className="text-base font-semibold text-white">Profile Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">First Name</label>
              <input type="text" defaultValue="Investor" className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg px-4 py-2 text-sm focus:border-[#00B5E2] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">Last Name</label>
              <input type="text" defaultValue="Account" className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg px-4 py-2 text-sm focus:border-[#00B5E2] focus:outline-none transition-colors" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">Email Address</label>
              <input type="email" defaultValue="investor@aurumfx.com" className="w-full bg-[#131A2F] border border-[#1E293B] text-[#64748B] rounded-lg px-4 py-2 text-sm cursor-not-allowed" disabled />
              <p className="text-[10px] text-[#64748B] mt-1">Contact support to change your registered email.</p>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-[#1E293B] flex justify-end">
            <button className="bg-[#00B5E2] hover:bg-[#0096cc] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">Save Changes</button>
          </div>
        </Card>

        {/* Security Settings */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-[#10B981]" />
            <h3 className="text-base font-semibold text-white">Security & Authentication</h3>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between p-4 rounded-lg bg-[#131A2F] border border-[#1E293B]">
              <div>
                <p className="text-sm font-medium text-white">Two-Factor Authentication (2FA)</p>
                <p className="text-xs text-[#94A3B8] mt-0.5">Secure your account with an authenticator app.</p>
              </div>
              <button className="bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 hover:bg-[#10B981]/20 px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors">Enable 2FA</button>
            </div>
            
            <div className="pt-2">
              <p className="text-sm font-medium text-white mb-3">Change Password</p>
              <div className="grid grid-cols-1 gap-4">
                <input type="password" placeholder="Current Password" className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg px-4 py-2 text-sm focus:border-[#00B5E2] focus:outline-none transition-colors" />
                <input type="password" placeholder="New Password" className="w-full bg-[#131A2F] border border-[#1E293B] text-white rounded-lg px-4 py-2 text-sm focus:border-[#00B5E2] focus:outline-none transition-colors" />
                <button className="bg-[#131A2F] border border-[#1E293B] hover:bg-[#1E293B] text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors justify-self-start">Update Password</button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Side Panel: Account Info & Notifications */}
      <div className="space-y-6">
        <Card>
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#131A2F] border-2 border-[#00B5E2] flex items-center justify-center text-[#94A3B8] mb-3">
              <User size={28} />
            </div>
            <h3 className="text-lg font-bold text-white">Prime Allocation</h3>
            <span className="inline-block bg-[#052E2B] border border-[#064E3B] text-[#10B981] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mt-1">Active Status</span>
          </div>
          <div className="space-y-3 pt-4 border-t border-[#1E293B]">
            <div className="flex justify-between text-xs">
              <span className="text-[#94A3B8]">Account ID</span>
              <span className="text-white font-mono">AFX-8921-X</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#94A3B8]">Performance Fee</span>
              <span className="text-white font-mono">20% HWM</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#94A3B8]">Max Drawdown</span>
              <span className="text-white font-mono">5.0% Limit</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Bell size={18} className="text-[#F59E0B]" />
            <h3 className="text-base font-semibold text-white">Notifications</h3>
          </div>
          <div className="space-y-3">
            {[
              { id: 'n1', label: 'Trade Executions', desc: 'Receive alerts when positions open or close.' },
              { id: 'n2', label: 'Daily NAV Reports', desc: 'Get a daily summary of your portfolio value.' },
              { id: 'n3', label: 'Deposit/Withdrawal', desc: 'Alerts for fund transfers.' },
              { id: 'n4', label: 'Risk/Margin Alerts', desc: 'Critical alerts near drawdown limits.', locked: true }
            ].map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id={item.id} 
                  defaultChecked={!item.locked} 
                  disabled={item.locked}
                  className="mt-1 w-4 h-4 rounded border-[#1E293B] bg-[#131A2F] checked:bg-[#00B5E2] checked:border-[#00B5E2] focus:ring-[#00B5E2] focus:ring-offset-[#0B1221] disabled:opacity-50" 
                />
                <div>
                  <label htmlFor={item.id} className="text-sm font-medium text-[#E2E8F0] cursor-pointer">{item.label}</label>
                  <p className="text-[10px] text-[#64748B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default SettingsView;
