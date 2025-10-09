import { CATEGORY_LIST } from '@pages/gid-view/constants'
import Image from 'next/image'
import styles from './SectionCategory.module.scss'

type SectionCategoryProps = {}

export const SectionCategory: React.FC<SectionCategoryProps> = ( props ) => {
  return (
    <section className={styles.section_category_wrapper}>
      <h3>Danh mục sản phẩm</h3>
      <div className={styles.list_category}>
        {CATEGORY_LIST.map( category => (
          <div key={category.id} className={styles.category_item}>
            <Image width={120} height={120} alt={category.label} src={category.thumb_img} />
            <p>{category.label}</p>
          </div>
        ) )}
      </div>
    </section>
  )
}