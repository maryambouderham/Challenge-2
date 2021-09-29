import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import ShoppingCartList from "./ShoppingCartList";

const ShoppingCard = () => {
  const [comandes, setCommandes] = useState([
    {
      id: 1,
      category: "Shirt",
      title: "Coton Shirt",
      image:
        "https://www.compressport.com/fr/25613-xlarge_default/t-shirt-de-course-a-pied-homme-bleu.jpg",
      price: 44.0,
      quantity: 1,
    },
    {
      id: 2,
      category: "Shirt",
      title: "Coton Shirt",
      image:
        "https://contents.mediadecathlon.com/p1901260/k$afe3a140e8ad89e4903e7bc68b44526d/t-shirt-100-coton-fitness-sportee-noir.jpg?&f=452x452",
      price: 44.0,
      quantity: 1,
    },
  ]);
  const [listBackup, setListBackup] = useState([...comandes]);
  const [prixHT, setPrixHt] = useState(0);
  const [prixShip, setPrixShip] = useState(0);
  const inputsearch = useRef();

  
  /*fonction pour suppression*/
  const DeleteCommand = (t) => {
    const newarray = comandes.filter((c) => c.id !== t);

    setCommandes([...newarray]);
    setListBackup([...newarray]);
  };
  /*fonction pour augmenter la quantite*/
  const AddQuantity = (key) => {
    console.log(key);
    const newar = comandes;
    let prixHTT=0;
    newar.forEach((c) => {
      if (c.id == key) {
        c.quantity++;
        prixHTT = prixHT + c.price
      }
    });
    setPrixHt(prixHTT);
    console.log(newar);
    setCommandes([...newar]);
    console.log(comandes);
    setListBackup([...newar]);
  };
  /*fonction pour diminuer la quantite*/
  const SubstractQuantity = (k) => {
    const newar = comandes;
    newar.forEach((c) => {
      if (c.id == k && c.quantity !== 1) {
        c.quantity--;
        setPrixHt(prixHT - c.price);
      }
    });
    setCommandes([...newar]);
    setListBackup([...newar]);
  };
  /*fonction search */
  const keyPressEvent = (d) => {
    if (d !== "") {
      const results = comandes.filter((t) => t.title.toLowerCase().includes(d) && t.category.toLowerCase().includes(d));

      setCommandes([...results]);
    } else setCommandes([...listBackup]);
  };
  /*fonction prix total hors taxe */
  useEffect(() => {
    let total = 0;
    comandes.forEach((c) => {
      total += c.price;
    });
    setPrixHt(total)
    setPrixShip(total)
  },[]);
  /*fonction event select shipping */
  const selectChange = (event) => {
   
    console.log(event.target.value)
    let a = prixHT;
    console.log(a)
    a += parseInt(event.target.value);
    console.log(a)
    setPrixShip(a)
    console.log(prixShip)
  };
  /*fonction event select discount */
  const selectChange2 = (event) => {
    
    let a=prixShip - (prixShip * (parseInt(event.target.value))/100)
        setPrixShip(a)
       
  };
  
  return (
    <div>
      <div className="container border w-75  d-flex justify-content-between">
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center ">
            <h1>Shopping cart</h1>
            <div class="input-group rounded w-25 mx-auto">
              <input
                type="search"
                ref={inputsearch}
                onKeyUp={() => keyPressEvent(inputsearch.current.value)}
                className="form-control w-25"
                placeholder="Search By Title"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <hr />
          <ShoppingCartList
            listCommand={comandes}
            OnClickDeleteCommand={DeleteCommand}
            OnAddQuantite={AddQuantity}
            OnSubstractQuantity={SubstractQuantity}
          />
        </div>
        <div className="bg-secondary p-4 text-dark bg-opacity-10 w-25">
          <h1>Summary</h1>
          <hr />
          <div className="d-flex justify-content-between m-1">
            <p className="fw-bold">ITEMS3</p>
            <p className="fw-bold">{prixHT}$</p>
          </div>
          <p className="fw-bold">SHIPPING</p>
          <select
            onChange={selectChange}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={0}>Aucun</option>
            <option value={5}>Standard Delivery $5.00</option>
            <option value={10}>Standard Delivery $10.00</option>
            <option value={15}>Standard Delivery $15.00</option>
          </select>
          <p className="fw-bold">GIVE CODE</p>
          <select
            onChange={selectChange2}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={0}>Aucun</option>
            <option value={10}>discount 10%</option>
            <option value={15}>discount 15%</option>
          </select>
          <hr />
          <div className="d-flex justify-content-between m-1">
            <p className="fw-bold">TOTAL PRICE</p>
            <p className="fw-bold">{prixShip}$</p>
          </div>
          <button
            type="button"
            className="btn btn-dark  btn-sm mx-auto  text-center w-100"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
