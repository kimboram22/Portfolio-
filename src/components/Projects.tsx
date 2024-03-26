import React from "react";
import { Title, Wrapper } from "./Common";
import Project from "./Project";

const Projects: React.FC = () => {
  const stacks = {
    React:
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    JavaScript:
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white",
    TypeScript:
      "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    Tailwind_CSS:
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    html5:
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    css3: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    Socket_io:
      "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
    postgres:
      "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    AWS: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    NestJS:
      "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
    NodeJS:
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    ExpressJS:
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    JWT: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
    Vercel:
      "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
    Actions:
      "https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
    Solidity:
      "https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white",
    Ethereum:
      "https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white",
    MySQL:
      "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    Sequelize:
      "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white",
    Jest: "https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white",
  };
  const projectData = [
    {
      projectName: "NaeGift (내기프트)",
      img: "/projects/naegift.png",
      date: "2024.02 - 2024.03",
      info: "DID Project - Authrium 기업 협약 프로젝트",
      info2: "DID 신원증명을 통한 VC발급 활용한 마켓 플레이스",
      role: "5인 프로젝트 (역할 : 프론트엔드 담당)",
      github: "https://github.com/naegift/did_project",
      figma: "",
      deploy: "https://nae-gift.com/",
      features: [
        "메인, 선물함, 상품 상세 페이지 디자인 및 구현",
        "모달을 활용한 선물 보내기",
        "반응형 적용(데스크탑, 태블릿, 모바일)",
      ],
      stack: [
        [stacks.React, stacks.TypeScript, stacks.Tailwind_CSS],
        [stacks.NestJS, stacks.postgres, stacks.Solidity, stacks.AWS],
      ],
      lessons: [
        "Tpyescript interfatce 설계 및 DTO 활용에 관해서 backend의 api문서(스웨거)를 참고해서 DTO interface를 typescript로 작성해서 객체의 요청과 응답의 내용을 팀원들과 공유하여 사용했습니다.",
        "컴포넌트를 동적으로 생성하는 과정에서 key값의 부재로 리랜더링이 일어나지 않았던 이슈를 해결하여 리액트 랜더링 구조를 이해할수 있었습니다.",
      ],
    },
    {
      projectName: "Stacker-Labs",
      img: "/projects/stackerlabs.png",
      date: "2023.12 - 2024.01",
      info: "React Project - dev.to를 모티브한 개발자 커뮤니티 서비스",
      info2: "",
      role: "4인 프로젝트 (역할 : 프론트엔드 담당)",
      github: "https://github.com/Stacker-Labs/KGA-React-Project",
      figma:
        "https://www.figma.com/file/ScjaLByPGIIM451UCdB09N/Stacker-Labs?type=design&node-id=0%3A1&mode=design&t=BjZzWFFzVir2acRT-1",
      deploy: "https://nae-gift.com/",
      features: [
        "Tailwind와 React recoil으로 다크모드",
        "Search bar와 #(tags)를 사용하여 게시글 검색 페이지 구현",
        "admin(관리자) 페이지 구현",
        "반응형 적용(데스크탑, 태블릿, 모바일)",
      ],
      stack: [
        [stacks.React, stacks.JavaScript, stacks.Tailwind_CSS],
        [stacks.NestJS, stacks.TypeScript, stacks.Socket_io, stacks.postgres],
        [stacks.AWS, stacks.Vercel, stacks.Actions],
      ],
      lessons: [
        "프로젝트 초반에 MUI(Material-UI)를 선택했지만, 공식 문서만으로는 제한적이었고 커스터마이징이 어려워서 추가 조사와 개발이 필요했습니다. 그래서 테일윈드(Tailwind)를 결합하여 더 자유롭게 재사용과 커스터마이징을 할 수 있었습니다.",
        "",
      ],
    },
    {
      projectName: "GameSync",
      img: "/projects/gamesync.png",
      date: "2023.11 - 2023.11",
      info: "NodeJS Project - 게임 개발자를 위한 커뮤니티 서비스",
      info2: "",
      role: "3인 프로젝트 (역할 : 프론트엔드, 백엔드 담당)",
      github: "https://github.com/kimboram22/GameSync-",
      figma:
        "https://www.figma.com/file/7A1G2xY5G8VV9nbGPtnEaq/gamesync?type=design&node-id=0%3A1&mode=design&t=xFcojFU1jKqVT6Hk-1",
      deploy: "",
      features: [
        "메인, 각 게시판, admin 페이지 디자인 및 구현",
        "게시글 등록 및 수정, 삭제",
        "kakao login",
      ],
      stack: [
        [stacks.JavaScript, stacks.html5, stacks.css3],
        [stacks.NodeJS, stacks.Sequelize, stacks.MySQL, stacks.JWT],
      ],
      lessons: [
        "팀원 모두 프론트엔드와 백엔드 작업을 함께 수행하다보니 Github을 통한 협업 과정에서 충돌이 발생되었는데 코딩 컨벤션과 협업에 대한 중요성을 깨달았습니다.",
        "html과 css만으로 작업을 하다보니 공통으로 사용되는 아이템을 수정해야하는 경우 전체 파일을 수정해야하는 번거로움을 겪었습니다.",
      ],
    },
    {
      projectName: "PPO-My Bag",
      img: "/projects/bag.png",
      date: "2023.10 - 2023.11",
      info: "Express Project - 가방 판매 쇼핑몰",
      info2: "",
      role: "1인 프로젝트 (역할 : 프론트엔드, 백엔드 담당)",
      github: "https://github.com/kimboram22/PPO_My_Bag",
      figma: "",
      deploy: "",
      features: ["게시글 등록 및 수정, 삭제"],
      stack: [
        [stacks.JavaScript, stacks.html5, stacks.css3],
        [stacks.ExpressJS, stacks.Sequelize, stacks.MySQL, stacks.JWT],
      ],
      lessons: [""],
    },
    {
      projectName: "Board CRUD Project",
      img: "/projects/board_crud.png",
      date: "2023.09 - 2023.10",
      info: "Express Project - 학원 건의 게시판 서비스",
      info2: "",
      role: "2인 프로젝트 (역할 : 프론트엔드 담당)",
      github: "https://github.com/kimboram22/CRUD_BOARD_PROJECT",
      figma:
        "https://www.figma.com/file/vmZrD7AuXhu7AHw74ARvkn/project?type=design&node-id=0%3A1&mode=design&t=BVBrDOMzaVrp8Ddj-1",
      deploy: "",
      features: ["게시글 등록 및 수정, 삭제"],
      stack: [
        [stacks.JavaScript, stacks.html5, stacks.css3],
        [stacks.ExpressJS, stacks.Sequelize, stacks.MySQL],
      ],
      lessons: [""],
    },
  ];

  return (
    <Wrapper>
      <Title>Projects.</Title>

      {projectData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </Wrapper>
  );
};

export default Projects;
