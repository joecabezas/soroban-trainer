import {Collapse, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {connect} from 'react-redux';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';

import PropTypes from 'prop-types';

import {openDrawerSection} from './redux/actions';

const MenuSection = ({
  icon,
  label,
  content,
  open,
  index,
  openDrawerSection,
}) => {
  const handleClick = () => {
    if(open){
      openDrawerSection(null);
      return;
    }

    openDrawerSection(index);
  };

  return (
    <React.Fragment>
      <ListItem
        button
        onClick={handleClick}
      >
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {content}
      </Collapse>
    </React.Fragment>
  );
};

MenuSection.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  content: PropTypes.element,
  open: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.ui.drawer.section === ownProps.index
  }
};

export default connect(
    mapStateToProps,
    {openDrawerSection},
)(MenuSection);
