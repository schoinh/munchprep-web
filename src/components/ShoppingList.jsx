import React from "react";
import NewItemForm from "./NewItemForm";
import CardGroup from "react-bootstrap/CardGroup";
import Category from "./Category";
import PropTypes from "prop-types";
import iconX from "../assets/images/icon-x.png";
import iconSweep from "../assets/images/icon-sweep.png";
import { connect } from "react-redux";
import { clearShoppingList } from "./../actions";

function ShoppingList(props) {
  var iconXStyles = {
    width: "50px",
    marginTop: "30px"
  };

  var iconSweepStyles = {
    width: "50px",
    marginTop: "30px",
    float: "right"
  };

  const handleXClick = () => {
    const { dispatch } = props;
    dispatch(clearShoppingList());
  }

  return (
    <div>
      <NewItemForm />
      <CardGroup>
        {Object.keys(props.masterTicketList).map(categoryId => {
          let category = props.masterTicketList[categoryId];
          return <Category
            name={category.name}
            items={category.items}
            id={categoryId}
            key={categoryId} />;
        })}
      </CardGroup>
      <img src={iconX} onClick={handleXClick} style={iconXStyles} />
      <img src={iconSweep} style={iconSweepStyles} />
    </div>
  );
}

ShoppingList.propTypes = {
  masterTicketList: PropTypes.object
};

export default connect()(ShoppingList);