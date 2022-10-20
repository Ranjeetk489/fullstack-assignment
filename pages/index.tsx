import type { NextPage } from "next";
import { useEffect } from "react";

// type Props = {
//   res: string;
// };
async function fetchData() {
  const res = await fetch("/api/add_ration");
  const data = await res.json();
  console.log(data);
}

const Home: NextPage = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <div>home</div>;
};

// export async function getStaticProps() {
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Home;
