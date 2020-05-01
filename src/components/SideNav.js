import { EuiIcon, EuiSideNav } from '@elastic/eui'
import React, { useState } from 'react'
import { Link } from 'gatsby'

export default () => {
  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false)
  const [selectedItemName, setSelectedItem] = useState('Lion stuff')

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile)
  }

  const selectItem = name => {
    setSelectedItem(name)
  }

  const NavLink = ({ to, children }) =>(
    <div class='euiSideNavItem euiSideNavItem--trunk'>
      <Link to={ to }>{ children }</Link>
    </div>
  )

  const createItem = (name, data = {}) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    const href = data.to || '#'
    return {
      ...data,
      id: name,
      name,
      href,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
      // renderItem: () => <NavLink to={ href }>{ name }</NavLink>,
    }
  }

  const musicLinks = createItem('Music', {
    icon: <EuiIcon type='img/music.svg' />,
    items: [
      createItem('DJ Sets',    { to: '/dj' }),
      createItem('Tracks',     { to: '/tracks' }),
      createItem('Events',     { to: '/events' }),
      createItem('Influences', { to: '/influences' }),
      createItem('Concerts',   { to: '/concerts' }),
    ]
  })

  const techLinks = createItem('Design & Tech', {
    icon: <EuiIcon type='img/ruler-triangle.svg' />,
    items: [
      createItem('My Work',   { to: '/my-work' }),
      createItem('Resources', { to: '/resources' }),
      createItem('Articles',  { to: '/articles' }),
      createItem('Software',  { to: '/software' }),
    ]
  })

  const theRestLinks = createItem('The Rest...', {
    icon: <EuiIcon type='logoLogstash' />,
    items: [
      createItem('Books', { to: '/books' }),
      createItem('Quotes', { to: '/quotes' }),
      createItem('Recipes', { to: '/recipes' }),
      createItem('Restaurants', { to: '/restaurants' }),
      createItem('Products', { to: '/products' }),
      createItem('Images', { to: '/images' }),
      createItem('My Photos', { to: '/my-photos' }),
    ]
  })

  const sideNav = [
    createItem('Blog', { to: '/blog', icon: <EuiIcon type='img/newspaper.svg' /> }),
    musicLinks,
    techLinks,
    theRestLinks,
    createItem('About', { to: '/about' }),
  ]

  return (
    <EuiSideNav
      mobileTitle='Navigate within $APP_NAME'
      toggleOpenOnMobile={ toggleOpenOnMobile }
      isOpenOnMobile={ isSideNavOpenOnMobile }
      items={ sideNav }
      style={{ width: 192 }}
    />
  )
}
