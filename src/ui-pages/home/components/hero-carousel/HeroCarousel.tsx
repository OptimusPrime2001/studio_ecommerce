"use client";
import { CommonButton } from "@components/shared";
import { Button } from "@components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { LIST_DATA_CAROUSEL } from "@lib/constants";
import { cn } from "@utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./HeroCarousel.module.scss";

export const HeroCarousel: React.FC = () => {
  const router = useRouter();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const onClickIndexSlider = (id: number) => {
    setCurrent(id);
    api?.scrollTo(id, false);
  };
  return (
    <section className={cn(styles.hero_carousel_wrapper, "media_width_sm")}>
      <Carousel setApi={setApi} className="h-full w-full">
        <CarouselContent className="m-0 h-full w-full">
          {LIST_DATA_CAROUSEL.map(
            ({ id, img, title, subtitle, buttonText, buttonLink }) => (
              <CarouselItem className="relative p-0" key={id}>
                <Image
                  priority
                  className="object-cover"
                  fill
                  src={img}
                  alt={title}
                />
                <div className={styles.slide_overlay}>
                  <div className={styles.slide_content}>
                    <h1
                      className={cn(
                        styles.slide_title,
                        current === id ? styles.slide_title_active : "",
                      )}
                    >
                      {title}
                    </h1>
                    <p
                      className={cn(
                        styles.slide_subtitle,
                        current === id ? styles.slide_subtitle_active : "",
                      )}
                    >
                      {subtitle}
                    </p>
                    <CommonButton onClick={() => router.push(buttonLink)}>
                      {buttonText}
                    </CommonButton>
                  </div>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className={cn("left-8", styles.carousel_button)} />
        <CarouselNext className={cn("right-8", styles.carousel_button)} />
        <section className={cn("iu-d-flexcenter", styles.slider_navigation)}>
          {LIST_DATA_CAROUSEL.map((item) => (
            <Button
              reset
              variant="outline"
              size="icon"
              key={item.id}
              onClick={() => onClickIndexSlider(item.id)}
              className={cn(
                styles.slider_dot,
                current === item.id ? styles.slider_dot_active : "",
              )}
            />
          ))}
        </section>
      </Carousel>
    </section>
  );
};
