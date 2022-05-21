import {useActions} from '../useActions';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: jest.fn((data) => data()),
}));

describe('Given useActions hook', () => {
  it('When useActions called. Then it should return function setRegion', () => {
    // mocks
    const mockDispatch = jest.fn((data) => data);
    const mockState = 'usa';
    const mockReducerTypes = {
      SET_REGION: 'SET_REGION',
      GET_REGION: 'GET_REGION',
    };
    const mockActionTypeObject = {
      type: mockReducerTypes.GET_REGION,
      payload: mockState,
    };
    const mockActionTypeMethods = {
      [mockReducerTypes.SET_REGION]: (dispatch) => (region) => {
        dispatch({
          type: mockReducerTypes.SET_REGION,
          payload: region,
        });
      },
      [mockReducerTypes.GET_REGION]: mockActionTypeObject,
    };

    // act
    const actualActions = useActions(
      mockReducerTypes,
      mockDispatch,
      mockActionTypeMethods
    );

    // Then it should return function setRegion
    expect(typeof actualActions[mockReducerTypes.SET_REGION]).toEqual(
      'function'
    );
    expect(actualActions[mockReducerTypes.GET_REGION](mockState)).toEqual(
      mockActionTypeObject
    );
  });

  it('When useActions is called with empty data actions. Then it should return correct data with default actions', () => {
    // mocks
    const mockDispatch = jest.fn((data) => data);
    const mockReducerTypes = {
      SET_REGION: 'SET_REGION',
      GET_REGION: 'GET_REGION',
    };

    // act
    const actualActions = useActions(mockReducerTypes, mockDispatch, null);

    // Then it should return correct data with default actions
    expect(typeof actualActions[mockReducerTypes.SET_REGION]).toEqual(
      'function'
    );
    expect(typeof actualActions[mockReducerTypes.GET_REGION]).toEqual(
      'function'
    );
  });
});
