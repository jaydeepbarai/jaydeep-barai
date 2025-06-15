import { ArrowRight, Building2, GraduationCap, TrendingUp, Users, Mail, Phone, MapPin, Linkedin, Award, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-navy-900">Jaydeep Barai</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-navy-800 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-600 hover:text-navy-800 transition-colors font-medium">Services</a>
              <a href="#experience" className="text-gray-600 hover:text-navy-800 transition-colors font-medium">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-navy-800 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-4">
                Jaydeep Barai
              </h1>
              <p className="text-xl md:text-2xl text-navy-700 mb-4 font-semibold">
                RERA Certified Real Estate Investment Advisor
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Transforming Dubai's real estate landscape with tech-driven insights and 4+ years of market expertise. Your trusted partner for strategic property investments.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-navy-600" />
                  <span className="text-sm font-medium text-gray-700">RERA Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-navy-600" />
                  <span className="text-sm font-medium text-gray-700">4+ Years Experience</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-3">
                  <a href="#contact" className="flex items-center">
                    Get Investment Advice <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 border-navy-200 text-navy-800 hover:bg-navy-50">
                  <a href="#about">Learn More About Me</a>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-navy-200 rounded-2xl transform rotate-3"></div>
                <Avatar className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-2xl">
                  <AvatarImage 
                    src="/lovable-uploads/437392be-d6db-4561-a020-350c3214811a.png" 
                    alt="Jaydeep Barai - RERA Certified Real Estate Investment Advisor"
                    className="object-cover rounded-2xl"
                  />
                  <AvatarFallback className="text-4xl bg-navy-100 text-navy-800 rounded-2xl">JB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging technology and real estate expertise to deliver exceptional investment opportunities in Dubai's dynamic market
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a unique blend of technology expertise and real estate acumen, I bring a fresh perspective to Dubai's dynamic property market. My journey from IT professional to RERA certified Real Estate Investment Advisor has equipped me with analytical skills that help clients make data-driven investment decisions.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Having worked as a Web Developer and Digital Marketing specialist for 4-5 years, I understand the power of technology in real estate. For the past 4 years, I've been helping investors navigate Dubai's lucrative property market, combining my technical background with deep market knowledge.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a UAE Golden Visa Holder, I have deep roots in the Emirates and a comprehensive understanding of the local market dynamics that benefit my international and local clients.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-navy-800">4+</div>
                  <div className="text-sm text-gray-600 font-medium">Years in Dubai Real Estate</div>
                </div>
                <div className="text-center p-6 bg-navy-50 rounded-xl border border-navy-100">
                  <div className="text-3xl font-bold text-navy-800">RERA</div>
                  <div className="text-sm text-gray-600 font-medium">Certified Advisor</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-navy-800">8+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Combined Experience</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="p-8 bg-gradient-to-br from-navy-50 to-gray-50 border-navy-100">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">Education</h3>
                      <p className="text-gray-600">Bachelor's in Information Technology</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Building2 className="h-6 w-6 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">Specialization</h3>
                      <p className="text-gray-600">Dubai Real Estate Investment & Advisory</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-lg">Expertise</h3>
                      <p className="text-gray-600">Tech-Driven Market Analysis & ROI Optimization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">My Services</h2>
            <div className="w-24 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate investment solutions tailored for the Dubai market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border-gray-100 hover:border-navy-200">
              <CardContent className="text-center space-y-6">
                <div className="bg-navy-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">Investment Consultation</h3>
                <p className="text-gray-600 leading-relaxed">Expert guidance on Dubai property investments with comprehensive market analysis and detailed ROI projections</p>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border-gray-100 hover:border-navy-200">
              <CardContent className="text-center space-y-6">
                <div className="bg-navy-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">Market Analysis</h3>
                <p className="text-gray-600 leading-relaxed">Data-driven insights and comprehensive trends analysis for informed investment decisions in Dubai's market</p>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border-gray-100 hover:border-navy-200">
              <CardContent className="text-center space-y-6">
                <div className="bg-navy-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">Client Advisory</h3>
                <p className="text-gray-600 leading-relaxed">Personalized real estate strategies perfectly aligned with your financial goals and investment timeline</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Professional Journey</h2>
            <div className="w-24 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">From technology excellence to real estate mastery</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-6 animate-fade-in">
                <div className="bg-navy-800 text-white rounded-full p-4 mt-1 shadow-lg">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2">Real Estate Investment Advisor</h3>
                  <p className="text-navy-600 font-semibold mb-3">2020 - Present (4+ Years)</p>
                  <p className="text-gray-700 leading-relaxed">RERA certified advisor specializing in Dubai property investments, helping clients achieve optimal returns through strategic market positioning and data-driven insights. Successfully guided numerous investors through Dubai's dynamic real estate landscape.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 animate-fade-in">
                <div className="bg-navy-600 text-white rounded-full p-4 mt-1 shadow-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2">Web Developer & Digital Marketing Specialist</h3>
                  <p className="text-navy-600 font-semibold mb-3">2015 - 2020 (4-5 Years)</p>
                  <p className="text-gray-700 leading-relaxed">Developed innovative web solutions and executed comprehensive digital marketing strategies, building the technical foundation that now enhances my real estate advisory services with cutting-edge analytical capabilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 animate-fade-in">
                <div className="bg-navy-700 text-white rounded-full p-4 mt-1 shadow-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2">Bachelor's in Information Technology</h3>
                  <p className="text-navy-600 font-semibold mb-3">Academic Foundation</p>
                  <p className="text-gray-700 leading-relaxed">Strong technical education providing advanced analytical skills and problem-solving abilities that translate perfectly to real estate market analysis and investment strategy development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-navy-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to explore Dubai's real estate opportunities? Let's discuss your investment goals and create a winning strategy together.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-white border-gray-100 hover:border-navy-200 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <Mail className="h-10 w-10 text-navy-700 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-lg text-navy-900">Email</h3>
                <a href="mailto:baraijaydeep13@gmail.com" className="text-gray-600 hover:text-navy-800 transition-colors">
                  baraijaydeep13@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 hover:border-navy-200 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <Phone className="h-10 w-10 text-navy-700 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-lg text-navy-900">Phone</h3>
                <a href="tel:+971586936812" className="text-gray-600 hover:text-navy-800 transition-colors">
                  +971 58 693 6812
                </a>
              </CardContent>
            </Card>
            <Card className="bg-white border-gray-100 hover:border-navy-200 hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <Linkedin className="h-10 w-10 text-navy-700 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-lg text-navy-900">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jaydeepbarai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-navy-800 transition-colors">
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>
          <div>
            <Button size="lg" className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-3 font-semibold">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-navy-950 text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            © 2025 Jaydeep Barai
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
