import React from "react";
import { Title, Wrapper } from "./Common";

const AboutMe: React.FC = () => {
  return (
    <Wrapper>
      <Title>About Me.</Title>
      <p className=" tracking-wide leading-relaxed">
        안녕하세요. 프론트엔드 지원자 김보람입니다. <br />
        저는 총 5개의 프로젝트에서 디자인, 구현, 개발에 참여하였습니다. <br />
        디자인 툴인 피그마를 통해 초기 디자인을 구상하고 직접 구현했습니다.
        <br />
      </p>
    </Wrapper>
  );
};

export default AboutMe;
