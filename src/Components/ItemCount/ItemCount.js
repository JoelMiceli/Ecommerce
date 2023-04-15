import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import useCount from "./myCountHook/useCount";

export const ItemCount = () => {
    const {counter, increment, decrement, addTochart} = useCount()
    
    return (
        <div>
            <Button>Counter: {counter}</Button>
            <Stack direction="row" spacing={2}>
            <Button className="Button" variant="outlined" onClick={increment}>+</Button>
            <Button className="Button" variant="outlined" onClick={addTochart}>Agregar al carrito</Button>
            <Button className="Button" variant="outlined" onClick={decrement}>-</Button>
            </Stack>    
        </div>
    )
}