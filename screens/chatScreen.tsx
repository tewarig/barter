import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { RootTabScreenProps } from '../types';

export default function ChatScreen({ route ,  navigation }: RootTabScreenProps<'Chat'>) {
  const [messages, setMessages] = useState<any>([]);
   const {  itemImage , itemName  } = route.params; 
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Hi ,  I would like to exchange  ${itemName} with you. `,
        image: itemImage,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

