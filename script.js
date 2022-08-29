
const count = 10;
const apiKey= 'V_99TuJtjobxR1v9N4xecLgmnns-mOs5hWh94KkUpoc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


async function getPhotos(){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}


//on Load
getPhotos()