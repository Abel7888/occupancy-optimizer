import { ArrowRight, BarChart, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Ready to see how AI transforms
            <br />
            tenant acquisition and retention?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Join hundreds of property managers and investors who have already transformed 
            their leasing process with AI-powered insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Button asChild size="lg" variant="secondary" className="group text-lg px-8 py-4">
              <a href="/dashboard">
                Sign In to Dashboard
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              className="group text-lg px-8 py-4 bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
            >
              Request a Demo
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">340%</div>
              <div className="text-white/80">Average Marketing ROI</div>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Property Managers</div>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">67%</div>
              <div className="text-white/80">Reduction in Churn</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;