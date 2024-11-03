import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

function Call() {
  const { id } = useParams()
  const meetingContainer = useRef(null)

  useEffect(() => {
    const mymeeting = async () => {
      const appId = 1025984520
      const serverSecret = "9383ba78f4ebec359aa8e22eedf4c686"
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, id, Date.now().toString(), "Shardul")
      const zc = ZegoUIKitPrebuilt.create(kitToken)
      zc.joinRoom({
        container: meetingContainer.current,
        sharedLinks:[
          {
            name:"Copy Link",
            url:`https://mymeet-video.vercel.app/room/${id}`
          }
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall
        }
      })
    }
    mymeeting()
  }, [id])

  return (
    <div>
      <div ref={meetingContainer} style={{ width: '100%', height: '100vh' }} />
    </div>
  )
}

export default Call