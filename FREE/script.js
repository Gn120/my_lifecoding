//==========수정중==========//
function darkMode(){
    var body = document.body;
    body.classList.toggle("dark-mode") 
    //버튼 이름 바꾸기
    var button = document.getElementById("button");
    if(button.innerHTML == "Dark Mode"){
        button.innerHTML = "Light Mode";
    	}else{
        button.innerHTML = "Dark Mode";
    	}
  }  