/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */

// eslint-disable-next-line @typescript-eslint/ban-types
export const debounce = <T extends Function>(
  func: T,
  waitMilliseconds = 500
) => {
  let timer: NodeJS.Timeout | null;

  return (...args: any[]) => {
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, waitMilliseconds);
  };
};
