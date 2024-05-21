import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { decrement, increment, incrementByValue, reset,decrementByValue } from "./counterSlice"


const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const [amount,setAmount] = useState(0)
    return (
        <>
        <h1> count : {count}</h1>
        {/* <button onClick={()=> dispactch(increment())} > Increment by 1 </button> */}
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByValue(amount))}>Increment by Amount</button>
        <button onClick={() => dispatch(decrementByValue(amount))}>Decrement by Amount</button>
      </>
    )
}


export default Counter