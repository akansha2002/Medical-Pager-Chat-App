import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import {ChannelContainer, ChannelListContainer} from './components'
import './App.css'


const apikey='gjkjymp2mb6w'

const client = StreamChat.getInstance(apikey)

// const authToken = false;

const App = () => {
  

  return (
    <div className = 'app__wrapper'>
      <Chat client ={client} theme='team light'>
        <ChannelListContainer
        
        />
        <ChannelContainer

        />
      </Chat>
    </div>
  )
}

export default App
