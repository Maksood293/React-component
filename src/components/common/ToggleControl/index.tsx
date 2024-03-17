import React from 'react';
import Form from 'react-bootstrap/Form';
import { BEMHelper } from '../../../utils/bem-helper';
import { ToggleProps } from '../Interfaces/dtos';
import './styles.scss'


const classHelper = BEMHelper('toogle-control')
export const ToggleControl: React.FC<ToggleProps> = ({
  type,
  label,
  id,
  checked,
  disabled = false,
  onChange,
  className,
}) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <Form.Check
      type={type}
      id={id}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={handleChange}
      className={classHelper('',[],className)}
    />
  );
};

