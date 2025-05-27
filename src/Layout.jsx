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
    <div className="flex flex-col h-screen overflow-hidden bg-white text-black">
      
      {/* Top Bar (only on md+ screens) */}
      <div className="hidden md:flex p-4 justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-bold">My App</h1>
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

      {/* Scrollable content area with hidden scrollbar */}
<main className="flex-1 w-full overflow-y-scroll py-6 scrollbar-hidden flex items-center justify-center">
  {children}
</main>

      {/* Bottom Navbar (only on mobile) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-gray-100 py-2 md:hidden border-t border-gray-300">
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
