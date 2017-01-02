import { shallow } from 'enzyme';
import DepartureSelect from  './DepartureSelect';
import React from 'react';

describe('Components', () => {

	describe('<DepartureSelect/>', () => {

		const props = {
			stations: [
				{
					label: "Abbey Wood", 
					value: "ABW"
				},
				{
					label: "London Waterloo", 
					value: "WAT"
				},
				{
					label: "London Paddington", 
					value: "PAD"
				},

			],
			selectStation: jest.fn()
		}

		let departureSelect;

		it('should render without crashing', () => {

			departureSelect = shallow(
				<DepartureSelect {...props} />
			);
			expect(departureSelect.length).toEqual(1);
		})

		it('should contain <VirtualizedSelect>', () => {

			departureSelect = shallow(
				<DepartureSelect {...props} />
			);
			expect(departureSelect.find('VirtualizedSelect').length).toEqual(1);
		})

		it('should show the link when a value is selected', () =>{
			departureSelect = shallow(
				<DepartureSelect {...props} selectedValue={undefined}/>
			);
			expect(departureSelect.find('Link').length).toBe(1)
		})

		
		
	})

})