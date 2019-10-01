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

  const { dispatch } = props;
  let _name = null;

  function handleNewItemFormSubmit(event) {
    dispatch(addItem(_name.value, event.target.value));
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
          <Button variant="secondary" onClick={handleNewItemFormSubmit} value="0LPUR8dEnHACoX22Bjjw">Produce</Button>
          <Button variant="secondary" onClick={handleNewItemFormSubmit} value="TX1p7g1EpNmkDCz9S6rz">Proteins</Button>
          <Button variant="secondary" onClick={handleNewItemFormSubmit} value="YjATY4IT4FXZF0HGJspb">Other Foods</Button>
          <Button variant="secondary" onClick={handleNewItemFormSubmit} value="bLnOIoiWyUukXD8DsytE">Non-Foods</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default connect()(NewItemForm);