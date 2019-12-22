# Multi Select

This repository contains a very minimal example of a usage of a `Multi Select` component in React-Native.

The list of shifts is static but could be plugged and retrieve by any server - The `MultiSelect` component is composed by

- An pressable input that contains your selection
- A dropdown contained in a `Modal` and that shows all the possible shifts you could selected

Basically, you can chose some Shifts, they will appear on the input as selected. They will also be colorized in the dropdown so the user has a direct visibility on what (s)he has selected.
Once a shift is selected, the overlapping shifts will be automatically disabled so they cannot be selected (because invalid).

![](demo.gif)

# 🚀 Run it

## If you don't have Expo installed

Then let's do this ! I used `Expo` for having a [quick starter pack](https://facebook.github.io/react-native/docs/getting-started). If you don't have it, you can run

```bash
npm install -g expo-cli
```

## If / When you have Expo then

Clone the project if you haven't done it

```bash
cd react-native-multiselect
npm i
npm start # you can also use: expo start
```

## Run tests

```bash
yarn test
```

# Possible improvements

- Add tests (Snapshots + check if the select appears once pressing the input)
- Add a cross to remove a shift direcltly from the input
- Add an existing component library for some better styling
