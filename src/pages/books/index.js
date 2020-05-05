import React from 'react'
import SidebarLayout from 'src/components/SidebarLayout'
import BookList from 'src/components/BookList'

export default class BookIndexPage extends React.Component {
  render() {
    const sidebar = <div/>
    const content = <BookList />

    return (
      <SidebarLayout
        sidebar={ sidebar }
        content={ content }
      />
    )
  }
}
