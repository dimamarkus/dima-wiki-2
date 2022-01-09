import * as React from 'react'
import ChevronButton from './ChevronButton'
import AvatarDropdown from './AvatarDropdown'
import * as styles from '../../styles/topBar.module.css'

const TopBar = () => (
  <header className={styles.topBar}>
    <div className={styles.buttons}>
      <ChevronButton icon='logo' />
      <ChevronButton />
    </div>
    <AvatarDropdown />
  </header>
)

export default TopBar
