import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { BgItem, Container, Doc, Plus, Text } from "./NoData.styled";

const NoData = () => {
  return (
    <Container>
      <BgItem>
        <span className="small"></span>
        <span className="small"></span>
        <span className="small"></span>
        <span className="small"></span>
        <span className="small"></span>
        <Doc>
          <span className="large"></span>
          <span className="large"></span>
          <span className="large"></span>
          <p className="large"></p>
          <Plus>
            <BiPlusMedical />
          </Plus>
        </Doc>
      </BgItem>

      <Text>Если есть подходящие заявки, перетащите их сюда 🤓</Text>
    </Container>
  );
};

export default NoData;
