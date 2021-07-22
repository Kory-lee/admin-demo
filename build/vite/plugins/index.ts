import type { Plugin } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import PurgeIcons from 'vite-plugin-purge-icons';
import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';
import { configPwaConfig } from './pwa';
import { configStyleImportPlugin } from './styleImport';
import { configWindiCSSPlugin } from './windicss';
import { configThemePlugin } from './theme';
import { configImageminPlugin } from './imagemin';
import { configVisualizerConfig } from './visualizer';
import { configCompressPlugin } from './compress';
import { configSvgIconsPlugin } from './svgSprite';
import { configCssRenderPlugin } from './cssRender';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
      VITE_USE_MOCK,
      VITE_LEGACY,
      VITE_USE_IMAGEMIN,
      VITE_BUILD_COMPRESS,
      VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    } = viteEnv,
    vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx()];

  VITE_LEGACY && isBuild && vitePlugins.push(legacy());

  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  vitePlugins.push(configSvgIconsPlugin(isBuild));

  vitePlugins.push(configWindiCSSPlugin());

  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  vitePlugins.push(PurgeIcons());

  vitePlugins.push(configStyleImportPlugin(isBuild));

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig());

  vitePlugins.push(configThemePlugin(isBuild));

  vitePlugins.push(configCssRenderPlugin());

  if (isBuild) {
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
    );

    vitePlugins.push(configPwaConfig(viteEnv));
  }
  return vitePlugins;
}
