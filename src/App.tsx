import Layout from "./layout";
import Brands from "./sections/brands";
import HeroBanner from "./sections/hero-banner";

const App = () => {
  return (
    <Layout>
      <HeroBanner />
      <Brands />
    </Layout>
  );
};

export default App;
