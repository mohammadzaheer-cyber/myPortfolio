export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mohammad Zaheer
            </div>
            <p className="text-gray-400 mt-2">Full Stack Software Developer Engineer</p>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mohammad Zaheer. Built with Next.js and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-xs mt-2">Designed and developed with ❤️ in Mumbai</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
