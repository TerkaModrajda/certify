import Link from 'next/link'
import { FileText, Shield, Zap, ArrowRight, Award, Users, BarChart3, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600/50 to-purple-600/50 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/pixel/logo.svg" alt="CertifyMe" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">CertifyMe</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors duration-200">
                Ceny
              </Link>
              <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors duration-200">
                Přihlásit se
              </Link>
              <Link href="/auth/register?plan=free">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full transition-all duration-200 font-semibold">
                  Začít zdarma
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <span className="text-sm font-medium text-blue-700">✨ Digitální certifikáty nové generace</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Certifikáty snadno
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    a bezpečně
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Cloudová platforma pro hromadnou tvorbu, správu a distribuci certifikátů, 
                  osvědčení a diplomů s QR verifikací. Vytvořte stovky certifikátů během minut.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register?plan=free">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
                    Začít zdarma <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200">
                  Zobrazit demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Zdarma do 10 certifikátů</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Žádné závazky</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>GDPR compliant</span>
                </div>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative">
              {/* Main hero image container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-4">
                {/* Real person photo with animated certificate */}
                <div className="relative flex items-center justify-center min-h-[500px]">
                  {/* Background photo */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img 
                      src="/images/hero-certificate.jpg"
                      alt="Professional person holding certificate"
                      className="w-80 h-96 object-cover rounded-xl shadow-2xl"
                    />
                    
                    {/* Animated certificate overlay */}
                    <div className="absolute top-12 left-8 transform rotate-12 hover:rotate-6 transition-transform duration-500 z-20">
                      <div className="w-40 h-32 bg-white rounded-lg shadow-2xl border-2 border-blue-200 hover:shadow-3xl transition-shadow duration-300">
                        {/* Certificate header */}
                        <div className="w-full h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-lg"></div>
                        
                        {/* Certificate content */}
                        <div className="p-3 space-y-2">
                          <div className="text-center">
                            <div className="w-24 h-2 bg-gray-800 rounded mx-auto mb-2"></div>
                            <div className="text-sm font-bold text-gray-700">CERTIFIKÁT</div>
                          </div>
                          
                          {/* Content lines */}
                          <div className="space-y-1">
                            <div className="w-28 h-1 bg-gray-300 rounded mx-auto"></div>
                            <div className="w-20 h-1 bg-gray-200 rounded mx-auto"></div>
                            <div className="w-24 h-1 bg-gray-200 rounded mx-auto"></div>
                          </div>
                          
                          {/* Name area */}
                          <div className="w-28 h-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded mx-auto mt-2"></div>
                          
                          {/* QR code */}
                          <div className="absolute bottom-2 right-2 w-6 h-6 bg-gray-800 rounded-sm">
                            <div className="w-full h-full grid grid-cols-4 gap-px p-px">
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-white rounded-sm"></div>
                              <div className="bg-gray-800"></div>
                              <div className="bg-white rounded-sm"></div>
                            </div>
                          </div>
                          
                          {/* Subtle shine effect */}
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-lg pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background certificates stack */}
                  <div className="absolute top-12 right-8 transform rotate-6 opacity-60">
                    <div className="w-24 h-32 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
                      <div className="w-full h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-sm mb-2"></div>
                      <div className="space-y-1">
                        <div className="w-16 h-1 bg-gray-300 rounded"></div>
                        <div className="w-12 h-1 bg-gray-200 rounded"></div>
                        <div className="w-14 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-16 left-4 transform -rotate-12 opacity-40">
                    <div className="w-20 h-28 bg-white rounded-lg shadow-md border border-gray-200 p-2">
                      <div className="w-full h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm mb-1"></div>
                      <div className="space-y-1">
                        <div className="w-14 h-1 bg-gray-300 rounded"></div>
                        <div className="w-10 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-12 right-12 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">1,234 certifikátů</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">100% bezpečné</span>
                </div>
              </div>
              
              {/* Success indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg opacity-0 animate-ping" style={{animationDelay: '3s', animationDuration: '2s'}}>
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4">
              <span className="text-sm font-medium text-green-700">📊 Výsledky, kterým můžete věřit</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tisíce spokojených zákazníků po celém světě
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Přidejte se k rostoucí komunitě organizací, které důvěřují CertifyMe pro své certifikáty
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 - Certificates */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    250K+
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">Vydaných certifikátů</div>
                <div className="text-xs text-gray-500">Za posledních 12 měsíců</div>
              </div>
            </div>

            {/* Metric 2 - Companies */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    1,200+
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">Zapojených organizací</div>
                <div className="text-xs text-gray-500">Školy, firmy, certifikační agentury</div>
              </div>
            </div>

            {/* Metric 3 - Security */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
                    99.9%
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">Bezpečnost systému</div>
                <div className="text-xs text-gray-500">ISO 27001 certifikace</div>
              </div>
            </div>

            {/* Metric 4 - Success Rate */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    98.5%
                  </span>
                </div>
                <div className="text-sm font-medium text-gray-600 mb-1">Úspěšnost verifikací</div>
                <div className="text-xs text-gray-500">Rychlé a spolehlivé ověření</div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-gray-500 mb-6">Důvěřuje nám přes 1200 organizací</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* Trust badge placeholders - you can replace with real logos */}
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-xs font-semibold text-gray-600">UNIVERZITA KARLOVA</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-xs font-semibold text-gray-600">ŠKODA AUTO</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-xs font-semibold text-gray-600">CZECH TECH</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 text-center">
                <div className="text-xs font-semibold text-gray-600">MINISTERSTVO ŠK.</div>
              </div>
            </div>

            {/* Additional trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>ISO 27001 certifikace</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span>eIDAS kompatibilní</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-green-500" />
                <span>Právně uznávané</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-700">🚀 Klíčové funkce</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Všechny certifikáty dnes můžete
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                vytvářet digitálně
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              S CertifyMe máte nástroje na tvorbu jakéhokoliv certifikátu, osvědčení nebo diplomu. 
              Včetně hromadného generování a QR verifikace pro maximální důvěryhodnost.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            {/* Left - Content */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Hromadné generování certifikátů
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Pro naprostou většinu projektů využijete pohodlný import CSV dat a automatické 
                  generování stovek certifikátů, pro specifické potřeby pak pokročilé mapování polí 
                  a vlastní PDF šablony.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">CSV import dat</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">PDF šablony</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Drag & drop editor</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Batch export</span>
                </div>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl">
                <svg viewBox="0 0 300 200" className="w-full h-auto">
                  <defs>
                    <linearGradient id="featureGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  
                  {/* CSV table */}
                  <rect x="20" y="20" width="120" height="80" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="30" y="30" width="100" height="12" rx="2" fill="#f8fafc" />
                  <rect x="30" y="45" width="80" height="8" rx="2" fill="#e2e8f0" />
                  <rect x="30" y="56" width="90" height="8" rx="2" fill="#e2e8f0" />
                  <rect x="30" y="67" width="85" height="8" rx="2" fill="#e2e8f0" />
                  <rect x="30" y="78" width="95" height="8" rx="2" fill="#e2e8f0" />
                  
                  {/* Arrow */}
                  <path d="M150 60 L180 60" stroke="url(#featureGrad1)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <path d="M175 55 L180 60 L175 65" stroke="url(#featureGrad1)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Generated certificates */}
                  <g transform="translate(190, 30)">
                    <rect x="0" y="0" width="60" height="40" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <rect x="5" y="5" width="50" height="6" rx="2" fill="url(#featureGrad1)" />
                    <circle cx="30" cy="20" r="8" fill="url(#featureGrad1)" opacity="0.3" />
                    <rect x="5" y="30" width="40" height="3" rx="1" fill="#e2e8f0" />
                    
                    <rect x="10" y="10" width="60" height="40" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <rect x="15" y="15" width="50" height="6" rx="2" fill="url(#featureGrad1)" />
                    <circle cx="40" cy="30" r="8" fill="url(#featureGrad1)" opacity="0.3" />
                    <rect x="15" y="40" width="40" height="3" rx="1" fill="#e2e8f0" />
                    
                    <rect x="20" y="20" width="60" height="40" rx="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                    <rect x="25" y="25" width="50" height="6" rx="2" fill="url(#featureGrad1)" />
                    <circle cx="50" cy="40" r="8" fill="url(#featureGrad1)" opacity="0.3" />
                    <rect x="25" y="50" width="40" height="3" rx="1" fill="#e2e8f0" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Second feature */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-xl">
                <svg viewBox="0 0 300 200" className="w-full h-auto">
                  <defs>
                    <linearGradient id="featureGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  
                  {/* Certificate with QR */}
                  <rect x="50" y="30" width="140" height="100" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <rect x="60" y="45" width="120" height="8" rx="4" fill="url(#featureGrad2)" />
                  <rect x="60" y="60" width="80" height="6" rx="3" fill="#1f2937" />
                  <rect x="60" y="75" width="100" height="4" rx="2" fill="#6b7280" />
                  
                  {/* QR Code */}
                  <rect x="140" y="90" width="30" height="30" fill="#1f2937" rx="3" />
                  <rect x="142" y="92" width="26" height="26" fill="white" />
                  <g fill="#1f2937">
                    <rect x="144" y="94" width="3" height="3" />
                    <rect x="149" y="94" width="3" height="3" />
                    <rect x="154" y="94" width="3" height="3" />
                    <rect x="159" y="94" width="3" height="3" />
                    <rect x="164" y="94" width="3" height="3" />
                  </g>
                  
                  {/* Verification flow */}
                  <g transform="translate(220, 60)">
                    <circle cx="30" cy="30" r="25" fill="url(#featureGrad2)" opacity="0.1" />
                    <path d="M20 30 L25 35 L35 25" stroke="url(#featureGrad2)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="30" y="55" textAnchor="middle" fill="#6b7280" fontSize="8">Ověřeno</text>
                  </g>
                  
                  {/* Mobile phone scanning */}
                  <g transform="translate(20, 90)">
                    <rect x="0" y="0" width="25" height="40" rx="5" fill="#1f2937" />
                    <rect x="2" y="3" width="21" height="34" rx="3" fill="white" />
                    <circle cx="12.5" cy="20" r="8" fill="url(#featureGrad2)" opacity="0.2" />
                  </g>
                  
                  {/* Scanning line */}
                  <path d="M32 110 L140 105" stroke="url(#featureGrad2)" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                </svg>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    QR verifikace proti padělání
                  </h3>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Každý certifikát obsahuje jedinečný QR kód pro okamžité ověření pravosti. 
                  Vydavatel může certifikát kdykoliv zneplatnit a sledovat audit log všech ověření.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Jedinečné QR kódy</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Online verifikace</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Revokace certifikátů</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-medium text-gray-700">Audit log</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium text-white">🎯 Připraveni začít?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vytvořte první certifikát během 5 minut
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Zaregistrujte se zdarma a okamžitě získáte přístup ke všem funkcím. 
              Žádné platební údaje nejsou potřeba.
            </p>
            <Link href="/auth/register?plan=free">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-semibold">
                Začít zdarma <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <div className="flex justify-center items-center gap-8 mt-8 text-blue-200 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Bez závazků
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Okamžitý přístup
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Neomezené testování
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CertifyMe</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                © 2024 CertifyMe. Bezpečné a spolehlivé řešení pro správu certifikátů.
              </p>
              <p className="text-gray-500 text-sm">
                Vytvořeno s ❤️ pro moderní organizace
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
