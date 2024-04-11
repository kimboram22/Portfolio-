import React from "react";
import { Wrapper } from "./Common";

const Profile: React.FC = () => {
  return (
    <Wrapper>
      <div className="flex flex-row gap-20 items-center mobile:flex-col">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
          <img src="/profile.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="py-2">
            디자인부터 개발까지 끈기 있게 노력하며 성장하는 개발자가 되고자
            합니다.
          </p>
          <p>Email : penguniee@gmail.com</p>
          <a
            href="https://github.com/kimboram22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github : https://github.com/kimboram22</p>
          </a>
          <a
            href="https://ppo0127.tistory.com/"
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
