import PropTypes from "prop-types";

const isTimeInferior = (time1, time2) => parseInt(time1) < parseInt(time2);

const isTimeSuperior = (time1, time2) => parseInt(time1) > parseInt(time2);

const areShiftsOverlapping = (shift1, shift2) => {
  const isStart1InShift2 =
    isTimeSuperior(shift1.start, shift2.start) &&
    isTimeInferior(shift1.start, shift2.end);
  const isEnd1InShift2 =
    isTimeSuperior(shift1.end, shift2.start) &&
    isTimeInferior(shift1.end, shift2.end);

  const isStart2InShift1 =
    isTimeSuperior(shift2.start, shift1.start) &&
    isTimeInferior(shift2.start, shift1.end);
  const isEnd2InShift1 =
    isTimeSuperior(shift2.end, shift1.start) &&
    isTimeInferior(shift2.end, shift1.end);

  return (
    isStart1InShift2 || isEnd1InShift2 || isStart2InShift1 || isEnd2InShift1
  );
};

export const isShiftValid = (selectedShifts, shiftToCompare) => {
  return selectedShifts.reduce(
    (isValid, userShift) =>
      isValid && !areShiftsOverlapping(userShift.value, shiftToCompare.value),
    true
  );
};

export const shiftPropTypes = PropTypes.shape({
  key: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  })
});
