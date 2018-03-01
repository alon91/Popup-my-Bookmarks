// @flow

import type {Saga} from 'redux-saga'
import {call} from 'redux-saga/effects'

import {createBookmark} from '../../../../../common/utils'
import * as CST from '../../../../constants'

type Payload = {|
  index: number,
  parentId: string
|}
export function* addSeparator({parentId, index}: Payload): Saga<void> {
  yield call(createBookmark, {
    index,
    parentId,
    title: '- '.repeat(42),
    url: CST.SEPARATE_THIS_URL
  })
}
