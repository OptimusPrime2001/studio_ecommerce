import { ProductCard } from "@components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { FEATURED_PRODUCTS } from "@lib/constants";
import styles from "./CarouselProduct.module.scss";

type CarouselProductProps = {
  title: string;
};

export const CarouselProduct: React.FC<CarouselProductProps> = (props) => {
  const { title } = props;
  return (
    <Carousel opts={{ align: "start", slidesToScroll: 1 }}>
      <div className={styles.carousel_header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.navigation_wrapper}>
          <CarouselPrevious className={styles.nav_button} />
          <CarouselNext className={styles.nav_button} />
        </div>
      </div>
      <CarouselContent>
        {FEATURED_PRODUCTS.map((product) => (
          <CarouselItem className="basis-1/4 pl-5" key={product.id}>
            <ProductCard product={product} className={styles.product_card} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
