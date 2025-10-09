import { Select, SelectContent, SelectGroup, SelectItem, SelectValue } from "@components/ui/select"
import { SelectTrigger } from "@radix-ui/react-select"
import { SectionCategory } from "./components"
import styles from './GridView.module.scss'

type GridViewProps = {}

const GridView: React.FC<GridViewProps> = ( props ) => {
  return (
    <section className={styles.collection_wrapper}>
      <SectionCategory />
      <section className={styles.collection_content}>
        <section className={styles.related_categories}>
          <h3>Danh mục liên quan</h3>
        </section>
        <section className={styles.filter_products}>
          <div className={styles.filter_products_header}>
            <Select>
              <SelectTrigger className={styles.sort_trigger}>
                <SelectValue placeholder='Sắp xếp' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem className={styles.sort_item} value='best_seller'>Bán chạy nhất</SelectItem>
                  <SelectItem className={styles.sort_item} value='price_highest'>Giá cao nhất</SelectItem>
                  <SelectItem className={styles.sort_item} value='price_lowest'>Giá thấp nhất</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p>123 products</p>
          </div>
          <div className={styles.filter_products_content}>
            <div className={styles.filter_products_content_header}>
              <h4>Category</h4>
            </div>
          </div>
        </section>
        <search>

        </search>
      </section>
    </section>
  )
}
export default GridView