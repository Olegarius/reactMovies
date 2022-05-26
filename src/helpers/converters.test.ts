import {getDuration, setDuration, formatDate, optionalChainingForTest} from './converters';

describe('Given methods from converters', () => {
  describe('When getDuration called', () => {
    it('When getDuration called with time. Then it should return formatted time to string', () => {
      // act
      const received = getDuration(125);
      const expected = "2h 5min";
      // Then it should return formatted time
      expect(received).toEqual(expected);
    });
    it('When getDuration called without time. Then it should return empty string', () => {
      // act
      const received = getDuration(0);
      const expected = "";
      // Then it should return empty string
      expect(received).toEqual(expected);
    });
  });

  describe('When setDuration called', () => {
    it('When setDuration called with formatted time string. Then it should return time number in minutes', () => {
      // act
      const received = setDuration("2h 5min");
      const expected = 125;
      // Then it should return time number in minutes
      expect(received).toEqual(expected);
    });
    it('When setDuration called with empty string. Then it should return 0', () => {
      // act
      const received = setDuration("");
      const expected = 0;
      // Then it should return 0
      expect(received).toEqual(expected);
    });
  });

  describe('When formatDate called', () => {
    it('When formatDate called with current date. Then it should return formatted date in format yyy-MM-dd', () => {
      // act
      const expected = "1980-05-23";
      const received = formatDate(new Date(expected));
      // Then it should return formatted date
      expect(received).toEqual(expected);
    });
    it('When formatDate called with current date (month > 9 and day < 9). Then it should return formatted date in format yyy-MM-dd', () => {
      // act
      const expected = "1980-10-05";
      const received = formatDate(new Date(expected));
      // Then it should return formatted date
      expect(received).toEqual(expected);
    });
    it('When formatDate called with empty string. Then it should return 0', () => {
      // act
      const received = formatDate();
      const expected = "";
      // Then it should return empty string
      expect(received).toEqual(expected);
    });
  });

  describe('When optionalChainingForTest called', () => {
    it('When optionalChainingForTest called without data', () => {
      // act
      const expected = "";
      const received = optionalChainingForTest();
      // Then it should return correct value
      expect(received).toEqual(expected);
    });
    it('When optionalChainingForTest called with undefined user data', () => {
      // act
      const expected = "";
      const options = {};
      const received = optionalChainingForTest(options);
      // Then it should return correct value
      expect(received).toEqual(expected);
    });
    it('When optionalChainingForTest called with empty user data', () => {
      // act
      const expected = "";
      const options = {
        user: {}
      };
      const received = optionalChainingForTest(options);
      // Then it should return correct value
      expect(received).toEqual(expected);
    });
    it('When optionalChainingForTest called with empty userSettings data', () => {
      // act
      const expected = "";
      const options = {
        user: {settings: {}}
      };
      const received = optionalChainingForTest(options);
      // Then it should return correct value
      expect(received).toEqual(expected);
    });
    it('When optionalChainingForTest called with some userSettings data', () => {
      // act
      const expected = 5;
      const options = {
        user: {settings: {
          age: 5
        }}
      };
      const received = optionalChainingForTest(options);
      // Then it should return correct value
      expect(received).toEqual(expected);
    });
    it('When optionalChainingForTest called with all userSettings data', () => {
      // act
      const expected = "Vasya";
      const options = {
        user: {settings: {
          age: 5,
          name: "Vasya"
        }}
      };
      const received = optionalChainingForTest(options);
      // Then it should return correct value
      expect(received).toEqual(expected);
    });
  });
});
