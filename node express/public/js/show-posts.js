const container = document.querySelector('#posts-cointainer');
const button = document.querySelector('#get-posts');
const createBtn = document.querySelector('#create-posts');

//async function to display json data from node js 
async function showPosts() {
    const res = await fetch('http://localhost:5000/api');
    if(!res.ok){
        container.innerHTML ='failed to fetch data';
    }
    const items = await res.json();

    console.log(items);
    container.innerHTML = "";

    items.forEach((element) => {
        const divContainer = document.createElement('div');
        divContainer.innerHTML = element.name;
        container.appendChild(divContainer);
    });

}

//aysnc function to post an item 
async function createPosts(e) {

    e.preventDefault();

    const name = document.querySelector('#post-name').value;// have an input field with id="post-name"
    console.log(name);
    const res = await fetch('http://localhost:5000/api/item', {
        method : 'POST',
        headers :{
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify( {name})
    });

    if(!res.ok){
        container.innerHTML ='failed to fetch data';
    }
    const items = await res.json();
    console.log(items);

    showPosts();

}

//event listeners
 button.addEventListener('click', showPosts);
 createBtn.addEventListener('click', createPosts);