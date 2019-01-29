import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  infoContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: metrics.baseMargin,
  },

  orgName: {
    color: colors.black,
    fontSize: 14,
  },

  repoName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
