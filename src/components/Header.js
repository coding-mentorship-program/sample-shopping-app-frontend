import { useEffect, useState } from 'react'

const Header = () => {
	const [loggeddIn, setLoggeddin] = useState(false)

	useEffect(() => {
		const userInLS = localStorage.getItem('blogUser')

		if (userInLS) {
			setLoggeddin(true)
		}
	}, [])

	return (
		<ul>
			<li>
				<a href='/'>Home</a>
			</li>
			{/* this will only show if loggeddin is true */}
			{loggeddIn && (
				<li>
					<a href='/add-product'>Add Product</a>
				</li>
			)}

			{!loggeddIn && (
				<>
					<li>
						<a href='/login'>Login</a>
					</li>
					<li>
						<a href='/signup'>Signup</a>
					</li>
				</>
			)}

			{loggeddIn && (
				<li>
					<a href='/' onClick={() => localStorage.clear()}>
						Logout
					</a>
				</li>
			)}
		</ul>
	)
}

export default Header
