export default function ChildComponent({ name, age, allowence, setMoneyForParents }) {
	// destructuring name and age
	// const name = props.name
	// const age = props.age

	return (
		<>
			<h2>
				Hi I'm {name} and I'm {age} years old and I get ${allowence}
			</h2>
			<button onClick={() => setMoneyForParents(20)}>Send money to parents</button>
		</>
	)
}
