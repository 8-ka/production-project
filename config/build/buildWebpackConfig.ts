import path from 'path'
import { type Configuration } from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlagins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
