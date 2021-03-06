// @flow

import Immutable from 'seamless-immutable'

import * as CST from '../../common/constants'

export const NAV_MODULE_CONTRIBUTORS: string = 'contributors'
export const NAV_MODULE_CONTROL: string = 'control'
export const NAV_MODULE_GENERAL: string = 'general'
export const NAV_MODULE_USER_INTERFACE: string = 'userInterface'

export const OPTION_TABLE_MAP: Object = Immutable({
  [NAV_MODULE_GENERAL]: [
    CST.OPTIONS_DEF_EXPAND,
    CST.OPTIONS_HIDE_ROOT_FOLDER,
    CST.OPTIONS_SEARCH_TARGET,
    CST.OPTIONS_MAX_RESULTS,
    CST.OPTIONS_TOOLTIP,
    CST.OPTIONS_WARN_OPEN_MANY,
    CST.OPTIONS_REMEMBER_POS
  ],
  [NAV_MODULE_USER_INTERFACE]: [
    CST.OPTIONS_SET_WIDTH,
    CST.OPTIONS_FONT_SIZE,
    CST.OPTIONS_FONT_FAMILY
  ],
  [NAV_MODULE_CONTROL]: [
    CST.OPTIONS_CLICK_BY_LEFT,
    CST.OPTIONS_CLICK_BY_LEFT_CTRL,
    CST.OPTIONS_CLICK_BY_LEFT_SHIFT,
    CST.OPTIONS_CLICK_BY_MIDDLE,
    CST.OPTIONS_OP_FOLDER_BY
  ]
})
