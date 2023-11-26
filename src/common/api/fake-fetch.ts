import data from "../data/data.json";

export default async function fakeFetchData() {
  return new Promise<IExamData>((resolve) => {
    setTimeout(() => resolve(data as unknown as IExamData), 1000);
  });
}
