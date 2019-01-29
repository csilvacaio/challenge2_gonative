import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
  },

  avatarContainer: {
    marginRight: metrics.baseMargin,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  icon: {
    marginHorizontal: metrics.baseMargin,
  },

  infoContainer: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  user: {
    color: colors.regular,
  },
});

export default styles;
