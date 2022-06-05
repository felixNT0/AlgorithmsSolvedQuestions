import { Card, Image, Spin, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { DescriptionProps, details } from "../../components/programmes/program";
const { Paragraph } = Typography;
function Program() {
  const router = useRouter();
  const id: string = router.query.id as string;

  const [loading, setLoading] = useState(true);
  const [program, setProgram] = useState<DescriptionProps>();
  const handleGet = () => {
    const findProgramById = details.find((pro: any) => pro.id === id);
    setProgram(findProgramById);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      handleGet();
    }, 3000);
  }, []);
  return (
    <div>
      <Navbar />
      <br />
      <div>
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
            {program && (
              <>
                <Card
                  key={id}
                  cover={
                    <Image
                      preview={false}
                      width={"100%"}
                      src={program.imageUrl}
                      alt="..."
                    />
                  }
                  hoverable
                >
                  <Meta
                    title={program.title}
                    description={program.decription}
                  />
                </Card>
                <br />
                <Paragraph>{program.fullDescription}</Paragraph>
              </>
            )}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Program;
