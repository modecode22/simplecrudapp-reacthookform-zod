import React, { useState } from 'react'
import Input from './ui/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { saveMessageToFirestore } from '../lib/saveMessageToFirestore';
import {useQuery} from "@tanstack/react-query"
import { Loader2 } from 'lucide-react';
import { delay } from '../lib/utils';


const TheForm = () => {

const schema = z.object({
    name:z.string().min(5),
    email:z.string().email(),
    message:z.string().min(5).max(1000)
}).required()


type Data = z.infer<typeof schema>
const [isLoading, setIsLoading] = useState(false)

const {refetch} = useQuery({
  queryKey:["messages"]
})
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });

  const onSubmit = async(data:any) => {
    setIsLoading(true)
    saveMessageToFirestore({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    console.log("wohoooo you did it");
    refetch()
    await delay(1000);
    setIsLoading(false);
  };




  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="selection:bg-zinc-950 selection:text-zinc-50 w-full h-full flex flex-col  gap-1 px-10 "
    >
      <h1 className=" text-center w-full text-2xl font-normal">The Form</h1>
      <section className=" flex justify-center items-center w-full gap-2">
        <section className="flex flex-col w-full ">
          <label className="text-sm  px-1" htmlFor={"name"}>
            name
          </label>
          <input
            id={"name"}
            {...register("name")}
            placeholder="the name"
            className="w-full p-1 rounded-md bg-zinc-700 focus:outline-zinc-600 "
          />
          <section className="text-red-600 text-xs px-1">
            {errors.name?.message as string}
          </section>
        </section>
        <section className="flex flex-col w-full ">
          <label className="text-sm  px-1" htmlFor={"email"}>
            email
          </label>
          <input
            id={"email"}
            {...register("email")}
            placeholder="the email"
            className="w-full p-1 rounded-md bg-zinc-700 focus:outline-zinc-600 "
          />
          <section className="text-red-600 text-xs px-1">
            {errors.email?.message as string}
          </section>
        </section>
      </section>
      <section className="flex flex-col w-full ">
        <label className="text-sm  px-1" htmlFor={"message"}>
          message
        </label>
        <input
          id={"message"}
          {...register("message")}
          placeholder="the message"
          className="w-full p-1 rounded-md bg-zinc-700 focus:outline-zinc-600 "
        />
        <section className="text-red-600 text-xs px-1">
          {errors.message?.message as string}
        </section>
      </section>

      <button disabled={isLoading} className="h-10 disabled:brightness-90 my-2 rounded-md shadow-md hover:shadow-sm hover:brightness-105 active:brightness-95   flex justify-center items-center bg-zinc-200 text-zinc-950 px-2 p-1 ">
        {isLoading? <Loader2 className='w-4 h-4 animate-spin' /> :"Send"}
      </button>
    </form>
  );
}

export default TheForm