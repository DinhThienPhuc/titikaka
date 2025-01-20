import Layout from "./layout";
import Brands from "./sections/brands";
import HeroBanner from "./sections/hero-banner";
import MostFeatures from "./sections/most-features";
import Suit from "./sections/suit";
import Templates from "./sections/templates";

const App = () => {
  return (
    <Layout>
      <HeroBanner />
      <Brands />
      <Suit />
      <MostFeatures />
      <Templates />
    </Layout>
  );
};

export default App;
