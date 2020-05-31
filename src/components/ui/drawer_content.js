import { Divider, List } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import FunctionsIcon from '@material-ui/icons/Functions';
import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

import ConfigurationForm from '../../configuration_form';
import MenuAbout from '../../menu_about';
import MenuSection from '../../menu_section';
import SummatoryForm from '../../summatory_form';

const sections = [
  {
    icon: <FunctionsIcon />,
    label: 'Summatory',
    content: <SummatoryForm />,
  },
  {
    icon: <ClearIcon />,
    label: 'Multiplications',
    content: null,
  },
  {
    icon: <ViewComfyIcon />,
    label: 'Divisions',
    content: null,
  },
  {
    divider: true,
  },
  {
    icon: <TuneIcon />,
    label: 'Configuration',
    content: <ConfigurationForm />,
  },
];

const DrawerContent = () => {
  return (
    <List component="nav">
      {sections.map(
        (section, i) => {
          return section.divider ?
            <Divider key={i} /> :
            <MenuSection key={i} {...section} index={i} />;
        },
      )}
      <Divider />
      <MenuAbout />
      <Divider />
    </List>
  );
}

export default DrawerContent;
