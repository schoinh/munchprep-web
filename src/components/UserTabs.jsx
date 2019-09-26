import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ShoppingList from "./ShoppingList";

function UserTabs() {
  var tabsStyle = {
    marginTop: "50px"
  };

  return (
    <Tabs style={tabsStyle} defaultActiveKey="shoppingList" id="uncontrolled-tab-example">
      <Tab eventKey="menu" title="Menu">
        <p>The menu for the week will go here!</p>
      </Tab>
      <Tab eventKey="shoppingList" title="Shopping List">
        <ShoppingList />
      </Tab>
    </Tabs>
  );
}

export default UserTabs;