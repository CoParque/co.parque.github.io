var yt = {
  online : false,
  link : undefined
}
const settings = {

};
const urls = {
  urlonline:
    "https://sheets.googleapis.com/v4/spreadsheets/1A2JFdnLfTCNeWCui3_IZ69X201WRHVHr72rwh6n-1oA/values/UpdatedToday?alt=json&key=AIzaSyCz4sutc6Z6Hh5FtBTB53I8-ljkj6XWpPc"
};

function isOnline() {
  var x;
   $.getJSON(urls.urlonline).done(function (jsonurl) {
      x = jsonata('{"online":$.values[0][0],"link":$.values[1][0]}').evaluate(
        jsonurl
    );
   yt = x;
   return x;
    });

};


function check() {
  isOnline();
  
  if(yt.online == true) {
    console.log("online")
  location.href = yt.link; 
    
 } else {
  console.log("online")
window.setTimeout(check(), 5000); 
 }
};


$(document).ready(function () {
  

check();



});


