import { createContext } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useEffect, useState } from 'react'

import SingleProduct from './pages/SingleProduct'
import AddProduct from './pages/AddProduct'
import Login from './pages/Login'
import Signup from './pages/Signup'

export const UserContext = createContext()

function App() {
	const [user, setUser] = useState()

	useEffect(() => {
		const userInLS = JSON.parse(localStorage.getItem('blogUser'))
		if (userInLS) setUser(userInLS)
	}, [])

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ user, setUser }}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/single-product/:id' element={<SingleProduct />} />
					{user && <Route path='/add-product' element={<AddProduct />} />}
					{!user && <Route path='/login' element={<Login />} />}
					{!user && <Route path='/signup' element={<Signup />} />}
					<Route path='*' element={<h2>Page not found</h2>} />
				</Routes>
				<Footer />
			</UserContext.Provider>
		</BrowserRouter>
	)
}

export default App
