import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/user/Home'
import Profile from './components/user/Profile'
import Contact from './components/user/Contact'
import Text from './components/mddata/Text'
import Test from './Test'
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
         <Route path="/Text" element={<Text/>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
               <Route path="/Contact" element={<Contact/>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile" element={<Profile/>} />
               <Route path="/Test" element={<Test/>} />
      </Routes>
    </Layout>
  )
}

export default App
