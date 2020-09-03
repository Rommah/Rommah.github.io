let openMenu = document.querySelector(".menu");
let closeMenu = document.querySelector(".close-menu");
let menu = document.querySelector("aside");

openMenu.onclick = ()=> {
	menu.classList.add("aside-show");
	openMenu.classList.add("menu-hidden");
}
closeMenu.onclick = ()=>{
	menu.classList.remove("aside-show");
	openMenu.classList.remove("menu-hidden");
};

let slidez = document.querySelectorAll(".slideBg");
let slideBtnz = document.querySelectorAll(".headLow span");
let n = 0;	

function nextSlide(){
	slidez[n].classList.remove("show-slide");
	slideBtnz[n].classList.remove("slideBtn-crnt");
	n = (n + 1) % slidez.length;
	slidez[n].classList.add("show-slide");
	slideBtnz[n].classList.add("slideBtn-crnt");
};
let sliderTime = setInterval(nextSlide,2000);

let toggle = (m)=>{
	clearInterval(sliderTime);
	sliderTime = setTimeout(()=> sliderTime = setInterval(nextSlide,2000),4000);
	slidez[n].classList.remove("show-slide");
	slideBtnz[n].classList.remove("slideBtn-crnt");
	n = m;
	slidez[n].classList.add("show-slide");
	slideBtnz[n].classList.add("slideBtn-crnt");
};

slideBtnz[0].onclick = ()=>{
	toggle(0);
};
slideBtnz[1].onclick = ()=>{
	toggle(1);
};
slideBtnz[2].onclick = ()=>{
	toggle(2);
};
slideBtnz[3].onclick = ()=>{
	toggle(3);
};
slideBtnz[4].onclick = ()=>{
	toggle(4);
};


// slideBtn1.onclick = ()=>{
// 	slidez[n].classList.remove("show-slide");
// 	slide1.classList.add("show-slide");
// 	slideBtnz[n].classList.remove("slideBtn-crnt");
// 	slideBtn1.classList.add("slideBtn-crnt");
// 	n=0;
// };
// slideBtnz[1].onclick = ()=>{
// 	slidez[n].classList.remove("show-slide");
// 	slidez[m-1].classList.add("show-slide");
// 	slideBtnz[n].classList.remove("slideBtn-crnt");
// 	slideBtnz[m-1].classList.add("slideBtn-crnt");
// 	n=1;
// };
// slideBtn3.onclick = ()=>{
// 	slidez[n].classList.remove("show-slide");
// 	slide3.classList.add("show-slide");
// 	slideBtnz[n].classList.remove("slideBtn-crnt");
// 	slideBtn3.classList.add("slideBtn-crnt");
// 	n=2;
// };
// slideBtn4.onclick = ()=>{
// 	slidez[n].classList.remove("show-slide");
// 	slide4.classList.add("show-slide");
// 	slideBtnz[n].classList.remove("slideBtn-crnt");
// 	slideBtn4.classList.add("slideBtn-crnt");
// 	n=3;
// };
// slideBtn5.onclick = ()=>{
// 	slidez[n].classList.remove("show-slide");
// 	slide5.classList.add("show-slide");
// 	slideBtnz[n].classList.remove("slideBtn-crnt");
// 	slideBtn5.classList.add("slideBtn-crnt");
// 	n=4;
// };