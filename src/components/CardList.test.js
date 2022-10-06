import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    },
    {
      id: 2,
      name: 'Artur Mleczko',
      username: 'ArturArtur',
      email: 'artur@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})