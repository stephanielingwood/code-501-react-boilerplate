import React from 'react'

const books = [
  {title: 'Harry Potter', author: 'J.K. Rowling'},
  {title: 'A Short History of Nearly Everything', author: 'Bill Bryson'},
  {title: 'Gift from the sea', author: 'Anne Morrow Lindbergh'},
  {title: 'Crystal Singer', author: 'Anne McCaffery'}
]

// using es6 because it'll be easier with attaching methods
// arrow sign with no block after it gives an implicit return
// when we create multiple lis, we need to create a unique key for each li so they're each different. most common way to do this is to pass the iteration index to the dom nodes (the lis) you're trying to create.
// the two parameters to map: the first is the item, and then the index of the element. here we're calling it i.
class BooksList extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {books.map((book, i) =>
            <li key={i}>{book.title} by {book.author}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default BooksList
