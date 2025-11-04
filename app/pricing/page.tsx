'use client'

import Link from 'next/link'
import { Award, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function PricingPage() {
  const plans = {
    free: { 
      name: 'Zdarma', 
      price: '0 Kč', 
      period: 'navždy',
      description: 'Ideální pro začátek a malé projekty',
      features: [
        '10 certifikátů/měsíc',
        '3 základní šablony',
        'QR verifikace',
        'Email podpora',
        'GDPR compliant úložiště'
      ],
      cta: 'Začít zdarma',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    pro: { 
      name: 'Pro', 
      price: '599 Kč', 
      period: 'měsíčně',
      description: 'Nejoblíbenější volba pro školy a firmy',
      features: [
        'Neomezené certifikáty',
        'Všechny šablony (12+)',
        'Email rozesílka',
        'Prioritní podpora',
        'Vlastní loga a branding',
        'CSV import dat',
        'Hromadný export',
        'Pokročilé reporty',
        'API přístup (základní)'
      ],
      cta: 'Vyzkoušet Pro',
      popular: true,
      color: 'from-blue-500 to-purple-600'
    },
    business: { 
      name: 'Business', 
      price: '2 499 Kč', 
      period: 'měsíčně',
      description: 'Pro velké organizace s pokročilými potřebami',
      features: [
        'Vše z Pro plánu',
        'Týmové role a oprávnění',
        'White-label řešení',
        'Plný API přístup',
        'SLA podpora (4h)',
        'Tisk a pošta certifikátů',
        'Vlastní doména verifikace',
        'Advanced security',
        'Dedikovaný account manager',
        'Custom integrace'
      ],
      cta: 'Kontaktujte nás',
      popular: false,
      color: 'from-purple-500 to-indigo-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Navigation */}
      <nav className="nav-glass fixed top-0 w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CertifyMe</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                <ArrowLeft className="w-4 h-4 inline mr-2" />
                Zpět na hlavní stránku
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vyberte plán podle svých potřeb
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Začněte zdarma a upgradujte kdykoli. Všechny plány zahrnují QR verifikaci, 
              bezpečné úložiště a základní podporu.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {Object.entries(plans).map(([planKey, plan]) => (
              <div key={planKey} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      Nejoblíbenější
                    </span>
                  </div>
                )}
                
                <Card className={`h-full p-8 ${plan.popular ? 'card-glass border-2 border-blue-200 shadow-2xl' : 'bg-white shadow-lg'} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">/{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href={`/auth/register?plan=${planKey}`}>
                      <Button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Často kladené otázky
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Mohu změnit plán kdykoli?</h3>
                <p className="text-gray-600">Ano, můžete upgradovat nebo downgradujte kdykoli. Změny se projeví okamžitě a poplatky jsou účtovány poměrně.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Je bezplatný plán opravdu zdarma?</h3>
                <p className="text-gray-600">Ano, bezplatný plán je zdarma navždy. Zahrnuje až 10 certifikátů měsíčně a základní funkce bez časového omezení.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Potřebuji platební kartu pro bezplatný plán?</h3>
                <p className="text-gray-600">Ne, pro bezplatný plán nepotřebujete platební kartu. Stačí se zaregistrovat emailem a můžete začít okamžitě.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Co zahrnuje podpora?</h3>
                <p className="text-gray-600">Bezplatný plán: email podpora do 48h. Pro plán: prioritní podpora do 12h. Business: SLA podpora do 4h + dedikovaný manažer.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
