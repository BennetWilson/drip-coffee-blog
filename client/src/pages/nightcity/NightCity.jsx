import React, { useState } from "react";
import "./NightCity.css";
import {Card, Button, Row, Col, CardGroup} from 'react-bootstrap'
import Auth from "../../utils/auth";

const NightCity = () => {
  return (

    <div className="nightCityPage">

<CardGroup className='musicList'>
  <Card className='cardList' >
    <Card.Img variant="top" src="/Assets/coffee-images/moonlight.jpg" className='cardImage' />
    <Card.Body>
        <a href='https://bit.ly/3sysK7F'>
      <Card.Title>Future Bass</Card.Title>
      </a>
      <Card.Text>
        This is a hardwave mix from 2021. It is not classified as 'Synthwave', but it has the same feel for the coding mindset
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    </Card.Footer>
  </Card>
  <Card className='cardList' >
    <Card.Img variant="top" src="/Assets/coffee-images/neo.jpg" className='cardImage'/>
    <Card.Body>
        <a href='https://bit.ly/3pqMwA4'>
      <Card.Title>Neo Tokyo</Card.Title>
      </a>
      <Card.Text>
        A mix of synthwave, darksynth and cyberpunk hits from 2019. This is not only a good mix of songs, but the background image and thumbnail add some visual greatness to this already fantastic mix.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        
    </Card.Footer>
  </Card>
  <Card className='cardList' >
    <Card.Img variant="top" src="/Assets/coffee-images/whitebat.jpg" className='cardImage'/>
    <Card.Body>
        <a href='https://bit.ly/3tjNIWZ'>
      <Card.Title>Neon Paradise</Card.Title>
      </a>
      <Card.Text>
      A mix of synthwave, chillwave and chill synth from 2021. This mix is legendary and very long. Could sit for hours and loop the same mix without getting bored.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    </Card.Footer>
  </Card>
</CardGroup>

<Row>
    <Col xs={4} className='docFlex'>
      <Card className ='doc' style={{ width: '18rem' }} >
  <Card.Img variant="top" src="/Assets/coffee-images/dr-disrespect.jpg" className='docImage'/>
  <Card.Body>
    <Card.Title className='docTitleLg'>Dr Disrespect</Card.Title>
    <Card.Title className='docTitleSm'>The Two-Time</Card.Title>
    <Card.Text>
      The back to back 1993-1994 BlockBuster video game world champion - The Slick Daddy.
      <br />
      He's got the LCD LED 1080P Sony Technology Scopes - the long black that drapes down his back AKA the bullet-proof mullet - the poisonous Ethiopian caterpillar on his lip.
      <br />
      He is the most dominant player in all of gaming.
    </Card.Text>
    <Button className ='docButton'variant="primary" href='https://championsclub.gg/' target='_blank'>Champions Club</Button>
  </Card.Body>
</Card>
</Col>



<Col xs={{ span: 4, offset: 4 }} className='musicFlex'>
<Card className="music" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/Assets/coffee-images/cityscape.jpg" className='musicImage'/>
  <Card.Body>
    <Card.Title className='mixTitleLg'>Miami Nights</Card.Title>
    <Card.Title className='mixTitleSm'>Mix Example</Card.Title>
    <Card.Text>
     Do you need to jam? Do you feel like you'd be better suited have spent your life in Miami during the 80's? Do you feel some sense of nostalgia toward something that you've never experienced? 

      <br />

      Do you think it should be midnight all day? Do you want a leather jacket and a motorcycle with neon lights?

      <br/>

      Click the Link below then.
    </Card.Text>
    <Button variant="primary" className='musicButton' href='https://bit.ly/3CjvPvH' target='_blank'>CyberPunk MixTape</Button>
  </Card.Body>
</Card>
</Col>
</Row>
    </div>
  );
};

export default NightCity;
