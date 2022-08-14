import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import * as assets from './components';
import IconEnum from './components/IconEnum';

export { IconEnum };
export interface IconPropTypes {
  name: IconEnum;
  ariaHidden?: boolean;
  [x: string]: any;
}

const Icon: React.FC<IconPropTypes> = ({ name, ariaHidden = true, onClick, ...props }) => {
  const MappedIcon = assets[name] as React.ElementType;

  if (Icon === undefined) {
    throw new Error('Must pass valid icon name to "@patient-central/styleguide/Icon" component');
  }

  return <SvgIcon viewBox="0 0 24 24" component={MappedIcon} role="img" aria-hidden={ariaHidden} onClick={onClick} {...props} />;
};

export default Icon;
