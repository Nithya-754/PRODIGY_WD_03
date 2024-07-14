function func(){
    var t1,t2,t3,t4,t5,t6,t7,t8,t9;
    t1=document.getElementById("t1").value;
    t2=document.getElementById("t2").value;
    t3=document.getElementById("t3").value;
    t4=document.getElementById("t4").value;
    t5=document.getElementById("t5").value;
    t6=document.getElementById("t6").value;
    t7=document.getElementById("t7").value;
    t8=document.getElementById("t8").value;
    t9=document.getElementById("t9").value;
    var t1btn,t1btn,t3btn,t4btn,t5btn,t6btn,t7btn,t8btn,t9btn;
    t1btn=document.getElementById("t1");
    t2btn=document.getElementById("t2");
    t3btn=document.getElementById("t3");
    t4btn=document.getElementById("t4");
    t5btn=document.getElementById("t5");
    t6btn=document.getElementById("t6");
    t7btn=document.getElementById("t7");
    t8btn=document.getElementById("t8");
    t9btn=document.getElementById("t9");

    if ((t1=='x' || t1=='X')&&(t2=='x' || t2=='X')&&(t3=='x' || t3=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t4btn.disabled=true;
        t5btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t9btn.disabled=true;
        t1btn.style.color="blue";
        t2btn.style.color="blue";
        t3btn.style.color="blue";
    }
    else if ((t1=='x' || t1=='X')&&(t4=='x' || t4=='X')&&(t7=='x' || t7=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t2btn.disabled=true;
        t3btn.disabled=true;
        t5btn.disabled=true;
        t6btn.disabled=true;
        t8btn.disabled=true;
        t9btn.disabled=true;
        t1btn.style.color="blue";
        t4btn.style.color="blue";
        t7btn.style.color="blue";
    }
    else if ((t7=='x' || t7=='X')&&(t8=='x' || t8=='X')&&(t9=='x' || t9=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t1btn.disabled=true;
        t2btn.disabled=true;
        t3btn.disabled=true;
        t4btn.disabled=true;
        t5btn.disabled=true;
        t6btn.disabled=true;
        t7btn.style.color="blue";
        t8btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t3=='x' || t3=='X')&&(t6=='x' || t6=='X')&&(t9=='x' || t9=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t1btn.disabled=true;
        t2btn.disabled=true;
        t4btn.disabled=true;
        t5btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;

        t3btn.style.color="blue";
        t6btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t1=='x' || t1=='X')&&(t5=='x' || t5=='X')&&(t9=='x' || t9=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t2btn.disabled=true;
        t3btn.disabled=true;
        t4btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t1btn.style.color="blue";
        t5btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t3=='x' || t3=='X')&&(t5=='x' || t5=='X')&&(t9=='x' || t9=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t2btn.disabled=true;
        t1btn.disabled=true;
        t4btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t3btn.style.color="blue";
        t5btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t2=='x' || t2=='X')&&(t5=='x' || t5=='X')&&(t8=='x' || t8=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t1btn.disabled=true;
        t3btn.disabled=true;
        t4btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t9btn.disabled=true;
        t2btn.style.color="blue";
        t5btn.style.color="blue";
        t8btn.style.color="blue";
    }
    else if ((t4=='x' || t4=='X')&&(t5=='x' || t5=='X')&&(t6=='x' || t6=='X')){
        document.getElementById('print').innerHTML="Alice Won"
        t1btn.disabled=true;
        t3btn.disabled=true;
        t5btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t9btn.disabled=true;
        t4btn.style.color="blue";
        t5btn.style.color="blue";
        t6btn.style.color="blue";
    }
    //check bob won 
    if ((t1=='0' || t1=='0')&&(t2=='0' || t2=='0')&&(t3=='0' || t3=='0')){
        document.getElementById('print').innerHTML="Bob Won"
        t4btn.disabled=true;
        t5btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t9btn.disabled=true;
        t1btn.style.color="blue";
        t2btn.style.color="blue";
        t3btn.style.color="blue";
    }
    else if ((t1=='0' || t1=='0')&&(t4=='0' || t4=='0')&&(t7=='0' || t7=='0')){
        document.getElementById('print').innerHTML="Bob Won"
        t2btn.disabled=true;
        t3btn.disabled=true;
        t5btn.disabled=true;
        t6btn.disabled=true;
        t8btn.disabled=true;
        t9btn.disabled=true;
        t1btn.style.color="blue";
        t4btn.style.color="blue";
        t7btn.style.color="blue";
    }
    else if ((t7=='0' || t7=='0')&&(t8=='0' || t8=='0')&&(t9=='0' || t9=='0')){
        document.getElementById('print').innerHTML="Alice Won"
        t1btn.disabled=true;
        t2btn.disabled=true;
        t3btn.disabled=true;
        t4btn.disabled=true;
        t5btn.disabled=true;
        t6btn.disabled=true;
        t7btn.style.color="blue";
        t8btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t3=='0' || t3=='0')&&(t6=='0' || t6=='0')&&(t9=='0' || t9=='0')){
        document.getElementById('print').innerHTML="Bob Won"
        t1btn.disabled=true;
        t2btn.disabled=true;
        t4btn.disabled=true;
        t5btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t3btn.style.color="blue";
        t6btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t1=='0' || t1=='0')&&(t5=='0' || t5=='0')&&(t9=='0' || t9=='0')){
        document.getElementById('print').innerHTML="Bob Won"
        t2btn.disabled=true;
        t3btn.disabled=true;
        t4btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t1btn.style.color="blue";
        t5btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t3=='0' || t3=='0')&&(t5=='0' || t5=='0')&&(t9=='0' || t9=='0')){
        document.getElementById('print').innerHTML="Alice Won"
        t2btn.disabled=true;
        t1btn.disabled=true;
        t4btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t3btn.style.color="blue";
        t5btn.style.color="blue";
        t9btn.style.color="blue";
    }
    else if ((t2=='0' || t2=='0')&&(t5=='0' || t5=='0')&&(t8=='0' || t8=='0')){
        document.getElementById('print').innerHTML="Bob Won"
        t1btn.disabled=true;
        t3btn.disabled=true;
        t4btn.disabled=true;
        t6btn.disabled=true;
        t7btn.disabled=true;
        t9btn.disabled=true;
        t2btn.style.color="blue";
        t5btn.style.color="blue";
        t8btn.style.color="blue";
    }
    else if ((t4=='0' || t4=='0')&&(t5=='0' || t5=='0')&&(t6=='0' || t6=='0')){
        document.getElementById('print').innerHTML="Bob Won"
        t1btn.disabled=true;
        t3btn.disabled=true;
        t5btn.disabled=true;
        t7btn.disabled=true;
        t8btn.disabled=true;
        t9btn.disabled=true;
        t4btn.style.color="blue";
        t5btn.style.color="blue";
        t6btn.style.color="blue";
    }
    else if((t1=='x' || t1=='X')&&(t2=='x' || t2=='X')&&(t3=='x' || t3=='X')&&
            (t4=='x' || t4=='X')&&(t5=='x' || t5=='X')&&(t6=='x' || t6=='X')&&
            (t7=='x' || t7=='X')&&(t8=='x' || t8=='X')&&(t9=='x' || t9=='X')){
                document.getElementById('print').innerHTML="Match tie";
    }
    else{
        if(flag==1){
            document.getElementById('print').innerHTML='Player Alice Turn'
        }
        else{
            document.getElementById('print').innerHTML='Player Bob Turn'
        }
    }
}
function func2(){
    location.reload();
    t1=t2=t3=t4=t5=t6=t7=t8=t9='';
}
flag=1;
function func3(){
    if(flag==1){
        document.getElementById("t1").value='X';
        document.getElementById("t1").disabled=true;
        flag= 0;
    }
    else{
        document.getElementById("t1").value='0';
        document.getElementById("t1").disabled=true;
        flag= 1; 
    }
}
function func4(){
    if(flag==1){
        document.getElementById("t2").value='X';
        document.getElementById("t2").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t2").value='0';
        document.getElementById("t2").disabled=true;
        flag=1; 
    }
}
function func5(){
    if(flag==1){
        document.getElementById("t3").value='X';
        document.getElementById("t3").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t3").value='0';
        document.getElementById("t3").disabled=true;
        flag=1; 
    }
}
function func6(){
    if(flag==1){
        document.getElementById("t4").value='X';
        document.getElementById("t4").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t4").value='0';
        document.getElementById("t4").disabled=true;
        flag=1; 
    }
}
function func7(){
    if(flag==1){
        document.getElementById("t5").value='X';
        document.getElementById("t5").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t5").value='0';
        document.getElementById("t5").disabled=true;
        flag=1; 
    }
}
function func8(){
    if(flag==1){
        document.getElementById("t6").value='X';
        document.getElementById("t6").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t6").value='0';
        document.getElementById("t6").disabled=true;
        flag=1; 
    }
}
function func9(){
    if(flag==1){
        document.getElementById("t7").value='X';
        document.getElementById("t7").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t7").value='0';
        document.getElementById("t7").disabled=true;
        flag=1; 
    }
}
function func10(){
    if(flag==1){
        document.getElementById("t8").value='X';
        document.getElementById("t8").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t8").value='0';
        document.getElementById("t8").disabled=true;
        flag=1; 
    }
}
function func11(){
    if(flag==1){
        document.getElementById("t9").value='X';
        document.getElementById("t9").disabled=true;
        flag=0;
    }
    else{
        document.getElementById("t9").value='0';
        document.getElementById("t9").disabled=true;
        flag=1; 
    }
}