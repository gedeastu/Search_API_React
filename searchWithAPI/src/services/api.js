import axios from 'axios'


const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: `Client-ID -zayhKdY1G3IAziMvlnjOH_Qpae9XtrvMLSK6Ge_Mk0`
        },
        params:{
            query: term
        },
    });

    return response.data.results;
};

export default searchImage;