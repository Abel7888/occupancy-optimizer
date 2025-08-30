import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Smarter Leasing Decisions.
            </span>
            <br />
            <span className="text-foreground">
              Stronger Tenant Retention.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Unlock the power of AI-driven leasing insights. Our Smart Tenant Acquisition & Retention API integrates seamlessly with your CRM, marketing platforms, and ad networks to predict which channels deliver your highest-value tenants — while automatically optimizing ad spend and recommending retention strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button asChild size="lg" variant="hero" className="group">
              <a href="/dashboard">
                Sign In to Dashboard
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="secondary-outline" className="group">
              <Play className="mr-2 h-5 w-5" />
              Request a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-muted-foreground">Trusted by 500+ Property Managers</div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="text-sm text-muted-foreground">$2M+ Ad Spend Optimized</div>
            <div className="text-sm text-muted-foreground">•</div>
            <div className="text-sm text-muted-foreground">98% Tenant Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;