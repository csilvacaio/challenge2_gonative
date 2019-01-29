import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import { colors } from '~/styles';

class RepositoryItem extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      organization: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleRepositorySelect = () => {
    const {
      navigation,
      repository: { name, organization },
    } = this.props;

    navigation.navigate('Issues', {
      repositoryName: name,
      repositoryOwner: organization,
    });
  };

  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.avatar} source={{ uri: repository.avatar }} />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.repoName}>{repository.name}</Text>
            <Text style={styles.orgName}>{repository.organization}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.handleRepositorySelect}>
              <Icon name="angle-right" size={18} color={colors.light} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(RepositoryItem);
