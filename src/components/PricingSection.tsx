import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$149",
      period: "per property/month",
      description: "Perfect for getting started with AI-powered leasing",
      features: [
        "Up to 5 properties",
        "Basic tenant scoring",
        "Channel ROI analytics", 
        "Email support",
        "Monthly reports"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$89",
      period: "per property/month",
      description: "Advanced features for growing portfolios",
      features: [
        "Up to 50 properties",
        "Advanced AI scoring",
        "Automated ad optimization",
        "Retention insights",
        "Priority support",
        "Real-time dashboard",
        "Custom integrations"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "Full-scale solution for large portfolios",
      features: [
        "Unlimited properties",
        "Custom AI models",
        "Dedicated account manager",
        "API access",
        "Advanced analytics",
        "White-label options",
        "SLA guarantee"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple <span className="bg-gradient-hero bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple plans tailored for portfolios of every size. Scale from a single property to thousands of units with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                plan.highlighted 
                  ? 'bg-gradient-hero text-white border-transparent shadow-primary scale-105' 
                  : 'bg-card border-border hover:shadow-card'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <div className={`mb-2 ${plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-lg">/{plan.period.split('/')[1]}</span>}
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.period}
                </p>
                <p className={`text-sm mt-2 ${plan.highlighted ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-trust'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                variant={plan.highlighted ? "secondary" : "hero"}
                className="w-full group"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include 30-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <span>✓ SOC 2 Compliant</span>
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ Data Encryption</span>
            <span>✓ GDPR Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;