import PropTypes from 'prop-types'
import {createElement} from 'react'
import {connect} from 'react-redux'

import {closeMenuCover} from '../../actions'
import MenuCover from './MenuCover'

const mapDispatchToProps = {
  closeMenuCover
}

const MenuCoverContainer = (props) => <MenuCover {...props} onClick={props.closeMenuCover} />

MenuCoverContainer.propTypes = {
  closeMenuCover: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  // if editor or menu has target, show menu-cover
  isHidden: !(state.editorTarget || state.menuTarget)
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuCoverContainer)
