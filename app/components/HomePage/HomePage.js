import React from 'react'

import Bio from '../Bio/Bio'
import BooksList from '../BooksList/BooksList'
import MessagesList from '../MessagesList/MessagesList'

// const portrait = require('')

// every react component must have a render method
class HomePage extends React.Component {
  render () {
    // main point of this method is to return something to render
    return (
      <main>
        <Bio
          // imgSrc= {portrait}
          // imgAlt={'portrait of Stephanie'}
          myName='Stephanie Lingwood'
          age={39}
          favoriteActivity='react'
          pronoun={{
            nominative: 'she',
            accusative: 'her',
            possessive: 'hers',
            reflexive: 'herself'
          }}
        />
        <BooksList />
        <MessagesList />
      </main>
    )
  }
}

export default HomePage
