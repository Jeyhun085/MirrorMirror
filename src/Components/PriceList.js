import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const images = ["price1","price2", "price3", "price4",];

export default function PriceList() {
  return (
    <div>
      <Row >
        {images.map((image) => {
          return <Col style={{display: "flex",  justifyContent: "center", marginTop: "20px"}} sm={6}>
            <img style={{width:"300px"}} alt={image} src={`/images/${image}.png`} />
          </Col>;
        })}
      </Row>
    </div>
  );
}
