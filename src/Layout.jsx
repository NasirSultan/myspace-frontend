import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Info,
  Settings,
  Bell,
  User,
  ChevronUp,
  ChevronDown
} from 'lucide-react'

const Layout = ({ children }) => {
  const location = useLocation()
  const [showButton, setShowButton] = useState(false)
  const [scrollDirection, setScrollDirection] = useState(null)

  const navItems = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/about', label: 'About', icon: <Info size={20} /> },
    { to: '/contact', label: 'Contact', icon: <Settings size={20} /> },
    { to: '/Text', label: 'Alerts', icon: <Bell size={20} /> },
    { to: '/profile', label: 'Profile', icon: <User size={20} /> },
  ]

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      const canScroll = docHeight > windowHeight
      setShowButton(canScroll)

      if (!canScroll) {
        setScrollDirection(null)
        return
      }

      if (scrollY > 10 && scrollY < docHeight - windowHeight - 10) {
        // somewhere in the middle, show scroll down
        setScrollDirection('down')
      } else if (scrollY >= docHeight - windowHeight - 10) {
        // near bottom, show scroll up
        setScrollDirection('up')
      } else {
        // near top, show scroll down
        setScrollDirection('down')
      }
    }

    window.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)

    checkScroll()

    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const handleScrollClick = () => {
    if (scrollDirection === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (scrollDirection === 'down') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative h-screen flex flex-col">
      {/* Top Navigation Bar (Desktop Only) */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-md z-10">
        <h1 className="text-2xl font-bold">My App</h1>
        <div className="flex gap-6">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 ${
                location.pathname === to ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 justify-around items-center border-t border-gray-300 bg-white py-2 shadow-inner z-10">
        {navItems.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center text-xs ${
              location.pathname === to ? 'text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Floating Scroll Button */}
      {showButton && scrollDirection && (
        <button
          onClick={handleScrollClick}
          className="fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
          aria-label={scrollDirection === 'up' ? 'Scroll to top' : 'Scroll to bottom'}
        >
          {scrollDirection === 'up' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-4 mt-0 md:mt-[72px] mb-[56px] md:mb-0">
        {children}

        {/* Temporary: Uncomment the next div to test scrolling */}
        {/* <div className="h-[2000px]" /> */}
      </main>
    </div>
  )
}

export default Layout
