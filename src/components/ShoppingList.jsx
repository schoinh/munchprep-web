import React from "react";
import NewItemForm from "./NewItemForm";
import CardGroup from "react-bootstrap/CardGroup";
import Category from "./Category";

function ShoppingList() {
  let itemList = {
    1: {
      name: "broccoli",
      category: "Produce"
    },
    2: {
      name: "strawberries",
      category: "Produce"
    },
    3: {
      name: "eggs",
      category: "Proteins"
    },
    4: {
      name: "detergent",
      category: "Non-Foods"
    }
  };

  return (
    <div>
      <NewItemForm />
      <CardGroup>
        <Category name="Produce" items={itemList} />
        <Category name="Proteins" items={itemList} />
        <Category name="Other Foods" items={itemList} />
        <Category name="Non-Foods" items={itemList} />
      </CardGroup>
    </div>
  );
}

export default ShoppingList;