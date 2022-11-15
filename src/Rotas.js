import { Routes, Route } from 'react-router-dom'
import Main from './Main'
import Cadastro from './Main/pages/Cadastro'
import Login from './Main/pages/Login'
function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cadastrar' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default MainRoutes;