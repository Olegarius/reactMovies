//import { renderHook, act } from '@testing-library/react-hooks'
// for react 18.0 not supported yet (

import {useActions} from './useActions';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: (data: any, []) => data(),
}));

describe('Given useActions hook', () => {
  it('When useActions called. Then it should return function', () => {
    // mocks
    const mockDispatch = jest.fn((data) => data);
    const mockState = 'evidence';
    const mockReducerTypes = {
      SET_MOVIE: 'SET_MOVIE',
      GET_MOVIE: 'GET_MOVIE',
    };
    const mockActionTypeObject = {
      type: mockReducerTypes.GET_MOVIE,
      payload: mockState,
    };
    const mockActionTypeMethods = {
      [mockReducerTypes.SET_MOVIE]: (dispatch: React.Dispatch<any>) => (region: string) => {
        dispatch({
          type: mockReducerTypes.SET_MOVIE,
          payload: region,
        });
      },
      [mockReducerTypes.GET_MOVIE]: mockActionTypeObject,
    };

    // act
    const actualActions: Record<string, any> = useActions(
      mockReducerTypes,
      mockDispatch,
      mockActionTypeMethods
    );

    // Then it should return function setMovie
    expect(actualActions[mockReducerTypes.GET_MOVIE](mockState)).toEqual(mockActionTypeObject);

  });

  it('When useActions is called with empty data actions. Then it should return correct data with default actions', () => {
    // mocks
    const mockDispatch = jest.fn((data) => data);
    const mockReducerTypes = {
      SET_MOVIE: 'SET_MOVIE',
      GET_MOVIE: 'GET_MOVIE',
    };

    // act
    const actualActions: Record<string, any> = useActions(mockReducerTypes, mockDispatch, null);

    // Then it should return correct data with default actions
    expect(typeof actualActions[mockReducerTypes.SET_MOVIE]).toEqual(
      'function'
    );
    expect(typeof actualActions[mockReducerTypes.GET_MOVIE]).toEqual(
      'function'
    );
  });
});
