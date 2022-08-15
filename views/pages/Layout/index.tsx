import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes, GlobalStyle } from 'views/theme';
import { useAppState } from 'src/context/AppContext';
import Header from './Header';
import Footer from './Footer';
import { StyledLayout } from './styled';

const LayoutFC: React.FC<any> = ({ children }) => {
  const { isDark } = useAppState();
  return (
    <ThemeProvider theme={themes[isDark ? 'dark' : 'light']}>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        {children}
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default LayoutFC;
