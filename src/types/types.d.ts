interface MessageData{
    message: string
    email: string;
    name: string;
}
interface MessageDataFromDb {
  message: string;
  email: string;
  name: string;
  id:string
  time:string
}