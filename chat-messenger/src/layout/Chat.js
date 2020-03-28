import React from 'react'
import { Accordion, Card } from 'react-bootstrap'


const Chatboxes = () => {
	return (
		<div class="col-md-8">
		<Accordion defaultActiveKey="0">
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="0">
		      ChatBox with Andrés Manuel López Obrador,Mexico President
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="0">
		      <Card.Body>
		      	<span>Me: We need to build a wall, and it has to be very fast</span><br />
		      	<span>Andrés: But we are not paying it</span><br />
		      	
		      </Card.Body>
		    </Accordion.Collapse>
		  </Card>
		  <Card>
		    <Accordion.Toggle as={Card.Header} eventKey="1">
		      Click me!
		    </Accordion.Toggle>
		    <Accordion.Collapse eventKey="1">
		      <Card.Body>Hello! I'm another body</Card.Body>
		    </Accordion.Collapse>
		  </Card>
		</Accordion>
		</div>


	)



}
export default Chatboxes;