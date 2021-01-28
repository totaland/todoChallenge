import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const stateFixture = {
  newTask: 'eat the frog 20pts',
  tasks: [
    {name: 'kill bill', points: 6},
    {name: 'get shorty', points: 12},
  ],
};

describe('', () => {
  const wrapper = mount(<App
    initialState={stateFixture}
  />);

  const text = wrapper.text();

  it('renders the task names', () => {
    expect(text).toMatch(/kill bill/);
    expect(text).toMatch(/get shorty/);
  });

  it('sorts tasks by descending point value', () => {
    expect(text.indexOf('get shorty')).toBeLessThan(text.indexOf('kill bill'));
  });

  it('renders the correct class for the point threshold', () => {
    const critical = wrapper.find('.critical');
    expect(critical.text()).toMatch(/get shorty/);

    const normal = wrapper.find('.normal');
    expect(normal.text()).toMatch(/kill bill/);
  });
});

it('parses point input in the task name', () => {
  const wrapper = mount(<App
    initialState={stateFixture}
  />);

  expect(wrapper.state().tasks.length).toEqual(2);
  wrapper.find('form#addtask').first().simulate('submit');
  expect(wrapper.state().tasks.length).toEqual(3);
  expect(wrapper.state().tasks[2].points).toEqual(20);
});
