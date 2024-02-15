import { Navigate, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
         <Route path='/' element={<p>home</p>}/>
         <Route path='/user-profile' element={<p>User profile page</p>}/>
         <Route path='/*' element={< Navigate to='/'/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
