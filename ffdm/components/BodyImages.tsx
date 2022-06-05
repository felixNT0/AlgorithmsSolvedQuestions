// import Image from "next/image";
import { Col, Image, Row } from "antd";
import { images } from "../pages/images";
function BodyImages() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div style={{ objectFit: "cover" }} className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <Image
              preview={false}
              width={"100%"}
              height={"70%"}
              src="https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/275465034_130099019555400_7409506986007881871_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGHtJYiA5r8HTp94Uxfl6ylN1Z8XNZztdQ3Vnxc1nO11E8_kYRx52Y534Vg6hDnnEN_EuOcgNaY1YNn5qMe7-pp&_nc_ohc=sb5VPUd1BAQAX9BdJDb&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AT_Wmkqg4wslyUZ13aCWPtfBlMsla8fPP0eoWWKU9e3G9A&oe=62A034E2"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              preview={false}
              width={"100%"}
              height={"70%"}
              src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/272355215_115870194311616_4194264145412025438_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEqxIs9b8-TF8y23shq76qgHhDHNGcWqEQeEMc0ZxaoRB_i8fzDdqo9I4M4m1j08d4DGzxyyn0JfmNj9A1_1vk8&_nc_ohc=WgyXjj5YyKEAX9EYXFT&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AT-8SVLlA6YrP_RChCX_qkM3oy3QNQvYYpa28SikTPkdeQ&oe=62A09F31"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <Image
              style={{ objectFit: "cover" }}
              preview={false}
              width={"100%"}
              height={"70%"}
              src="https://scontent.fabv2-2.fna.fbcdn.net/v/t39.30808-6/271464740_107693748462594_9120618387399437151_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHjVax1joYCjAyiTGOBkbGj5u49LPGl5VTm7j0s8aXlVDW4EjEvLz4MYRda12JrmkdJFFDd8H6O5G2ZKbBTciA7&_nc_ohc=i4fJnEirqGoAX-zv3eo&tn=B8sjiVsN4P57_yN1&_nc_zt=23&_nc_ht=scontent.fabv2-2.fna&oh=00_AT-PtZgP3LvISAfpQ3iq_QnWpGZH2xwsC02cx8jyO4thcg&oe=629F7597"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Row gutter={[8, 8]}>
        {images.map((det: any) => (
          <Col className="gutter-row" xs={{ span: 6 }} lg={{ span: 6 }}>
            <Image src={det.imageUrl} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BodyImages;
