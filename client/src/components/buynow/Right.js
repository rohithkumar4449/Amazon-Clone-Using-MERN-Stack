import React, { useEffect, useState } from 'react'

function Right({iteam}) {

  const [price,setPrice] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[iteam])

  const totalAmount = () =>{
    let price =0;
    iteam.map((item) =>{
      price = item.price.cost+price
    });
    setPrice(price)
  }

  return (
    <div className='right_buy'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'/>
        <div className='cost_right'>
            <p>Your order is eligible for FREE Delhivery</p><br />
            <sapn style={{color:"#565959"}}>Select this option at checkout. Details</sapn>
            <h3>Subtotal ({iteam.length} items:):<span style={{fontWeight:700}}>${price}.00</span></h3>
            <button className='rightbuy_btn'>Proceed to buy</button>
            <div className='emi'>
                Emi availble
            </div>
        </div>
    </div>
  )
}

export default Right