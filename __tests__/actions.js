import { selectLibrary } from '../src/actions';

it('creates a SELECT_LIBRARY action', () => {
  // You do it
  expect(selectLibrary(1000)).toEqual(
    {
      type: 'select_library',
      payload: 1000
    }
  );
  
  // Jest does it
  expect(selectLibrary(1000)).toMatchSnapshot();
});