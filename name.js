function loadXMLDoc(name) { 
    if (window.XMLHttpRequest) { 
        xhttp = new XMLHttpRequest(); 
    } else { 
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
    } 
    xhttp.open("GET", name, false); 
    xhttp.send(); 
    return xhttp.responseXML; 
} 

function displayData() { 
    var xmlDoc = loadXMLDoc("name.xml"); 
    var name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue; 
    document.getElementById("output").innerHTML = name; 
} 

window.onload = displayData;