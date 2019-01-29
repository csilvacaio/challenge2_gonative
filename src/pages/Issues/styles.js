import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  emptyListContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    margin: metrics.baseMargin * 2,
  },

  emptyListText: {
    color: colors.darker,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
