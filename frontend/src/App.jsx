import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ButtonDemo } from "@/components/button-demo";
import { CardDemo } from "@/components/card-demo";
import Oneko from "@/components/Oneko";
import SplineScene from "@/components/SplineScene";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
    const contentRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Simple GSAP animation for hero content
        gsap.from(".hero-content", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <>
            <Oneko />
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="relative overflow-hidden bg-background/50">

                    {/* Spline Background */}
                    <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                        <SplineScene scene="https://prod.spline.design/lXVxDRNfwtl8aAxo/scene.splinecode" className="w-full h-full" />
                    </div>

                    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background/60 backdrop-blur-md px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mr-2 h-4" />
                            <div className="font-semibold text-foreground tracking-tight">Content Genie</div>
                        </div>
                    </header>

                    <div className="relative z-10 flex flex-1 flex-col gap-4 p-4 md:p-10 max-w-7xl mx-auto w-full">

                        {/* Hero Section */}
                        <section className="min-h-[60vh] flex flex-col justify-center hero-content">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        Now in Beta
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
                                        AI-Based Content Creation
                                    </h1>
                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-[600px]">
                                        Creating high-quality digital content consistently is a major challenge.
                                        Content Genie helps you generate, refine, and optimize content across multiple formats.
                                    </p>
                                    <ButtonDemo />
                                </div>
                                <div className="flex justify-center md:justify-end">
                                    <CardDemo />
                                </div>
                            </div>
                        </section>

                        {/* Features / Showcase */}
                        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                            <div className="aspect-video rounded-xl bg-muted/50 border flex items-center justify-center p-6">
                                <div className="text-center space-y-2">
                                    <h3 className="font-semibold text-lg">Ideation</h3>
                                    <p className="text-sm text-muted-foreground">Automated topic suggestions and drafting.</p>
                                    <Skeleton className="h-4 w-[100px] mx-auto mt-4" />
                                </div>
                            </div>
                            <div className="aspect-video rounded-xl bg-muted/50 border flex items-center justify-center p-6">
                                <div className="text-center space-y-2">
                                    <h3 className="font-semibold text-lg">Optimization</h3>
                                    <p className="text-sm text-muted-foreground">Content quality improvement and SEO.</p>
                                    <Skeleton className="h-4 w-[100px] mx-auto mt-4" />
                                </div>
                            </div>
                            <div className="aspect-video rounded-xl bg-muted/50 border flex items-center justify-center p-6">
                                <div className="text-center space-y-2">
                                    <h3 className="font-semibold text-lg">Multi-Format</h3>
                                    <p className="text-sm text-muted-foreground">Support for blogs, social, and more.</p>
                                    <Skeleton className="h-4 w-[100px] mx-auto mt-4" />
                                </div>
                            </div>
                        </div>

                        {/* Accordion FAQ */}
                        <div className="max-w-2xl w-full mx-auto my-12 bg-card/40 backdrop-blur-sm p-8 rounded-2xl border">
                            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is Content Genie?</AccordionTrigger>
                                    <AccordionContent>
                                        Content Genie is an AI-powered assistant that helps creators generate and optimize digital content efficiently.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Who is it for?</AccordionTrigger>
                                    <AccordionContent>
                                        It is designed for content creators, marketing teams, small businesses, and educational organizations.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is it free?</AccordionTrigger>
                                    <AccordionContent>
                                        We offer a free tier for hackathon judges and a premium tier for power users.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Toggle Demo */}
                        <div className="flex items-center justify-center gap-4 py-8">
                            <span className="text-sm font-medium">Reduced Motion</span>
                            <Toggle aria-label="Toggle italic">
                                <span className="font-bold">On</span>
                            </Toggle>
                        </div>

                        <div className="min-h-[20vh] rounded-xl bg-transparent" />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}

export default App
