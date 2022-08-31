
const count = 30;
const apiKey = 'V_99TuJtjobxR1v9N4xecLgmnns-mOs5hWh94KkUpoc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photoArray = [];
let imagesLoaded = 0;
let ready = false;
let totalImages = 0

function imageLoaded(){
    imagesLoaded++
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        console.log('images')
    }
}

function set_Attributes(element,attributes){
for(const key in attributes){
    element.setAttribute(key,attributes[key])
}
}

function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photoArray.length;
    loader.hidden=false
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
        image.addEventListener('load', imageLoaded)
        item.appendChild(image)
        imageContainer.appendChild(item)
    })

}



async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos()
        console.log('fetching')

    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos()
        console.log('load more')
    }
})

//on Load
getPhotos()