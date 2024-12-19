import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";


const CareerTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.2, // 20%가 화면에 들어올 때 트리거
  });

  const openWebsite = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div ref={ref}>
      <VerticalTimeline animate={inView}>
        <VerticalTimelineElement
          date="2021.03 - Present"
          iconStyle={{
            background: "rgba(255, 255, 255, 0.2)", // 반투명한 흰색 배경
            backdropFilter: "blur(10px)", // 블러 효과
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // 부드러운 그림자
            border: "1px solid rgba(255, 255, 255, 0.3)", // 얇은 테두리
          }}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.2)", // 카드 배경
            backdropFilter: "blur(10px)", // 블러 효과
            color: "#333A4D", // 텍스트 색상
            border: "1px solid rgba(255, 255, 255, 0.3)", // 얇은 테두리
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // 그림자 효과
            borderRadius: "10px", // 카드 둥근 모서리
            padding: "20px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255, 255, 255, 0.2)", // 화살표 색상 및 배경
          }}
          icon={<div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img src="/icons/bar-chart.svg" alt="MailPlug" />
          </div>}
        >
          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer" }}
            onClick={() => openWebsite("https://mnc.ai/")}
          >
            <h3>(주)마인즈앤컴퍼니</h3>
            <h4 style={{ marginLeft: "10px" }}>Minds & Company</h4>
          </div>
          <p>Frontend 개발 전담 / Web Application 개발 / 플랫폼 개발 & 운영</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2019.04 - 2021.02"
          iconStyle={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            color: "#333A4D",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            padding: "20px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255, 255, 255, 0.2)",
          }}
          icon={<div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img src="/icons/rocket.svg" alt="MailPlug" />
          </div>}
        >
          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer" }}
            onClick={() => openWebsite("https://www.mailplug.com/")}
          >
            <h3>(주)메일플러그</h3>
            <h4 style={{ marginLeft: "10px" }}>MailPlug</h4>
          </div>
          <p>Fullstack 개발 / 사내 메신저 서비스 개발 & 운영</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2009.03 - 2018.02"
          iconStyle={{
            background: "rgba(255, 255, 255, 0.2)", // 반투명한 흰색 배경
            backdropFilter: "blur(10px)", // 블러 효과
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // 부드러운 그림자
            border: "1px solid rgba(255, 255, 255, 0.3)", // 얇은 테두리
          }}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.2)", // 카드 배경
            backdropFilter: "blur(10px)", // 블러 효과
            color: "#333A4D", // 텍스트 색상
            border: "1px solid rgba(255, 255, 255, 0.3)", // 얇은 테두리
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // 그림자 효과
            borderRadius: "10px", // 카드 둥근 모서리
            padding: "20px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255, 255, 255, 0.2)", // 화살표 색상 및 배경
          }}
          icon={<div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img src="/icons/book.svg" alt="MailPlug" />
          </div>}
        >
          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer" }}
            onClick={() => openWebsite("https://www.ssu.ac.kr/")}
          >
            <h3>숭실대학교</h3>
            <h4 style={{ marginLeft: "10px" }}>Soongsil University</h4>
          </div>
          <p>생명정보학 전공 / 학사 & 석사 졸업</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="2006.03 - 2009.02"
          iconStyle={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            color: "#333A4D",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            padding: "20px",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgba(255, 255, 255, 0.2)",
          }}
          icon={<div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img src="/icons/graduation.svg" alt="MailPlug" />
          </div>}
        >
          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center", cursor: "pointer" }}
            onClick={() => openWebsite("https://kyeongbuk.dge.hs.kr/kyeongbukh/main.do")}
          >
            <h3>경북고등학교</h3>
            <h4 style={{ marginLeft: "10px" }}>Kyeongbuk High School</h4>
          </div>
          <p>개발자를 하리라고는 상상도 못할 시절...</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default CareerTimeline;