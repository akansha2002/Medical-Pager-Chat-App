import React from 'react'
import {Avatar, useChatContext} from 'stream-chat-react'

const TeamChannelPreview = ({channel, type}) => {
    const {channel: activeChannel, client} = useChatContext();

    // channel preview for multiple users
    const ChannelPreview = () => {
        <p className="channel-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    };



    // preview for direct msgs
    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);

        return (
            <div className="channel-preview__item single">
                <Avatar
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.FullName}
                    size={24}
                />
                <p>{members[0]?.user?.FullName}</p>
            </div>
        )
    }

  return (
    <div className={
        channel?.id === activeChannel?.id ? 'channel-preview__wrapper__selected' : 'channel-preview__wrapper'
    }
    onClick={() => {
        console.log(channel);
    }}
    
    >
        {type === 'team' ? <ChannelPreview/> : <DirectPreview/> }
      
    </div>
  )
}

export default TeamChannelPreview
