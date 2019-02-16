console.log("hello Geeth");
function submit() {
  var carreer=document.getElementById('carreer').value;
  var name=document.getElementById('name').value;
  var role=document.getElementById('role').value;
  var phonenumber=document.getElementById('phonenumber').value;
  var mailid=document.getElementById('mailid').value;
  var degree=document.getElementById('degree').value;
  var dcollege=document.getElementById('dcollege').value;
  var branch=document.getElementById('branch').value;
  var dmarks=document.getElementById('dmarks').value;
  var idegree=document.getElementById('idegree').value;
  var icollege=document.getElementById('icollege').value;
  var ibranch=document.getElementById('ibranch').value;
  var imarks=document.getElementById('imarks').value;
  var board=document.getElementById('board').value;
  var school=document.getElementById('school').value;
  var medium=document.getElementById('medium').value;
  var smarks=document.getElementById('smarks').value;
  var skills=document.getElementById('skills').value;

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
    store.put(
      {
      co:carreer,
      Name:name,
      Role:role,
      Num:phonenumber,
      Mail:mailid,
      Education:[
        {
          Degree:degree,
          College:dcollege,
          Branch:branch,
          Marks:dmarks
        },
        {
        Degree:idegree,
        College:icollege,
        Branch:ibranch,
        Marks:imarks
      },
      {
        Degree:board,
        College:school,
        Branch:medium,
        Marks:smarks
      }
    ],
    skills:skills
    }
    );
  }
  //error
  request.onerror=function(e) {
    console.log("error"+e);
  }
  window.open("index.html","_self");
 }
