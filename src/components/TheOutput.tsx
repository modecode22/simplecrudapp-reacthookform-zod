import { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import { getAllMessagesFromFirestore } from "../lib/getAllMessagesFromFirestore";
import {useQuery}from"@tanstack/react-query"

const TheOutput = () => {


    const query = useQuery({
      queryKey: ["messages"],
      queryFn: getAllMessagesFromFirestore,
    });

  
  return (
    <main className="px-5 w-full h-full flex flex-col gap-4">
      <section className="grid grid-cols-2 gap-3">
        {query.data?.map((message) =>{
            return <MessageBox message={message} key={message.id} /> 
        })
        }
      </section>
    </main>
  );
}

export default TheOutput