import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function saveMessageToFirestore(data: MessageData): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      ...data,
      time: serverTimestamp(),
    });
    console.log(`saved to Firestore.`);
  } catch (error) {
    console.error("Error saving message to Firestore:", error);
    throw new Error("Error saving message to Firestore");
  }
}
