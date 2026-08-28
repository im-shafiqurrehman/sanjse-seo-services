import React, { useState } from 'react';
import { ArrowRight, Mail, User } from 'lucide-react';
import { apiUrl } from '../lib/api';

interface AuthPageProps {
  mode: 'signin' | 'signup';
}

export const AuthPage: React.FC<AuthPageProps> = ({ mode }) => {
  const isSignup = mode === 'signup';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (isSignup && name.trim().length < 2) {
      setError('Please enter your name.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(apiUrl(`/api/auth/${isSignup ? 'signup' : 'signin'}`), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include',
      });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.error || 'Authentication failed.');
      window.location.href = isSignup && result.user.role === 'admin' ? '/admin' : '/';
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Authentication failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20 bg-[#FAF6EB]/50 dark:bg-[#07172C]">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-[#0E2F54] border border-[#E5C882] dark:border-[#1E3A8A] rounded-2xl p-6 sm:p-8 shadow-xl">
        <h1 className="text-2xl font-extrabold text-[#0A2540] dark:text-white">{isSignup ? 'Create your account' : 'Sign in'}</h1>
        <p className="mt-2 text-sm text-[#627D98] dark:text-slate-400">{isSignup ? 'Create an account to access your Sanjose workspace.' : 'Sign in to continue to your Sanjose workspace.'}</p>

        {isSignup && (
          <label className="block mt-6 text-xs font-bold text-[#0A2540] dark:text-white">
            Full name
            <span className="relative block mt-1.5">
              <User className="absolute left-3 top-3 w-4 h-4 text-[#627D98]" />
              <input required value={name} onChange={(event) => setName(event.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#D9E2EC] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white focus:outline-none focus:border-[#D4AF37]" />
            </span>
          </label>
        )}

        <label className="block mt-4 text-xs font-bold text-[#0A2540] dark:text-white">
          Email address
          <span className="relative block mt-1.5">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-[#627D98]" />
            <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#D9E2EC] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white focus:outline-none focus:border-[#D4AF37]" />
          </span>
        </label>

        <label className="block mt-4 text-xs font-bold text-[#0A2540] dark:text-white">
          Password
          <input required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full mt-1.5 px-3 py-2.5 rounded-xl border border-[#D9E2EC] dark:border-[#1E3A8A] bg-[#FAF6EB]/50 dark:bg-[#07172C] text-sm text-[#0A2540] dark:text-white focus:outline-none focus:border-[#D4AF37]" />
        </label>

        {error && <p role="alert" className="mt-4 text-xs font-semibold text-red-600 dark:text-red-300">{error}</p>}
        <button disabled={isSubmitting} className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0A2540] via-[#1E40AF] to-[#0A2540] hover:from-[#1E40AF] hover:to-[#2563EB] disabled:opacity-60 text-white font-bold shadow-[0_8px_25px_rgba(10,37,64,0.25)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#D4AF37]/50">
          <span>{isSubmitting ? 'Please wait...' : isSignup ? 'Create account' : 'Sign in'}</span>
          <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
        </button>
        <p className="mt-5 text-center text-xs text-[#627D98] dark:text-slate-400">
          {isSignup ? 'Already have an account?' : 'Need an account?'}{' '}
          <a href={isSignup ? '/signin' : '/signup'} className="font-bold text-[#1E40AF] dark:text-[#E5C882] hover:underline">{isSignup ? 'Sign in' : 'Create one'}</a>
        </p>
      </form>
    </main>
  );
};
