
import { ArrowRight, Building2, GraduationCap, TrendingUp, Users, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-900">Jaydeep Barai</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#experience" className="text-slate-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Jaydeep Barai
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4">
              RERA Certified Real Estate Investment Advisor
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Transforming Dubai's real estate landscape with tech-driven insights and 4+ years of expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <a href="#contact" className="flex items-center">
                  Get Investment Advice <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <a href="#about">Learn More About Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
              <p className="text-lg text-slate-600 mb-6">
                With a unique blend of technology expertise and real estate acumen, I bring a fresh perspective to Dubai's dynamic property market. My journey from IT professional to RERA certified Real Estate Investment Advisor has equipped me with analytical skills that help clients make data-driven investment decisions.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Having worked as a Web Developer and Digital Marketing specialist for 4-5 years, I understand the power of technology in real estate. For the past 4 years, I've been helping investors navigate Dubai's lucrative property market, combining my technical background with deep market knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-sm text-slate-600">Years in Dubai Real Estate</div>
                </div>
                <div className="text-center p-4 bg-gold-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">RERA</div>
                  <div className="text-sm text-slate-600">Certified Advisor</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-slate-50">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Education</h3>
                      <p className="text-slate-600">Bachelor's in Information Technology</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Building2 className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Specialization</h3>
                      <p className="text-slate-600">Dubai Real Estate Investment</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Experience</h3>
                      <p className="text-slate-600">8+ Years Combined Tech & Real Estate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive real estate investment solutions tailored for the Dubai market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center space-y-4">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-900">Investment Consultation</h3>
                <p className="text-slate-600">Expert guidance on Dubai property investments with market analysis and ROI projections</p>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center space-y-4">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-900">Market Analysis</h3>
                <p className="text-slate-600">Data-driven insights and trends analysis for informed investment decisions</p>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center space-y-4">
                <Users className="h-12 w-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold text-slate-900">Client Advisory</h3>
                <p className="text-slate-600">Personalized real estate strategies aligned with your financial goals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <p className="text-xl text-slate-600">From technology to real estate excellence</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6 animate-fade-in">
                <div className="bg-blue-600 text-white rounded-full p-3 mt-1">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">Real Estate Investment Advisor</h3>
                  <p className="text-blue-600 font-medium">2020 - Present (4+ Years)</p>
                  <p className="text-slate-600 mt-2">RERA certified advisor specializing in Dubai property investments, helping clients achieve optimal returns through strategic market positioning and data-driven insights.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 animate-fade-in">
                <div className="bg-slate-600 text-white rounded-full p-3 mt-1">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">Web Developer & Digital Marketing Specialist</h3>
                  <p className="text-slate-600 font-medium">2015 - 2020 (4-5 Years)</p>
                  <p className="text-slate-600 mt-2">Developed web solutions and digital marketing strategies, building the technical foundation that now enhances my real estate advisory services.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 animate-fade-in">
                <div className="bg-amber-600 text-white rounded-full p-3 mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">Bachelor's in Information Technology</h3>
                  <p className="text-slate-600 font-medium">Academic Foundation</p>
                  <p className="text-slate-600 mt-2">Strong technical education providing analytical skills and problem-solving abilities that translate perfectly to real estate market analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Ready to explore Dubai's real estate opportunities? Let's discuss your investment goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-blue-200">Available on request</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-blue-200">Available on request</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Linkedin className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jaydeepbarai/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-5 w-5 text-blue-400" />
            <span>Dubai, UAE</span>
          </div>
          <p className="text-slate-400">
            © 2024 Jaydeep Barai. RERA Certified Real Estate Investment Advisor.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
