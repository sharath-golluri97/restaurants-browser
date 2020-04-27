import React from 'react';
import { mount } from 'enzyme';
import { RestaurantRow } from './RestaurantRow';
import { Button, Table } from 'semantic-ui-react';

describe('RestaurantRow', () => {
  it('should render correctly', () => {
    const restaurants = [
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
      {
        "Restaurant ID": 6304287,
        "Restaurant Name": "Izakaya Kikufuji",
        "Cuisines": "Japanese",
        "Average Cost for two": 1200,
        "Currency": "Botswana Pula(P)",
        "Has Table booking": "Yes",
        "Has Online delivery": "No",
        "Aggregate rating": 4.5,
        "Rating text": "Excellent",
        "Votes": 591
      },
      {
        "Restaurant ID": 6300002,
        "Restaurant Name": "Heat - Edsa Shangri-La",
        "Cuisines": "Seafood, Asian, Filipino, Indian",
        "Average Cost for two": 4000,
        "Currency": "Botswana Pula(P)",
        "Has Table booking": "Yes",
        "Has Online delivery": "No",
        "Aggregate rating": 4.4,
        "Rating text": "Very Good",
        "Votes": 270
      }
    ];

    const wrapper = mount(
      <Table>
        <Table.Body>
          <RestaurantRow
            restaurant={restaurants[0]}
            addFavorite={restaurant => {
              restaurant.favorite = !restaurant.favorite;
            }}
          />
        </Table.Body>
      </Table>
    );

    wrapper.find(Button).forEach(node => {
      node.simulate('click');
    });
  });
});
