import {ValidationMap} from 'react';
import PropTypes from 'prop-types';
import {PolarisContext} from '../../../types';
import {
  THEME_CONTEXT_TYPES as polarisTheme,
  createThemeContext,
  ThemeContext as CreateThemeContext,
} from '../../../ThemeProvider';
import {Props as AppProviderProps} from '../../AppProvider';
import {StickyManager} from '../withSticky';
import createAppProviderContext, {
  CreateAppProviderContext,
} from '../createAppProviderContext';

export interface CreatePolarisContext extends AppProviderProps {
  stickyManager?: StickyManager;
}

export const polarisAppProviderContextTypes: ValidationMap<any> = {
  polaris: PropTypes.any,
  ...polarisTheme,
};

export function createPolarisContext(): PolarisContext;
export function createPolarisContext(
  contextOne: CreateAppProviderContext | CreateThemeContext,
): PolarisContext;
export function createPolarisContext(
  contextOne: CreateAppProviderContext | CreateThemeContext,
  contextTwo: CreateAppProviderContext | CreateThemeContext,
): PolarisContext;
export default function createPolarisContext(
  contextOne?: CreateAppProviderContext | CreateThemeContext,
  contextTwo?: CreateAppProviderContext | CreateThemeContext,
) {
  let appProviderContext: CreateAppProviderContext | undefined;
  let themeContext: CreateThemeContext | undefined;
  if (contextOne && 'logo' in contextOne) {
    themeContext = contextOne as CreateThemeContext;
    appProviderContext = contextTwo;
  } else {
    appProviderContext = contextOne;
    themeContext = contextTwo as CreateThemeContext | undefined;
  }

  const appProvider = appProviderContext
    ? createAppProviderContext(appProviderContext)
    : createAppProviderContext();
  const theme = themeContext
    ? createThemeContext(themeContext)
    : createThemeContext();

  return {...appProvider, ...theme};
}
