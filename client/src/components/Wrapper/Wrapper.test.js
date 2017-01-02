import { shallow } from 'enzyme';
import Wrapper from  './Wrapper';
import React from 'react';

describe('Wrapper', () => {
	
	const wrapper = shallow(
		<Wrapper>
			<div location={{pathname:"/child1"}}>Child 1</div>
			<div location={{pathname:"/child2"}}>Child 2</div>
		</Wrapper>
	);

	it('should render without crashing', () => {
		expect(wrapper.length).toEqual(1);
	})

	it('should contain app className', () => {
		expect(wrapper.find('.app').length).toEqual(1);
	})

	it('should show props.children', () => {
		expect(wrapper.find('[location]').length).toEqual(2);
	})

})