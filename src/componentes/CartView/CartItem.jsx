
import Boton from "../Boton/Boton"; 



function CartItem({imagen,categoria, precio, quantity, total, removeItem}){
    return (
        <tr>
            <td>
                <img height={50} src={imagen} alt={categoria} />
            </td>
            <td>{categoria}</td>
            <td>${precio}</td>
            <td>{quantity}</td>
            <td>
                <Boton type="alert" onTouch={removeItem}>
                    Borrar
                </Boton>
            </td>
            <th>${total}</th>
            
        </tr>
    );
}

export default CartItem;