import '../../../css/options/app.css'

import {createElement} from 'react'

import Donate from './Donate'
import NavBar from './NavBar'
import NavModuleMapper from './NavModuleMapper'

const App = () => (
  <div styleName='main'>
    <NavBar />
    <NavModuleMapper />
    <Donate />
  </div>
)

export default App
