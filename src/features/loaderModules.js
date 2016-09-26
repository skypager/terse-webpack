import { join } from 'path'

const modRoot = join(__dirname, '..', '..')

export default function loaderModules(existing = ["node_modules", modRoot, join(modRoot, 'node_modules')], ...args) {
  // Prefer newer entries
  return [
    ...args,
    ...existing,
  ];
}
