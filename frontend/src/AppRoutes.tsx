import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
         <Route path='/' element={<Layout><HomePage/></Layout>}/>
         <Route path='/user-profile' element={<p>User profile page</p>}/>
         <Route path='/*' element={< Navigate to='/'/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
