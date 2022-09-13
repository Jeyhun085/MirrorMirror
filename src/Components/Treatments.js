import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import treatmentsData from "../TreatmentsData";

function Treatments() {
  let { index } = useParams();
  return (
    <Container style={{ marginTop: "5%" }}>
      <div>
        <Row>
          <Col style={{ margin: "auto" }} md={6}>
            <img
              className="procedur-image"
              src={`/images/${treatmentsData[index].img}`}
              alt="smas"
            />
          </Col>
          <Col
            style={{ display: "flex", alignItems: "center", marginTop: "5%" }}
            md={6}
          >
            <div>
              <h2>{treatmentsData[index].name}</h2>
              {treatmentsData[index].price !== undefined && (
                <h6
                  style={{
                    fontWeight: "bold",
                    padding: "2%",
                    border: "1px solid #4c3a2f",
                    borderRadius: "12px",
                    display: "inline-block",
                  }}
                >
                  {treatmentsData[index].price}
                </h6>
              )}

              <p className="procedur-desc"> {treatmentsData[index].text1}</p>
            </div>
          </Col>
        </Row>

        <div className="instruction">
          <ul>
            <li style={{ listStyle: "none" }}>Показания:</li>
            {treatmentsData[index].instruction.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>

        <p>{treatmentsData[index].text2}</p>
      </div>
    </Container>
  );
}

export default Treatments;
