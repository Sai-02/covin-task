import { useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "./components/LoadingPage";
import MainPage from "./components/MainPage";
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async (page) => {
    const data = await (
      await axios.get(`https://reqres.in/api/users?page=${page}`)
    ).data;
    return data.data;
  };
  useEffect(() => {
    const arr = [];
    getData(1)
      .then((val) => {
        arr.push(...val);
        getData(2)
          .then((val) => {
            arr.push(...val);
            setData(arr);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);
  return (
    <div className="bg-[#E6EFFA] h-screen w-screen flex flex-col">
      {isLoading ? <LoadingPage /> : <MainPage data={data} />}
    </div>
  );
}

export default App;
