import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsRef,
  itSupportsMargins,
  itIsPolymorphic,
} from '@mantine/tests';
import { Avatar } from './Avatar';

const img =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

describe('@mantine/core/Avatar', () => {
  checkAccessibility([
    mount(<Avatar src={img} alt="It's me!" />),
    mount(<Avatar src={null} alt="It's me!" />),
  ]);

  itSupportsClassName(Avatar, { src: img });
  itSupportsMargins(Avatar, { src: img });
  itSupportsOthers(Avatar, { src: img });
  itSupportsStyle(Avatar, { src: img });
  itIsPolymorphic(Avatar, { src: img });
  itSupportsRef(Avatar, { src: img }, HTMLDivElement);

  itSupportsStylesApi(Avatar, { src: img }, ['root', 'image'], 'Avatar', 'with-image');
  itSupportsStylesApi(
    Avatar,
    { src: null },
    ['root', 'placeholder', 'placeholderIcon'],
    'Avatar',
    'with-placeholder'
  );

  it('passes src and alt to image', () => {
    const element = shallow(<Avatar src={img} alt="test-alt" />)
      .render()
      .find('img');
    expect(element.attr('src')).toBe(img);
    expect(element.attr('alt')).toBe('test-alt');
  });

  it('renders placeholder if src was not provided', () => {
    const element = shallow(<Avatar src={null} alt="no-image-test" />);
    expect(element.render().find('.mantine-Avatar-placeholder')).toHaveLength(1);
    expect(element.render().find('.mantine-Avatar-placeholder').attr('title')).toBe(
      'no-image-test'
    );
  });

  it('renders children if src was not given', () => {
    const element = shallow(
      <Avatar src={null} alt="no-image-test">
        <span className="test">test-placeholder</span>
      </Avatar>
    );

    expect(element.render().find('.mantine-Avatar-placeholder').find('.test').text()).toBe(
      'test-placeholder'
    );
  });

  it('has correct displayName', () => {
    expect(Avatar.displayName).toEqual('@mantine/core/Avatar');
  });
});
