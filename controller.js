var isOn = false;

function toggle(){
    if(isOn){
        document.getElementById('led').classList.remove('activeLED');
        document.getElementById('toggleSwitch').classList.remove('activeSwitch');
        isOn = false;
    } else {
        document.getElementById('led').classList.add('activeLED');
        document.getElementById('toggleSwitch').classList.add('activeSwitch');
        isOn = true;
    }
}