import React from "react";
import NewItemForm from "./NewItemForm";
import CardGroup from "react-bootstrap/CardGroup";
import Category from "./Category";
import iconX from "../assets/images/icon-x.png";
import iconSweep from "../assets/images/icon-sweep.png";

function ShoppingList() {
  let itemsByCategory = {
    1: {
      name: "Produce",
      items: {
        1: {
          name: "broccoli"
        },
        2: {
          name: "strawberries"
        },
      }
    },
    2: {
      name: "Proteins",
      items: {
        1: {
          name: "eggs"
        }
      }
    },
    3: {
      name: "Other Foods",
      items: {}
    },
    4: {
      name: "Non-Foods",
      items: {
        1: {
          name: "detergent"
        }
      }
    }
  };

  var iconXStyles = {
    width: "50px",
    marginTop: "30px"
  };

  var iconSweepStyles = {
    width: "50px",
    marginTop: "30px",
    float: "right"
  };

  return (
    <div>
      <NewItemForm />
      <CardGroup>
        {Object.keys(itemsByCategory).map(categoryId => {
          let category = itemsByCategory[categoryId];
          return <Category
            name={category.name}
            items={category.items}
            key={categoryId} />;
        })}
      </CardGroup>
      <img src={iconX} style={iconXStyles} />
      <img src={iconSweep} style={iconSweepStyles} />
    </div>
  );
}

export default ShoppingList;