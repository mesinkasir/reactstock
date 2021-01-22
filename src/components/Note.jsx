import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note col-12 col-md-12 p-3 p-md-5">
      <div className="p-3 p-md-5 shadow rounded">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              className="img-fluid rounded shadow"
              src="https://1.bp.blogspot.com/-B4a-_ZyOSDk/YAqRrkG0PFI/AAAAAAAAMg0/6OIJG3UMLUcQjFgMPBc46necqN4jIzyxACLcBGAsYHQ/s300/barcode.png"
            />
          </div>
          <div className="col-12 col-md-8 p-3">
            <h3>{props.jeneng}</h3>
            <p>Product information details.</p>
            <h5>
              Qty : {props.piro}
              <br />
              Cost : {props.regi}
              <br />
              Price : {props.rego}
              <br />
              Note : {props.lapo}
            </h5>
            <button className="btn btn-danger float-end" onClick={handleClick}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
