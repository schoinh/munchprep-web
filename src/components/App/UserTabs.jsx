import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Menu from "../Menu/Menu";
import ShoppingList from "../ShoppingList/ShoppingList";

function UserTabs() {
  var tabsStyle = {
    marginTop: "50px"
  };

  return (
    <Tabs style={tabsStyle} defaultActiveKey="menu" id="uncontrolled-tab-example">
      <Tab eventKey="menu" title="Menu">
        <Menu />
      </Tab>
      <Tab eventKey="shoppingList" title="Shopping List">
        <ShoppingList />
      </Tab>
    </Tabs>
  );
}

export default UserTabs;