import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { SectionOne } from './maquinados/SectionOne';
import theme from './themeConfig';
import NavBar from './components/NavBar';
import { SectionTwo } from './maquinados/SectionTwo';
import { SectionExperience } from './maquinados/SectionExperience';
import { SectionCarousel } from './maquinados/SectionCarousel';
import { SectionPersonal } from './maquinados/SectionPersonal';
import SectionContact from './maquinados/SectionContact';
import { Footer } from './maquinados/Footer';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="container__home">
        <NavBar />
        <SectionOne />
      </div>
      <SectionTwo />
      <SectionExperience />
      <SectionCarousel />
      <SectionPersonal />
      <SectionContact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
