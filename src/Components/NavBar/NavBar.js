import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
    <nav>
        <h3>Cacto Petshop</h3>
        <div>
            <button>Alimento para perros</button>
            <button>Alimento para gatos</button>
            <button>Camas e Indumentaria</button>
            <button>Snacks</button>
            <button>Juguetes</button>
        </div>
        <CartWidget/>
    </nav>
    )
}
export default NavBar