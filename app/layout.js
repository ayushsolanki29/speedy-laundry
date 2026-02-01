'use client';



import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";

import { Toaster } from "@/components/ui/toaster";

import { Toaster as Sonner } from "@/components/ui/sonner";

import "./globals.css";

import { useState } from "react";



export default function RootLayout({ children }) {

  const [queryClient] = useState(() => new QueryClient());



  return (

    <html lang="en">

      <head>

        <title>Speedy Laundry - Professional Laundry Service</title>

        <meta name="description" content="Professional laundry and dry cleaning service with pickup and delivery" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>

      <body>

        <QueryClientProvider client={queryClient}>

          <TooltipProvider>

            <Toaster />

            <Sonner />

            {children}

          </TooltipProvider>

        </QueryClientProvider>

      </body>

    </html>

  );

}

