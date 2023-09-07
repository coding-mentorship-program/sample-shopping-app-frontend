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

function App() {
	const [loggeddIn, setLoggeddin] = useState()

	useEffect(() => {
		const userInLS = localStorage.getItem('blogUser')

		if (userInLS) {
			setLoggeddin(true)
		}
	}, [])

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/single-product/:id' element={<SingleProduct />} />
				{loggeddIn && <Route path='/add-product' element={<AddProduct />} />}
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='*' element={<h2>Page not found</h2>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
