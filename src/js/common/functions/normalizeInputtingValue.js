// @flow

import R from 'ramda'

export default R.compose(R.replace(/\s+/g, ' '), (value) => value.trimLeft())
