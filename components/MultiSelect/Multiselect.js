import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Modal, Text, TouchableOpacity } from "react-native";

import { sm, reg } from "../../assets/Spacing";
import { isShiftValid, shiftPropTypes } from "../../entities/shifts";

import Item from "./MultiSelectItem";
import MultiSelectInput from "./MultiSelectInput";
import multiSelectInput from "./MultiSelectInput";

const multiSelect = ({
  inputStyle,
  itemsStyle,
  selectedItems,
  onSelectItem,
  options
}) => {
  const [areOptionsVisible, setOptionVisible] = React.useState(() => false);

  return (
    <>
      <MultiSelectInput
        style={inputStyle}
        selectedItems={selectedItems}
        onPress={_evt => setOptionVisible(() => true)}
      />
      <Modal visible={areOptionsVisible} animationType="slide" transparent>
        <Overlay
          activeOpacity={1}
          onPressOut={_evt => setOptionVisible(() => false)}
        />
        <OptionsContainer>
          <SelectHeader>
            <TouchableOpacity onPress={_evt => setOptionVisible(() => false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </SelectHeader>
          <ModalContent>
            {options.map(item => (
              <Item
                style={itemsStyle}
                key={item.key}
                item={item}
                disabled={!isShiftValid(selectedItems, item)}
                isSelected={
                  !!selectedItems.find(
                    selectedItem => selectedItem.key === item.key
                  )
                }
                onSelectItem={onSelectItem}
              />
            ))}
          </ModalContent>
        </OptionsContainer>
      </Modal>
    </>
  );
};

const SelectHeader = styled.View`
  height: 30px;
  justify-content: center;
  align-items: flex-end;
  padding-right: ${sm};
  border-top-width: 1;
  border-bottom-width: 1;
  border-color: #585858;
`;

const OptionsContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-bottom: ${reg};
`;

const ModalContent = styled.ScrollView`
  height: 40%;
  bottom: 0%;
`;

const Overlay = styled.TouchableOpacity`
  flex: 1;
`;

multiSelect.propTypes = {
  inputStyle: PropTypes.object,
  itemsStyle: PropTypes.object,
  selectedItems: PropTypes.arrayOf(shiftPropTypes).isRequired,
  options: PropTypes.arrayOf(shiftPropTypes).isRequired,
  onSelectItem: PropTypes.func.isRequired
};

multiSelect.defaultProps = {
  inputStyle: {},
  itemsStyle: {}
};

export default multiSelect;
