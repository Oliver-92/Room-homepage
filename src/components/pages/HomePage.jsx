import Header from '../organisms/Header';
import HeroSlider from '../organisms/HeroSlider';
import AboutSection from '../organisms/AboutSection';
import MainTemplate from '../templates/MainTemplate';

function HomePage() {
  return (
    <MainTemplate>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
      </main>
    </MainTemplate>
  );
}

export default HomePage;
