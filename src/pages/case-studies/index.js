import * as React from 'react'
import * as styles from '../../styles/spotify.module.css'
import Layout from '../../components/spotify/Layout'
import CaseStudyRoll from '../../components/spotify/CaseStudyRoll'

export default class CaseStudyIndexPage extends React.Component {
  render() {
    const getGreeting = () => {
      const myDate = new Date()
      const hrs = myDate.getHours()
      if (hrs < 12) return 'Good Morning'
      else if (hrs >= 12 && hrs <= 17) return 'Good Afternoon'
      else if (hrs >= 17 && hrs <= 24) return 'Good Evening'
    }

    return (
      <Layout>
        <div className={styles.spotify}>
          <h1>{getGreeting()}</h1>
          <CaseStudyRoll />
        </div>
      </Layout>
    )
  }
}
