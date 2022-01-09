import * as React from 'react'
import * as styles from '../../styles/avatarDropdown.module.css'

const AVATAR_URL =
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-1/p320x320/84603172_10102313939658335_7157014883647619072_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=nCzR7yr3FmAAX9VIy9S&_nc_ht=scontent-atl3-1.xx&edm=AP4hL3IEAAAA&oh=00_AT9oT59_H1UGLnxoXqleIPkTzTn6WDUhXOj5cXmGDWIgbw&oe=61FB275D'

const AvatarDropdown = class extends React.Component {
  render() {
    return (
      <div className={styles.avatarDropdown}>
        <img src={AVATAR_URL} alt='User avatar' />
        <span>Dima Markus</span>
        <div className={styles.caret}></div>
      </div>
    )
  }
}

export default AvatarDropdown
