import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProgramCard from "../../components/programmes/ProgramCard";

function Pro() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <Spin
          size="large"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "70vh",
            alignItems: "center",
          }}
        />
      ) : (
        <div className="pa-3">
          <ProgramCard />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Pro;
