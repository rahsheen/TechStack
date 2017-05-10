import { test, expect } from 'chai';
import SelectionReducer from '../src/reducers/SelectionReducer'

test('it modifies state appropriately', () => {
    expect(
        SelectionReducer(null,
            {
                type: 'select_library',
                payload: 1000
            }))
        .toMatchSnapshot();
});

