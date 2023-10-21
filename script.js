//your JS code here. If required.
function prom(params) {
	return new Promise((res, rej)=>{
		setTimeout(()=>{
			res("Hello, world!")
		},1000)
	}) 
}
prom().then(d=>output.innerText=d)