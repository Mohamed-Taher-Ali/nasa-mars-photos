#Nasa - Mars Photos (frontend task)


after clone the project:
    you must use the keys in example.env to set them in new file .env with you credentials
    you just need to get api key from nasa api site it too easy.

then you just need to run these 2 commands:
    1- yarn
    2- yarn start

then the site will open on >> http://localhost:3000/


project structure:

src
|----app
    |---- components
    |---- modules
        |---- home
                |---- api
                |---- components
                |---- homePage
                |---- hooks
                |---- types
                |---- utils                
    |---- hooks
    |---- utils

path example: http://localhost:3000/?page=1&sol=1&id=4477

- you have the ability use the url with query string to save state on specific image in viewer.
- you can apply the sol | page then get the related photos with their info.
- you minimize the screen (there are media query to handle small screens).
- you can click on image to open the image viewer it sets the url qs.


achieves: [
    tried to use native tools as possible to minimize cost
    used antd UI design lib
    modularized structure,
    dependency inversion,
    high maintainability,
    high reusability,
    high scalability,
    split concerns,
    solid,
    dry,
];

thaaaaaaaaaaaaaaaaaaanx ;)
