const container = document.querySelector('.container');
// The Scroll Event.
function initialload(){
    for(let i=0; i<25; i++){
    const post = document.createElement('div');
	post.className = 'text';
	post.innerHTML = `<h2>Masai Student ${i+1}</h2>`;
	container.appendChild(post);
}
}initialload();
container.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} =container;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(createPost,1000);

	}
});
let count = 25;
function createPost(){
    for(let i=0; i<25; i++){
        count++;
	const post = document.createElement('div');
	post.className = 'text';
	post.innerHTML = `<h2>Masai Student ${count}</h2>`;
	container.appendChild(post);
    }
}