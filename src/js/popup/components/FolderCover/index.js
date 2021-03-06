import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import {PureComponent, createElement} from 'react'
import {connect} from 'react-redux'

import {removeTreeInfosFromIndex} from '../../actions'
import FolderCover from './FolderCover'

const mapDispatchToProps = {
  removeTreeInfosFromIndex
}

class FolderCoverContainer extends PureComponent {
  static propTypes = {
    isHidden: PropTypes.bool.isRequired,
    removeTreeInfosFromIndex: PropTypes.func.isRequired,
    treeIndex: PropTypes.number.isRequired
  }

  closeCover = debounce(() => {
    this.props.removeTreeInfosFromIndex(this.props.treeIndex + 1)
  }, 200)

  render = () => (
    <FolderCover
      {...this.props}
      onClick={this.closeCover}
      onMouseLeave={this.closeCover.cancel}
      onMouseMove={this.closeCover}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  // hide the folder if it is not the top two folder
  isHidden: state.trees.length - ownProps.treeIndex <= 2
})

export default connect(mapStateToProps, mapDispatchToProps)(FolderCoverContainer)
