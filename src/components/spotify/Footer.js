import * as React from 'react'
import * as styles from '../../styles/footer.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.leftSide}>
          <button>
            <StaticImage src={'../../img/ic/heart.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/ic/pip.svg'} />
          </button>
        </div>

        <div className={styles.middle}>
          <button>
            <StaticImage src={'../../img/btn/shuffle.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/btn/back.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/btn/play.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/btn/forward.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/btn/repeat.svg'} />
          </button>
        </div>

        <div className={styles.rightSide}>
          <button>
            <StaticImage src={'../../img/ic/list.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/ic/device.svg'} />
          </button>
          <button>
            <StaticImage src={'../../img/ic/sound.svg'} />
          </button>
        </div>
      </footer>
    )
  }
}

export default Footer
