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
    <div className='euiSideNavItem euiSideNavItem--trunk'>
      <Link to={ to }>{ children }</Link>
    </div>
  )

  const createItem = (name, data = {}, isLink = false) => {
    // NOTE: Duplicate `name` values will cause `id` collisions.
    const href = data.to || '#'
    const item = {
      ...data,
      id: name,
      name,
      href,
      isSelected: selectedItemName === name,
      onClick: () => selectItem(name),
    }

    if (isLink) {
      item.renderItem = () => <NavLink to={ href }>{ name }</NavLink>
    }

    return item
  }

  const musicLinks = createItem('Music', {
    icon: <EuiIcon type='img/music.svg' />,
    items: [
      createItem('DJ Sets',    {
        to: '/dj',
        items: [
          createItem('DJ Sets',    { to: '/dj' }),
          createItem('Tracks',     { to: '/tracks' }),
          createItem('Events',     { to: '/events' }),
          createItem('Influences', { to: '/influences' }),
          createItem('Concerts',   { to: '/concerts' }),
        ]
      }),
      createItem('Tracks',     { to: '/tracks' }, true),
      createItem('Events',     { to: '/events' }),
      createItem('Influences', { to: '/influences' }),
      createItem('Concerts',   { to: '/concerts' }),
    ]
  })

  const techLinks = createItem('Software Design', {
    icon: <EuiIcon type='img/ruler-triangle.svg' />,
    items: [
      createItem('My Work',   { to: '/my-work' }),
      createItem('Articles',  { to: '/articles' }),
      createItem('Resources', { to: '/resources' }),
      createItem('Software',  { to: '/software' }),
    ]
  })

  const theRestLinks = createItem('Things I Like', {
    icon: <EuiIcon type='img/heart.svg' />,
    items: [
      createItem('Books', { to: '/books' }),
      createItem('Images', { to: '/images' }),
      createItem('Products', { to: '/products' }),
      createItem('Quotes', { to: '/quotes' }),
      createItem('Recipes', { to: '/recipes' }),
      createItem('Restaurants', { to: '/restaurants' }),
    ]
  })

  const sideNav = [
    musicLinks,
    techLinks,
    theRestLinks,
    createItem('Blog', { to: '/blog', icon: <EuiIcon type='img/newspaper.svg' /> }),
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
