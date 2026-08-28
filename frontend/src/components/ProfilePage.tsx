import React, { useEffect, useState } from 'react';
import { LogOut, Mail, ShieldCheck, UserRound } from 'lucide-react';
import { apiUrl } from '../lib/api';

type Profile = { name: string; email: string; role: string };

export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl('/api/auth/me'), { credentials: 'include' })
      .then((response) => response.json())
      .then((result) => {
        if (!result.authenticated) {
          window.location.href = '/signin';
          return;
        }
        setProfile(result.user);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = '/signin';
      });
  }, []);

  const signOut = async () => {
    await fetch(apiUrl('/api/auth/signout'), { method: 'POST', credentials: 'include' });
    window.location.href = '/signin';
  };

  if (loading) return <main className="flex-1 flex items-center justify-center py-24 text-sm text-[#627D98]">Loading profile...</main>;
  if (!profile) return null;

  return (
    <main className="flex-1 bg-[#FAF6EB]/50 dark:bg-[#07172C] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Account</p>
          <h1 className="mt-1 text-3xl font-extrabold text-[#0A2540] dark:text-white">Your profile</h1>
          <p className="mt-2 text-sm text-[#627D98] dark:text-slate-400">Manage your account details and access.</p>
        </div>
        <section className="bg-white dark:bg-[#0E2F54] border border-[#D9E2EC] dark:border-[#1E3A8A] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4 pb-6 border-b border-[#E2E8F0] dark:border-[#1E3A8A]">
            <div className="w-12 h-12 rounded-full bg-[#0A2540] text-[#D4AF37] flex items-center justify-center"><UserRound className="w-6 h-6" /></div>
            <div><h2 className="text-lg font-bold text-[#0A2540] dark:text-white">{profile.name}</h2><p className="text-sm text-[#627D98] dark:text-slate-400">{profile.role === 'admin' ? 'Administrator' : 'Member'}</p></div>
          </div>
          <div className="space-y-4 py-6 text-sm text-[#334E68] dark:text-slate-300">
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#D4AF37]" /><span>{profile.email}</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /><span>Role: {profile.role}</span></div>
          </div>
          <button onClick={() => void signOut()} className="w-full py-3 rounded-xl bg-[#0A2540] hover:bg-[#1E40AF] text-white font-bold flex items-center justify-center gap-2 cursor-pointer"><LogOut className="w-4 h-4" />Sign out</button>
        </section>
      </div>
    </main>
  );
};
