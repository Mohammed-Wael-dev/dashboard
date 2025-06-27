import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Quote {
  id: number;
  quote: string;
  author: string;
}
export function useQuotes(limit: number = 10) {
  const fetchQuotes = async (): Promise<Quote[]> => {
    const response = await axios.get(
      `https://dummyjson.com/quotes?limit=${limit}`
    );
    return response.data.quotes;
  };
  return useQuery({
    queryKey: ["query", limit],
    queryFn: fetchQuotes,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}
