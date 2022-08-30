
const count = 10;
const apiKey = 'V_99TuJtjobxR1v9N4xecLgmnns-mOs5hWh94KkUpoc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('image-container')
const loader = document.getElementsByClassName('loader')

let photoArray = [];

function imageLoaded(){
    console.log('image loaded')
}

function set_Attributes(element,attributes){
for(const key in attributes){
    element.setAttribute(key,attributes[key])
}
}

function displayPhotos() {
    photoArray.forEach((photo)=> {
        const item = document.createElement('a')

        set_Attributes(item,{
            href:photo.links.html,
            target:'_blank'
        })


        const image = document.createElement('img')

        set_Attributes(image,{
            src:photo.urls.regular,
            alt:photo.alt_description,
            title:photo.alt_description
        })
        image.addEventListener('load'. imageLoaded)
        item.appendChild(image)
        imageContainer.appendChild(item)
    })

}



async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos()
        console.log(photoArray)

    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos()
        console.log('load more')
    }
})

//on Load
getPhotos()