import path from 'path'

export default function resolveLoader(state) {
  const { loaderModules } = state;

  const resolveLoader = {};

  if (loaderModules) {
    resolveLoader.modules = loaderModules.map((folder) => {
      const { dir } = path.parse(folder);

      // e.g. "./lib" => `${context}/lib`
      if (dir) {
        return path.resolve(process.cwd(), folder);
      }

      // e.g. "node_modules"
      return folder;
    });
  }

  return resolveLoader;
}
