import React, { useEffect, useState } from 'react';
import { LogOut, Mail, RefreshCw } from 'lucide-react';

type LeadStatus = 'pending' | 'received' | 'completed';
type Lead = { _id: string; createdAt: string; status: LeadStatus; name?: string; fullName?: string; email: string; phone?: string; message?: string; businessName?: string; websiteUrl?: string; primaryGoal?: string };

export const AdminPage: React.FC = () => {
  const [leads, setLeads] = useState<{ auditRequests: Lead[]; contactRequests: Lead[] }>({ auditRequests: [], contactRequests: [] });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const loadLeads = async () => {
    setLoading(true);
    const response = await fetch('/api/admin/leads');
    if (response.status === 401) {
      window.location.href = '/signin';
      return;
    }
    const result = await response.json();
    if (!response.ok) setError(result.error || 'Unable to load leads.');
    else setLeads(result);
    setLoading(false);
  };

  useEffect(() => { void loadLeads(); }, []);

  const signOut = async () => {
    await fetch('/api/auth/signout', { method: 'POST' });
    window.location.href = '/signin';
  };

  const updateStatus = async (lead: Lead, type: 'audit' | 'contact', status: LeadStatus) => {
    const response = await fetch(`/api/admin/leads/${type}/${lead._id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      setError('Unable to update lead status.');
      return;
    }
    setLeads((current) => ({
      ...current,
      [type === 'audit' ? 'auditRequests' : 'contactRequests']: current[type === 'audit' ? 'auditRequests' : 'contactRequests'].map((item) => item._id === lead._id ? { ...item, status } : item),
    }));
  };

  const renderLead = (lead: Lead, isAudit: boolean) => (
    <article key={lead._id} className="border-b border-[#D9E2EC] dark:border-[#1E3A8A] py-5 last:border-0">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-[#0A2540] dark:text-white">{lead.fullName || lead.name}</h3>
          <p className="text-sm text-[#1E40AF] dark:text-[#E5C882]">{lead.email}</p>
        </div>
        <time className="text-xs text-[#627D98] dark:text-slate-400">{new Date(lead.createdAt).toLocaleString()}</time>
      </div>
      <p className="mt-3 text-sm text-[#334E68] dark:text-slate-300">{lead.message || 'No message provided.'}</p>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#627D98] dark:text-slate-400">
        {isAudit && <><span>Business: {lead.businessName}</span><span>Website: {lead.websiteUrl}</span><span>Goal: {lead.primaryGoal}</span></>}
        {lead.phone && <span>Phone: {lead.phone}</span>}
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="text-xs font-bold text-[#0A2540] dark:text-white">Status</span>
        <select
          value={lead.status}
          onChange={(event) => void updateStatus(lead, isAudit ? 'audit' : 'contact', event.target.value as LeadStatus)}
          className="rounded-lg border border-[#D9E2EC] dark:border-[#1E3A8A] bg-white dark:bg-[#07172C] px-2.5 py-1.5 text-xs font-semibold text-[#0A2540] dark:text-white focus:outline-none focus:border-[#D4AF37]"
          aria-label={`Status for ${lead.fullName || lead.name}`}
        >
          <option value="pending">Pending</option>
          <option value="received">Received</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </article>
  );

  return (
    <main className="flex-1 bg-[#FAF6EB]/50 dark:bg-[#07172C] px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div><p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Admin authority</p><h1 className="mt-1 text-3xl font-extrabold text-[#0A2540] dark:text-white">Lead inbox</h1><p className="mt-1 text-sm text-[#627D98] dark:text-slate-400">Saved audit requests and contact messages from MongoDB.</p></div>
          <div className="flex gap-2"><button onClick={() => void loadLeads()} className="p-2.5 rounded-xl border border-[#D9E2EC] dark:border-[#1E3A8A] text-[#0A2540] dark:text-white cursor-pointer" title="Refresh leads" aria-label="Refresh leads"><RefreshCw className="w-4 h-4" /></button><button onClick={() => void signOut()} className="p-2.5 rounded-xl bg-[#0A2540] text-white cursor-pointer" title="Sign out" aria-label="Sign out"><LogOut className="w-4 h-4" /></button></div>
        </div>
        {loading && <p className="text-sm text-[#627D98]">Loading leads...</p>}
        {error && <p role="alert" className="text-sm font-semibold text-red-600">{error}</p>}
        {!loading && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><section className="bg-white dark:bg-[#0E2F54] border border-[#D9E2EC] dark:border-[#1E3A8A] rounded-2xl p-5"><h2 className="flex items-center gap-2 text-lg font-extrabold text-[#0A2540] dark:text-white"><Mail className="w-5 h-5 text-[#D4AF37]" /> Contact messages <span className="text-xs font-bold text-[#627D98]">({leads.contactRequests.length})</span></h2>{leads.contactRequests.length ? leads.contactRequests.map((lead) => renderLead(lead, false)) : <p className="py-8 text-sm text-[#627D98]">No contact messages yet.</p>}</section><section className="bg-white dark:bg-[#0E2F54] border border-[#D9E2EC] dark:border-[#1E3A8A] rounded-2xl p-5"><h2 className="text-lg font-extrabold text-[#0A2540] dark:text-white">SEO audit requests <span className="text-xs font-bold text-[#627D98]">({leads.auditRequests.length})</span></h2>{leads.auditRequests.length ? leads.auditRequests.map((lead) => renderLead(lead, true)) : <p className="py-8 text-sm text-[#627D98]">No audit requests yet.</p>}</section></div>}
      </div>
    </main>
  );
};
