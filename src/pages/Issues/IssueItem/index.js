import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from '~/styles';
import styles from './styles';

class IssueItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      avatarUrl: PropTypes.string,
      title: PropTypes.string,
      user: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
  };

  handleOpenIssue = () => {
    const {
      item: { url },
    } = this.props;
    Linking.openURL(url);
  };

  render() {
    const {
      item: { avatarUrl, user, title },
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.user}>{user}</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={this.handleOpenIssue}>
            <Icon color={colors.light} name="angle-right" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default IssueItem;
