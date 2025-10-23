import closeIcon from "@assets/svgs/close.svg";
import cartIcon from "@assets/svgs/shoppingBag.svg";
import { CommonButton, QuantitySelector } from "@components";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { formatVnd, uniqueArray } from "@utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./PanelCard.module.scss";

export const PanelCart: React.FC = () => {
  const [isOpenPanel, setIsOpenPanel] = useState( false );
  const router = useRouter();
  const handleClickCheckout = () => {
    setIsOpenPanel( false );
    router.push( "/cart-checkout?tab=checkout" );
  };
  return (
    <Sheet open={isOpenPanel} onOpenChange={setIsOpenPanel}>
      <SheetTrigger className="text-neutral_07 flex gap-x-1 cursor-pointer">
        <Image src={cartIcon} alt="cart icon" />
        <span className="index_ellipse iu-d-flexcenter dark:!bg-neutral_00 dark:!text-neutral_07">
          3
        </span>
      </SheetTrigger>
      <SheetContent className={styles.panel_cart_wrapper}>
        <SheetHeader className={styles.panel_cart_container}>
          <SheetTitle className={styles.panel_cart_title}>
            Giỏ hàng
            <Image
              onClick={() => setIsOpenPanel( false )}
              className="cursor-pointer"
              src={closeIcon}
              alt="close icon"
            />
          </SheetTitle>
          <section className={styles.panel_cart_content}>
            <section className={styles.cart_content_list}>
              {uniqueArray( 7 ).map( ( item ) => (
                <div key={item} className={styles.cart_content_item}>
                  <Image
                    className={styles.content_item_img}
                    alt="img-product"
                    width={96}
                    height={96}
                    src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lykr2byyosp955.webp"
                  />
                  <div className={styles.content_item_left}>
                    <div className={styles.item_name_price}>
                      <span className={styles.item_name}>Máy ảnh sony</span>
                      <span className={styles.item_price}>
                        {formatVnd( 900000 )}
                      </span>
                    </div>
                    <div className={styles.item_variant}>
                      <span className={styles.item_variant_text}>
                        Loại: Thiết bị quay chụp
                      </span>
                      <Image
                        className="cursor-pointer"
                        src={closeIcon}
                        alt="close icon"
                      />
                    </div>
                    <QuantitySelector count={3} />
                  </div>
                </div>
              ) )}
            </section>
            <section className={styles.cart_content_summary}>
              <div className={styles.summary_subtotal}>
                <p className={styles.sub_total_note}>
                  Bao gồm thuế. Vận chuyển tính toán khi thanh toán.
                </p>
                <div className={styles.sub_total_value}>
                  <span>Tổng tiền</span>
                  <span className={styles.sub_total_price}>
                    {formatVnd( 900000 )}
                  </span>
                </div>
              </div>
              <div className={styles.summary_button}>
                <CommonButton
                  width="full"
                  variant="primary"
                  onClick={handleClickCheckout}
                >
                  Thanh toán
                </CommonButton>
                <Link
                  className={styles.button_view_cart}
                  href="/cart-checkout?tab=cart"
                >
                  Xem giỏ hàng
                </Link>
              </div>
            </section>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
