var isOn = false;

function wait(ms){
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function toggle(){  
    //Start
    document.getElementById('led').classList.add('activeLED');
    document.getElementById('toggleSwitch').classList.add('activeSwitch');
    document.getElementById('arm').classList.add('armAnimationClass');
    
    controller.wait(400);
    
    //End
    document.getElementById('led').classList.remove('activeLED');
    document.getElementById('toggleSwitch').classList.remove('activeSwitch');
    document.getElementById('arm').classList.remove('armAnimationClass');
}