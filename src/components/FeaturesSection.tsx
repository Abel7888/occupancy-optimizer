import { Target, BarChart3, Zap, Heart, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Predictive Tenant Scoring",
      description: "Focus on leads with the highest lifetime value using advanced ML algorithms.",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: BarChart3,
      title: "Channel ROI Analytics",
      description: "See which campaigns drive your best tenants with real-time performance insights.",
      gradient: "from-secondary to-secondary-dark"
    },
    {
      icon: Zap,
      title: "Automated Ad Optimization",
      description: "Save budget by reallocating spend in real-time based on performance data.",
      gradient: "from-accent to-accent-dark"
    },
    {
      icon: Heart,
      title: "Retention Insights",
      description: "Incentive suggestions to keep great tenants longer and reduce churn.",
      gradient: "from-trust to-primary"
    },
    {
      icon: Shield,
      title: "Secure Integration",
      description: "Works seamlessly with leading CRMs and property management tools.",
      gradient: "from-secondary to-accent"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="bg-gradient-hero bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to optimize tenant acquisition and maximize retention
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with Gradient Background */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-hero text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to see these features in action?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join hundreds of property managers who have already transformed their leasing process with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;