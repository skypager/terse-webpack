import { reduce } from "lodash";

const toArray = (exts) => (
  reduce(exts, (acc, loaders, ext) => {
    const test = new RegExp(`${ext.replace(".", "\\.")}$`);

    return [
      ...acc,
      ...loaders.map((loader) => ({
        test,
        ...loader,
      })),
    ];
  }, [])
)

export default function moduleReducer(state) {
  const { loader, preLoader, target } = state;

  const base = {
    loaders: toArray(loader),
    preLoaders: toArray(preLoader),
  };

  if (target === 'node') {
    base.exprContextRegExp = /$^/
    base.exprContextCritical = false
  }
  
  return  base
}
