import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function UserItem({ name, email, phone, id }) {
  return (
    <Card style={{ width: "18rem" }} className="user-item">
      <Card.Img
        variant="top"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Card.Text>{phone}</Card.Text>
        <Button as={Link} to={`/posts/${id}`} variant="primary">
          See posts
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserItem;
