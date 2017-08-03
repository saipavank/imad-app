 var  button = document.getElementById('counter');
 button.onclick = function()
 {
     var request = new XMLHttpRequest();
     
     request.onreadystatechange = function()
     {
         if(request.readystate === XMLHttp.DONE)
         {
             if(request.status === 200){
                 var counter = request.Responsetext;
                  var span = document.getElementById('count');
                  span.innerHTML= counter.toString();
                 
             }
         }
         
     };
    request.open('GET','http://saipavankoppu.imad.hasura.io/counter' );
    request.send(null);
     
    
     
     
 };