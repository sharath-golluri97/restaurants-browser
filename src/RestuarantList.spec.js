import React from 'react';
import { shallow, mount } from 'enzyme';
import RestaurantList from './RestaurantList.jsx';
import 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

describe('RestaurantList', () => {
  it('should render correctly', () => {
    shallow(<RestaurantList />);
  });

  it('Success', () => {
    fetchMock.mock('*', [
      {
        "Restaurant ID": 6317637,
        "Restaurant Name": "Le Petit Souffle",
        "Cuisines": "French, Japanese, Desserts",
        "Average Cost for two": 1100,
        "Currency": "Botswana Pula(P)",
        "Has Table booking": "Yes",
        "Has Online delivery": "No",
        "Aggregate rating": 4.8,
        "Rating text": "Excellent",
        "Votes": 314
      },
    ]);
    const wrapper = mount(<RestaurantList />);
    wrapper.instance().handleSort('make');
    wrapper.instance().onChangeLimit({}, { value: 20 });
    wrapper.instance().onSubmitFilter('someFilterTerm');
    wrapper.instance().onChangePage({}, { activePage: 3 });
    wrapper.instance().addFavorite({ favorite: false, id: 3 });
    fetchMock.restore();
  });

  it('Fail', () => {
    fetchMock.mock('*', {
      status: 404,
      body: {
        message: 'Some error message',
      },
    });
    const wrapper = mount(<RestaurantList />);
    wrapper.instance().handleSort('make');
    wrapper.instance().onChangeLimit({}, { value: 20 });
    wrapper.instance().onSubmitFilter('someFilterTerm');
    wrapper.instance().onChangePage({}, { activePage: 3 });
    wrapper.instance().addFavorite({ favorite: false, id: 3 });
    fetchMock.restore();
  });
});
