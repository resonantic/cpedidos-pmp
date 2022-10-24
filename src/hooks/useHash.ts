let hashNum = 0;
const hashs: { [key: string]: string } = {};

const setHash =
  (id: string) =>
  (...args: string[]) => {
    hashNum += 1;
    hashs[id] = `${hashNum}_${args.join('_')}`;
  };

const getHash = (id: string) => () => hashs[id];

const compareHash = (id: string) => (hash: string) => hash === hashs[id];

export function useHash(id: string) {
  return {
    setHash: setHash(id),
    getHash: getHash(id),
    compareHash: compareHash(id),
  };
}
