import React from "react";
import { FakeDataType } from "../../pages/Home/Home.types";
import Card from "../Card";
import NoData from "../NoData";
import { List, ListBody, ListHead } from "./List.styles";

interface ListCompProps {
  data: FakeDataType[];
  title: string;
  listId: number;
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

const ListComp = ({
  data,
  title,
  handleDragOver,
  handleDragStart,
  handleDrop,
  listId,
}: ListCompProps) => {
  return (
    <List>
      <ListHead>
        {title} <span></span> {data.length}
      </ListHead>
      <ListBody className="scroll" isScroll={data.length > 0}>
        {data.length > 0 ? (
          data.map((n, i) => (
            <Card
              key={i}
              data={n}
              listId={listId}
              index={i}
              handleDragOver={handleDragOver}
              handleDragStart={handleDragStart}
              handleDrop={handleDrop}
            />
          ))
        ) : (
          <>
            <div
              onDragStart={(event) => handleDragStart(event, listId, 0)}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, listId, 0)}
            >
              <NoData />
            </div>
          </>
        )}
      </ListBody>
    </List>
  );
};

export default ListComp;
