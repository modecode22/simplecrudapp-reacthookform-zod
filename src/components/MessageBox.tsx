

interface MessageBoxProps {
    message: MessageData;
}

const MessageBox = ({message}:MessageBoxProps) => {
  return (
    <section className="rounded-lg overflow-hidden w-full h-full bg-zinc-900  shadow-md shadow-black/50 border border-zinc-100/20 p-2 flex flex-col gap-2">
      <h1>{message.name}</h1>
      <h2>{message.email}</h2>
      <p className="">{message.message}</p>
    </section>
  );
}

export default MessageBox