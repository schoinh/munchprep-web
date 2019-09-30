import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addItem } from "./../actions";

function NewItemForm(props) {
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

  let _name = null;

  function handleNewProduceItemFormSubmit() {
    const { dispatch } = props;
    dispatch(addItem(_name.value)); // fix this;
    _name.value = "";
  }

  return (
    <div>
      <Form.Control
        style={inputStyle}
        type="text"
        placeholder="New Item"
        ref={(input) => { _name = input; }} />
      <div className="d-flex flex-column">
        <ButtonGroup style={buttonStyle}>
          <Button variant="secondary" onClick={handleNewProduceItemFormSubmit}>Produce</Button>
          <Button variant="secondary" onClick={handleNewProduceItemFormSubmit}>Proteins</Button>
          <Button variant="secondary" onClick={handleNewProduceItemFormSubmit}>Other Foods</Button>
          <Button variant="secondary" onClick={handleNewProduceItemFormSubmit}>Non-Foods</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default connect()(NewItemForm);