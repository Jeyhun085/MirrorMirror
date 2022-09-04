import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const doctorsData = [
  {
    index: 1,
    name: "Гулиева Севиль Теймуровна",
    ocupation: "Главный врач центра, специалист",
    img: "/images/doc1.png"
  },
  {
    index: 2,
    name: "Кан Вероника Вадимовна",
    ocupation: "Врач-специалист",
    img: "/images/doc2.png"
  },
  {
    index: 3,
    name: "Диетолог-нутрициолог, специалист",
    ocupation: "Врач-специалист",
    img: "/images/doc3.png"
  },
  {
    index: 4,
    name: "Скуридина Дарья Викторовна",
    ocupation: "Эндокринолог",
    img: "/images/doc4.png"
  },
];

function Doctors() {
  let { index } = useParams();
  return (
    <div className="doctorsPage">
      <h1>This is Doctors page {doctorsData[index].name}</h1>
      <Container>
      <Row style={{ alignItems: "center"}}>
            <Col sm={6}>
              <img
                src="/images/doc1.png"
                alt="images"
              />
            </Col>
            <Col sm={6}>
              <p className="description">
             
Гулиева Севиль Теймуровна 32 года

✔️Закончила РНИМУ им Н.И.Пирогова 2013 г. лечебное дело. 
✔️Закончила МГЮА им О. Е. Кутафина 2014 г. специалист
✔️2013-2016 г. ординатура кафедры оториноларингологии на базе ГКБ №1 им Н.И.Пирогова,
✔️ 2018 г.сотрудник кафедры кибернетики РНИМУ им. Н.И. Пирогова, 
✔️курсы повышения квалификации оториноларингологии 2020 г., 
✔️курсы «Организация здравоохранения и общественное здоровье» 2020 г., 
✔️курсы аппаратной косметологии 2017 г.
✔️2018-2022 г. Обучение аппаратной косметологии 
              </p>
            </Col>
          </Row>
      </Container>
    </div>
   
  );
}

export { Doctors, doctorsData };
