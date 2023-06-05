import styled from "styled-components";
export const List = styled.div`
  border: 1px solid #c9d2ce;
  border-radius: 4px;
`;

export const ListHead = styled.div`
  width: 100%;
  padding: 11px;
  background-color: #f2faf6;
  border-bottom: 1px solid #c9d2ce;
  border-radius: 3px 3px 0px 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: #414644;
  span {
    width: 3px;
    height: 3px;
    background-color: #c9d2ce;
    border-radius: 50%;
  }
`;
export const ListBody = styled.div<{
  isScroll: boolean;
}>`
  max-height: 500px;
  overflow-y: ${(p) => (p.isScroll ? "scroll" : "hidden")};
  overflow-x: hidden;
  padding: 9px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;
