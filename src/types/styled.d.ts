import 'styled-components';
import { theme } from '@/styles/theme';

type ProjectTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ProjectTheme {}
}
