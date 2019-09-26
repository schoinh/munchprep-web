import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
// import NewItemForm from "./NewItemForm";

function NewItemForm() {
  var inputStyle = {
    width: "20em",
    marginTop: "2em",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  };

  var buttonStyle = {
    marginTop: "1em",
    marginBottom: "2em",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  };

  return (
    <div>
      <Form.Control style={inputStyle} type="text" placeholder="New Item" />
      <div className="d-flex flex-column">
        <ButtonGroup style={buttonStyle}>
          <Button variant="secondary">Produce</Button>
          <Button variant="secondary">Proteins</Button>
          <Button variant="secondary">Other Foods</Button>
          <Button variant="secondary">Non-Foods</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default NewItemForm;