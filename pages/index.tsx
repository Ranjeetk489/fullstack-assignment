import type { NextPage } from "next";
import { useEffect } from "react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

//! todo: add background image of mars
async function fetchData() {
  const res = await fetch("/api/add_ration");
  const data = await res.json();
  console.log(data);
}

const Home: NextPage = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen">
      <div className="text-2xl text-center mt-8">
        Martian Inventory Management
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-12 text-[#800080] ">
        <Link href={"/AddRation"}>
          <div className="flex items-center gap-2 cursor-pointer">
            Add Items in Inventory <BiLinkExternal />
          </div>
        </Link>
        <Link href={"/AddRation"}>
          <div className="flex items-center gap-2 cursor-pointer">
            View Inventory <BiLinkExternal />
          </div>
        </Link>
        <Link href={"/AddRation"}>
          <div className="flex items-center gap-2 cursor-pointer">
            Delete Items in Inventory <BiLinkExternal />
          </div>
        </Link>
        <Link href={"/AddRation"}>
          <div className="flex items-center gap-2 cursor-pointer">
            Get Ration Estimate <BiLinkExternal />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
