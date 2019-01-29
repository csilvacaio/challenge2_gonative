import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  filterContainer: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: metrics.baseMargin * 2,
  },

  filterOptionContainer: {
    alignItems: 'center',
    flex: 1,
    margin: metrics.baseMargin,
  },

  filterText: {
    color: colors.regular,
    fontSize: 14,
  },

  filterTextSelected: {
    fontWeight: 'bold',
  },
});

export default styles;
