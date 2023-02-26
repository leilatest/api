import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Cards({name,email,phone,id}){
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
        />
        <Card.Body>
          <Card.Title>
            {id}: {name}
            {}
          </Card.Title>
          <div className="con">
            <Card.Text>{email}</Card.Text>
            <Card.Text>{phone}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
