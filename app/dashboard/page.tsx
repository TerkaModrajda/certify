import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Plus, 
  FileText, 
  Users, 
  TrendingUp,
  Award,
  Zap,
  FolderOpen,
  Calendar,
  Download,
  Eye
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Dobrý den, Demo User! 👋
            </h1>
            <p className="text-lg text-gray-600">
              Zde je přehled vašich certifikátů a projektů
            </p>
          </div>
          <Link href="/dashboard/projects/new">
            <Button className="gradient-bg-main text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
              <Plus className="w-5 h-5 mr-2" />
              Nový projekt
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-white hover:shadow-lg transition-all border-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">1,234</h3>
              <p className="text-gray-600 text-sm font-medium">Celkem certifikátů</p>
              <p className="text-green-600 text-xs mt-1">+12% tento měsíc</p>
            </div>
            <div className="gradient-bg-1 w-12 h-12 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white hover:shadow-lg transition-all border-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">89</h3>
              <p className="text-gray-600 text-sm font-medium">Aktivní projekty</p>
              <p className="text-blue-600 text-xs mt-1">5 nových</p>
            </div>
            <div className="gradient-bg-2 w-12 h-12 rounded-xl flex items-center justify-center">
              <FolderOpen className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white hover:shadow-lg transition-all border-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">2,847</h3>
              <p className="text-gray-600 text-sm font-medium">Celkem zobrazení</p>
              <p className="text-purple-600 text-xs mt-1">+8% tento týden</p>
            </div>
            <div className="gradient-bg-3 w-12 h-12 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white hover:shadow-lg transition-all border-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">156</h3>
              <p className="text-gray-600 text-sm font-medium">Stažení dnes</p>
              <p className="text-orange-600 text-xs mt-1">Aktivní den</p>
            </div>
            <div className="gradient-bg-4 w-12 h-12 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions & Activity */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card className="p-8 bg-white border-0 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rychlé akce</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/dashboard/projects/new">
                <div className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-all cursor-pointer">
                  <div className="gradient-bg-main w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Nový projekt</h3>
                  <p className="text-sm text-gray-600">Vytvořte nový projekt certifikátů</p>
                </div>
              </Link>
              
              <div className="group p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-100 hover:shadow-md transition-all cursor-pointer">
                <div className="gradient-bg-3 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Nahrát šablonu</h3>
                <p className="text-sm text-gray-600">Přidejte novou PDF šablonu</p>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-md transition-all cursor-pointer">
                <div className="gradient-bg-2 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Hromadné generování</h3>
                <p className="text-sm text-gray-600">Generujte více certifikátů najednou</p>
              </div>
              
              <Link href="/dashboard/projects">
                <div className="group p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100 hover:shadow-md transition-all cursor-pointer">
                  <div className="gradient-bg-4 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FolderOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Procházet projekty</h3>
                  <p className="text-sm text-gray-600">Zobrazit všechny vaše projekty</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Aktivity</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Projekt "Kurz Next.js" dokončen</p>
                  <p className="text-xs text-gray-500 mt-1">před 2 hodinami</p>
                  <p className="text-xs text-green-600 mt-1">125 certifikátů vygenerováno</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Nahráno 50 certifikátů</p>
                  <p className="text-xs text-gray-500 mt-1">včera</p>
                  <p className="text-xs text-blue-600 mt-1">Workshop TypeScript</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Nová šablona přidána</p>
                  <p className="text-xs text-gray-500 mt-1">před 3 dny</p>
                  <p className="text-xs text-purple-600 mt-1">Diploma Template v2.0</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Button variant="ghost" className="w-full text-sm text-gray-600 hover:text-gray-900">
                  Zobrazit všechny aktivity
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Projects */}
      <Card className="p-8 bg-white border-0 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Nedávné projekty</h2>
          <Link href="/dashboard/projects">
            <Button variant="outline" className="text-gray-600 border-gray-200 hover:bg-gray-50">
              Zobrazit všechny
            </Button>
          </Link>
        </div>
        
        <div className="grid gap-4">
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-all">
            <div className="flex items-center space-x-4">
              <div className="gradient-bg-1 w-12 h-12 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Kurz React Základy</h3>
                <p className="text-sm text-gray-600">125 certifikátů • Vytvořeno 15.10.2024</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Dokončeno</span>
                  <span className="text-xs text-gray-500">98% úspěšnost</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">125</p>
                <p className="text-xs text-gray-500">certifikátů</p>
              </div>
              <Button variant="outline" size="sm" className="ml-4">
                Zobrazit
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100 hover:shadow-md transition-all">
            <div className="flex items-center space-x-4">
              <div className="gradient-bg-3 w-12 h-12 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Workshop TypeScript</h3>
                <p className="text-sm text-gray-600">89 certifikátů • Vytvořeno 12.10.2024</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">V procesu</span>
                  <span className="text-xs text-gray-500">76% dokončeno</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">89</p>
                <p className="text-xs text-gray-500">certifikátů</p>
              </div>
              <Button variant="outline" size="sm" className="ml-4">
                Pokračovat
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-md transition-all">
            <div className="flex items-center space-x-4">
              <div className="gradient-bg-2 w-12 h-12 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">Certifikace Next.js</h3>
                <p className="text-sm text-gray-600">67 certifikátů • Vytvořeno 8.10.2024</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Dokončeno</span>
                  <span className="text-xs text-gray-500">100% úspěšnost</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">67</p>
                <p className="text-xs text-gray-500">certifikátů</p>
              </div>
              <Button variant="outline" size="sm" className="ml-4">
                Zobrazit
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Potřebujete pomoc?</h3>
              <p className="text-sm text-gray-600">Podívejte se na naši dokumentaci nebo kontaktujte podporu</p>
            </div>
            <Button variant="outline" size="sm">
              Nápověda
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
