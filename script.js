
function launch_container(){
    image_name = document.getElementById("image_name_launch");
    os_name_launch = document.getElementById("os_name_launch");
    var image=image_name.innerHTML;
    var os=os_name_launch.innerHTML;
    url="http://192.168.1.41/cgi-bin/docker.py?image_name="+image +'&os_name='+os+"&submit=start_new_os";
 
    var xhr=new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();

    //function display_output(){
    var output =xhr.responseText;
    alert(output);
   // }
    
    
    
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
no_of_cont=0; //global variable
left_distance=600; //global variable
function containers_add(){
    // no_of_containers=no_of_containers+1;
    var cont="cont "+no_of_cont;
    var id=no_of_cont;
    cont = document.createElement("BUTTON");   // Create a <button> element
    cont.setAttribute("id", id);
    cont.innerHTML = "";                   // Insert text
    document.body.appendChild(cont);  
    cont.style.position="absolute";
    
    no_of_cont++;
    alert(no_of_cont);
    //cont = document.getElementById("containers_draw");
    cont.style.bottom=400;
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
    alert(no_of_cont);
    //cont = document.getElementById("1");
    var cont = document. getElementById(no_of_cont);
    cont. parentNode. removeChild(cont); //will remove the container box...
    //document.getElementById(no_of_cont).style.visibility="hidden"; //hiding

}