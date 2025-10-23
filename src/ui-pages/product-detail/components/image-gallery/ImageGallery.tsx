"use client";

import { Button } from "@components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import styles from "./ImageGallery.module.scss";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.gallery}>
      {/* Main Image Display */}
      <div className={styles.main_display}>
        <Image
          src={images[currentImageIndex]}
          alt={`${productName} - Ảnh ${currentImageIndex + 1}`}
          fill
          className={styles.main_image}
          priority
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              onClick={goToPrevious}
              className={styles.nav_button}
              aria-label="Ảnh trước"
              size="icon"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              onClick={goToNext}
              className={`${styles.nav_button} ${styles.nav_right}`}
              aria-label="Ảnh tiếp theo"
              size="icon"
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className={styles.image_counter}>
            {currentImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <Button
              key={index}
              onClick={() => goToImage(index)}
              className={`${styles.thumbnail} ${
                index === currentImageIndex ? styles.thumb_active : ""
              }`}
            >
              <Image
                src={image}
                alt={`${productName} - Thumbnail ${index + 1}`}
                fill
                className={styles.thumb_image}
              />
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
