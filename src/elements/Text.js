import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { value, mainText, mainTitle, detailText, margin, padding, fontWeight, fontSize, color, lineHeight, wordBreak, span, display, overflow, textOverflow, whiteSpace, height, textAlign, wordWrap, wlc, wbo, top, right, bottom, left, mbs, mbe, mis, mie, zIndex } = props;
  const styles = { mainText: mainText, mainTitle: mainTitle, detailText: detailText, margin: margin, padding: padding, fontWeight: fontWeight, fontSize: fontSize, color: color, lineHeight: lineHeight, wordBreak: wordBreak, display: display, overflow: overflow, textOverflow: textOverflow, whiteSpace: whiteSpace, height: height, textAlign: textAlign, wordWrap: wordWrap, wlc: wlc, wbo: wbo, top: top, right: right, bottom: bottom, left: left, mbs: mbs, mbe: mbe, mis: mis, mie: mie, zIndex: zIndex,};

  if (span) {
    return (
      <React.Fragment>
        <S {...styles}>{value}</S>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <P {...styles}>{value}</P>
      </React.Fragment>
    )
  }
};

Text.defaultProps = {
  value: '텍스트',
  mainText: false,
  mainTitle: false,
  detailText: false,
  searchTitle: false,
  searchText: false,
  margin: null,
  padding: null,
  fontWeight: null,
  fontSize: null,
  color: '#161616',
  lineHeight: null,
  wordBreak: null,
  span: false,
  display: null,
  overflow: null,
  textOverflow: null,
  whiteSpace: null,
  height: null,
  textAlign: null,
  wordWrap: null,
  wlc: null,                // -webkit-line-clamp
  wbo: null,                // -webkit-box-orient
  top: null,
  right: null,
  bottom: null,
  left: null,
  mbs: null,          // margin-block-start
  mbe: null,          // margin-block-end
  mis: null,          // margin-inline-start
  mie: null,          // margin-inline-end
  zIndex: null,          
};

const S = styled.span`
  ${(props) => props.mainText ? 'font-size: 1rem': ''};
  ${(props) => props.mainTitle ? 'font-size: 1.25rem': ''};
  ${(props) => props.detailText ? 'font-size: 1.125rem': ''};
  ${(props) => props.searchTitle ? 'font-size: 1.25rem': ''};
  ${(props) => props.searchText ? 'font-size: 14px': ''};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  word-break: ${(props) => props.wordBreak};
  display: ${(props) => props.display};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  word-wrap: ${(props) => props.wordWrap};
  -webkit-line-clamp: ${(props) => props.wlc};
  -webkit-box-orient: ${(props) => props.wbo};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  margin-block-start: ${(props) => props.mbs};
  margin-block-end: ${(props) => props.mbe};
  margin-inline-start: ${(props) => props.mis};
  margin-inline-end: ${(props) => props.mie};
`;

const P = styled.p`
  ${(props) => props.mainText ? 'font-size: 1rem': ''};
  ${(props) => props.mainTitle ? 'font-size: 1.25rem': ''};
  ${(props) => props.detailText ? 'font-size: 1.125rem': ''};
  ${(props) => props.searchTitle ? 'font-size: 1.25rem': ''};
  ${(props) => props.searchText ? 'font-size: 14px': ''};
  z-index: ${(props)=>props.zIndex};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight};
  word-break: ${(props) => props.wordBreak};
  display: ${(props) => props.display};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  word-wrap: ${(props) => props.wordWrap};
  -webkit-line-clamp: ${(props) => props.wlc};
  -webkit-box-orient: ${(props) => props.wbo};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  margin-block-start: ${(props) => props.mbs};
  margin-block-end: ${(props) => props.mbe};
  margin-inline-start: ${(props) => props.mis};
  margin-inline-end: ${(props) => props.mie};
`;

export default Text;