// Game/game.test.js
import React from 'react'
import Game from './Game'
import {shallow, mount} from 'enzyme'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

it('renders without crashing', () => {
  shallow(<Game />);
});

describe("Start Game Button Test", () => {
  it("Renders correctly in DOM", () => {
      shallow(
          <Button>Start Song</Button> 
      );
  });
});

describe("Go Back Button Test", () => {
  it("Renders correctly in DOM", () => {
      shallow(
          <Button text="Go for" />
      );
  });
});

// test('it calls start game on button click', () => {
//   const mockLogout = jest.fn();
//   const wrapper = shallow(<Button onClick={onClick}>Start Game</Button>);
//   wrapper.find('button').at(0).simulate('click');
//   expect(mockLogout).toHaveBeenCalled();
// });