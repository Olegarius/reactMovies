import axios from "axios";
jest.mock("axios");
import {getFilterItems, getMovies} from './index';

// window object mocks
globalThis.window = Object.create(window);
const mockUrl = 'http://dummy.com';
const mockSearch = '?hash=abcdefgh';
Object.defineProperty(window, 'location', {
    value: {
      href: `${mockUrl}${mockSearch}`,
      search: mockSearch,
    },
    writable: true,
});

describe('Given methods from api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  describe('When getFilterItems called', () => {
    it("When getFilterItems called with success. Then it should return correct filter data", async () => {
      const filters = [{"label": "All", "value": ""}, {"label": "Documentary", "value": "Documentary"}];
      //const axiosGet = jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({data: filters}));
      (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({data: filters}));

      const received = await getFilterItems();
      const expected = filters;

      //expect(axiosGet).toHaveBeenCalledTimes(1);
      expect(received).toEqual(expected);
    });
    it("When getFilterItems called with failure. Then it should return error object", async () => {
      const mockError = new Error('error');
      const axiosGet = jest.spyOn(axios, 'get').mockImplementationOnce(() => Promise.reject(mockError));

      const received = await getFilterItems().catch((error) => error);
      const expected = mockError;

      expect(axiosGet).toHaveBeenCalledTimes(1);
      expect(received).toEqual(expected);
    });
  });

  describe('When getMovies called', () => {
    const movies = [  {
        "id": "1",
        "title": "Pulp Fiction",
        "image": "/images/movies/pulp.jpg",
        "release_date": "2004-01-01",
        "genre": ["crime", "documentary"],
        "movieURL": "https://",
        "rating": 7.8,
        "runtime": 89,
        "description": "some description..."
    },
    {
        "id": "2",
        "title": "Bohemain Rhapsody",
        "image": "/images/movies/bohemain.jpg",
        "release_date": "2003-01-01",
        "genre": ["comedy"],
        "movieURL": "https://",
        "rating": 7.5,
        "runtime": 90,
        "description": ""
    }];
    it('When getMovies with filter parameters', async () => {
        // mocks
        const filterParams = {
          orderBy: "asc",
          searchBy: undefined
        };
        //(fetch as jest.MockedFunction<any>).mockReturnValue(JSON.stringify(movies));
        const globalFetch = jest.spyOn(globalThis, 'fetch').mockReturnValue(Promise.resolve<any>({json: () => Promise.resolve(movies)}));
        // act
        const received = await getMovies(filterParams);
        const expected = movies;
        // Then it should return list of movies
        expect(globalFetch).toHaveBeenCalledTimes(1);
        expect(received).toEqual(expected);
    });
    it('When getMovies without filter parameters', async () => {
      // mocks
      const filterParams = {};
      const globalFetch = jest.spyOn(globalThis, 'fetch').mockReturnValue(Promise.resolve<any>({json: () => Promise.resolve(movies)}));
      // act
      const received = await getMovies(filterParams);
      const expected = movies;
      // Then it should return list of movies
      setTimeout(()=>{
        expect(globalFetch).toHaveBeenCalledTimes(1);
        expect(received).toEqual(expected);
      });
  });
});
});
