import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    jeneng: "",
    piro: "",
    regi: "",
    rego: "",
    lapo: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      jeneng: "",
      piro: "",
      regi: "",
      rego: "",
      lapo: ""
    });
    event.preventDefault();
  }

  return (
    <div className="row">
      <div className="col-12 col-md-3 p-3 p-md-5" />
      <div className="col-12 col-md-6 p-3 p-md-5">
        <div className="shadow rounded p-3 p-md-5">
          <form>
            <input
              className="mdl-textfield__input"
              name="jeneng"
              onChange={handleChange}
              value={note.jeneng}
              placeholder="Insert A Procuct Name"
            />
            <br />
            <input
              className="mdl-textfield__input"
              name="piro"
              onChange={handleChange}
              value={note.piro}
              placeholder="Input Stock Qty"
            />
            <br />
            <input
              className="mdl-textfield__input"
              name="regi"
              onChange={handleChange}
              value={note.regi}
              placeholder="Input Cost"
            />
            <br />
            <input
              className="mdl-textfield__input"
              name="rego"
              onChange={handleChange}
              value={note.rego}
              placeholder="Input Sell Price"
            />
            <br />
            <textarea
              className="mdl-textfield__input"
              name="lapo"
              onChange={handleChange}
              value={note.lapo}
              placeholder="Write a note here..."
              rows="3"
            />
            <br />
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored float-end"
              onClick={submitNote}
            >
              <i class="material-icons">add</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateArea;
