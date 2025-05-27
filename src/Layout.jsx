import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Info,
  Settings,
  Bell,
  User
} from 'lucide-react'

const Layout = ({ children }) => {
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/about', label: 'About', icon: <Info size={20} /> },
    { to: '/Contact', label: 'Contact', icon: <Settings size={20} /> },
    { to: '/notifications', label: 'Alerts', icon: <Bell size={20} /> },
    { to: '/profile', label: 'Profile', icon: <User size={20} /> },
  ]

  return (
    // Container fills full viewport height and hides body scrollbar by styles here
    <div className="flex flex-col h-screen bg-white text-black transition-colors duration-300">
      {/* Top Bar - hidden on small screens */}
      <div className="hidden md:flex p-4 justify-between items-center border-b border-gray-300 flex-shrink-0">
        <h1 className="text-2xl font-bold">My App</h1>

        {/* Top buttons for md and larger screens */}
        <div className="flex gap-2">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-200 ${
                location.pathname === to ? 'font-bold underline' : ''
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 md:overflow-y-auto p-4">
        {children}
      </main>

      {/* Bottom navbar for small screens */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-gray-100 py-2 md:hidden border-t border-gray-300 flex-shrink-0">
        {navItems.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center text-xs ${
              location.pathname === to ? 'font-bold text-blue-600' : ''
            }`}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Layout
