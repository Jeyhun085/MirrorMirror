import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Container id="footer" className="footer-section">
      <h3 className="footer-header">Свяжитесь с нами</h3>
      <div className="footer-info">
        <img
          src={"/images/phone-icon.png"}
          width="40px"
          height="auto"
          alt="images"
          color="white"
        />
  
        <a className="phone-number" href="tel:+79259258631">+7 (925) 925-86-31</a>
      </div>
      <div className="footer-info">
        <img
          src={"/images/location-icon.png"}
          width="40px"
          height="auto"
          alt="images"
          color="white"
        />

        <a className="phone-number" href="https://yandex.ru/maps/org/mirror_mirror/58442506550/">Малая Филёвская ул., 26, корп. 1, Москва</a>
      </div>
      <div className="copyright">
        © 2022 Copyright:
        <a className="link-mirror" href="https://mirrorcenter.ru/">
          mirrorcenter.ru
        
        </a>
        <p style={{ fontSize:"10px", color:"rgba(250, 235, 215, 0.7)", marginTop:"10px"}} > Created by: Jeyhun Asgarov</p>
      </div>
    </Container>
  );
}
