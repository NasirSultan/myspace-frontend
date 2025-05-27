import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/user/Home'
import Contact from './components/user/Contact'
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
               <Route path="/Contact" element={<Contact/>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
