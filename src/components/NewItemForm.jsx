import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addGroceryItem } from "./../actions";
import PropTypes from "prop-types";

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
    if (_name.value) {
      dispatch(addGroceryItem(_name.value, event.target.value));
      _name.value = "";
    }
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
          {Object.keys(props.masterShoppingList).map(categoryId => {
            let category = props.masterShoppingList[categoryId];
            return <Button
              variant="secondary"
              onClick={handleNewItemFormSubmit}
              key={categoryId}
              value={categoryId}>{category.name}</Button>;
          })}
        </ButtonGroup>
      </div>
    </div>
  );
}

NewItemForm.propTypes = {
  masterShoppingList: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    masterShoppingList: state.masterShoppingList
  };
};

export default connect(mapStateToProps)(NewItemForm);