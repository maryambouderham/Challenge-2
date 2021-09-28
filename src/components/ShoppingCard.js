import React,{useState} from 'react'
import ShoppingCartList from './ShoppingCartList'

const ShoppingCard = () => {
    const [comandes, setCommandes] = useState([
        {
          id:   1,
          category: 'Shirt',
          title: 'Coton Shirt',
          image:"https://www.compressport.com/fr/25613-xlarge_default/t-shirt-de-course-a-pied-homme-bleu.jpg",
          price: 44.00,
          quantity: 1
        },
        {
            id:   2,
            category: 'Shirt',
            title: 'Coton Shirt',
            image:"https://contents.mediadecathlon.com/p1901260/k$afe3a140e8ad89e4903e7bc68b44526d/t-shirt-100-coton-fitness-sportee-noir.jpg?&f=452x452",
            price: 44.00,
            quantity: 1
        }
      ]);
      const DeleteCommand = (t) =>{
   
 
        
        const newarray = comandes.filter(c => c.id !== t);
         
        
         setCommandes([...newarray]);
         
        }
      
    return (
        <div>
            <div className="container border w-75  d-flex justify-content-between">
  <div className="p-3">
    <div className="d-flex justify-content-between align-items-center ">
      <h1>Shopping cart</h1>
      <input type="search" className="form-control w-25" placeholder="Search By Title" />
    </div>
    <hr />
    <ShoppingCartList 
    listCommand={comandes}
    OnClickDeleteCommand={DeleteCommand}/>
    </div>
  <div className="bg-secondary p-4 text-dark bg-opacity-10 w-25">
    <h1>Summary</h1>
    <hr />
    <div className="d-flex justify-content-between m-1">
      <p className="fw-bold">ITEMS3</p>
      <p className="fw-bold">£132.00</p>
    </div>
    <p className="fw-bold">SHIPPING</p>
    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value={1}>Standard Delivery £5.00</option>
      <option value={2}>Standard Delivery £10.00</option>
      <option value={3}>Standard Delivery £15.00</option>
    </select>
    <p className="fw-bold">GIVE CODE</p>
    <input type="text" className="form-control" />
    <hr />
    <div className="d-flex justify-content-between m-1">
      <p className="fw-bold">TOTAL PRICE</p>
      <p className="fw-bold">£137.00</p>
    </div>  
    <button type="button" className="btn btn-dark  btn-sm mx-auto  text-center w-100">REGISTER</button>
  </div>
</div>


        </div>
    )
}

export default ShoppingCard
