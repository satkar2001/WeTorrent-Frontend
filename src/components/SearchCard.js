import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchCard = () => {
    return ( 
     <Card style={{width:'100%', height:'200px'}}>
      <Card.Body>
          <Form style={{display:"flex"}} action="/search" method="get">
              <Form.Control type="search" name="search" placeholder="search for torrents!" />
             <Button  style={{marginLeft:"5px", height:"38px",backgroundColor:"rgb(1, 8, 18)"}} type="submit">Search</Button>
          </Form>
      </Card.Body>
        <Card.Text style={{marginLeft:'auto',marginRight:'auto',marginTop:'100px',textAlign:'center'}}>
            Happy Torrenting !!!
        </Card.Text>

     </Card>

     );
}
 
export default SearchCard;