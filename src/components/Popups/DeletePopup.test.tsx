import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {removeMovie} from '../../store/slices/movies';
import DeletePopup from './DeletePopup';
import { MovieContext } from "../../contextProviders";

jest.mock('../../store/slices/movies', () => ({
  removeMovie: jest.fn(),
}));
jest.mock('../../store', () => ({
  useAppDispatch: () => (data: any) => data,
}));

jest.mock('../../elements/Button', () => ({
  __esModule: true,
  default: ({children, ...props}: {children: JSX.Element | string}) => <button {...props}>{children}</button>,
}));

describe("Given DeletePopup component", () => {
  describe("When DeletePopup component calls", () => {
    // public variables and methods
    let mockState: any;
    let mockActions: any;
    let MockContextProvider: any;
    // before and after blocks
    beforeEach(() => {
      mockState = {
        movie: {},
      };
      mockActions = {};
      MockContextProvider = jest.fn(({children}) => (
        <MovieContext.Provider value={[mockState, mockActions]}>
          {children}
        </MovieContext.Provider>
      ));
    });
    afterEach(() => {
      jest.restoreAllMocks();
      jest.clearAllMocks();
    });

    it('it should render correctly', () => {
      const mockOnClose = jest.fn();
      const removeMovieMock = removeMovie as jest.Mocked<any>;
      removeMovieMock.mockImplementation(() => '');
      render(
        <MockContextProvider>
          <DeletePopup onClose={mockOnClose} />
        </MockContextProvider>
      );
      const renderedText = screen.getByText(/Delete MOVIE/i)
      //screen.debug();
      expect(renderedText).toBeInTheDocument();
    });
    it('it should call removeMovie method, when press confirm button', () => {
      const mockOnClose = jest.fn();
      const removeMovieMock = removeMovie as jest.Mocked<any>;
      removeMovieMock.mockImplementation(() => '');
      render(
        <MockContextProvider>
          <DeletePopup onClose={mockOnClose} />
        </MockContextProvider>
      );
      userEvent.click(screen.getByTestId('deleteBtn'));
      expect(removeMovieMock).toHaveBeenCalledTimes(1);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});
