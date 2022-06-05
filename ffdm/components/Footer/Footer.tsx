import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import React from "react";
import Link from "../CustomLink";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <Image src="/ffdmlog.jpg" width={"50%"} height={"50%"} />
          <h3>
            FF<span>DM</span>
          </h3>

          <p className="footer-links">
            <div className="d-block">
              <a href="#">Testimonies</a> |{" "}
              <Link href="/programmes">
                <a>Programmes</a>
              </Link>{" "}
            </div>
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+2349065643824</p>
          </div>
          <div>
            <p>
              <a href="faithfreedomdeliverancemin@gmail.com">
                faithfreedomdeliverancemin@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the Church</span>
            We offer training and skill building courses across Technology,
            Design, Management, Science and Humanities.
          </p>
          <div className="footer-icons">
            <a href="https://web.facebook.com/profile.php?id=100076659077323">
              <FacebookOutlined />
            </a>
            <a href="https://www.twitter.com/faithfreedomdeliverancemins">
              <TwitterOutlined />
            </a>
            <a href="https://www.instagram.com/faithfreedomdeliverancemins">
              <InstagramOutlined />
            </a>
            <a href="https://www.linkedin.com/faithfreedomdeliverancemins">
              <LinkedinOutlined />
            </a>
            <a href="https://www.youtube.com/channel/UCW9R0y3Sr44IWYR_eE9F6Zw">
              <YoutubeOutlined />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
