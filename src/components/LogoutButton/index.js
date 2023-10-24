// Write your JS code here
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button onClick={onClickLogout} type="button">
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
