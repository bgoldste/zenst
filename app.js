// javascript to dynamicall generate link to new admin

//alert('asdsadas');
// var email = $('a.email').html();
// var url =  "https://localhost:4000/admin/userview?email=" + email;
// $('a.email').parent().append('<a target="blank" href="' + url + '"> user info</a>');


// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'console.log("executing from inside listener");'
//   });
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
  	//alert('running from app.js');
  	var email = document.getElementsByClassName('email').item().textContent;
	var url =  "https://localhost:4000/admin/userview?email=" + email; 
	//var url =  document.createTextNode("https://kimonolabs.com/admin/userview?email=" + email);


	var node = document.createElement("a");    

	node.text = "view in admin";
	node.href = url;             // Create a <li> node
	node.target = "_blank";



	document.getElementsByClassName("ember-view sender")[0].appendChild(node); 
   

  }
})