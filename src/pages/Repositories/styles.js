import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },

  iconContainer: {
    width: 20,
  },

  line: {
    borderBottomColor: colors.light,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },

  repositoryInput: {
    paddingHorizontal: metrics.basePadding,
  },

  repositoryInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin * 2,
  },

  repositoryTextContainer: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    height: 40,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
