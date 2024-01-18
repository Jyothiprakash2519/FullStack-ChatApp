/* eslint-disable react/prop-types */
// import { PrettyChatWindow } from 'react-chat-engine-pretty'
// const ChatsPage = (props) => {
//     return (<div style={{height: '100vh'}}>
//      <PrettyChatWindow 
//      projectId='41594f5d-53f4-4e3d-bfa0-1ec15aef2e2b'
//      username={props.user.username}
//      secret={props.user.secret}
//      style={{ height: '100%'}}
//      />
//     </div>
//     )
//   };
//   export default ChatsPage;


  import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
  const ChatsPage = (props) => {
      const chatProps = useMultiChatLogic('41594f5d-53f4-4e3d-bfa0-1ec15aef2e2b', props.user.username, props.user.secret)
      return (<div style={{height: '100vh'}}>
       <MultiChatSocket {...chatProps}  />
       <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
      </div>
      )
    };
    export default ChatsPage;