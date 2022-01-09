import React from 'react'
import { Link } from 'gatsby'
import logo from '../../img/logo.svg'
import resume from '../../img/resume.svg'
import home from '../../img/home-icon.svg'
import * as styles from '../../styles/sidebar.module.css'

const Sidebar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <aside className={styles.sidebar}>
        <nav role='navigation' aria-label='main-navigation'>
          <Link className={styles.logo} to='/about'>
            <img src={logo} alt='I want to join Spotify' />
          </Link>
          <Link className='sidebar-item' to='/about'>
            <img src={home} alt='Home Icon' />
            Home
          </Link>
          <Link className='sidebar-item' to='/about'>
            <img src={home} alt='Cover Letter Icon' />
            Cover Letter
          </Link>
          <Link className='sidebar-item' to='/products'>
            <img src={resume} alt='Resume Icon' />
            Resume
          </Link>
          <Link className='sidebar-item' to='/blog'>
            Blog
          </Link>
          <Link className='sidebar-item' to='/contact'>
            Contact
          </Link>
          <Link className='sidebar-item' to='/contact/examples'>
            Form Examples
          </Link>
          <Link className='sidebar-item' to='/spotify'>
            Spotify
          </Link>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
