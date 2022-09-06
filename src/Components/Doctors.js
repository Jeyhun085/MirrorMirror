import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const doctorsData = [
  {
    name: "Гулиева Севиль Теймуровна",
    ocupation: "Главный врач центра, специалист",
    img: "/images/doc1.png",
    study: [
      "Закончила РНИМУ им Н.И.Пирогова 2013 г. лечебное дело.",
      "Закончила МГЮА им О. Е. Кутафина 2014 г. специалист",
      "2013-2016 г. ординатура кафедры оториноларингологии на базе ГКБ №1 им Н.И.Пирогова",
      "2018 г.сотрудник кафедры кибернетики РНИМУ им. Н.И. Пирогова",
      "курсы повышения квалификации оториноларингологии 2020 г.",
      "курсы «Организация здравоохранения и общественное здоровье» 2020 г.",
      "курсы аппаратной косметологии 2017 г.",
      "2018-2022 г. Обучение аппаратной косметологии",
    ],
    work: [
      "в детской поликлинике с 2016 г.",
      `сеть частных клиник "ГЛАВВРАЧ" с 2016 г - 2020 г.`,
      "клиника International​ г. Баку 2017-2018 г.",
      "2020 г.генеральный директор, главврач в клинике NEW SYSTEM CLINIC г. Люберцы, ул Вертолетная 46",
      "С 2021 г. Генеральный директор, врач-специалист аппаратной косметологии центра MIRRORMIRROR",
      "Участница семинара ТКМ (традиционная китайская медицина)по лор-болезням 2016 г.",
      "участница семинаров по лор-болезням (Турция 2017г.)",
      "участница лекций по лор-болезням в Китае 2019 г.",
      "член АММ (Ассоциация Международной Медицины)с 2015 г.",
      "участник междисциплинарных конференций «Вейновские чтения» с 2015 г.",
      "участник Пироговских конференций с 2013г.",
      "Выступление с семинарами по лор-болезням для мамочек 2018-2020",
      "создатель курсов по повышению квалификации для врачей",
      "Обучаю аппаратной косметологии специалистов с 2020 оффлайн и онлайн",
    ],
  },
  {
    name: "Кан Вероника Вадимовна",
    ocupation: "Врач-специалист",
    img: "/images/doc2.png",
    study: [
      "Закончила МГМСУ  по специальности «Стоматология» , 2010г.",
      "Интернатура в МГМСУ по специальности « Стоматология общей практики», 2011г.",
      `Ординатура в Первом Московском Государственном Университете им.И.М.Сеченова по специальности «Стоматология ортопедическая», 2014г.`,
      `Курсы повышения квалификации на базе ФГБУ «ЦНИИС и ЧЛХ» Минздрава России по программе «Стоматология ортопедическая», 2019г.`,
      "Курсы по аппаратной косметологии Cosmedicus 2019г.",
      "Повышение квалификации по аппаратной косметологии 2020-2021гг."
    ],
    work: [
      
    ]
  },
  {
    name: "Дадаш-заде Лейла Фикрат кызы",
    ocupation: "Диетолог-нутрициолог, специалист",
    img: "/images/doc3.png",
  },
  {
    name: "Скуридина Дарья Викторовна",
    ocupation: "Эндокринолог",
    img: "/images/doc4.png",
  },
];

function Doctors() {
  let { index } = useParams();
  return (
    <div className="doctorsPage">
      <Container>
        <Row style={{ alignItems: "center" }}>
          <Col sm={6}>
            <img
              src={doctorsData[index - 1].img}
              alt="images"
              style={{ alignItems: "center", padding: "5%" }}
            />
          </Col>
          <Col sm={6}>
            {" "}
            <h2 className="docName">{doctorsData[index - 1].name}</h2>
            <p className="titles"> </p>
            <ul className="description">
              {doctorsData[index - 1].study.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </Col>
        </Row>
        <ul className="work">
          {doctorsData[index - 1].work.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </Container>
    </div>
  );
}

export { Doctors, doctorsData };
