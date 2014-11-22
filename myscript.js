

setInterval(addAdmin, 300);
function addAdmin() {
	
	//alert('extension running. all is gucc in the world');
	console.log('extension running. all is gucc in the world');

	if (typeof last_url_updated === 'undefined' ||   window.location.href != last_url_updated){

		//console.log ('last url ' + last_url_updated);
		//console.log('window.location.href' + window.location.href);
		var email = document.getElementsByClassName('email').item().textContent;
		var url =  "https://localhost:4000/admin/userview?email=" + email; 
		//var url =  document.createTextNode("https://kimonolabs.com/admin/userview?email=" + email);


		var node = document.createElement("a");    
		node.className = "adminlink"
		node.text = "view in admin";
		node.href = url;             // Create a <li> node
		node.target = "_blank";
		last_url_updated = window.location.href;
		count = 0;
		for (var i=0; document.getElementsByClassName("ember-view sender").length; i++){
			document.getElementsByClassName("ember-view sender")[i].appendChild(node); 
		}
		count++;
	}

} 



// var a = document.createElement('a');
// var linkText = document.createTextNode("my title text");
// a.appendChild(linkText);
// a.title = "my title text";
// a.href = "http://example.com";
// document.body.appendChild(a);