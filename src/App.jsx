import Ads from './components/Ads';
import CTA from './components/CTA';
import CoronaUpdate from './components/CoronaUpdate';
import FeaturedNews from './components/FeaturedNews';
import Footer from './components/Footer';
import Header from './components/Header';
import HeadlineNews from './components/HeadlineNews';
import LastestVideos from './components/LastestVideos';
import MostViewed from './components/MostViewed';
import Navbar from './components/Navbar';
import RecentNews from './components/RecentNews';
import Sports from './components/Sports';
import Stories from './components/Stories';
import TopNavbar from './components/TopNavbar';
import TrendingNews from './components/TrendingNews';

const App = () => {
  return (
    <>
      <div>
        <TopNavbar />
        <Header />
        <Navbar />
        <HeadlineNews />
        <RecentNews />
        <FeaturedNews />
        <CTA />
        <Sports />
        <Stories />
        <Ads />
        <TrendingNews />
        <CoronaUpdate />
        <Footer/>
      </div>
    </>
  );
};

export default App;
