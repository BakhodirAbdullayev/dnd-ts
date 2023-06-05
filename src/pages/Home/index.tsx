import { useState } from "react";
import { Container, Head, ListsWrapper } from "./Home.styles";
import { ListsType } from "./Home.types";
import { archive, closed, current, deleted, news } from "../../fakedata";
import ListComp from "../../components/List";

const HomePage = () => {
  const total = [...news, ...current, ...archive, ...closed, ...deleted];

  const [lists, setLists] = useState<ListsType[]>([
    { id: 1, items: news, title: "Новые" },
    { id: 2, items: current, title: "Текущие" },
    { id: 3, items: closed, title: "Закрытые" },
    { id: 4, items: archive, title: "Архив" },
    { id: 5, items: deleted, title: "Удаленные" },
  ]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    listId: number,
    itemId: number
  ) => {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ listId, itemId })
    );
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    dropListId: number,
    dropItemId: number
  ) => {
    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const { listId, itemId } = data;

    if (listId === dropListId && itemId === dropItemId) {
      return;
    }

    const newList = [...lists];

    const dragListIndex = newList.findIndex((list) => list.id === listId);
    const dropListIndex = newList.findIndex((list) => list.id === dropListId);

    const [removedItem] = newList[dragListIndex].items.splice(itemId, 1);
    newList[dropListIndex].items.splice(dropItemId, 0, removedItem);

    setLists(newList);
  };

  return (
    <Container className="scroll">
      <Head>
        Заявки <span></span> <p>{total.length}</p>
      </Head>
      <ListsWrapper>
        {lists.map((list) => (
          <ListComp
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            key={list.id}
            data={list.items}
            title={list.title}
            listId={list.id}
          />
        ))}
      </ListsWrapper>
    </Container>
  );
};

export default HomePage;
