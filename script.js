let toggleNavStatus = false;

let toggleNav = function(){
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarUl = document.querySelector(".nav-sidebar ul");
	let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    
	
	if (toggleNavStatus === false){
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "85%";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "1";
		}	
		toggleNavStatus = true;
	}
	else if (toggleNavStatus === true){
		getSidebar.style.width = "5%";
		
		let arrayLength = getSidebarLinks.length;
		for (let i = 0; i < arrayLength; i++){
			getSidebarLinks[i].style.opacity = "0";
		}	
		getSidebarUl.style.visibility = "hidden";
		toggleNavStatus = false;
	}
}
buildVideoList();

var videoPlayer = document.getElementById("videoPlayer");
var playingVideo = document.getElementById("playingVideo");

function stopVideo(){
	videoPlayer.style.display = "none";
	playingVideo.pause();
}
			
function playVideo(file){
	playingVideo.src = file;
	playingVideo.defaultMuted = true;
	videoPlayer.style.display = "block";
}
		
function buildVideoList(){
		let xmlContent = '';
        fetch('read.xml').then((response) => {
            response.text().then((xml) => {
                xmlContent = xml;
                let parser = new DOMParser();
                let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
                let books = xmlDOM.querySelectorAll('videos');
				
                books.forEach(videoXmlNode => {
                    let videodiv = document.createElement("div");
						videodiv.setAttribute('name', 'videos');
						videodiv.setAttribute('id', 'videos');
						document.getElementById("listnav").appendChild(videodiv);
					// image div
					let imagediv = document.createElement("div");
						imagediv.setAttribute('name', 'feature-img');
						imagediv.setAttribute('id', 'feature-img');
						document.getElementById("videos").appendChild(imagediv);
					// videoimage div
					let videoimage = document.createElement("img");
						videoimage.setAttribute('src', videoXmlNode.children[0].innerHTML);
						videoimage.setAttribute('width', '100%');
						document.getElementById("feature-img").appendChild(videoimage);
					// playimage img
					let playimage = document.createElement("img");
						playimage.setAttribute('name', 'playbtn');
						playimage.setAttribute('id', 'playbtn');
						playimage.setAttribute('src', 'img/play.png');
						playimage.setAttribute('onclick', "playVideo("+ videoXmlNode.children[1].innerHTML +")");
						document.getElementById("feature-img").appendChild(playimage);
					// videotitle p tag
					let videotitle = document.createElement("p");
						videotitle.setAttribute('name', 'title');
						videotitle.innerText = videoXmlNode.children[2].innerHTML;
						document.getElementById("videos").appendChild(videotitle);
                });
            });
        });
}

