import { Cable, Brain, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Cable,
      title: "Connect",
      description: "Plug into Yardi, RealPage, Salesforce, HubSpot, Google Ads, LinkedIn, and more.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Analyze", 
      description: "AI models identify which leads are most likely to sign and stay long-term.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Optimize",
      description: "Automatically adjust ad spend, suggest incentives, and reduce CAC while boosting occupancy.",
      color: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-feature bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your tenant acquisition and retention strategy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-feature text-white font-bold text-lg mb-6">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <step.icon className={`w-16 h-16 mx-auto ${step.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Flow Visualization */}
        <div className="mt-16 relative">
          <div className="flex justify-center items-center space-x-8 opacity-40">
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-primary to-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-secondary to-accent"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-accent to-trust"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-trust to-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;