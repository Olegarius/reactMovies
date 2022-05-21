import {useMemo} from 'react';

const applyMiddleware = (dispatch: React.Dispatch<any>) => (action: any) => {
  if (typeof action === 'function') {
    return action(dispatch);
  }

  return dispatch(action);
};

const getActionCreators = (actionCreators: any, dispatch: React.Dispatch<any>) =>
  Object.entries(actionCreators).reduce(
    (memo, [type, action]) => ({
      ...memo,
      [type]:
        typeof action === 'function'
          ? dispatch(action)
          : (payload: any) => dispatch({type, payload}),
    }),
    {}
  );

export const useActions = (types: any, dispatch: React.Dispatch<any>, customActionCreators: any) => {
  return useMemo(() => {
    const enhancedDispatch = applyMiddleware(dispatch);
    const actionCreators = {...types, ...(customActionCreators || {})};

    return getActionCreators(actionCreators, enhancedDispatch);
  }, [types, dispatch, customActionCreators]);
};