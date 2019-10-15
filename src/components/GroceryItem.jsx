import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleChecked } from "./../actions";

function GroceryItem(props) {
  function handleItemClick() {
    const { dispatch } = props;
    dispatch(toggleChecked(props.categoryId, props.itemId));
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={props.itemId} defaultChecked={props.checked} onClick={handleItemClick} />
        <label className="form-check-label" htmlFor={props.itemId}>
          {props.name}
        </label>
      </div>
      {/* <span onClick={() => { alert("Edit and Delete functionality for individual items are coming soon!") }}>x</span> */}
    </div>
  );
}

GroceryItem.propTypes = {
  name: PropTypes.string,
  itemId: PropTypes.string,
  categoryId: PropTypes.string,
  checked: PropTypes.bool,
  dispatch: PropTypes.func
};

export default connect()(GroceryItem);