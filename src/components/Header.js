import { useContext } from 'react'

import { UserContext } from '../App'

const Header = () => {
	const { user } = useContext(UserContext)

	return (
		<ul>
			<li>
				<a href='/'>Home</a>
			</li>
			{/* this will only show if loggeddin is true */}
			{user && (
				<li>
					<a href='/add-product'>Add Product</a>
				</li>
			)}

			{!user && (
				<>
					<li>
						<a href='/login'>Login</a>
					</li>
					<li>
						<a href='/signup'>Signup</a>
					</li>
				</>
			)}

			{user && (
				<li>
					<a href='/' onClick={() => localStorage.clear()}>
						Logout {user.email}
					</a>
				</li>
			)}
		</ul>
	)
}

export default Header
