import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
  background: #ffffff;
  box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.05),
    inset 0px -2px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;
export const Head = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;
`;
export const Left = styled.div`
  line-height: 1.2;
  h4 {
    color: #181a19;
    font-size: 14px;
    margin-bottom: 2px;
  }
  p {
    font-size: 12px;
    color: #6d7471;

    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const Right = styled.button`
  background: none;
  border: none;
  outline: none;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  font-size: 20px;
  color: #96a09b;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 500;
  div {
    border-radius: 4px;
  }
`;
export const Status = styled.div`
  padding: 5px 8px;
  margin: 8px 0;
  &.purple {
    color: #856ec6;
    background: #f6f2ff;
  }
`;
export const Client = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 3px 6px;
  background: #fafffc;
  border: 1px solid #ebf3ef;
  color: #414644;
  span {
    font-size: 13px;
    color: #96a09b;
    width: 13px;
    height: 13px;
    display: grid;
    place-items: center;
  }
`;
export const Docs = styled(Client)``;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const UserPhoto = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const UserData = styled.div`
  line-height: 1.2;
  p {
    font-size: 11px;
    color: #969f9b;
    margin-bottom: 2px;
  }
  h5 {
    font-size: 12px;
    color: #414644;
  }
`;
