import React from "react";
import styled from "styled-components";

import { reg } from "./../../assets/Spacing";

import MultiSelect from "../MultiSelect/Multiselect";

// That'd be the place for querying GraphQL Server.
// Instead I'll just mock the data and use a data structure that looks like the schema
// actual shift value ??
/* 
type OptionObject {
	key: String!
	label: String!
} 

options: [OptionObject!]!
selected: [String!]!

*/
const shiftsContainer = () => {
  let [selectedItems, setSelectedItems] = React.useState(() => []);

  const options = [
    {
      key: "item1",
      label: "06:00 - 10:00",
      value: { start: "0600", end: "1000" }
    },
    {
      key: "item2",
      label: "16:00 - 22:00",
      value: { start: "1600", end: "2000" }
    },
    {
      key: "item3",
      label: "00:00 - 23:59",
      value: {
        start: "0000",
        end: "2359"
      }
    },
    {
      key: "item4",
      label: "06:00 - 18:00",
      value: { start: "0600", end: "1800" }
    },
    {
      key: "item5",
      label: "00:00 - 12:00",
      value: { start: "0000", end: "1200" }
    },
    {
      key: "item6",
      label: "06:00 - 12:00",
      value: { start: "0600", end: "1200" }
    },
    {
      key: "item7",
      label: "18:00 - 23:59",
      value: { start: "1800", end: "2359" }
    },
    {
      key: "item8",
      label: "00:00 - 06:00",
      value: { start: "0000", end: "0600" }
    },
    {
      key: "item9",
      label: "12:00 - 23:59",
      value: { start: "1200", end: "2359" }
    },
    {
      key: "item10",
      label: "12:00 - 18:00",
      value: { start: "1200", end: "1800" }
    }
  ];

  return (
    <MultiSelectContainer>
      <MultiSelect
        selectedItems={selectedItems}
        options={options}
        onSelectItem={selectedItem => {
          setSelectedItems(_ => {
            if (selectedItems.find(({ key }) => key === selectedItem.key)) {
              return selectedItems.filter(
                ({ key }) => key !== selectedItem.key
              );
            }

            return [...selectedItems, selectedItem];
          });
        }}
      />
    </MultiSelectContainer>
  );
};

const MultiSelectContainer = styled.View`
  margin-left: ${reg};
  margin-right: ${reg};
`;

export default shiftsContainer;
