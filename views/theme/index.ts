import GlobalStyle from './styled';

const globalTheme = {
  borderRadius: '4px',
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  lightForm: {
    label: '#848e9c',
    text: 'rgb(30, 35, 41)',
    border: 'rgb(234, 236, 239)',
  },
  positiveText: 'rgb(14, 203, 129)',
  negativeText: 'rgb(246, 70, 93)',
};

const dark = {
  colors: {
    mainBlue: '#1B449C',
    textColor: '#eaecef',
    secondaryTextColor: '#848e9c',
    primary: '#FBAB18',
    background: '#181A20',
    highlightBackground: '#0B0E11',
    hoverColor: '#2B3139',
  },
  components: {
    slider: {
      dotActiveBg: 'rgb(183, 189, 198)',
      dotActiveBorder: 'rgb(30, 35, 41)',
      trackActive: 'rgb(183, 189, 198)',
      handleBorder: 'rgb(245, 245, 245)',
      handleBg: 'rgb(43, 49, 57)',
      stepBg: 'rgb(71, 77, 87)',
      dotBg: 'rgb(30, 35, 41)',
    },
    button: {
      light: 'rgb(71, 77, 87)',
      textLight: '#fff',
      color: 'rgb(33, 40, 51)',
      background: '#FBAB18',
      border: '#646b6c',
      lightBackground: '#474d57',
    },
    dropdown: {
      background: '#1E2329',
      submenu: '#fff',
      divider: '#111622',
    },
    form: {
      label: '#848e9c',
      text: '#fff',
      border: 'rgb(71, 77, 87)',
    },
    alert: {
      warning: '#3c2601',
    },
    tooltip: {
      background: '#fff',
      color: '#000000',
    },
  },
  header: {
    hover: '#2B3139',
    subTitle: '#a7b1bb',
  },
  footerBorder: 'rgb(39, 42, 46)',
  home: {
    banner: 'images/home/banner.svg',
    whyBackgroundHover: '#181A20',
    tableItemHover: '#2B3139',
    tableBorder: '#474D57',
    startTradeBg: 'rgb(11, 14, 17)',
    tradeIntro: {
      background: '#181A20',
      title: '#fff',
      description: '#7d7d7d',
      onText: '#454545',
      buttonBg: '#232323',
      fiatBg: 'rgb(43, 49, 57)',
      activeFiatColor: 'rgb(234, 236, 239)',
    },
    news: {
      background: '#181A20',
      title: '#fff',
      description: '#646b6c',
      itemBackground: '#23262f',
    },
  },
  trading: {
    background: 'rgb(22, 26, 30)',
    border: '#252930',
    label: 'rgb(132, 142, 156)',
    tableBg: 'rgb(20, 23, 32)',
    tableHover: 'rgb(33, 47, 63)',
    text: 'rgb(221, 221, 222)',
    formBg: 'rgb(30, 32, 38)',
    inputBg: 'rgba(43, 47, 54, 0.9)',
    disabledInput: 'rgb(71, 77, 87)',
    filterButton: 'rgb(35, 40, 45)',
    activeFilter: 'rgb(71, 77, 87)',
  },
  languageModal: {
    light: '#fff',
    light2: 'rgb(39, 42, 46)',
    light3: 'rgb(43, 49, 57)',
    dark5: 'rgb(30, 35, 41)',
  },
  auth: {
    typeActiveBg: '#2B3139',
    qrCodeBg: '#fff',
    register: {
      stepActiveText: '#fff',
      stepNumberBg: 'rgb(39, 42, 46)',
    },
  },
  launchpool: {
    tableBackground: 'rgb(43, 49, 57)',
    divider: '#474D57',
    statusBackground: '#2B3139',
    cardBackground: 'rgb(24, 26, 32)',
    lightBackground:
      'linear-gradient(21.1deg, rgb(43, 51, 66) 27.85%, rgb(32, 44, 48) 72.15%)',
  },
  earn: {
    cardBackground:
      'linear-gradient(293.42deg, #181a20 0%, rgba(94, 102, 115, 0.5) 97.7%)',
    tabButton: '#3C2601',
  },
  // Future migration
  futureTrading: {
    background: 'rgb(18, 19, 20)',
    cardBg: 'rgb(25, 25, 25)',
    formItem: 'rgb(25, 25, 25)',
    filterButtonBg: 'rgb(24, 29, 44)',
    filterButtonColor: 'rgb(114, 123, 138)',
    activeFilterBg: 'rgba(53, 122, 255, 0.1)',
    pair: {
      mark: 'rgb(72, 72, 72)',
      formBg: 'rgb(35,35,35)',
      tableBorder: 'rgb(45, 49, 59)',
      tableHover: 'rgb(33, 47, 63)',
      tableColor: 'rgb(20, 23, 32)',
      openButton: 'rgb(30, 30, 30)',
      itemBorder: 'rgb(18, 19, 20)',
      selectedBg: 'rgb(40, 40, 40)',
      text: 'rgb(125, 125, 125)',
      activeText: 'rgb(221, 221, 222)',
      positiveText: 'rgb(14, 203, 129)',
      negativeText: 'rgb(246, 70, 93)',
      dropdownBg: 'rgb(48, 66, 87)',
      tagButton: 'rgb(33, 48, 64)',
    },
    table: {
      head: 'rgb(105, 114, 129)',
    },
  },
  slider: {
    rail: 'rgb(33, 47, 63)',
    text: 'rgb(125, 125, 125)',
  },
  button: {
    color: '#575756',
    background: '#FFCD00',
    border: '#646b6c',
    light: {
      background: '#fff',
      border: '#fff',
    },
  },

  boxShadow: '#111622',
  ...globalTheme,
};

const light = {
  colors: {
    mainBlue: '#1B449C',
    background: '#fff',
    highlightBackground: '#fafafa',
    textColor: '#212833',
    secondaryTextColor: '#707a8a',
    primary: '#FBAB18',
    hoverColor: '#F5F5F5',
  },
  components: {
    slider: {
      dotActiveBg: 'rgb(71, 77, 87)',
      dotActiveBorder: 'rgb(255, 255, 255)',
      trackActive: 'rgb(71, 77, 87)',
      handleBorder: 'rgb(43, 49, 57)',
      handleBg: 'rgb(255, 255, 255)',
      stepBg: 'rgb(220, 224, 229)',
      dotBg: '#fff',
      disabledInput: 'rgb(234, 236, 239)',
    },
    button: {
      light: 'rgb(234, 236, 239)',
      textLight: '#000',
      color: 'rgb(33, 40, 51)',
      background: '#FBAB18',
      border: '#646b6c',
      lightBackground: '#eaecef',
    },
    form: {
      label: '#848e9c',
      text: 'rgb(30, 35, 41)',
      border: 'rgb(234, 236, 239)',
    },
    dropdown: {
      background: '#fff',
      submenu: '#646b6c',
      divider: '#e2e2e2',
    },
    alert: {
      warning: '#fef6d8',
    },
    tooltip: {
      background: 'rgba(0, 0, 0, 0.9)',
      color: '#fff',
    },
  },
  header: {
    hover: 'rgb(245, 245, 245)',
    subTitle: '#a7b1bb',
  },
  footerBorder: '#eaecef',
  home: {
    banner: 'images/home/banner-light.svg',
    whyBackgroundHover: '#f2f4f4',
    tableItemHover: 'rgb(245, 245, 245)',
    tableBorder: 'rgb(234, 236, 239)',

    startTradeBg: '#FAFAFA',
    tradeIntro: {
      background: '#fff',
      title: '#111f2c',
      description: '#7d7d7d',
      onText: '#b3c3c6',
      buttonBg: '#f5f7f7',
      fiatBg: '#f5f5f5',
      activeFiatColor: '#1e2329',
    },
    news: {
      itemBackground: '#f2f4f4',
      background: '#fff',
      title: '#111f2c',
      description: '#919899',
    },
  },
  auth: {
    typeActiveBg: 'rgb(245, 245, 245)',
    qrCodeBg: 'rgb(245, 245, 245)',
    register: {
      stepActiveText: 'rgb(30, 35, 41)',
      stepNumberBg: 'rgb(234, 236, 239)',
    },
  },
  trading: {
    background: '#fff',
    border: '#EEF0F2',
    label: 'rgb(112, 122, 138)',
    formBg: '#fff',
    tableBg: '#fff',
    tableHover: 'rgb(246, 247, 250)',
    text: 'rgb(43, 46, 57)',
    inputBg: 'rgba(230, 232, 234, 0.6)',
    filterButton: 'rgb(255, 255, 255)',
    activeFilter: 'rgb(234, 236, 239)',
  },
  languageModal: {
    light: '#000',
    light2: 'rgb(234, 236, 239)',
    light3: 'rgb(245, 245, 245)',
    dark5: '#fff',
  },
  launchpool: {
    divider: 'rgb(234, 236, 239)',
    statusBackground: 'rgb(245, 245, 245)',
    cardBackground: '#FFFFFF',
    lightBackground:
      'linear-gradient(80.41deg, rgb(245, 249, 250) 0%, rgb(249, 255, 255) 100%)',
    tableBackground: '#f5f5f5',
  },
  earn: {
    cardBackground: '#f5f5f5',
    tabButton: 'rgb(254, 246, 216)',
  },

  futureTrading: {
    formItem: 'rgb(247, 247, 247)',
    background: 'rgb(233, 236, 241)',
    cardBg: 'rgb(255, 255, 255)',
    filterButtonBg: 'rgb(255, 255, 255)',
    filterButtonColor: 'rgb(132, 142, 156)',
    activeFilterBg: 'rgba(53, 122, 255, 0.1)',
    pair: {
      mark: 'rgb(231, 231, 231)',
      formBg: 'rgb(255, 255, 255)',
      tableBorder: 'transparent',
      tableHover: 'rgb(246, 247, 250)',
      tableColor: 'rgb(255, 255, 255)',
      openButton: 'rgb(247, 247, 247)',
      itemBorder: 'rgb(233, 236, 241)',
      selectedBg: 'rgb(223, 232, 255)',
      text: 'rgb(105, 114, 129)',
      activeText: 'rgb(43, 46, 57)',
      positiveText: 'rgb(14, 203, 129)',
      negativeText: 'rgb(246, 70, 93)',
      dropdownBg: 'rgb(238, 240, 246)',
      tagButton: 'rgba(53, 122, 255, 0.1)',
    },
    table: {
      head: 'rgb(105, 114, 129)',
    },
  },
  slider: {
    rail: 'rgb(238, 240, 246)',
    text: 'rgb(105, 114, 129)',
  },
  button: {
    color: '#575756',
    background: '#FFCD00',
    border: '#646b6c',
    light: {
      background: 'transparent',
      border: '#575756',
    },
  },

  boxShadow: '#e2e2e2',
  ...globalTheme,
};

const themes = {
  dark: dark,
  light: light,
};

export { GlobalStyle, themes };
