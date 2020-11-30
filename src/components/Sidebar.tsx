import React from 'react';

interface SidebarProps {
  isSidebarOn: boolean,
  handleProfileClick: () => void
}

function Sidebar(props: SidebarProps) {
  const {isSidebarOn, handleProfileClick} = props;
  return(
    <aside className={isSidebarOn ? "Sidebar" : "Sidebar-off"}>
      <div>
        <div className="intro">
          안녕하세요, 새로운 지식과 기술의 습득에 거부감 없는<br/>
          끊임없이 공부하는 신입 프론트엔드 개발자 김태수입니다.<br/>
          트렌드에 대해 민감하며, 개발과는 별개로 패션 문화 등<br/>
          여러 방면으로 관심분야가 넓어<br/>
          좋은 개발 시너지를 낼 수 있는 개발자 입니다.
        </div>
        <div className="school">
          <p>School</p>
          <div>
            동아방송예술대학교 무대미술과 <span>2014.02 ~ 2017.02</span><br/>
            코드스테이츠 풀스택 개발자 과정 부트캠프 <span>2020.06 ~ 2021.02</span>
          </div>
        </div>
        <div className="address">
          <p>Address</p>
          <div>
            경기도 고양시 일산동구 정발산동<br/>
            <br/>
            Ilsandong-gu<br/>
            Goyang-si, Gyeonggi-do<br/>
            Republic of Korea<br/>
          </div>
        </div>
        <div className="get-in-touch">
          <p>Get in touch</p>
          <div>
            tsts_@naver.com<br/>
            010 - 8580 - 1172
          </div>
        </div>
      </div>
      <div className="Sidebar-nav">
        <div onClick={handleProfileClick}>Close</div>
        <i className="fab fa-github"></i>
      </div>
    </aside>
  )
  
}

export default Sidebar;
