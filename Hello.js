
function myFunction() {
  var inpt = document.getElementById("inputTxt").value;
  var ele = document.createElement("LI");
  var txt = document.createTextNode(inpt);
  ele.appendChild(txt);
  var ele2 = document.createElement("SPAN");
  var txt2 = document.createTextNode(document.getElementsByTagName("p")[0].innerHTML);
  var ele3 = document.createElement("SPAN");
  var txt3 = document.createTextNode("\u00D7");
  ele2.className="pen";
  ele3.className="close";
  ele.appendChild(ele2);
  ele2.appendChild(txt2);
  ele3.appendChild(txt3);
  ele.appendChild(ele3);
  if(inpt == ""){
  alert("Please type some text")
  }
  else{   
    document.body.appendChild(ele);
  }
  document.getElementById("inputTxt").value = "";
  var close = document.getElementsByClassName("close");
  var pen = document.getElementsByClassName("pen");
  var i;
  for (i = 0; i < close.length; i++) {
    /////close button
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      } 
    }
  var j;
  for (j = 0; j < pen.length; j++) {
    var z=document.createElement("button");
    var UpdateBtn =  document.createTextNode("Update");
    z.className = "UpdateButton";
    z.appendChild(UpdateBtn);
    //////Click on pen button
    pen[j].onclick = function() {
     document.body.appendChild(z);
    var div = this.parentElement;
    document.getElementById("inputTxt").value = div.childNodes[0].textContent;
    div.style.visibility = "hidden";
    }
  }
    /////Click on update button 
     z.onclick = function() {
      z.style.display = "none";
     updateButton();
      }
     }
    function updateButton() {
      var inpt = document.getElementById("inputTxt").value;
      var ele = document.createElement("LI");
      var txt = document.createTextNode(inpt);
      ele.appendChild(txt);
      var ele2 = document.createElement("SPAN");
      var txt2 = document.createTextNode(document.getElementsByTagName("p")[0].innerHTML);
      var ele3 = document.createElement("SPAN");
      var txt3 = document.createTextNode("\u00D7");
      ele2.className="pen";
      ele3.className="close";
      ele.appendChild(ele2);
      ele2.appendChild(txt2);
      ele3.appendChild(txt3);
      ele.appendChild(ele3)   
      document.body.appendChild(ele);
      document.getElementById("inputTxt").value = "";
      var close = document.getElementsByClassName("close");
      var pen = document.getElementsByClassName("pen");
      var i;
      for (i = 0; i < close.length; i++) {
        /////Click on close button
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          } 
        }
      var j;
      for (j = 0; j < pen.length; j++) {
        var z=document.createElement("button");
        var UpdateBtn =  document.createTextNode("Update");
        z.className = "UpdateButton";
        z.appendChild(UpdateBtn);
        //////Click on pen button
        pen[j].onclick = function() {
         document.body.appendChild(z);
        var div = this.parentElement;
        div.style.visibility = "hidden";
        }  
      } 
    }
    
 