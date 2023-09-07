import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const [form, setForm] = useState()
	const navigate = useNavigate()

	const handleLogin = event => {
		event.preventDefault()
		console.log('Sending to API to update product')

		fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})
			.then(res => res.json())
			.then(data => {
				localStorage.setItem('blogUser', JSON.stringify(data))
        navigate('/')
			})

			.catch(err => console.error(err))
	}

	const handleForm = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<>
			<h3> This is login</h3>
			<form className='add-form'>
				<label htmlFor=''>Email </label>
				<input onChange={e => handleForm(e)} type='email' placeholder='email' name='email' id='email' />

				<label htmlFor=''> Password </label>
				<input onChange={e => handleForm(e)} type='password' placeholder='ex. 1234556' name='password' id='password' />
				<button onClick={handleLogin}>Login</button>
			</form>
		</>
	)
}
