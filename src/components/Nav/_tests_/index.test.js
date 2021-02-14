import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //Does not match!!!
        expect(asFragment()).toMatchSnapshot();
    });
})
// test for emoji
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})
//visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });

})