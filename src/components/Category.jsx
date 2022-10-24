import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import GroceryItem from "./GroceryItem";

function Category(props) {
  return (
    <div className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        <Form>
          {Object.keys(props.items)
            .map(itemId => {
              // if (props.autoAdd) return <div>AutoAddItem</div>;
              return <GroceryItem
                key={itemId}
                itemId={itemId}
                categoryId={props.id}
                name={props.items[itemId].name}
                checked={props.items[itemId].checked}
              />;
            })
          }
        </Form>
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  items: PropTypes.object,
  id: PropTypes.string,
  // autoAdd: PropTypes.bool
};

export default Category;