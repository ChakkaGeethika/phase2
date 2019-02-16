var indexedDB=window.indexedDB||window.mozIndexedDB||window.wevkitIndexedDB||window.msIndexedDB;

//terinary operator
indexedDB?console.log("success"):console.log("browser Not Supported");

var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);
//upgradeneeded
request.onupgradeneeded=function(e) {
  result=e.target.result;
  store=result.createObjectStore("resume",{keyPath:'id',autoIncrement:true});
}
//success
request.onsuccess=function(e) {
  console.log("reached successfully");
  result=e.target.result;
  var tx=result.transaction("resume","readwrite");
  store=tx.objectStore("resume");
  var gettingData=store.getAll();

  gettingData.onsuccess=function(getData) {
    profile(getData.target.result);
  }

  function profile(getprofile) {
    var cards=document.querySelector('.cards');
    console.log(cards);
    for(i in getprofile) {
        console.log(getprofile[i].Name);
        var card=document.createElement("div");
        card.classList.add("card");
        cards.appendChild(card);

        let image=document.createElement("img");
        image.src="download.png";
        image.alt="profileImage";
        card.appendChild(image);

        let a=document.createElement("a");
         a.href="resume.html?id="+getprofile[i].id;
         card.appendChild(a);

         let name=document.createElement("h2");
         name.textContent=getprofile[i].Name;
        a.appendChild(name);

        let mail=document.createElement("h3");
        mail.textContent=getprofile[i].Mail;
       card.appendChild(mail);
       }
     }
  }
