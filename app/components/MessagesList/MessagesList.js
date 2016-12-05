import React from 'react'

// ajax library; can also use superagent
import axios from 'axios'
import MessageBox from './MessageBox'
import _ from 'lodash'

class MessagesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      messageList: [],
      token: ''
    }
  }

  getMessages () {
    let url = 'http://message-list.appspot.com/messages?limit=10'
    if (this.state.token) {
      url += `&pageToken=${this.state.token}`
    }

    axios.get(url)
      .then((res) => {
        // console.log(res.data.messages)
        // using a temp variable and referencing that from messageList, instead of appending directly in message list, because react doesn't like it when there's not a "single source of truth" updating things
        let temp = this.state.messageList
        temp = temp.concat(res.data.messages)
        // setState takes an object; this.state is then extended with that object
        // console.log(temp)
        this.setState({
          messageList: temp,
          token: res.data.pageToken
        })
        // console.log(this.state.messageList)
      })
      .catch((res) => {
        console.error(res)
      })
  }

  deleteMessage (id) {
    const oldMessages = this.state.messageList
    const newMessages = oldMessages.filter((msg) => msg.id !== id)
    // setState is basically an extend; this won't remove the token
    this.setState({
      messageList: newMessages
    })
  }

  componentDidMount () {
    this.getMessages()
  }

  render () {
    // console.log(this.state.messageList)
    if (this.state.messageList.length > 0) {
      const sortedMessages = _.orderBy(this.state.messageList, (msg) => msg.updated, 'desc')
      return (
        <div>
          <button onClick={this.getMessages.bind(this)}>Get More Messages</button>
          <ul className='MessagesList'>
            {sortedMessages.map((message, i) =>
              <MessageBox
                key={i}
                author={message.author}
                date={message.updated}
                content={message.content}
              />
            )}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.getMessages.bind(this)}>Get More Messages</button>
          <p>No messages to display</p>
        </div>
      )
    }
  }
}
// need to bind 'this' inot the onclick for the button so that the onClick has the greater this; otherwise, it woudl use the 'this' from the render function.
export default MessagesList
