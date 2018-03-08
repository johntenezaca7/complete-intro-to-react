import React from 'react';
import Search from '../js/Search';
import { shallow } from 'enzyme';
import Showcard from '../js/ShowCard';
import preload from '../data';

test('Search renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(Showcard).length).toEqual(preload.shows.length);
});

test('Search should render correct about of shows based on search term', () => {
    const searchWord = 'black';
    const component = shallow(<Search />);
    component.find('input').simulate('change', { target: { value: searchWord}});
    const showCount = preload.shows
                 .filter(show => `${show.title} ${show.description}`.toUpperCase()
                .indexOf(searchWord.toUpperCase()) >= 0)

    expect(component.find(Showcard).length).toEqual(showCount.length);

})