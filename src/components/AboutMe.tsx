import React from "react";
import { Title, Wrapper } from "./Common";

const AboutMe: React.FC = () => {
  return (
    <Wrapper>
      <Title>About Me.</Title>
      <p className="tracking-wide leading-relaxed pt-7">
        안녕하세요. 프론트엔드 지원자 김보람입니다. <br />
        <br />
        저는 다섯 개의 프로젝트에서 디자인부터 구현까지의 과정을 경험했습니다.
        피그마를 활용한 디자인에 더해, 프론트엔드 기술을 심도 있게 이해하려 두
        번의 훈련 과정을 이수했습니다. 이를 통해 새로운 언어를 배우고 팀
        프로젝트를 진행하면서 협업과 커뮤니케이션의 중요성을 느꼈습니다. <br />
        <br />
        디자인 툴의 활용 덕분에 프로젝트 초기 단계에서 효율적으로 작업을 추진할
        수 있었습니다. 또한, 팀원과 원활한 소통을 통해 프로젝트의 효율성을
        높였습니다. 새로운 기술을 배우는 것을 즐기고, 이를 실제 프로젝트에
        적용하는 것에 집중하고 있습니다. 앞으로도 계속해서 새로운 기술을 배우고,
        팀원들과 원활하게 협업하여 프로젝트의 성공을 위해 최선을 다하겠습니다.
        프론트엔드 개발자로서 제 경험과 능력이 귀사에 새로운 가치를 더할 것임을
        확신합니다.
      </p>
    </Wrapper>
  );
};

export default AboutMe;
