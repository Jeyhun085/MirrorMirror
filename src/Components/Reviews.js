import Container from "react-bootstrap/Container";
import reviews from "../ReviewsData"

function Reviews() {
  return (
    <Container>
    <h1 className="header">ОТЗЫВЫ</h1>

    <section id="testimonials">


      <div class="testimonial-box-container">
      {reviews.map((review)=>{
        return(
          <div class="testimonial-box">

          <div class="box-top">

            <div class="profile">

              <div class="profile-img">
                <img src="/images/avatarka3.png" alt="images" />
              </div>

              <div class="name-user">
                <strong>{review.name}</strong>

              </div>
            </div>

            <div class="reviews">
              <i class="fa">&#xf005;</i>
              <i class="fa">&#xf005;</i>
              <i class="fa">&#xf005;</i>
              <i class="fa">&#xf005;</i>
              <i class="fa">&#xf005;</i>
            </div>
          </div>

          <div class="client-comment">
            <p>{review.text}</p>
          </div>
        </div>
        )
      })}
      </div>
    </section>
    <Container className="footer">


    </Container>
  </Container>
  );
}

export default Reviews;