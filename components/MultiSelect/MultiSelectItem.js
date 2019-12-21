import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

import { reg } from "../../assets/Spacing";
import { shiftPropTypes } from "../../entities/shifts";

const item = ({ disabled, isSelected, item, style, onSelectItem }) => (
  <TouchableOpacity
    onPress={_evt => (!disabled || isSelected) && onSelectItem(item)}
  >
    <Option style={style} disabled={disabled} isSelected={isSelected}>
      <OptionText>{item.label}</OptionText>
    </Option>
  </TouchableOpacity>
);

const Option = styled.View`
  background-color: ${({ isSelected, disabled }) => {
    if (isSelected) return "#66FF99";
    if (disabled) return "#E8E8E8";
    return "white";
  }};
  border-bottom-width: 1;
  border-color: #585858;
  justify-content: center;
  padding: ${reg};
`;

const OptionText = styled.Text`
  color: #585858;
`;

item.propTypes = {
  disabled: PropTypes.bool.isRequired,
  item: shiftPropTypes.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelectItem: PropTypes.func.isRequired,
  style: PropTypes.object
};

item.defaultProps = {
  style: {}
};

export default item;
