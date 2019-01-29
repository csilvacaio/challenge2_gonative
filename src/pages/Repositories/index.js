import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import api from '~/services/api';
import Header from '~/components/Header';

import styles from './styles';
import RepositoryItem from './RepositoryItem';

class Repositories extends Component {
  state = {
    repository: undefined,
    repositories: [],
    loading: false,
  };

  async componentDidMount() {
    const repositories = await AsyncStorage.getItem('@Desafio02:repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  repositoryAlreadyExists = (repositoryId) => {
    const { repositories } = this.state;
    return !!repositories.find(repo => repo.id === repositoryId);
  };

  addRepository = async () => {
    const { repository, repositories } = this.state;
    if (repository) {
      this.setState({ loading: true });
      try {
        const { data } = await api.get(`repos/${repository}`);
        const newRepository = {
          id: data.id,
          name: data.name,
          organization: data.owner.login,
          avatar: data.owner.avatar_url,
        };

        console.tron.log(this.repositoryAlreadyExists(newRepository.id));
        if (this.repositoryAlreadyExists(newRepository.id)) {
          return;
        }

        const newRepositories = [...repositories, newRepository];

        this.setState(
          {
            repositories: newRepositories,
          },
          this.storeInAsyncStorage,
        );
      } catch (err) {
        return;
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  storeInAsyncStorage = async () => {
    const { repositories } = this.state;
    await AsyncStorage.setItem('@Desafio02:repositories', JSON.stringify(repositories));
  };

  handleOnChangeRepository = (repository) => {
    this.setState({ repository });
  };

  renderRepository = ({ item }) => <RepositoryItem repository={item} />;

  renderRepositoriesList = () => {
    const { repositories } = this.state;
    return (
      <FlatList
        data={repositories}
        keyExtractor={repo => String(repo.id)}
        renderItem={this.renderRepository}
      />
    );
  };

  render() {
    const { repository, loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.repositoryInputContainer}>
          <View style={styles.repositoryTextContainer}>
            <TextInput
              style={styles.repositoryInput}
              placeholder="Adicionar novo repositório"
              value={repository}
              onChangeText={this.handleOnChangeRepository}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.iconContainer}>
            {loading ? (
              <ActivityIndicator size="small" />
            ) : (
              <TouchableOpacity onPress={this.addRepository}>
                <Icon name="plus" size={18} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.line} />

        {this.renderRepositoriesList()}
      </View>
    );
  }
}

export default Repositories;
