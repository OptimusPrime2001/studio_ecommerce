'use client';

import { Star, UserCircle } from 'lucide-react';
import { useState } from 'react';
import styles from './ProductReviews.module.scss';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  productId: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

export const ProductReviews = ( {
  productId,
  rating,
  reviewCount,
  reviews
}: ProductReviewsProps ) => {
  const [showReviewForm, setShowReviewForm] = useState( false );
  const [newReview, setNewReview] = useState( {
    userName: '',
    rating: 0,
    comment: ''
  } );
  const [isSubmitting, setIsSubmitting] = useState( false );

  const renderStars = ( rating: number, interactive = false, onStarClick?: ( rating: number ) => void ) => {
    const stars = [];

    for ( let i = 1; i <= 5; i++ ) {
      const isFilled = i <= rating;

      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => interactive && onStarClick && onStarClick( i )}
          disabled={!interactive}
          className={`${styles.star} ${interactive ? styles.star_interactive : ''
            } ${isFilled ? styles.star_filled : styles.star_empty}`}
        >
          <Star size={20} />
        </button>
      );
    }

    return stars;
  };

  const handleSubmitReview = async ( e: React.FormEvent ) => {
    e.preventDefault();

    if ( !newReview.userName || !newReview.comment || newReview.rating === 0 ) {
      alert( 'Vui lòng điền đầy đủ thông tin đánh giá!' );
      return;
    }

    setIsSubmitting( true );

    try {
      // Simulate API call
      await new Promise( resolve => setTimeout( resolve, 2000 ) );

      console.log( 'Submitting review:', {
        productId,
        ...newReview,
        date: new Date().toISOString()
      } );

      // Reset form
      setNewReview( {
        userName: '',
        rating: 0,
        comment: ''
      } );
      setShowReviewForm( false );

      alert( 'Cảm ơn bạn đã đánh giá sản phẩm!' );
    } catch ( error ) {
      console.error( 'Error submitting review:', error );
      alert( 'Có lỗi xảy ra khi gửi đánh giá!' );
    } finally {
      setIsSubmitting( false );
    }
  };

  const formatDate = ( dateString: string ) => {
    const date = new Date( dateString );
    return date.toLocaleDateString( 'vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    } );
  };

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach( review => {
      if ( review.rating >= 1 && review.rating <= 5 ) {
        distribution[review.rating - 1]++;
      }
    } );
    return distribution.reverse(); // 5 stars first
  };

  const ratingDistribution = getRatingDistribution();

  return (
    <div className={styles.product_reviews}>
      {/* Reviews Summary */}
      <div className={styles.reviews_summary}>
        <div className={styles.overall_rating}>
          <div className={styles.rating_score}>
            <span className={styles.rating_number}>{( rating || 0 ).toFixed( 1 )}</span>
            <div className={styles.rating_stars}>
              {renderStars( Math.round( rating || 0 ) )}
            </div>
            <span className={styles.review_count}>
              ({reviewCount} đánh giá)
            </span>
          </div>
        </div>

        <div className={styles.rating_breakdown}>
          {ratingDistribution.map( ( count, index ) => {
            const starCount = 5 - index;
            const percentage = reviewCount > 0 ? ( count / reviewCount ) * 100 : 0;

            return (
              <div key={starCount} className={styles.rating_row}>
                <span className={styles.star_label}>{starCount} sao</span>
                <div className={styles.rating_bar}>
                  <div
                    className={styles.rating_fill}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className={styles.rating_count}>({count})</span>
              </div>
            );
          } )}
        </div>
      </div>

      {/* Write Review Button */}
      <div className={styles.write_section}>
        <button
          onClick={() => setShowReviewForm( !showReviewForm )}
          className={styles.write_button}
        >
          {showReviewForm ? 'Hủy đánh giá' : 'Viết đánh giá'}
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className={styles.review_form}>
          <h3 className={styles.form_title}>Đánh giá sản phẩm</h3>

          <div className={styles.form_group}>
            <label className={styles.form_label}>Tên của bạn:</label>
            <input
              type="text"
              value={newReview.userName}
              onChange={( e ) => setNewReview( { ...newReview, userName: e.target.value } )}
              className={styles.form_input}
              placeholder="Nhập tên của bạn"
              required
            />
          </div>

          <div className={styles.form_group}>
            <label className={styles.form_label}>Đánh giá:</label>
            <div className={styles.rating_input}>
              {renderStars(
                newReview.rating,
                true,
                ( rating ) => setNewReview( { ...newReview, rating } )
              )}
              <span className={styles.rating_text}>
                {newReview.rating > 0 ? `${newReview.rating}/5 sao` : 'Chọn số sao'}
              </span>
            </div>
          </div>

          <div className={styles.form_group}>
            <label className={styles.form_label}>Nhận xét:</label>
            <textarea
              value={newReview.comment}
              onChange={( e ) => setNewReview( { ...newReview, comment: e.target.value } )}
              className={styles.form_textarea}
              placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm..."
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submit_button}
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi đánh giá'}
          </button>
        </form>
      )}

      {/* Reviews List */}
      <div className={styles.reviews_list}>
        <h3 className={styles.reviews_title}>
          Đánh giá từ khách hàng ({reviewCount})
        </h3>

        {reviews.length === 0 ? (
          <div className={styles.no_reviews}>
            <p>Chưa có đánh giá nào cho sản phẩm này.</p>
            <p>Hãy là người đầu tiên đánh giá!</p>
          </div>
        ) : (
          <div className={styles.review_items}>
            {reviews.map( ( review ) => (
              <div key={review.id} className={styles.review_item}>
                <div className={styles.review_header}>
                  <div className={styles.review_user}>
                    <UserCircle className={styles.user_icon} />
                    <span className={styles.user_name}>{review.userName}</span>
                  </div>
                  <div className={styles.review_meta}>
                    <div className={styles.review_rating}>
                      {renderStars( review.rating )}
                    </div>
                    <span className={styles.review_date}>
                      {formatDate( review.date )}
                    </span>
                  </div>
                </div>
                <div className={styles.review_content}>
                  <p>{review.comment}</p>
                </div>
              </div>
            ) )}
          </div>
        )}
      </div>
    </div>
  );
};