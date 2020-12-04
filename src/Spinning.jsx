import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spinning = (props) => (
    <Segment>
    <Dimmer active>
    <Loader size='massive'>{props.message}</Loader>
    </Dimmer>

    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default Spinning