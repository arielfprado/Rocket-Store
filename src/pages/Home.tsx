import { Carousel } from "../components/Carousel";
import * as Styles from "../styles/pages/Home";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Categories } from "../components/Categories";

export function Home() {
  return (
    <Styles.Container>
      <Carousel />
      <FeaturedProducts />
      <Categories />
    </Styles.Container>
  );
}
