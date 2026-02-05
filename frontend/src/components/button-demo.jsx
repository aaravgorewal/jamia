import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export function ButtonDemo() {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Button variant="default">Primary CTA</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline" size="icon" aria-label="Submit">
                <ArrowUpIcon className="h-4 w-4" />
            </Button>
        </div>
    )
}
