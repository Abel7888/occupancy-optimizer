import { Building, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">TenantAI</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              AI-powered tenant acquisition and retention platform for modern property management.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Mail className="w-4 h-4" />
                <span>hello@tenantai.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Phone className="w-4 h-4" />
                <span>1-800-TENANT</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#for-owners" className="hover:text-white transition-colors">Property Owners</a></li>
              <li><a href="#for-investors" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#property-managers" className="hover:text-white transition-colors">Property Managers</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © 2024 TenantAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;