import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { doctorsData } from "./Doctors";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import reviews from "../ReviewsData";
const resultAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function MainPage() {
  return (
    <div>
      <Container fluid className="introSection">
        <h1 className="mirror">MirrorMirror</h1>
        <hr className="line" />
        <h2 className="podtext">Центр аппаратной косметологии</h2>
      </Container>

      <Container fluid className="aboutSection">
        <h1 className="header"> О НАС</h1>
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col style={{display: "flex", justifyContent: "center"}} sm={6}>
              <img
                src="/images/team.jpg"
                width="80%"
                height="auto"
                alt="images"
              />
            </Col>
            <Col sm={6}>
              <p className="description">
                Центр аппаратной косметологии «MirrorMirror» - это райское
                место, где Вы можете окунуться в атмосферу спокойствия, гармонии
                и уюта. Благодаря индивидуальному и комплексному подходу
                грамотных врачей и специалистов, мы помогаем Вам добиться
                желаемого результата, сбалансировать рацион питания, не прибегая
                к жёстким ограничениям.{" "}
              </p>
            </Col>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Col sm={6}>
              <p className="description">
                Mirror Mirror – эта та самая сказка, которая становиться явью.
                Наше зеркало покажет Вам ПРАВДУ о вашем теле и лице! Ведь Вы
                итак уже красивы, а мы является лишь проводниками в раскрытии
                вашей истинной красоты.    На протяжении всего курса, Вам заземлиться, услышать и начать
                любить себя❤️.
              </p>
            </Col>
            <Col style={{display: "flex", justifyContent: "center"}} sm={6}>
              <img
                src="/images/image4.jpg"
                width="80%"
                height="auto"
                alt="images"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid id="treatments" className="proceduresSection">
        <h1 className="header">ПРОЦЕДУРЫ</h1>
        <Container>
          <Row style={{ gap: "10px" }} sm={"auto"}>
            <Button  href="/treatments/1"  className="treatmentButtons" variant="outline-secondary">
              SMAS-лифтинг тела
            </Button>
            <Button  href="/treatments/2"  className="treatmentButtons" variant="outline-secondary">
              RF-лифтинг тела
            </Button>
           
            <Button  href="/treatments/3" className="treatmentButtons" variant="outline-secondary">
              Лазерная эпиляция
            </Button>
            <Button  href="/treatments/4"  className="treatmentButtons" variant="outline-secondary">
              Микротоковая терапия
            </Button>
            <Button  href="/treatments/5"  className="treatmentButtons" variant="outline-secondary">
              Кавитация
            </Button>
            <Button  href="/treatments/6"  className="treatmentButtons" variant="outline-secondary">
              RF-лифтинг лица
            </Button>
            <Button  href="/treatments/7"  className="treatmentButtons" variant="outline-secondary">
              Лазерный липолиз
            </Button>       
            <Button  href="/treatments/8"  className="treatmentButtons" variant="outline-secondary">
              Карбоновый пиллинг
            </Button>
        
            <Button  href="/treatments/9"  className="treatmentButtons" variant="outline-secondary">
              Прессотерапия с ИК-прогревом
            </Button>
            <Button  href="/treatments/10"  className="treatmentButtons" variant="outline-secondary">
              Миостимуляция (фитнес для ленивых)
            </Button>
            <Button  href="/treatments/12"  className="treatmentButtons" variant="outline-secondary">
              Ультрафонофорез
            </Button>
            <Button  href="/treatments/11"  className="treatmentButtons" variant="outline-secondary">
              VELASHAPE 4D массаж
            </Button>
            <Button  href="/treatments/13"  className="treatmentButtons" variant="outline-secondary">
            SMAS-лифтинг лица
            </Button>
          </Row>
        </Container>
      </Container>
      <Container fluid className="aksiya">
        <h1 className="header">АКЦИЯ</h1>
        <img
          style={{ width: "100%" }}
          alt="akciya"
          src="/images/akciya.jpeg"
        />
      </Container>
      <Container>
        <h1 className="header">НАШИ СПЕЦИАЛИСТЫ</h1>
        <Row style={{ gap: "20px", justifyContent: "center" }}>
          {doctorsData.map((doctor, index) => {
            return (
              <Card key={index} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={doctor.img} />
                <Card.Body>
                  <Card.Title>{doctor.name}</Card.Title>
                  <Card.Text>{doctor.ocupation}</Card.Text>
                  <Button
                    style={{ float: "right" }}
                    variant="outline-secondary"
                    href={`/doctors/${index+1}`}
                  >
                    Подробнее
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
      <Container id="results" className="resaults" style={{ alignItems: "center" }}>
        <h1 className="header">РЕЗУЛЬТАТЫ ПРОЦЕДУР</h1>
        <Carousel style={{ width: "50%", margin: "auto", minWidth: "300px" }}>
            {resultAmount.map((num, index) => {
              return (
                  <Carousel.Item key={index} style={{diplay: "flex"}}>
                    <img
                      src={`/images/result${num}.png`}
                      width="100%"
                      height="auto"
                      alt="images"
                    />
                  </Carousel.Item>
              );
            })}
        </Carousel>
      </Container>
      <Container fluid>
        <h1 className="header">ОТЗЫВЫ</h1>

        <section id="testimonials">
          <div className="testimonial-box-container">
            <div className="testimonial-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img" style={{borderRadius:"50px"}}>
                    <img src="/images/avatarka3.png" alt="images"/>
                  </div>

                  <div className="name-user">
                    <strong>Дарья С.</strong>
                  </div>
                </div>

                <div className="reviews">
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                </div>
              </div>

              <div className="client-comment">
                <p>
                  В невероятном восторге от центра косметологии "Mirror Mirror"!
                  Делала там чистку лица и микротоки. Сказать, что осталась
                  довольна, ничего не сказать. Уютная доброжелательная
                  атмосфера, профессиональный и позитивный коллектив
                  специалистов. Подробно рассказали мне о всех процедурах,
                  понятно и доступно ответили на множество моих вопросов. Я
                  выбрала микротоки для лица. И результат превзошел все мои
                  ожидания! Эффект омоложения был заметен даже друзьям и
                  коллегам. Я осталась очень довольна. Планирую попробовать и
                  другие процедуры. Рекомендую.
                </p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img">
                    <img src="/images/avatarka3.png" alt="images" />
                  </div>

                  <div className="name-user">
                    <strong>Ряднова Новожилова</strong>
                  </div>
                </div>

                <div className="reviews">
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                </div>
              </div>

              <div className="client-comment">
                <p>
                  Очень душевная, дружеская и по настоящему уютная обстановка,
                  располагающая к расслаблению, общению и медитации. Сюда точно
                  хочется вернуться, т. к. здесь 100% помогут решить проблемы с
                  фигурой, улучшить и привести к идеалу лицо. Здесь работают
                  профессионалы своего дела! Всем советую от души. Точно не
                  разочаруетесь.
                </p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img">
                    <img src="/images/avatarka3.png" alt="images" />
                  </div>

                  <div className="name-user">
                    <strong>Tamilla Rzayeva</strong>
                  </div>
                </div>

                <div className="reviews">
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                </div>
              </div>

              <div className="client-comment">
                <p>{reviews[17].text}</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img">
                    <img src="/images/avatarka3.png" alt="images" />
                  </div>

                  <div className="name-user">
                    <strong>Нина Т.</strong>
                  </div>
                </div>

                <div className="reviews">
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                  <i className="fa">&#xf005;</i>
                </div>
              </div>

              <div className="client-comment">
                <p>
                  Долго не могла найти студию красоты, где будут оказывать
                  разнообразные услуги аппаратной косметологии в одном месте.По
                  рекомендации обратилась с целью привести себя к лету в форму,
                  тк на тренировки особенно времени нету. Хочу выразить
                  благодарность доктору Кан Веронике, ходила к ней на
                  lpg-процедуры , в ее заботливых руках я просто отдыхала, все
                  сделано настолько аккуратно, но самое главное качественно. За
                  2 недели ушли 6 см в объемах, кожа заметно подтянулась и стала
                  более гладкой.такого чудесного результата я не ожидала!!!!
                  Атмосфера в данном салоне потрясающая, как будто приходишь к
                  подруге, все по- домашнему и непренужденно.Всем рекомендую
                  обратиться. Всем сотрудникам выражаю огромную благодарность за
                  труд!!!
                </p>
              </div>
            </div>
          </div>
          <Button style={{marginTop:"2%"}} href="/reviews" variant="outline-secondary">Посмотреть все отзывы</Button>
        </section>
        
      </Container>
    </div>
  );
}

export default MainPage;
