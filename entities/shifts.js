import PropTypes from "prop-types";

const isTimeInferior = (time1, time2) => parseInt(time1) <= parseInt(time2);

const isTimeSuperior = (time1, time2) => parseInt(time1) >= parseInt(time2);

const areShiftsOverlapping = (shift1, shift2) => {
  const isStartInShift =
    isTimeSuperior(shift1.start, shift2.start) &&
    isTimeInferior(shift1.start, shift2.end);
  const isEndInShift =
    isTimeSuperior(shift1.end, shift2.start) &&
    isTimeInferior(shift1.end, shift2.end);

  console.log(shift1, shift2, isStartInShift, isEndInShift);
  return isStartInShift || isEndInShift;
};

export const isShiftValid = (selectedShifts, shiftToCompare) => {
  const result = selectedShifts.reduce(
    (isValid, userShift) =>
      isValid && !areShiftsOverlapping(userShift.value, shiftToCompare.value),
    true
  );

  return result;
};

export const shiftPropTypes = PropTypes.shape({
  key: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  })
});
