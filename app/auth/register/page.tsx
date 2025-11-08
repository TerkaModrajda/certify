'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Award, Mail, Lock, ArrowRight, Eye, EyeOff, User, Building2, Phone, Loader2, CheckCircle, AlertCircle, Chrome } from 'lucide-react'

// Nejčastější slabá hesla
const commonPasswords = [
  'password', '123456', '123456789', 'qwerty', 'abc123', 'password123', 
  'admin', 'letmein', 'welcome', 'monkey', '1234567890', 'dragon',
  'pass', 'master', 'hello', 'freedom', 'whatever', 'qazwsx'
]

// Validace síly hesla
const validatePassword = (password: string) => {
  const errors = []
  
  if (password.length < 12) {
    errors.push('Heslo musí mít alespoň 12 znaků')
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Heslo musí obsahovat malé písmeno')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Heslo musí obsahovat velké písmeno')
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Heslo musí obsahovat číslo')
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Heslo musí obsahovat speciální znak (!@#$%^&* atd.)')
  }
  if (commonPasswords.some(common => password.toLowerCase().includes(common))) {
    errors.push('Heslo je příliš běžné')
  }
  
  return errors
}

// Výpočet síly hesla
const calculatePasswordStrength = (password: string) => {
  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noCommon: !commonPasswords.some(common => password.toLowerCase().includes(common))
  }
  
  const score = Object.values(checks).filter(Boolean).length
  const errors = validatePassword(password)
  
  return {
    score,
    feedback: errors,
    checks
  }
}

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    plan: 'free'
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(1)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: [] as string[],
    checks: {
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false,
      noCommon: false
    }
  })

  // Get plan from URL if provided
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const planParam = urlParams.get('plan')
      if (planParam && ['free', 'pro', 'business'].includes(planParam)) {
        setFormData(prev => ({ ...prev, plan: planParam }))
      }
    }
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Jméno je povinné'
      if (!formData.lastName.trim()) newErrors.lastName = 'Příjmení je povinné'
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail je povinný'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Neplatný formát e-mailu'
      }
    }

    if (step === 2) {
      // Pokročilá validace hesla
      if (!formData.password) {
        newErrors.password = 'Heslo je povinné'
      } else {
        const passwordErrors = validatePassword(formData.password)
        if (passwordErrors.length > 0) {
          newErrors.password = passwordErrors[0] // Zobrazíme první chybu
        }
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Potvrzení hesla je povinné'
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Hesla se neshodují'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Speciální handling pro heslo - real-time síla hesla
    if (field === 'password') {
      setPasswordStrength(calculatePasswordStrength(value))
    }
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleNext = () => {
    if (validateForm()) {
      setStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Registrace proběhla úspěšně! Nyní by došlo k přesměrování na dashboard.')
    } catch (error) {
      console.error('Registration error:', error)
      setErrors({ general: 'Registrace se nezdařila. Zkuste to prosím znovu.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    // Prefer server-side OAuth redirect for Google. Keep a graceful fallback for other providers.
    if (provider === 'Google') {
      if (typeof window !== 'undefined') {
        // Redirect to NextAuth signin route for Google provider
        window.location.href = '/api/auth/signin/google'
      }
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      alert(`Přihlášení přes ${provider} není momentálně dostupné.`)
      setIsLoading(false)
    }, 1000)
  }

  const plans = {
    free: { 
      name: 'Zdarma', 
      price: '0 Kč', 
      period: 'navždy',
      color: 'from-gray-500 to-gray-600',
      description: 'Ideální pro začátek',
      features: ['10 certifikátů/měsíc', '3 základní šablony', 'QR verifikace', 'Email podpora'],
      popular: false
    },
    pro: { 
      name: 'Pro', 
      price: '599 Kč', 
      period: 'měsíčně',
      color: 'from-blue-500 to-purple-600',
      description: 'Nejoblíbenější volba',
      features: ['Neomezené certifikáty', 'Všechny šablony', 'Email rozesílka', 'Prioritní podpora', 'Vlastní loga'],
      popular: true
    },
    business: { 
      name: 'Business', 
      price: '2 499 Kč', 
      period: 'měsíčně',
      color: 'from-purple-500 to-indigo-600',
      description: 'Pro velké organizace',
      features: ['Vše z Pro plánu', 'Týmové role', 'White-label', 'API přístup', 'SLA podpora', 'Tisk & pošta'],
      popular: false
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CertifyMe</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                Již máte účet?
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">CertifyMe</span>
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Vytvořte si účet
          </h1>
          <p className="text-gray-600">
            Začněte vydávat certifikáty během několika minut
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="mb-6">
          <div className="flex bg-gray-100 rounded-full p-1">
            {Object.entries(plans).map(([planKey, plan]) => {
              const isSelected = formData.plan === planKey
              
              return (
                <button
                  key={planKey}
                  type="button"
                  onClick={() => setFormData({...formData, plan: planKey})}
                  className={`flex-1 py-2 px-3 rounded-full font-medium text-sm transition-all duration-200 ${
                    isSelected 
                      ? 'bg-white text-blue-600 shadow-md' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {plan.name} {plan.price !== '0 Kč' && `• ${plan.price}`}
                </button>
              )
            })}
          </div>
          
          {/* Simple help link */}
          <div className="text-center mt-3">
            <Link 
              href="/pricing" 
              target="_blank"
              className="text-gray-500 hover:text-blue-600 text-xs transition-colors duration-200"
            >
              Porovnat plány
            </Link>
          </div>
        </div>

        <Card className="card-glass p-8 shadow-xl border-0">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
              </div>
              <div className={`w-16 h-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
            </div>
          </div>

          {step === 1 ? (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Základní informace</h2>
                <p className="text-sm text-gray-600">Vyplňte své kontaktní údaje</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Jméno *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Jan"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      className={`pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                    Příjmení *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Novák"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      className={`pl-10 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  E-mailová adresa *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="jan.novak@email.cz"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                  Společnost (volitelné)
                </Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="company"
                    type="text"
                    placeholder="Název vaší společnosti"
                    value={formData.company}
                    onChange={handleInputChange('company')}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                  Telefon (volitelné)
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+420 xxx xxx xxx"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button 
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                Pokračovat
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">nebo pokračujte s Google</span>
                </div>
              </div>

              <div className="mt-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialLogin('Google')}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3"
                >
                  <Chrome className="w-5 h-5" />
                  <span>Pokračovat přes Google</span>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Zabezpečte svůj účet</h2>
                <p className="text-sm text-gray-600">Vytvořte si silné heslo</p>
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 block">
                  Heslo *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Alespoň 12 znaků, velké/malé písmeno, číslo, speciální znak"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : passwordStrength.score >= 6 ? 'border-green-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-3 space-y-2">
                    {/* Strength Bar */}
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5, 6].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 h-2 rounded-full ${
                            level <= passwordStrength.score
                              ? passwordStrength.score < 3 
                                ? 'bg-red-500'
                                : passwordStrength.score < 5
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Strength Text */}
                    <div className="text-sm">
                      <span className={`font-medium ${
                        passwordStrength.score < 3 
                          ? 'text-red-600'
                          : passwordStrength.score < 5
                          ? 'text-yellow-600'
                          : 'text-green-600'
                      }`}>
                        {passwordStrength.score < 3 && 'Slabé heslo'}
                        {passwordStrength.score >= 3 && passwordStrength.score < 5 && 'Středně silné heslo'}
                        {passwordStrength.score >= 5 && 'Silné heslo'}
                      </span>
                    </div>

                    {/* Requirements Checklist */}
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className={`flex items-center space-x-1 ${passwordStrength.checks.length ? 'text-green-600' : 'text-gray-500'}`}>
                        <CheckCircle className={`w-3 h-3 ${passwordStrength.checks.length ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>12+ znaků</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordStrength.checks.uppercase ? 'text-green-600' : 'text-gray-500'}`}>
                        <CheckCircle className={`w-3 h-3 ${passwordStrength.checks.uppercase ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>Velké písmeno</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordStrength.checks.lowercase ? 'text-green-600' : 'text-gray-500'}`}>
                        <CheckCircle className={`w-3 h-3 ${passwordStrength.checks.lowercase ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>Malé písmeno</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordStrength.checks.number ? 'text-green-600' : 'text-gray-500'}`}>
                        <CheckCircle className={`w-3 h-3 ${passwordStrength.checks.number ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>Číslo</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordStrength.checks.special ? 'text-green-600' : 'text-gray-500'}`}>
                        <CheckCircle className={`w-3 h-3 ${passwordStrength.checks.special ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>Speciální znak</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${passwordStrength.checks.noCommon ? 'text-green-600' : 'text-gray-500'}`}>
                        <CheckCircle className={`w-3 h-3 ${passwordStrength.checks.noCommon ? 'text-green-500' : 'text-gray-300'}`} />
                        <span>Není běžné</span>
                      </div>
                    </div>
                  </div>
                )}

                {errors.password && (
                  <div className="mt-2 text-red-500 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-2 block">
                  Potvrzení hesla *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Zadejte heslo znovu"
                    value={formData.confirmPassword}
                    onChange={handleInputChange('confirmPassword')}
                    className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {errors.general && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.general}
                  </p>
                </div>
              )}

              <div className="flex space-x-3">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="flex-1"
                >
                  Zpět
                </Button>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Vytváření účtu...
                    </>
                  ) : (
                    <>
                      Vytvořit účet
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center text-xs text-gray-500">
                Registrací souhlasíte s našimi obchodními podmínkami a zásadami ochrany osobních údajů
              </div>
            </form>
          )}
        </Card>

        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Už máte účet?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
              Přihlásit se
            </Link>
          </p>
        </div>
        </div>
      </div>
    </>
  )
}
