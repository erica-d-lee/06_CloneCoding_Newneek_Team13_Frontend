import React, {useState, useCallback, useEffect, useRef} from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {
  const [width, setWidth] = useState(0);
  const ProgressRef = useRef(null);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) {   // 스크롤바가 가장 위에 있을 때는 0
      setWidth(0);
      return;
    }
    const windowHeight = scrollHeight - clientHeight;
    // 스크롤바 크기 = (내용 전체 높이) - (스크롤바 제외한 클라이언트 높이)
    const currentPercent = (scrollTop / windowHeight);
    // 스크롤바 크기 기준으로 scrollTop이 내려온 만큼에 따라 계산
    setWidth(currentPercent*100);       // 자연수가 아니므로 100 곱해준다
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    }
  }, [handleScroll]);

  return (
    <Progress ref={ProgressRef}>
      <Level style={{width: width + '%'}}>
      </Level>
    </Progress>
  )
};

const Progress = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  transition: all .2s;
  border-bottom: 1px solid #161616;
`;

const Level = styled.div`
  height: 100%;
  background-color: #fb7800;
`;

export default ProgressBar;