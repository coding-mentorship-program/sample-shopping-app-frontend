import { useState } from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
	const [moreMoney, setMoreMoney] = useState(0)
	const [moneyForParents, setMoneyForParents] = useState(0)

	return (
		<>
			<h2>Smith Parents have ${moneyForParents} </h2>
			<ChildComponent name='Joey Smith' age='48' allowence={50 + moreMoney} setMoneyForParents={setMoneyForParents} />
			<ChildComponent name='Rosy Smith' age='35' allowence={20 + moreMoney}  setMoneyForParents={setMoneyForParents}/>
			<ChildComponent name='Rachel Smith' age='23' allowence={10 + moreMoney} setMoneyForParents={setMoneyForParents}/>
			<button onClick={() => setMoreMoney(10)}>send more money</button>
		</>
	)
}
