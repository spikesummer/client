import axios from "axios";

const url = "http://localhost:3000"

export const getAllUser = () => axios.get(url)
    .then(res => res.data)
    .catch(error => console.log(error))


// export async function getUser() {
    
//     try {
//         const response = await axios.get(url);
        
//     } catch (error) {
//         console.error(error);
//     }
    
// }