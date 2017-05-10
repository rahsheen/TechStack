import 'react-native';
import React from 'react';
import { ListItem } from '../src/components/ListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const mockLibrary = {
        "id": 2,
        "title": "Redux",
        "description": "Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test."
    }

test('renders correctly', () => {
  const tree = renderer.create(
      <ListItem library={mockLibrary} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})