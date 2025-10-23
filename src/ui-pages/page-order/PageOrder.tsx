"use client";
import { Button } from "@components/ui/button";
import { Checkbox } from "@components/ui/checkbox";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import Image from "next/image";
import type React from "react";
import { useMemo, useState } from "react";
import styles from "./PageOrder.module.scss";

type Item = {
  name: string;
  price: number;
  qty: number;
  img: string;
  color?: string;
  size?: string;
};

const demoItems: Item[] = [
  {
    name: "Indian Plov Mandi",
    price: 120.5,
    qty: 3,
    img: "/next.svg",
    color: "White",
  },
  {
    name: "Product name goes here",
    price: 24.0,
    qty: 2,
    img: "/window.svg",
    color: "White",
  },
  {
    name: "Elegant Modern Coffee Table",
    price: 12.99,
    qty: 3,
    img: "/globe.svg",
    color: "White",
  },
  {
    name: "Great Product Name",
    price: 12.99,
    qty: 1,
    img: "/vercel.svg",
    size: "XXL",
  },
];
type PageOrderProps = {}

export const PageOrder: React.FC<PageOrderProps> = ( props ) => {
  const [delivery, setDelivery] = useState( "pickup" ); // pickup | standard | express
  const [offers, setOffers] = useState( false );
  const [coupon, setCoupon] = useState( "" );
  const [discount, setDiscount] = useState( 0 );

  const deliveryCost = useMemo( () => {
    switch ( delivery ) {
      case "express":
        return 30000; // 30k
      case "standard":
        return 0;
      case "pickup":
      default:
        return 0;
    }
  }, [delivery] );

  const subtotal = useMemo(
    () => demoItems.reduce( ( sum, i ) => sum + i.price * i.qty, 0 ),
    [],
  );

  const tax = Math.round( subtotal * 0.02 * 100 ) / 100; // 2% ví dụ

  const total = Math.max( 0, subtotal - discount + deliveryCost + tax );

  const applyCoupon = () => {
    if ( coupon.trim().toLowerCase() === "save5" ) {
      setDiscount( 5400 ); // ví dụ: 5.4k
    } else {
      setDiscount( 0 );
    }
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = ( e ) => {
    e.preventDefault();
    // TODO: tích hợp API checkout
    console.log( { delivery, offers, coupon, total } );
  };

  return (
    <main className={styles.pageOrder}>
      <div className={styles.layout}>
        <section className={`${styles.card} ${styles.left}`}>
          <h1 className={styles.title}>Đặt hàng</h1>
          <form className={styles.form} onSubmit={onSubmit}>
            {/* Thông tin liên hệ */}
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Thông tin liên hệ</h2>
              <div className={styles.row}>
                <div className={styles.field}>
                  <Label htmlFor="fullname">Họ và tên</Label>
                  <Input
                    id="fullname"
                    name="fullname"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <Label htmlFor="phone">Điện thoại</Label>
                  <div className={styles.phoneWrap}>
                    <Input
                      className={styles.phoneCode}
                      defaultValue="+84"
                      aria-label="Mã quốc gia"
                    />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="0901234567"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <Label htmlFor="email">Email (không bắt buộc)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className={styles.field}>
                  <Label htmlFor="whatsapp">WhatsApp (không bắt buộc)</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Số WhatsApp"
                  />
                </div>
              </div>
              <div className={styles.offers}>
                <Checkbox
                  id="offers"
                  checked={offers}
                  onCheckedChange={( v ) => setOffers( Boolean( v ) )}
                />
                <Label htmlFor="offers">Gửi email khuyến mãi hàng tuần</Label>
              </div>
            </div>

            {/* Địa chỉ giao hàng */}
            <div className={styles.block}>
              <h2 className={styles.blockTitle}>Địa chỉ giao hàng</h2>
              <div className={styles.row}>
                <div className={styles.field}>
                  <Label>Quốc gia</Label>
                  <Select defaultValue="vn">
                    <SelectTrigger aria-label="Chọn quốc gia">
                      <SelectValue placeholder="Chọn quốc gia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vn">Việt Nam</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="th">Thái Lan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className={styles.field}>
                  <Label>Thành phố</Label>
                  <Input placeholder="Nhập tên thành phố" />
                </div>
                <div className={styles.field}>
                  <Label>Mã bưu chính</Label>
                  <Input placeholder="VD: 700000" />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <Label>Địa chỉ</Label>
                  <Input placeholder="Số nhà, đường, phường/xã" />
                </div>
                <div className={styles.field}>
                  <Label>Vị trí</Label>
                  <div className={styles.locationWrap}>
                    <Button type="button" variant="ghost">
                      Chọn vị trí trên bản đồ
                    </Button>
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <Label>Ghi chú</Label>
                <textarea
                  className={styles.textarea}
                  rows={4}
                  placeholder="Ghi chú cho đơn hàng (không bắt buộc)"
                />
              </div>

              {/* Tuỳ chọn giao hàng */}
              <div className={styles.delivery}>
                <h3 className={styles.blockTitle}>Chọn hình thức giao hàng</h3>
                <div
                  className={styles.optionGroup}
                  role="radiogroup"
                  aria-label="Hình thức giao hàng"
                >
                  <label
                    className={`${styles.option} ${delivery === "pickup" ? styles.optionActive : ""}`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={delivery === "pickup"}
                      onChange={() => setDelivery( "pickup" )}
                    />
                    <div className={styles.optionInfo}>
                      <div className={styles.optionTitle}>
                        Nhận tại cửa hàng
                      </div>
                      <div className={styles.optionDesc}>Từ điểm gần nhất</div>
                    </div>
                    <div className={styles.price}>Miễn phí</div>
                  </label>
                  <label
                    className={`${styles.option} ${delivery === "standard" ? styles.optionActive : ""}`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      checked={delivery === "standard"}
                      onChange={() => setDelivery( "standard" )}
                    />
                    <div className={styles.optionInfo}>
                      <div className={styles.optionTitle}>Tiêu chuẩn</div>
                      <div className={styles.optionDesc}>3-5 ngày làm việc</div>
                    </div>
                    <div className={styles.price}>Miễn phí</div>
                  </label>
                  <label
                    className={`${styles.option} ${delivery === "express" ? styles.optionActive : ""}`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value="express"
                      checked={delivery === "express"}
                      onChange={() => setDelivery( "express" )}
                    />
                    <div className={styles.optionInfo}>
                      <div className={styles.optionTitle}>Nhanh</div>
                      <div className={styles.optionDesc}>1-2 ngày làm việc</div>
                    </div>
                    <div className={styles.price}>+30.000đ</div>
                  </label>
                </div>
              </div>

              <div className={styles.actions}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => history.back()}
                >
                  ← Quay lại giỏ hàng
                </Button>
                <Button type="submit" variant="primary">
                  Tiếp tục thanh toán →
                </Button>
              </div>
            </div>
          </form>
        </section>

        {/* Tóm tắt đơn hàng */}
        <aside
          className={`${styles.card} ${styles.right}`}
          aria-label="Tóm tắt đơn hàng"
        >
          <h2 className={styles.blockTitle}>Tóm tắt đơn hàng</h2>
          <div className={styles.items}>
            {demoItems.map( ( item, idx ) => (
              <div key={idx} className={styles.item}>
                <div className={styles.thumb}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemMeta}>
                    {item.color ? <>Màu: {item.color}</> : null}
                    {item.size ? <>Kích cỡ: {item.size}</> : null}
                    <> Số lượng: {item.qty}</>
                  </div>
                </div>
                <div className={styles.itemPrice}>
                  {new Intl.NumberFormat( "vi-VN", {
                    style: "currency",
                    currency: "VND",
                  } ).format( item.price )}
                </div>
              </div>
            ) )}
          </div>

          <div className={styles.coupon}>
            <Input
              value={coupon}
              onChange={( e ) => setCoupon( e.target.value )}
              placeholder="Mã giảm giá"
            />
            <Button type="button" onClick={applyCoupon}>
              Áp dụng
            </Button>
          </div>

          <div className={styles.totals}>
            <div className={styles.line}>
              <span>Tạm tính</span>
              <span>
                {new Intl.NumberFormat( "vi-VN", {
                  style: "currency",
                  currency: "VND",
                } ).format( subtotal )}
              </span>
            </div>
            <div className={styles.line}>
              <span>Giảm giá</span>
              <span>
                -
                {new Intl.NumberFormat( "vi-VN", {
                  style: "currency",
                  currency: "VND",
                } ).format( discount )}
              </span>
            </div>
            <div className={styles.line}>
              <span>Phí vận chuyển</span>
              <span>
                {new Intl.NumberFormat( "vi-VN", {
                  style: "currency",
                  currency: "VND",
                } ).format( deliveryCost )}
              </span>
            </div>
            <div className={styles.line}>
              <span>Thuế</span>
              <span>
                {new Intl.NumberFormat( "vi-VN", {
                  style: "currency",
                  currency: "VND",
                } ).format( tax )}
              </span>
            </div>
            <div className={styles.total}>
              <span>Tổng cộng</span>
              <span>
                {new Intl.NumberFormat( "vi-VN", {
                  style: "currency",
                  currency: "VND",
                } ).format( total )}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
