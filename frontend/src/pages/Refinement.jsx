import React, { useState } from 'react';
import { simulateAI } from "@/lib/ai-simulator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2, ArrowRight } from "lucide-react";

export default function Refinement() {
    const [loading, setLoading] = useState(false);
    const [originalText, setOriginalText] = useState('');
    const [instruction, setInstruction] = useState('');
    const [refinedText, setRefinedText] = useState('');

    const handleRefine = async (e) => {
        e.preventDefault();
        if (!originalText) return;
        setLoading(true);
        const data = await simulateAI('refinement', { content: originalText, instruction });
        setRefinedText(data);
        setLoading(false);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Smart Refinement</h1>
                <p className="text-muted-foreground">
                    Polish your content, adjust the tone, or fix grammar instantly.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Input */}
                <Card className="flex flex-col h-full">
                    <CardHeader>
                        <CardTitle>Original Content</CardTitle>
                        <CardDescription>Paste your draft below.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col gap-4">
                        <Textarea
                            placeholder="Paste your text here..."
                            className="flex-1 min-h-[300px] resize-none"
                            value={originalText}
                            onChange={(e) => setOriginalText(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <Textarea
                                placeholder="Refinement instructions (e.g. 'Make it punchier', 'Fix grammar')..."
                                className="h-[80px] resize-none"
                                value={instruction}
                                onChange={(e) => setInstruction(e.target.value)}
                            />
                        </div>
                        <Button onClick={handleRefine} disabled={loading || !originalText}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Refine Content"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Output */}
                <Card className="flex flex-col h-full border-primary/20 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-primary">Polished Version</CardTitle>
                        <CardDescription>Your improved content appears here.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        {loading && (
                            <div className="space-y-4 pt-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4" />
                                <div className="py-4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        )}

                        {!loading && !refinedText && (
                            <div className="h-full flex flex-col items-center justify-center text-muted-foreground opacity-50">
                                <ArrowRight className="h-12 w-12 mb-4" />
                                <p>Ready to polish</p>
                            </div>
                        )}

                        {!loading && refinedText && (
                            <div className="prose prose-slate dark:prose-invert max-w-none whitespace-pre-line leading-relaxed">
                                {refinedText}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
