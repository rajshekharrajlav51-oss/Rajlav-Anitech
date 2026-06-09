import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-white mb-4">
          Page Not Found
        </p>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Back to Home
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
