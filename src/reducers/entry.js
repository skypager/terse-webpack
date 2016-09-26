import { resolve } from "path";
import { reduce } from "lodash";

const resolveEntries = (paths, context) => (
  paths.map((path) => (
    path.charAt(0) === '.'
      ? resolve(context, path)
      : path
  ))
)

export default function entryReducer(state) {
  const { entry, context = process.cwd() } = state;

  if (entry) {
    return reduce(entry, (acc, entries, name) => ({
      ...acc,
      [name]: resolveEntries(entries, context),
    }), {});
  }
}
