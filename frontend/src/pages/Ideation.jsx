import React, { useState } from 'react';
import { simulateAI } from "@/lib/ai-simulator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge"; // Need to create Badge if missing, or use span
import { Loader2, Plus } from "lucide-react";

export default function Ideation() {
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [formData, setFormData] = useState({
        industry: '',
        audience: '',
        goal: ''
    });

    const handleGenerate = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = await simulateAI('ideation', formData);
        setResults(data);
        setLoading(false);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Content Ideation</h1>
                <p className="text-muted-foreground">
                    Stuck on what to write? Let our AI suggest trending and engaging topics for your niche.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                {/* Input Form */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Topic Parameters</CardTitle>
                        <CardDescription>Define your target context.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleGenerate} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="industry">Industry / Niche</Label>
                                <Input
                                    id="industry"
                                    placeholder="e.g. Fitness, SaaS, Cooking"
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="audience">Target Audience</Label>
                                <Input
                                    id="audience"
                                    placeholder="e.g. Beginners, CEOs, Parents"
                                    value={formData.audience}
                                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="goal">Content Goal</Label>
                                <Input
                                    id="goal"
                                    placeholder="e.g. Engagement, Sales, Education"
                                    value={formData.goal}
                                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Generate Ideas"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Results Area */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Generated Topics</h2>
                        {results && <span className="text-sm text-muted-foreground">{results.length} results found</span>}
                    </div>

                    {loading && (
                        <div className="space-y-3">
                            <Skeleton className="h-[100px] w-full rounded-xl" />
                            <Skeleton className="h-[100px] w-full rounded-xl" />
                            <Skeleton className="h-[100px] w-full rounded-xl" />
                        </div>
                    )}

                    {!loading && !results && (
                        <div className="flex h-[300px] items-center justify-center rounded-xl border border-dashed bg-muted/30">
                            <p className="text-muted-foreground">Enter parameters to generate ideas.</p>
                        </div>
                    )}

                    {!loading && results && (
                        <div className="grid gap-4">
                            {results.map((item) => (
                                <Card key={item.id} className="group transition-all hover:bg-muted/50 hover:shadow-md cursor-pointer border-l-4 hover:border-l-primary">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg flex justify-between items-start">
                                            {item.title}
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Button size="icon" variant="ghost" className="h-6 w-6"><Plus className="h-4 w-4" /></Button>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                        <div className="flex gap-2">
                                            <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                                                Score: {item.score}%
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
