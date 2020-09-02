import React from 'react';
import { shallow } from 'enzyme';
import BigCarousel from '../components/carousel/index';
import Footer from '../components/footer';
import Menu from '../components/menu';
import LittleCarousel from '../components/littleCarousel';
import SearchComponent from '../components/search';
describe('Testing render Components', () => {

    it('should  BigCarousel render correctly', () => {
        const wrapper = shallow( <
            BigCarousel id = {
                "movie/508"
            }
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should LittleCarousel render correctly', () => {
        const wrapper = shallow( <
            LittleCarousel id = "movie/3685" / >
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should Footer render correctly', () => {
        const wrapper = shallow( <
            Footer / >
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should Menu render correctly', () => {
        const wrapper = shallow( <
            Menu / >
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should SearchComponent render correctly', () => {
        const wrapper = shallow( <
            SearchComponent id = { "a" }/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});