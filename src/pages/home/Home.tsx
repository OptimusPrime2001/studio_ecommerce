
import { BestSeller, FeaturedProducts, HeroCarousel, NewArrivals, ProductCategories } from "./components"
import styles from './Home.module.scss'

const Home: React.FC = () => {
  return (
    <main className={styles.home_wrapper}>
      <HeroCarousel />
      <section className={styles.home_main_content}>
        <ProductCategories />
        <FeaturedProducts />
        <BestSeller />
        <NewArrivals />
      </section>

    </main>
  )
}

export default Home