import {
  ComboBox,
  Dropdown,
  SelectableOptionMenuItemType,
} from "@fluentui/react";
import { useId } from "@fluentui/react-hooks";
import React from "react";
import "./App.css";

const options = [
  { key: "A", text: "Option A" },
  { key: "B", text: "Option B" },
  { key: "C", text: "Option C" },
  { key: "D", text: "Option D" },
  { key: "divider", text: "-", itemType: SelectableOptionMenuItemType.Divider },
  {
    key: "Header",
    text: "First heading",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "E", text: "Option E" },
  { key: "F", text: "Option F", disabled: true },
  { key: "G", text: "Option G" },
  { key: "H", text: "Option H" },
  { key: "I", text: "Option I" },
  { key: "J", text: "Option J" },
  {
    key: "divider1",
    text: "-",
    itemType: SelectableOptionMenuItemType.Divider,
  },
  {
    key: "Header1",
    text: "Second heading",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "A1", text: "Option A1" },
  { key: "B1", text: "Option B1" },
  { key: "C1", text: "Option C1" },
  { key: "D1", text: "Option D1" },
  { key: "E1", text: "Option E1" },
  { key: "F1", text: "Option F1", disabled: true },
  { key: "G1", text: "Option G1" },
  { key: "H1", text: "Option H1" },
  { key: "I1", text: "Option I1" },
  { key: "J1", text: "Option J1" },
  {
    key: "divider2",
    text: "-",
    itemType: SelectableOptionMenuItemType.Divider,
  },
  {
    key: "Header2",
    text: "Third heading",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "A2", text: "Option A2" },
  { key: "B2", text: "Option B2" },
  { key: "C2", text: "Option C2" },
  { key: "D2", text: "Option D2" },
  { key: "E2", text: "Option E2" },
  { key: "F2", text: "Option F2", disabled: true },
  { key: "G2", text: "Option G2" },
  { key: "H2", text: "Option H2" },
  { key: "I2", text: "Option I2" },
  { key: "J2", text: "Option J2" },
  {
    key: "divider3",
    text: "-",
    itemType: SelectableOptionMenuItemType.Divider,
  },
  {
    key: "Header3",
    text: "Fourth heading",
    itemType: SelectableOptionMenuItemType.Header,
  },
  { key: "A3", text: "Option A3" },
  { key: "B3", text: "Option B3" },
  { key: "C3", text: "Option C3" },
  { key: "D3", text: "Option D3" },
  { key: "E3", text: "Option E3" },
  { key: "F3", text: "Option F3", disabled: true },
  { key: "G3", text: "Option G3" },
  { key: "H3", text: "Option H3" },
  { key: "I3", text: "Option I3" },
  { key: "J3", text: "Option J3" },
];

const inputStyle = { root: { width: 300 } };

export default function App() {
  const comboBoxId = useId("combo-box");
  const [comboSelectedKey, setComboSelectedKey] = React.useState("E1");

  const dropdownId = useId("dropdown");
  const [dropdownSelectedKey, setDropdownSelectedKey] = React.useState("D1");

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      <h1>v8 ComboBox Callout Bug 🐛</h1>
      <ComboBox
        id={comboBoxId}
        label="Single-select ComboBox"
        options={options}
        selectedKey={comboSelectedKey}
        onChange={(event, option) => {
          if (option?.key) {
            setComboSelectedKey(`${option.key}`);
          }
        }}
        scrollSelectedToTop
        allowFreeInput
        autoComplete="on"
        styles={inputStyle}
        useComboBoxAsMenuWidth
        calloutProps={{
          calloutMaxHeight: 216,
          target: comboBoxId,
        }}
      />
      <Dropdown
        id={dropdownId}
        label="Single-select Dropdown"
        options={options}
        selectedKey={dropdownSelectedKey}
        onChange={(event, option) => {
          if (option?.key) {
            setDropdownSelectedKey(`${option.key}`);
          }
        }}
        styles={inputStyle}
        calloutProps={{ calloutMaxHeight: 216, target: dropdownId }}
      />
    </div>
  );
}
