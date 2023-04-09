import useCount from "./myCountHook/useCount";

export const ItemCount = () => {
    const {counter, increment, decrement, addTochart} = useCount()
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button className="Button" onClick={increment}>+</button>
            <button className="Button" onClick={addTochart}>Agregar al carrito</button>
            <button className="Button" onClick={decrement}>-</button>
            
        </div>
    )
}