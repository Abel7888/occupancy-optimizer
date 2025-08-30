import { Building, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForOwnersSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize Occupancy",
      description: "Intelligent tenant scoring helps you fill vacancies faster with quality tenants."
    },
    {
      icon: DollarSign,
      title: "Reduce Marketing Waste",
      description: "Stop spending on channels that don't deliver. Focus budget where it works."
    },
    {
      icon: Clock,
      title: "Longer Tenancies",
      description: "Retention insights help you keep great tenants for years, not months."
    },
    {
      icon: Building,
      title: "Scale Your Portfolio",
      description: "Proven strategies that work across single properties to thousands of units."
    }
  ];

  return (
    <section id="for-owners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              For <span className="bg-gradient-feature bg-clip-text text-transparent">Property Owners</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Maximize occupancy, reduce marketing waste, and lease to tenants who stay longer. 
              Spend less time guessing and more time scaling your portfolio.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl p-8 shadow-card">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Portfolio Performance</span>
                  <span className="text-sm font-medium text-trust">+24% this month</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Occupancy Rate</span>
                    <span className="font-semibold">98.2%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-feature h-2 rounded-full" style={{ width: '98.2%' }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Lease Duration</span>
                    <span className="font-semibold">18 months</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-cta h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Marketing ROI</span>
                    <span className="font-semibold">340%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-hero h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-card p-4 border border-border">
                <div className="text-xs text-muted-foreground">Savings</div>
                <div className="text-lg font-bold text-trust">$47,300</div>
                <div className="text-xs text-muted-foreground">this quarter</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForOwnersSection;