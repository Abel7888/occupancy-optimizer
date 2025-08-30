import { LineChart, Shield, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ForInvestorsSection = () => {
  const investorBenefits = [
    {
      icon: LineChart,
      title: "Predictable Returns",
      stat: "23% higher NOI",
      description: "Data-driven insights lead to more consistent and higher net operating income."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      stat: "67% less churn",
      description: "Reduce tenant turnover with AI-powered retention strategies."
    },
    {
      icon: Target,
      title: "Optimized CAC",
      stat: "45% lower costs",
      description: "Focus marketing spend on channels that deliver quality tenants."
    },
    {
      icon: Users,
      title: "Portfolio Transparency",
      stat: "Real-time insights",
      description: "Complete visibility into leasing performance across all properties."
    }
  ];

  return (
    <section id="for-investors" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            For <span className="bg-gradient-cta bg-clip-text text-transparent">Real Estate Investors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De-risk leasing strategies with measurable insights. Backed by predictive analytics, 
            our solution reduces churn, lowers customer acquisition costs, and increases NOI — 
            providing greater transparency and scalability for real estate investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {investorBenefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Stat */}
              <div className="text-2xl font-bold text-primary mb-2">{benefit.stat}</div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-gradient-subtle rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Calculate Your ROI</h3>
              <p className="text-muted-foreground mb-6">
                See how much you could save and earn with AI-powered tenant insights. 
                Most investors see positive ROI within 90 days.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">Current vacancy rate:</span>
                  <span className="font-semibold">8.5%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm">With TenantAI:</span>
                  <span className="font-semibold text-trust">3.2%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Annual savings:</span>
                  <span className="font-bold text-accent text-lg">$127,000</span>
                </div>
              </div>

              <Button size="lg" variant="hero">
                Get Custom ROI Report
              </Button>
            </div>

            <div className="relative">
              {/* Mock Dashboard */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold">Portfolio Dashboard</span>
                  <span className="text-xs bg-trust text-trust-foreground px-2 py-1 rounded">Live</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Properties</div>
                    <div className="text-xl font-bold">127</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-xs text-muted-foreground">Units</div>
                    <div className="text-xl font-bold">2,847</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Occupancy</span>
                    <span className="font-semibold text-trust">96.8%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg. Lease Term</span>
                    <span className="font-semibold">16.3 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Marketing ROI</span>
                    <span className="font-semibold text-accent">423%</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                +$47K this month
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestorsSection;