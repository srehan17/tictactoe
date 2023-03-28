// Board/board.test.js
import React from 'react'
import Board from './Board'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Board />);
});


// it('calls onClick event on click of a board square', () =>{
//   let squares = Array(9).fill(null)
//   const onClick = jest.fn();
//   let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
//   wrapper.find('button.square').first().simulate('click');
//   expect(onClick).toBeCalledWith(0)
// })