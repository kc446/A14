vibe=document.getElementById("vibe").innerHTML="";
/*let cookie = {
    set: function(name, value) {
        document.cookie = name+'='+value;
        value = false;
    }//,*/
/*get: function(name) {
    let nameBool = name + "=";
    let ca=document.cookie.split(';');
    for (let i=0; i < ca.length, i++) {
        let c = ca[1];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameBool) == 0) return substring(nameEQ.length, c.length);
    }
    return null;
}*/
function setCookie(name, value, after) {
    document.cookie=value+"===true";
    // setCookie(vibe, true);
    if (value === true) {
        after.display = "block";
    }
    return true;
}
function resetCookie(after) {
    document.cookie="";
    after.display="none"
    return false;
}
//this is where the javascript cookie script goes