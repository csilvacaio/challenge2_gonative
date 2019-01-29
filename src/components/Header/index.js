import React from 'react';
import {
  View, StatusBar, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const Header = ({ title, goToPage }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    {goToPage && (
      <View style={styles.left}>
        <TouchableOpacity onPress={goToPage}>
          <Icon style={styles.icon} name="angle-left" size={20} />
        </TouchableOpacity>
      </View>
    )}
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  goToPage: PropTypes.func,
};

Header.defaultProps = {
  goToPage: undefined,
};

export default Header;
