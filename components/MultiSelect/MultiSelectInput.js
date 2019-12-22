import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TouchableOpacity, View } from "react-native";

import { sm, reg, xsm } from "../../assets/Spacing";
import { darkGrey, lightGrey } from "../../assets/Colors";
import { shiftPropTypes } from "../../entities/shifts";

const multiSelectInput = ({ selectedItems, style, onPress }) => (
  <>
    <InputHeader>Shifts</InputHeader>
    <Container style={style}>
      <TouchableOpacity onPress={onPress}>
        <SelectedItemsContainer>
          {selectedItems.length === 0 ? (
            <ItemContainer>
              <Placeholder>Add shifts...</Placeholder>
            </ItemContainer>
          ) : (
            selectedItems.map(({ label, key }) => (
              <ItemContainer key={key}>
                <SelectedItemText key={key}>{label}</SelectedItemText>
              </ItemContainer>
            ))
          )}
        </SelectedItemsContainer>
      </TouchableOpacity>
    </Container>
  </>
);

const InputHeader = styled.Text`
  color: ${darkGrey};
  font-weight: bold;
  font-size: 15;
  margin-bottom: ${xsm};
`;

const Placeholder = styled.Text`
  color: ${lightGrey};
  font-style: italic;
  padding-left: ${reg};
  font-size: 20;
`;

const Container = styled.View`
  border-width: 1;
  border-color: ${darkGrey};
  border-radius: 8;
`;

const ItemContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const SelectedItemsContainer = styled.View`
  min-height: 60;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SelectedItemText = styled.Text`
  color: ${darkGrey};
  font-size: 16;
  line-height: 16;
  background-color: #f8f8f8;
  margin: ${sm};
  border-width: 1;
  padding: ${reg};
  border-color: #585858;
  border-radius: 8;
`;

multiSelectInput.propTypes = {
  selectedItems: PropTypes.arrayOf(shiftPropTypes).isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired
};

multiSelectInput.defaultProps = {
  style: {}
};

export default multiSelectInput;
