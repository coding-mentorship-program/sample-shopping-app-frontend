import { useState } from 'react'

export default function Signup() {
	const [form, setForm] = useState()

	const handleUpdate = event => {
		event.preventDefault()
		console.log('Sending to API to update product')

		fetch(`${process.env.REACT_APP_API_ENDPOINT}/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		})
			.then(res => res.json())
			.then(data => {
				if (data) localStorage.setItem({ blogUser: JSON.stringify(data) })
			})
			.catch(err => console.error(err))
	}

	const handleForm = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	return (
		<>
			<h3> This is SIGNUP </h3>
			<form className='add-form'>
				<label>Email </label>
				<input onChange={e => handleForm(e)} type='email' placeholder='email' name='email' id='email' />

				<label> Password </label>
				<input onChange={e => handleForm(e)} type='password' placeholder='ex. 1234556' name='password' id='password' />
				<button onClick={handleUpdate}>Signup</button>
			</form>
		</>
	)
}
