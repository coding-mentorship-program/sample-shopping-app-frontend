import { useState, useEffect } from 'react'
import { ProductCard } from '../components/ProductCard'
import ParentComponent from '../components/ParentComponent'

const Home = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch(process.env.REACT_APP_API_ENDPOINT)
			.then(res => res.json())
			.then(data => setProducts(data))
			.catch(err => console.error(err))
	}, [])

	const allProducts = products.map((product, index) => {
		return <ProductCard key={product._id} product={product} index={index} />
	})

	return (
		<div className='container'>
			<h1>All Products</h1>
			<div className='products'>{allProducts}</div>
			{/* <ParentComponent />  */}
		</div>
	)
}

export default Home
