export default function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Vítejte v CertifyMe! 🎉
        </h1>
        <p className="text-gray-600 mb-8">
          Vaš účet byl úspěšně vytvořen. Můžete začít vytvářet certifikáty.
        </p>
        <a 
          href="/dashboard" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Přejít na Dashboard
        </a>
      </div>
    </div>
  )
}