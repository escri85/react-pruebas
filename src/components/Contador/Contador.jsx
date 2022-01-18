import { useState } from "react"



const Contador= ()=>{
    const [count,sumarValor] = useState(0)

const sumar = ()=>{
    sumarValor(count+1)
}
const restar = ()=>{
    sumarValor(count-1)
    }

    

return <div>
    <button onClick={sumar}>sumar</button>
    <input type="number" value={count}/>
    <button onClick={restar}>restar</button>
</div>
}
export default Contador