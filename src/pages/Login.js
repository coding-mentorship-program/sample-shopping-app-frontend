import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../App'

export default function Login() {
	const [form, setForm] = useState()
	const [message, setMessage] = useState()

	const { setUser } = useContext(UserContext)
	const navigate = useNavigate()

	const handleLogin = event => {
		event.preventDefault()

		fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})
			.then(res => res.json())
			.then(data => {
				if (data.email) {
					localStorage.setItem('blogUser', JSON.stringify(data))
					setMessage('User Logging in ')
					setUser(data)
					
					navigate('/')
				} else {
					console.log(data.error)
					setMessage(data.error)
				}
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

				<input onChange={e => handleForm(e)} type='email' placeholder='email' name='email' id='email' required />

				<label htmlFor=''> Password </label>
				<input onChange={handleForm} type='password' placeholder='ex. 1234556' name='password' id='password' />
				<button onClick={handleLogin}>Login</button>
				<p>{message}</p>
			</form>
		</>
	)
}
