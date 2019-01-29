import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const filterOptions = { all: 'Todas', open: 'Abertas', closed: 'Fechadas' };

class IssuesFilter extends Component {
  static propTypes = { onFilterOption: PropTypes.func.isRequired };

  state = {
    selected: 'all',
  };

  componentDidMount = () => {
    const { onFilterOption } = this.props;
    const { selected } = this.state;
    onFilterOption(selected);
  };

  handleSelectOption = (option) => {
    const { onFilterOption } = this.props;
    this.setState({ selected: option });
    onFilterOption(option);
  };

  renderFilterOption = (option) => {
    const { selected } = this.state;
    let optionStyles;
    if (selected === option) {
      optionStyles = [styles.filterText, styles.filterTextSelected];
    } else {
      optionStyles = [styles.filterText];
    }
    return (
      <View key={option} style={styles.filterOptionContainer}>
        <TouchableOpacity onPress={_ => this.handleSelectOption(option)}>
          <Text style={optionStyles}>{filterOptions[option]}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.filterContainer}>
        {Object.keys(filterOptions).map(this.renderFilterOption)}
      </View>
    );
  }
}

export default IssuesFilter;
