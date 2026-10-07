export const PRIMARY_COLOR = 'rgba(18, 72, 26, 1)';

export const CARD_SHADOW = '0 8px 24px rgba(0, 0, 0, 0.15)';
export const INPUT_SHADOW = '0 2px 6px rgba(0, 0, 0, 0.15)';

export const antdTheme = {
  token: {
    colorPrimary: PRIMARY_COLOR,
    borderRadius: 6,
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    Card: {
      boxShadowTertiary: CARD_SHADOW,
      borderRadiusLG: 16,
    },
    Menu: {
      itemSelectedBg: 'transparent',
      itemSelectedColor: PRIMARY_COLOR,
    },
  },
};