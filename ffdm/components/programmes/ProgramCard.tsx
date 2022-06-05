import { Card, Col, Divider, Image, Row, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import { useRouter } from "next/router";
import React from "react";
import { details } from "./program";

const { Title, Paragraph } = Typography;
function ProgramCard() {
  const router = useRouter();
  return (
    <div>
      <br />
      <Paragraph>
        <Title className="text-center">Programmes</Title>
      </Paragraph>
      <Divider />
      <Row gutter={[16, 16]}>
        {details.map((det: any) => (
          <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 8 }}>
            <Card
              onClick={() => router.push(`/programmes-details/${det.id}`)}
              key={det.id}
              cover={
                <Image
                  preview={false}
                  width={"100%"}
                  src={det.imageUrl}
                  alt="..."
                />
              }
              hoverable
            >
              <Meta title={det.title} description={det.decription} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProgramCard;
