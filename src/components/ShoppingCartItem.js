import React from "react";

const ShoppingCartItem = (props) => {
  return (
    <div>
      <li className="list-group-item d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img width={80} src={props.image} alt="laptop-case" />
          <div className="p-2">
            <h6 className="text-secondary">{props.category}</h6>
            <h6 className="fw-bold">{props.title}</h6>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <button className="btn  m-1"
          onClick={() =>props.OnClickSubstractQuantity(props.id)}>
            <span style={{ color: "Dodgerblue" }}>
              <i className="fas fa-minus" />
            </span>
          </button>
          <input
            type="number"
            Value={props.quantity}
            className="form-control w-25 m-1"
          />
          <button className="btn m-1 fw-bold"
          onClick={() =>props.OnClickAddQuantity(props.id)
          }>
            <span style={{ color: "Dodgerblue" }}>
              <i className="fal fa-plus" />
            </span>
          </button>
        </div>
        <div>
          <span className="fw-bold">{props.price}$</span>
        </div>
        <div>
          <button
            className="btn m-1 fw-bold"
            onClick={() =>
              //console.log(props.indice)
              {
                if (
                  window.confirm(
                    "Are you sure you wish to delete this command?"
                  )
                )
                  props.OnClickDelete(props.id);
              }
            }
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </li>
    </div>
  );
};

export default ShoppingCartItem;
