import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartList = (props) => {
    return (
        <div>
            <ul className="list-group list-group-flush">
            {props.listCommand.map( t => 
                <ShoppingCartItem 
                    id={t.id}
                    category={t.category}
                    title={t.title} 
                    image={t.image}
                    price={t.price}
                    quantity={t.quantity}
                    OnClickDelete={props.OnClickDeleteCommand} 
                    
                    />)}
            </ul>

        </div>
    )
}

export default ShoppingCartList
