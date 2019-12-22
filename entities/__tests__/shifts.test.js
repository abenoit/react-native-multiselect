import { isShiftValid } from "./../shifts";

describe("shifts", () => {
  describe("isShiftValid", () => {
    it("is false if a selectedShift in included in on of the other", () => {
      const selectedShift = { value: { start: "1600", end: "1800" } };
      const shifts = [{ value: { start: "0000", end: "2300" } }];

      expect(isShiftValid(shifts, selectedShift)).toBe(false);
    });

    it("is false if a another shift in included in selectedShift", () => {
      const selectedShift = { value: { start: "0000", end: "1800" } };
      const shifts = [{ value: { start: "1000", end: "1100" } }];

      expect(isShiftValid(shifts, selectedShift)).toBe(false);
    });

    it("is false if a selectedShift overlaps the start of another", () => {
      const selectedShift = { value: { start: "1400", end: "1800" } };
      const shifts = [{ value: { start: "1600", end: "2300" } }];

      expect(isShiftValid(shifts, selectedShift)).toBe(false);
    });

    it("is false if a selectedShift overlaps the end of another", () => {
      const selectedShift = { value: { start: "1400", end: "1800" } };
      const shifts = [{ value: { start: "1000", end: "1500" } }];

      expect(isShiftValid(shifts, selectedShift)).toBe(false);
    });

    it("is true if a selectedShift stops at the end of another", () => {
      const selectedShift = { value: { start: "1400", end: "1800" } };
      const shifts = [{ value: { start: "1800", end: "1900" } }];

      expect(isShiftValid(shifts, selectedShift)).toBe(true);
    });

    it("is true if a selectedShift stops at the end of another", () => {
      const selectedShift = { value: { start: "1400", end: "1800" } };
      const shifts = [{ value: { start: "1000", end: "1400" } }];

      expect(isShiftValid(shifts, selectedShift)).toBe(true);
    });
  });
});
