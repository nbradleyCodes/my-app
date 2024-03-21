const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

export const fetchUser = async (setLoading) => {
   //debugger;
    try {
        const response = await fetch(`${BASE_URL}`);
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        setLoading(false);
        return await response.json();
    } 
    catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error
    }
    
}