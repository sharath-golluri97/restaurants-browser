import React from 'react';
import { mount, shallow } from 'enzyme';
import { RestaurantTableHeader } from './RestaurantTableHeader';
import { Table } from 'semantic-ui-react';

describe('RestaurantTableHeader', () => {
  it('should render correctly', () => {
    shallow(<RestaurantTableHeader handleSort={jest.fn()} />);
  });

  it('Column Header On Click', () => {
    const wrapper = mount(
      <Table>
        <RestaurantTableHeader handleSort={jest.fn()} column={'id'} />
      </Table>
    );
    wrapper.find(Table.HeaderCell).forEach(node => {
      node.simulate('click');
    });
  });

  it('Sorted Column', () => {
    const columns = [
      'id',
      'make',
      'model',
      'year',
      'package',
      'fuelType',
      'transmission',
      'favorite',
    ];

    columns.forEach(column => {
      shallow(
        <Table>
          <RestaurantTableHeader column={column} direction={'ascending'} />
        </Table>
      );
    });
  });
});
