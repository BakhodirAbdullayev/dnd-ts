import styled from "styled-components";

export const Container = styled.div`
  min-width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
`;
export const BgItem = styled.div`
  width: 120px;
  height: 90px;
  padding: 20px 12px;
  background: linear-gradient(180deg, #ffffff -2.31%, #f8f9fc 100.71%);
  box-shadow: 0px 11px 22px rgba(101, 122, 147, 0.27);
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  .small {
    display: block;
    width: 100%;
    border: 1px solid #dae3f2;
    background: #dae3f2;
    border-radius: 4px;
  }
  &::after {
    content: " ";
    width: 120px;
    height: 120px;
    display: block;
    position: absolute;
    background: #d4defc;
    border-radius: 50%;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Doc = styled.div`
  width: 75px;
  height: 105px;
  padding: 15px;
  background: linear-gradient(180deg, #ffffff -2.31%, #f8f9fc 100.71%);
  box-shadow: 0px 11px 22px rgba(101, 122, 147, 0.27);
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  span {
    width: 100%;
  }
  p {
    width: 50%;
    margin-left: auto;
  }
  .large {
    border-radius: 4px;
    border: 3px solid #dae3f2;
  }
`;
export const Plus = styled.div`
  background: linear-gradient(90deg, #7e92b7 -0.05%, #969eae 100.02%);
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  font-size: 18px;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -100%);
`;
export const Text = styled.p`
  max-width: 200px;
  margin: 0 auto;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  font-weight: 600;
  color: #6d7471;
`;
