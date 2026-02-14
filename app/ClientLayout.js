'use client';

import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SettingsProvider } from "@/context/SettingsContext";

export default function ClientLayout({ children }) {
    const [queryClient] = useState(() => new QueryClient());

    useEffect(() => {
        const trackVisit = async () => {
            // Only track if not tracked in this session to avoid extra requests
            if (sessionStorage.getItem('visit_tracked')) return;

            try {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/track-visit.php`, {
                    method: 'POST'
                });
                sessionStorage.setItem('visit_tracked', 'true');
            } catch (error) {
                console.error('Tracking error:', error);
            }
        };

        trackVisit();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <SettingsProvider>
                <TooltipProvider>
                    <Toaster richColors />
                    <Sonner richColors />
                    {children}
                </TooltipProvider>
            </SettingsProvider>
        </QueryClientProvider>
    );
}
