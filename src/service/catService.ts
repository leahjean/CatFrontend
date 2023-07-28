import axios from "axios";

export const downloadImages = async (): Promise<string[]> => {
    try {
        const endpt = `${import.meta.env.VITE_CAT_SERVICE_ENDPT}/downloadImages`;
        console.log(`Invoking download images ${endpt}`);
        const response = await axios.get<string[]>(endpt);
        console.log("got response", response);
        return response.data;
    } catch (error) {
        console.error("Error fetching image", error);
        throw error;
    }
};