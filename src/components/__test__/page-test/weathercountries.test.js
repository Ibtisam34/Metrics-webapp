import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Countries from '../../../pages/homepage/weathercountries';

describe('Testing Countries component', () => {
  test('Testing the dom for success rendering elements on Countries component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(getByTestId('countries-wrapper')).toBeInTheDocument();
  });
  test('Testing the dom for non existing elemente on the page after rendering', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );
    expect(queryByTestId('nothing')).toBeNull();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Countries />
        </Provider>,

      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
