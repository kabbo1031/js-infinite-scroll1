let page = 1;
const limit = 5;
const list = document.getElementById('list');

async function load(){
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  const data = await res.json();

  data.forEach(post=>{
    const li = document.createElement('li');
    li.innerText = post.title;
    list.appendChild(li);
  });
}

window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10){
    page++;
    load();
  }
});

load();
