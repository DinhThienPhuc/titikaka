import Layout from "./layout";
import Brands from "./sections/brands";
import HeroBanner from "./sections/hero-banner";
import MostFeatures from "./sections/most-features";
import Suit from "./sections/suit";

const App = () => {
  return (
    <Layout>
      <HeroBanner />
      <Brands />
      <Suit />
      <MostFeatures />
    </Layout>
  );
};

export default App;
