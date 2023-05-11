import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: ['path', 'node','node:*', 'node:fs', 'node:url'],
//   failOnWarn: false
})
