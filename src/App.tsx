import Layout from "./layout";
import Brands from "./sections/brands";
import HeroBanner from "./sections/hero-banner";
import Knowledge from "./sections/knowledge";
import MostFeatures from "./sections/most-features";
import Suit from "./sections/suit";
import Templates from "./sections/templates";
import UseCase from "./sections/use-case";

const App = () => {
  return (
    <Layout>
      <HeroBanner />
      <Brands />
      <Suit />
      <MostFeatures />
      <Templates />
      <UseCase />
      <Knowledge />
    </Layout>
  );
};

export default App;
