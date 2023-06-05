export interface FakeDataType {
  id: string;
  name: string;
  title: string;
  image: string;
  job: string;
  jobTitle: string;
  status: string;
  clients: number;
  docs: number;
}

export interface ListsType {
  id: number;
  items: FakeDataType[];
  title: string;
}
