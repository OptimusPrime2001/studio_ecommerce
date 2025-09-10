'use client';

import { HeroCarousel } from '@components/common/hero-carousel/HeroCarousel';

export default function HomePage () {
  return (
    <main className="min-h-screen ">
      <HeroCarousel />

      {/* Other sections can be added here */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Sản phẩm nổi bật</h2>
          {/* Product grid will be added here */}
        </div>
      </section>
    </main>
  );
}
