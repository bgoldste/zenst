setInterval(addLinks, 2000);
function addLinks(){
	//append email to 
	//will prob break if no email due to being correlated to index?
	$.each($('a.email').parent(), function(index, value){
		console.log($(this).children('a.email').html());
		//console.log($(this.children));
	
		//if it has NOT been added, add it
		if ( $(this).children('a.adminlink').length  < 1 ){
			console.log($(this).html() + " HAS BEEN FOUND TO NOT HAVE EMAIL ADDED. adding now.");
			var node = document.createElement('a');
			node.className = "adminlink";
			node.text = "ADMIN VIEW";
			node.href = "https://localhost:4000/admin/userview?email=" + $(this).children('a.email').html();
			node.target = "_blank";
			this.appendChild(node);
			console.log('node ' + node);
		}
	});
};