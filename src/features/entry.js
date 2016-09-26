import { isObject, isString } from "lodash";
import path from "path";

const fromObject = (entries) => (
  Object.keys(entries).reduce((acc, key) => {
    const entry = entries[key]

    return {
      ...acc,
      [key]: Array.isArray(entry) ? entry : [entry],
    };
  }, {})
)

const fromString = (entry) => {
  const parsed = path.parse(entry);
  const basename = path.basename(parsed.base, parsed.ext).toLowerCase();

  return {
    [basename]: [entry],
  };
};

export default function entry(existing, arg) {
  if (isObject(arg)) {
    return {
      ...existing,
      ...fromObject(arg),
    };
  }

  if (isString(arg)) {
    return {
      ...existing,
      ...fromString(arg),
    };
  }

  return existing;
}
