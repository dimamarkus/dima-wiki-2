import * as React from 'react'
import * as styles from '../../styles/chevronButton.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const ChevronButton = class extends React.Component {
  render() {
    return (
      <>
        <button className={styles.chevronButton}>
          <StaticImage src={'../../img/chevron.svg'} />
        </button>
      </>
    )
  }
}

export default ChevronButton
