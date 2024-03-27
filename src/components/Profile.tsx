import React from "react";
import { Wrapper } from "./Common";

const Profile: React.FC = () => {
  return (
    <Wrapper>
      <div className="flex flex-row gap-20 items-center mobile:flex-col">
        <div className="w-[200px] h-[200px] rounded-full bg-mainColor">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <p>한줄소개 작성하기</p>
          <p>Email : penguniee@gmail.com</p>
          <a
            href="https://github.com/kimboram22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github : https://github.com/kimboram22</p>
          </a>
          <a
            href="https://github.com/kimboram22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Blog : https://ppo0127.tistory.com/</p>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
