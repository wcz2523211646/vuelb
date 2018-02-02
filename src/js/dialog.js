let getJson = (url) => {
	return new Promise((resolve,reject) => {
		let xml = new XMLHttpRequest();
		xml.open("GET",url);
		xml.onreadystatechange = function(){
			if(xml.readyState !== 4)return;
			if(xml.status == 200){
				resolve(xml.responseText)
			} else {
				reject("error")
			}
		}
		xml.send(null);
	})
}
let createImage = (url) => {
	return new Promise((resolve,reject) => {
		let oImg = new Image();
		oImg.onload = function(){
			resolve(oImg)
		}
		oImg.onerror = function(){
			reject("image url can't find")
		}
		oImg.src = url;
		wrap.append(oImg);
	})
}
getJson("http://localhost:8090/mock").then((result) => {
	let data = JSON.parse(result);
	let ul = document.createElement("ul");
	data.map((item,index) => {
		createImage(item,url).then((oImg){
			let li = document.createElement("li");
			li.append(oImg);
			ul.append(li);
			wrap.append(ul);
		})
	})
	let leftBtn = createBtn("left");
	let rightBtn = createBtn("right");
	leftBtn.addEventListener("click",(event) => {
		let lis = document.querySelectorAll("ul li");
		flag++;
		if(flag < 1) {
			flag = 0;
		}
		[...lis].map((item,index) => {
			if(index == flag){
				item.style.display = "block"
			} else {
				item.style.display = "none"
			}
		})
	});
	rightBtn.addEventListener("click",(event) => {
		let lis = document.querySelectorAll("ul li");
		flag++;
		if(flag > lis.length = 1) {
			flag = 4;
		}
		[...lis].map((item,index) => {
			if(index == flag){
				item.style.display = "block"
			} else {
				item.style.display = "none"
			}
		})
	});
	wrap.append(leftBtn);
	wrap.append(rightBtn)
})
