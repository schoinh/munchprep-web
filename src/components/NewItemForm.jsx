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
  const { dispatch } = props;

  function handleNewProduceFormSubmit() {
    dispatch(addItem(_name.value, "Produce"));
    _name.value = "";
  }

  function handleNewProteinsFormSubmit() {
    dispatch(addItem(_name.value, "Proteins"));
    _name.value = "";
  }

  function handleNewOtherFoodsFormSubmit() {
    dispatch(addItem(_name.value, "Other Foods"));
    _name.value = "";
  }

  function handleNewNonFoodsFormSubmit() {
    dispatch(addItem(_name.value, "Non-Foods"));
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
          <Button variant="secondary" onClick={handleNewProduceFormSubmit}>Produce</Button>
          <Button variant="secondary" onClick={handleNewProteinsFormSubmit}>Proteins</Button>
          <Button variant="secondary" onClick={handleNewOtherFoodsFormSubmit}>Other Foods</Button>
          <Button variant="secondary" onClick={handleNewNonFoodsFormSubmit}>Non-Foods</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default connect()(NewItemForm);