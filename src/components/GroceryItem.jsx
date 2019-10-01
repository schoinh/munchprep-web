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
      <div className="form-check" onClick={handleItemClick}>
        <input className="form-check-input" type="checkbox" id={props.itemId} defaultChecked={props.checked} />
        <label className="form-check-label" htmlFor={props.itemId}>
          {props.name}
        </label>
      </div>
      <span>x</span>
    </div>
  );
}

GroceryItem.propTypes = {
  name: PropTypes.string,
  itemId: PropTypes.string,
  categoryId: PropTypes.string,
  checked: PropTypes.bool
};

export default connect()(GroceryItem);