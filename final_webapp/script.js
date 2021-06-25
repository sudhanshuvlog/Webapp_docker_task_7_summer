
function launch_container(){
    image_name = document.getElementById("image_name_launch");
    os_name_launch = document.getElementById("os_name_launch");
    back=document.getElementById("back_launch_container");
    var image=image_name.value;
    var os=os_name_launch.value;
    
    url="http://13.127.219.77/cgi-bin/docker.py?image_name="+image +"&os_name="+os+"&submit=start_new_os";
 
    var xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onload=display_output
    function display_output(){
    var output =xhr.responseText;
    back.innerHTML=output;
   }
    
    
    
}
function display_container() {

    back = document.getElementById("back_display_container");

    url = "http://13.127.219.77/cgi-bin/docker.py?submit=display_all_os";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = display_output
    function display_output() {
        var output = xhr.responseText;
        back.innerHTML = output;

    }

}

function container_remove() {

    back = document.getElementById("back_delete_container");
os_name=document.getElementById("os_name_delete");
	os_name=os_name.value;

    url = "http://13.127.219.77/cgi-bin/docker.py?os_name="+os_name+"&submit=delete_container";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = display_output
    function display_output() {
        var output = xhr.responseText;
        back.innerHTML = output;
    }
}

function container_terminal(){
    command_name_terminal= document.getElementById("command_terminal");
    os_name_terminal= document.getElementById("os_name_terminal");
    back=document.getElementById("back_container_terminal");
    var command=command_name_terminal.value;
    var os_name=os_name_terminal.value;

    url="http://13.127.219.77/cgi-bin/docker.py?cmd="+command +"&os_name="+os_name+"&submit=launch_terminal";

    var xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onload=display_output
    function display_output(){
    var output =xhr.responseText;
    back.innerHTML=output;
   }
}
 

i = 0;
function move_right() {
    document.getElementById("down").style.visibility="hidden";
    var right = document.getElementById("right");
    right.style.left = i;
    i = i + 1;
    if (i != screen.width-300) {
        setTimeout(move_right, 10);
    }
    else {
        i=0;
        move_down();
    }
}
 
function move_down() {
    
    document.getElementById("down").style.visibility="visible";
    var right = document.getElementById("right");
    right.innerHTML=null;
    var down = document.getElementById("down");
    
    down.style.left=screen.width-200;
    down.style.top = i;
    i = i + 1;
    if (i != screen.height-200) {
        setTimeout(move_down, 10);
    }
    else {
        alert("ho gya");
    }

}

i=0;
function move_left() {
    var left = document.getElementById("left");
    left.style.right = i;
    i = i + 1;
    if (i != screen.width) {
        setTimeout(move_left, 10);
    }
    else {
        i = 0;
        move_left();
    }
}


i=0;
function move_left1() {
    var left1 = document.getElementById("left1");
    left1.style.right = i;
    i = i + 1;
    if (i != screen.width) {
        setTimeout(move_left1, 10);
    }
    else {
        i = 0;
        move_left1();
    }
}



i=0;
function move_up() {
    var up = document.getElementById("up");
    up.style.bottom = i;
    up.style.left=screen.width/2;
    i = i + 1;
    if (i != screen.height) {
        setTimeout(move_up, 10);
    }
    else {
	    i=0;
	    move_up();

    }

}


no_of_cont=0; //global variable
//left_distance=screen.width/2;
height=screen.height;
left_distance=600; //global variable
function containers_add(){
    // no_of_containers=no_of_containers+1;
    var cont="cont "+no_of_cont;
    var id=no_of_cont;
    cont = document.createElement("BUTTON");   // Create a <button> element
    cont.setAttribute("id", id);
    cont.innerHTML = "";// Insert text
    document.body.appendChild(cont);  
    cont.style.position="absolute";
    no_of_cont++;
    //alert(no_of_cont);
    //cont = document.getElementById("containers_draw");
cont.style.bottom=400;
//cont.style.top=height/2;
    cont.style.left=left_distance;
    left_distance=left_distance+32;
    cont.style.height= 30;
    cont.style.width=30;
    //document. getElementById('BUTTON'). style. backgroundColor = 'Red';

    

}

function containers_remove(){
    no_of_cont--;
    left_distance=left_distance-32; //it will again decrease the distance so that at their will be no gap 
    //after deleting a box
//alert(no_of_cont);
    //cont = document.getElementById("1");
    var cont = document. getElementById(no_of_cont);
    cont.parentNode.removeChild(cont); //will remove the container box...
    //document.getElementById(no_of_cont).style.visibility="hidden"; //hiding

}

