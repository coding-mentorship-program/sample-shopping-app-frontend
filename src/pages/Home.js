import { useState, useEffect } from 'react'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4040/')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  const allProducts = products.map(product => <li>{product.name}</li>)

  return (
    <>
      <h1>Home component</h1>
      <ul>{allProducts}</ul>
    </>
  )
}

export default Home
