import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, FlatList, Text } from 'react-native';
import Header from '~/components/Header';
import IssuesFilter from './IssuesFilter';
import IssueItem from './IssueItem';

import api from '~/services/api';
import styles from './styles';

class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    issues: [],
    filterOption: undefined,
    loading: false,
  };

  handleGoToRepositories = () => {
    const { navigation } = this.props;
    navigation.navigate('Repositories');
  };

  handleFilterOption = async (option) => {
    const { navigation } = this.props;
    const { filterOption } = this.state;
    this.setState({ loading: true });
    const name = navigation.getParam('repositoryName');
    const organization = navigation.getParam('repositoryOwner');
    const response = await api.get(
      `/repos/${organization}/${name}/issues?state=${option || filterOption}`,
    );
    const issues = response.data.map(issue => ({
      title: issue.title,
      avatarUrl: issue.user.avatar_url,
      user: issue.user.login,
      url: issue.html_url,
    }));
    this.setState({ issues, loading: false, filterOption: option || filterOption });
  };

  renderIssue = ({ item }) => <IssueItem item={item} />;

  renderEmptyList = () => {
    const { loading } = this.state;
    if (!loading) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyListText}>Nenhum resultado encontrado</Text>
        </View>
      );
    }
    return null;
  };

  render() {
    const { issues, loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Issues" goToPage={this.handleGoToRepositories} />
        <IssuesFilter onFilterOption={this.handleFilterOption} />
        <FlatList
          keyExtractor={issue => issue.title}
          renderItem={this.renderIssue}
          data={issues}
          refreshing={loading}
          onRefresh={this.handleFilterOption}
          ListEmptyComponent={this.renderEmptyList}
        />
      </View>
    );
  }
}

export default withNavigation(Issues);
