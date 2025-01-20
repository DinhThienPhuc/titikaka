import Layout from "./layout";
import Brands from "./sections/brands";
import HeroBanner from "./sections/hero-banner";
import Suit from "./sections/suit";

const App = () => {
  return (
    <Layout>
      <HeroBanner />
      <Brands />
      <Suit />
    </Layout>
  );
};

export default App;
