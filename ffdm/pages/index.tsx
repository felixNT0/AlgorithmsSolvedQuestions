import type { NextPage } from "next";
import BodyImages from "../components/BodyImages";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <>
        <Navbar />
        <div className="mt-3 pa-5">
          <BodyImages />
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Home;
