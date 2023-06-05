import React from "react";
import { FakeDataType } from "../../pages/Home/Home.types";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import {
  Container,
  Docs,
  Head,
  Left,
  Right,
  Status,
  Title,
  Client,
  User,
  UserData,
  UserPhoto,
} from "./Card.styles";

interface CardProps {
  data: FakeDataType;
  listId: number;
  index: number;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    listId: number,
    itemId: number
  ) => void;
  handleDrop: (
    event: React.DragEvent<HTMLDivElement>,
    dropListId: number,
    dropItemId: number
  ) => void;
}

const Card = ({
  data,
  listId,
  index,
  handleDragOver,
  handleDragStart,
  handleDrop,
}: CardProps) => {
  const addClass = (p: string) => {
    switch (p) {
      case "В приоритете":
        return "purple";
      case "Второстепенная":
        return "blue";
      default:
        return "";
    }
  };
  return (
    <Container
      draggable
      onDragStart={(event) => handleDragStart(event, listId, index)}
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, listId, index)}
    >
      <Head>
        <Left>
          <h4>{data.job}</h4>
          <p>{data.jobTitle}</p>
        </Left>
        <Right>
          <BiDotsVerticalRounded />
        </Right>
      </Head>
      <Title>
        <Status className={addClass(data.status)}>{data.status}</Status>
        <Client>
          <span>
            <FiUsers />
          </span>{" "}
          {data.clients}
        </Client>
        <Docs>
          <span>
            <HiOutlineDocumentText />
          </span>{" "}
          {data.docs}
        </Docs>
      </Title>
      <User>
        <UserPhoto>
          <img src={data.image} alt={data.name} />
        </UserPhoto>
        <UserData>
          <p>{data.title}</p>
          <h5>{data.name}</h5>
        </UserData>
      </User>
    </Container>
  );
};

export default Card;
