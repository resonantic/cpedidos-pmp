import Lottie, { Options as LottieOptions } from 'react-lottie';
import cartIconLoader from '../../assets/cart-icon-loader.json';

export function Loading() {
  const animationOptions: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: cartIconLoader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col items-center justify-center">
      <Lottie
        options={animationOptions}
        height={384}
        width={384}
        isClickToPauseDisabled
        style={{ cursor: 'default' }}
      />
    </div>
  );
}
