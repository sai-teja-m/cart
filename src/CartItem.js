import React from 'react'

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 99,
            qty: 1,
            title: 'Item'
        }

    }
    increaseQuantity() {
        console.log("hy");
        // this.state.qty += 1;
    }
    render() {
        const { price, qty, title } = this.state;
        return (
            <div className='card-item'>
                <div className='left-block'>
                    <img ></img>
                </div>
                <div className='right-block'>
                    <div>{title}</div>
                    <div>Rs. {price}</div>
                    <div>Qty : {qty}</div>
                    <div className='card-items-actions'>
                        <img
                            className='actions-icon'
                            src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                            alt="Increase"
                            onClick={this.increaseQuantity.bind(this)}
                        ></img>
                        <img
                            className='actions-icon'
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                            alt="Decrease"
                        ></img>
                        <img
                            className='actions-icon'
                            src="https://cdn-icons-png.flaticon.com/512/2907/2907762.png"
                            alt="delete"
                        ></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;