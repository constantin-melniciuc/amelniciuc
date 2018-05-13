import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';


export default class Icon extends PureComponent {
  static defaultProps = {
    name: 'menu',
    size: 'inherit',
    color: 'black',
  }
  render() {
    // eslint-disable-next-line
    const icon = require(`../assets/icons/${this.props.name}.svg`);
    return (
      <i className={`icon icon--${this.props.name} icon--size-${this.props.size} icon--color-${this.props.color}`}>
        <SVG
          src={icon}
          cacheGetRequests
        />
      </i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    'arrow_down',
    'colors',
    'facebook',
    'forms',
    'instagram',
    'linkedin',
    'type'
  ]).isRequired,
  size: PropTypes.oneOf([
    'inherit',
    'small',
    'medium',
    'large',
  ]),
  color: PropTypes.oneOf([
    'white',
    'black',
    'grey',
    'current',
  ]),
};