const container = document.querySelector('.container');
// The Scroll Event.
function initialload(){
    for(let i=0; i<25; i++){
    const post = document.createElement('div');
	post.className = 'text';
	post.innerHTML = `<h1>Masai Student ${i+1}</h1>`;
	container.appendChild(post);
}
}initialload();
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost,1000);

	}
});
let count = 25;
function createPost(){
    for(let i=0; i<10; i++){
        count++;
	const post = document.createElement('div');
	post.className = 'text';
	post.innerHTML = `<h1>Masai Student ${count}</h1>`;
	container.appendChild(post);
    }
}