import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { updateAutoAdd, addGroceryItem } from "./../actions";
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

  const { dispatch, settings } = props;
  let _name = null;

  /*
  {
    1234: {
      name: "Produce",
      items: [
        {
          name: "broccoli",
          checked: true
        }
      ]
    } 
  }
  */
  function handleNewItemFormSubmit(event) {
    if (!_name.value) return;
    const categoryId = event.target.value;
    if (props.autoAdd) {
      const newAutoAddItem = {
        name: _name.value,
        checked: false,
      };
      const newAutoAddData = Object.assign({}, settings.autoAddCategories);
      if (!newAutoAddData[categoryId]) {
        newAutoAddData[categoryId] = { items: [] };
      }
      newAutoAddData[categoryId].items.push(newAutoAddItem);
      dispatch(updateAutoAdd(newAutoAddData));
      _name.value = "";
      return;
    }
    dispatch(addGroceryItem(_name.value, categoryId));
    _name.value = "";
  }

  return (
    <div>
      <Form.Control
        style={inputStyle}
        type="text"
        placeholder={props.autoAdd ? "New auto-add item" : "New item"}
        ref={(input) => { _name = input; }} />
      <div className="d-flex flex-column">
        <ButtonGroup style={buttonStyle}>
          {Object.keys(props.shoppingList).map(categoryId => {
            let category = props.shoppingList[categoryId];
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
  shoppingList: PropTypes.object,
  dispatch: PropTypes.func,
  autoAdd: PropTypes.bool,
  settings: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    shoppingList: state.shoppingList,
    settings: state.settings
  };
};

export default connect(mapStateToProps)(NewItemForm);