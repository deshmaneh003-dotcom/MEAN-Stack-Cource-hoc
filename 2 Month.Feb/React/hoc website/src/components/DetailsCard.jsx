import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTitle from 'react-bootstrap/esm/CardTitle';


export const DetailsCard = ( {CardTitle, CardDescription} ) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://wallpaperaccess.com/full/20008.jpg" />
              <Card.Body>
                <Card.Title> {CardTitle} </Card.Title>
                <Card.Text>
              {CardDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

    </div>
  )
}
export default  DetailsCard
