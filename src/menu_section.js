import React from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Collapse, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

function MenuSection(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <ListItem
        button
        onClick={handleClick}
      >
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.label} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {props.content}
      </Collapse>
    </React.Fragment>
  );
}

export default MenuSection;
