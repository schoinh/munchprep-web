import React from "react";
import NewItemForm from "./NewItemForm";
import CardGroup from "react-bootstrap/CardGroup";
import Category from "./Category";
import PropTypes from "prop-types";
import iconX from "../assets/images/icon-x.png";
import iconSweep from "../assets/images/icon-sweep.png";
import { connect } from "react-redux";
import { clearShoppingList } from "./../actions";
import { clearCheckedItems } from "./../actions";

function ShoppingList(props) {
  const { dispatch } = props;

  var iconXStyles = {
    width: "50px",
    marginTop: "30px",
    cursor: "pointer"
  };

  var iconSweepStyles = {
    width: "50px",
    marginTop: "30px",
    float: "right",
    cursor: "pointer"
  };

  const handleXClick = () => {
    if (window.confirm("Are you sure you want to DELETE everything on this shopping list?")) {
      dispatch(clearShoppingList());
    }
  };

  const handleSweepClick = () => {
    dispatch(clearCheckedItems());
  };

  return (
    <div>
      <NewItemForm />
      <CardGroup>
        {Object.keys(props.shoppingList).map(categoryId => {
          let category = props.shoppingList[categoryId];
          return <Category
            name={category.name}
            items={category.items}
            id={categoryId}
            key={categoryId} />;
        })}
      </CardGroup>
      <img src={iconX} onClick={handleXClick} style={iconXStyles} />
      <img src={iconSweep} onClick={handleSweepClick} style={iconSweepStyles} />
    </div>
  );
}

ShoppingList.propTypes = {
  shoppingList: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(ShoppingList);