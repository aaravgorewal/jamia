import React from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import SplineScene from "@/components/SplineScene";

export default function AppLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="relative overflow-hidden bg-background/50 flex flex-col h-screen">

                {/* Spline Background (Fixed & Lower z-index) */}
                <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                    <SplineScene scene="https://prod.spline.design/lXVxDRNfwtl8aAxo/scene.splinecode" className="w-full h-full" />
                </div>

                <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b bg-background/60 backdrop-blur-md px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="font-semibold text-foreground tracking-tight">Content Genie</div>
                    </div>
                </header>

                {/* Main Content (Scrollable & Higher z-index than background) */}
                <div className="relative z-10 flex-1 overflow-auto p-4 md:p-10 w-full max-w-7xl mx-auto">
                    {children}
                </div>

            </SidebarInset>
        </SidebarProvider>
    );
}
