var isOn = false;

function start(){
    //Start
    document.getElementById('led').classList.add('activeLED');
    document.getElementById('toggleSwitch').classList.add('toggleAnimation1');
    document.getElementById('arm').classList.add('armAnimationClass');
}

function end(){
    //End
    document.getElementById('led').classList.remove('activeLED');
    document.getElementById('toggleSwitch').classList.add('toggleAnimation2');
    document.getElementById('arm').classList.remove('armAnimationClass');
}

function toggle(){  
    start();
    setTimeout(end, 2000);
    //document.getElementById('toggleSwitch').classList.remove('toggleAnimation2');
}