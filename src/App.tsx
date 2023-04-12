import TheForm from "./components/TheForm";
import TheOutput from "./components/TheOutput";
import { ScrollArea } from "./components/ui/scrollarea";

function App() {

  return (
    <main className="w-screen h-screen flex justify-center items-center p-5">
      <section className="w-full max-w-xl h-full gap-2  flex flex-col items-center justify-center">
        <ScrollArea className="rounded-lg overflow-hidden w-full max-w-xl h-[25rem] bg-zinc-900  shadow-md shadow-black/50 border border-zinc-100/20 p-2 flex flex-col gap-2">
          <TheForm />
        </ScrollArea>
        <h1 className="text-2xl text-center w-full">The Output</h1>
        <ScrollArea className=" rounded-lg  w-full max-w-xl h-full    p-2 flex flex-col gap-2">
          <TheOutput />
        </ScrollArea>
      </section>
    </main>
  );
}

export default App
