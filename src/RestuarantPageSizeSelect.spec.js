import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantPageSizeSelect } from './RestaurantPageSizeSelect';

describe('VehiclePageSizeSelect', () => {
  it('should render correctly', () => {
    shallow(<RestaurantPageSizeSelect limit={10} onChangeLimit={jest.fn()} />);
  });
});
