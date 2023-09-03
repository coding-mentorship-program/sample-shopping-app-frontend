import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {
	const [form, setForm] = useState({})
	const [showForm, setShowForm] = useState(false)
	const navigate = useNavigate()
	// const location = useLocation()
	// const { name, description, sku, price, exp, index, _id } = location.state

	const params = useParams()

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/single-post/${params.id}`)
			.then(res => res.json())
			.then(data => setForm(data))
			.catch(err => console.log(err))
	}, [])

	const handleDelete = event => {
		event.preventDefault()
		console.log('Sending to API for delete')

		fetch(`${process.env.REACT_APP_API_ENDPOINT}?name=${form.name}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(() => navigate('/'))
			.catch(err => console.error(err))
	}

	const handleUpdate = event => {
		event.preventDefault()
		console.log('Sending to API to update product')

		fetch(`${process.env.REACT_APP_API_ENDPOINT}?name=${form.name}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})
			.then(res => res.json())
			.then(() => navigate('/'))
			.catch(err => console.error(err))
	}

	const handleForm = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<div className='container'>
			<div className='single-product'>
				<img src={`https://source.unsplash.com/random?sig=${form.index}`} alt='' />
				<h1> {form.name}</h1>
				<h3>{form.description}</h3>
				<h4>{form.sku}</h4>
				<p>
					<b>Price:</b> ${form.price}
				</p>
				<p>
					<b>Exp:</b> {form.exp}
				</p>

				{showForm && (
					<form className='add-form'>
						<label htmlFor=''>Product Name: </label>
						<input
							onChange={e => handleForm(e)}
							type='text'
							placeholder='ex. Rice'
							name='name'
							id='name'
							defaultValue={form.name}
						/>

						<label htmlFor=''> Sku: </label>
						<input
							onChange={e => handleForm(e)}
							type='number'
							min={0}
							placeholder='ex. 1234556'
							name='sku'
							id='sku'
							defaultValue={form.sku}
						/>

						<label htmlFor=''> Description: </label>
						<input
							onChange={e => handleForm(e)}
							type='text'
							placeholder='ex. Brown Rice'
							name='description'
							id='description'
							defaultValue={form.description}
						/>

						<label htmlFor=''>Price: </label>
						<input
							onChange={e => handleForm(e)}
							type='text'
							placeholder='ex. 2.48'
							name='price'
							id='price'
							defaultValue={form.price}
						/>

						<label htmlFor=''>Exp: </label>
						<input
							onChange={e => handleForm(e)}
							type='number'
							min={0}
							placeholder='ex. 2014'
							name='exp'
							id='exp'
							defaultValue={form.exp}
						/>
						<button onClick={handleUpdate}>Update Product</button>
					</form>
				)}

				<button onClick={handleDelete}>Delete Product</button>
				<button onClick={() => setShowForm(!showForm)}>Show Form</button>
			</div>
		</div>
	)
}

export default SingleProduct
