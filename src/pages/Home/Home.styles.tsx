import styled from "styled-components";

export const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #f0f0f0;

  overflow-x: scroll;
`;
export const Head = styled.div`
  font-size: 24px;
  line-height: 2;
  font-weight: 600;
  color: #414644;
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    width: 3px;
    height: 3px;
    background-color: #c9d2ce;
    border-radius: 50%;
    display: block;
    margin-top: 5px;
  }
  p {
    color: #6d7471;
  }
`;
export const ListsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 21px;
`;
