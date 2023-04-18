//CREATOR JY
//CREATED 2017-04-26
//UPDATED 2018-05-18
//VERSION 1.1


$.evalFile('/Volumes/user_files/User Files/0 - SCRIPTS/digitalMediaViewer/scripts/utility/console.js');
$.evalFile('/Volumes/user_files/User Files/0 - SCRIPTS/digitalMediaViewer/scripts/utility/library.js');
start_log();

function process_files(files){	
	files.forEach(function(file){
		app.open(file);		
		var layer_name = get_layer_name();
		document.layers.itemByName(layer_name).visible = true;
		document.close(SaveOptions.yes);	
		file.rename(file.name.replace(/\.indd/, '-annos.indd'));
	});
}

function get_layer_name(){
	var layers = document.layers.everyItem().getElements();
	var result = false;
	layers.forEach(function(layer){
		if(!!layer.name.match(/^anno/i)){ result = layer.name; }
	});
	return result;
}

(function(){	 
	notifications_off();
	var indd_folder = Folder.selectDialog('Select a folder with InDesign files');
	var files = indd_folder.getFiles('*.indd');  	
	process_files(files);
	notifications_on();
})();

alert('Complete');
end_log();