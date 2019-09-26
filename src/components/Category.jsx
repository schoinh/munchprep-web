import React from "react";
import PropTypes from "prop-types";

function Category(props) {
  debugger;
  return (
    <div className="card">
      <div className="card-header">
        {props.name}
      </div>
      <div className="card-body">
        {Object.keys(props.items)
          .filter(itemId => props.items[itemId].category == props.name)
          .map(itemId =>
            <p>
              {props.items[itemId].name}
            </p>
          )
        }
      </div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string,
  items: PropTypes.object
};

export default Category;