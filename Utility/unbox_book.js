//CREATOR JY
//CREATED 2017-03-28
//UPDATED 2017-03-28
//VERSION 1.0

$.evalFile('/Volumes/user_files/User Files/0 - SCRIPTS/digitalMediaViewer/scripts/utility/console.js');

start_log();

alert('Please Choose Destination Folder');
var folder = Folder.selectDialog();
 
(function(){			
	var book = app.activeBook;
	var book_contents = book.bookContents;
	var l = book_contents.length;
	for(var x = 0; x < l; x++){
		var book_content = book_contents[x];
		var file = File('/Volumes'+book_content.fullName);
		file.copy(folder+separator+file.name);
	}
})();
alert('Complete');

end_log();