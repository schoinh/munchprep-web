import React from "react";
import NewItemForm from "./NewItemForm";
import CardGroup from "react-bootstrap/CardGroup";
import Category from "./Category";

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
    </div>
  );
}

export default ShoppingList;