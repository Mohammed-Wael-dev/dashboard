import { useQuery } from '@tanstack/react-query';
import dataJson from '../assets/database/data.json'
// const fetchData = async () => {
//     const response = await fetch('/database/data.json');
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     console.log(response)
//     return response.json();
// };

export function useDataQuery() {
    return useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            // Simulate async behavior if needed
            return new Promise(resolve => {
                setTimeout(() => resolve(dataJson), 100);
            });
        }
    });
}
