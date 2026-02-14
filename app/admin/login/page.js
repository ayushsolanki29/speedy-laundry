'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.status === 'success') {
                toast.success('Login successful! Redirecting...');
                localStorage.setItem('adminToken', data.data.token);
                localStorage.setItem('adminUser', JSON.stringify(data.data.admin));
                setTimeout(() => router.push('/admin'), 1000);
            } else {
                toast.error(data.message || 'Invalid credentials');
            }
        } catch (error) {
            toast.error('Failed to connect to server. Please try again.');
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans px-4">
            {/* Dark background - hero style */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[400px] relative z-10"
            >
                {/* Glass badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <Lock className="w-4 h-4 text-primary" />
                        <span className="text-white/90 text-sm font-medium">Admin Portal</span>
                    </div>
                </motion.div>

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Speedy<span className="text-primary">Laundry</span>
                    </h1>
                    <p className="text-white/60 text-sm mt-2">Sign in to your account</p>
                </motion.div>

                {/* Glass form card */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onSubmit={handleLogin}
                    className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl"
                >
                    <div className="space-y-5">
                        <div>
                            <label className="block text-xs font-medium text-white/80 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-white/80 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>
                </motion.form>
            </motion.div>

            {/* Developer branding - glass style */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 text-white/50 text-xs relative z-10"
            >
                Designed by{' '}
                <a
                    href="https://ayushsolanki.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors font-medium"
                >
                    Ayush Solanki
                </a>
            </motion.p>
        </div>
    );
}
