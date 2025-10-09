'use client';

import { Button } from '@components/ui/button';
import { Minus, Plus, ShoppingCart, Zap } from 'lucide-react';
import { useState } from 'react';
import styles from './PurchaseSection.module.scss';

interface PurchaseSectionProps {
  productId: string;
  inStock: boolean;
  price: number;
}

export const PurchaseSection = ( { productId, inStock, price }: PurchaseSectionProps ) => {
  const [quantity, setQuantity] = useState( 1 );
  const [isWishlisted, setIsWishlisted] = useState( false );
  const [isAddingToCart, setIsAddingToCart] = useState( false );
  const [isBuyingNow, setIsBuyingNow] = useState( false );

  const handleQuantityChange = ( newQuantity: number ) => {
    if ( newQuantity >= 1 && newQuantity <= 99 ) {
      setQuantity( newQuantity );
    }
  };

  const handleAddToCart = async () => {
    if ( !inStock ) return;

    setIsAddingToCart( true );
    try {
      // Simulate API call
      await new Promise( resolve => setTimeout( resolve, 1000 ) );

      // Here you would typically call your cart API
      console.log( `Added ${quantity} items of product ${productId} to cart` );

      // Show success message (you might want to use a toast library)
      alert( `Đã thêm ${quantity} sản phẩm vào giỏ hàng!` );
    } catch ( error ) {
      console.error( 'Error adding to cart:', error );
      alert( 'Có lỗi xảy ra khi thêm vào giỏ hàng!' );
    } finally {
      setIsAddingToCart( false );
    }
  };

  const handleBuyNow = async () => {
    if ( !inStock ) return;

    setIsBuyingNow( true );
    try {
      // Simulate API call
      await new Promise( resolve => setTimeout( resolve, 1500 ) );

      // Here you would typically redirect to checkout
      console.log( `Buying ${quantity} items of product ${productId} now` );

      // Redirect to checkout page
      // router.push('/checkout');
      alert( `Chuyển đến trang thanh toán với ${quantity} sản phẩm!` );
    } catch ( error ) {
      console.error( 'Error buying now:', error );
      alert( 'Có lỗi xảy ra khi mua ngay!' );
    } finally {
      setIsBuyingNow( false );
    }
  };

  const handleWishlistToggle = () => {
    setIsWishlisted( !isWishlisted );
    // Here you would typically call your wishlist API
    console.log( `${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${productId}` );
  };

  const formatPrice = ( price: number ) => {
    return new Intl.NumberFormat( 'vi-VN', {
      style: 'currency',
      currency: 'VND'
    } ).format( price );
  };

  const totalPrice = price * quantity;

  return (
    <div className={styles.purchase_section}>
      {/* Quantity Selector */}
      <div className={styles.quantity_section}>
        <label className={styles.quantity_label}>Số lượng:</label>
        <div className={styles.quantity_controls}>
          <button
            onClick={() => handleQuantityChange( quantity - 1 )}
            disabled={quantity <= 1}
            className={styles.quantity_button}
            aria-label="Giảm số lượng"
          >
            <Minus size={16} />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={( e ) => handleQuantityChange( parseInt( e.target.value ) || 1 )}
            min="1"
            max="99"
            className={styles.quantity_input}
          />
          <button
            onClick={() => handleQuantityChange( quantity + 1 )}
            disabled={quantity >= 99}
            className={styles.quantity_button}
            aria-label="Tăng số lượng"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className={styles.total_price}>
        <span className={styles.total_label}>Tổng cộng:</span>
        <span className={styles.total_amount}>{formatPrice( totalPrice )}</span>
      </div>

      {/* Action Buttons */}
      <div className={styles.action_buttons}>
        <Button
          onClick={handleAddToCart}
          disabled={!inStock || isAddingToCart}
          className={`${styles.add_cart_btn} button_default`}
        >
          <ShoppingCart size={20} />
          {isAddingToCart ? 'Đang thêm...' : 'Thêm vào giỏ'}
        </Button>
        <Button
          onClick={handleBuyNow}
          disabled={!inStock || isBuyingNow}
          className={`${styles.buy_now_btn} button_default`}
        >
          <Zap size={20} />
          {isBuyingNow ? 'Đang xử lý...' : 'Mua ngay'}
        </Button>
      </div>



      {/* Stock Warning */}
      {!inStock && (
        <div className={styles.stock_warning}>
          <span>⚠️ Sản phẩm hiện tại đã hết hàng</span>
        </div>
      )}

      {/* Purchase Info */}
      <div className={styles.purchase_info}>
        <div className={styles.info_item}>
          <span className={styles.info_icon}>🚚</span>
          <div className={styles.info_content}>
            <div className={styles.info_title}>Giao hàng miễn phí</div>
            <div className={styles.info_desc}>Cho đơn hàng từ 500.000đ</div>
          </div>
        </div>

        <div className={styles.info_item}>
          <span className={styles.info_icon}>🔄</span>
          <div className={styles.info_content}>
            <div className={styles.info_title}>Đổi trả dễ dàng</div>
            <div className={styles.info_desc}>Trong vòng 30 ngày</div>
          </div>
        </div>

        <div className={styles.info_item}>
          <span className={styles.info_icon}>💳</span>
          <div className={styles.info_content}>
            <div className={styles.info_title}>Thanh toán an toàn</div>
            <div className={styles.info_desc}>Bảo mật thông tin 100%</div>
          </div>
        </div>
      </div>
    </div>
  );
};