import Lottie from 'lottie-react';
import cartIconLoader from '../../assets/cart-icon-loader.json';

export function Loading() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col items-center justify-center">
      <Lottie
        loop
        autoplay
        animationData={cartIconLoader}
        className="w-96 h-96"
      />
    </div>
  );
}
