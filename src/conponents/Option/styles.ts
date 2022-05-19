import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      width: 108,
      height: 118,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
      borderRadius: 8,
      marginHorizontal: 6,
      backgroundColor: theme.colors.surface_secondary,
  },

  image: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },

  title: {
    width: 80,
    height: 40,
    marginTop: 10,
    color: theme.colors.text_primary,
    fontSize: 15,
    textAlign:'center',
  },

});