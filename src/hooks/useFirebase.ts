import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import { useEffect, useState } from "react";

export const useFirebase = (table: string) => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, table));
      const query = querySnapshot.docs.map((doc) => doc.data());
      setData(query);
    } catch (error) {
      console.log(error, "firebase error");
    }
  };
  useEffect(() => {
    fetchData();
  }, [table]);

  return data;
};
