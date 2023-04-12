import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";


export const getAllMessagesFromFirestore = async (): Promise<MessageDataFromDb[]> => {
  try {
    let q = query(collection(db, "messages"), orderBy("time", "desc"));
    let demands = await getDocs(q);
    const data = (await demands.docs.map((doc) => ({
      ...doc.data(),
      time: doc.data().time.toDate().toLocaleString(),
      id: doc.id,
    }))) as MessageDataFromDb[];

    return data;
  } catch (error) {
    console.error("Error getting messages from Firestore:", error);
    throw new Error("Error getting messages from Firestore");
  }
}; 


