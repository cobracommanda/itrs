//CREATOR JY
//CREATED 2018-11-12
//UPDATED 2018-11-13
//VERSION 1.1

$.evalFile('/Volumes/user_files/User Files/0 - SCRIPTS/digitalMediaViewer/scripts/utility/console.js');
start_log();
$.evalFile('/Volumes/user_files/User Files/0 - SCRIPTS/digitalMediaViewer/scripts/utility/exporter.js');
$.evalFile('/Volumes/user_files/User Files/0 - SCRIPTS/digitalMediaViewer/scripts/utility/library.js');

notifications_off();

function get_name(){
  var input = '';
  var get_name_dialog = app.dialogs.add({name: 'Prompt'});
  with(get_name_dialog.dialogColumns.add()){
    staticTexts.add({staticLabel:'Name?'});
    textEditboxes.add({editContents: 'dossier'});
  }     
  get_name_dialog.show();
  input = get_name_dialog.dialogColumns[0].textEditboxes[0].editContents;
  return input;
}

function get_filenames(dossier_name){
	if(!dossier_name.match(/^O-Y\d+$/)){
		alert('dossier name is invalid');
		throw 'exiting program';
	}
	var query = ['Name, '+dossier_name, 'Type, Dossier'];
	var results = app.queryObjects(query);
	var dossier_id = !!results.match(/<\d+/) ? results.match(/<\d+/)[0].replace(/</g, '') : false;
	var dossier = app.dossiers.retrieve(parseInt(dossier_id).toString());

	var list = dossier.items;
	 
	notifications_off();
	list.forEach(function(id){
		try{
			app.openObject(id);
			log(document.name);
			document.close(SaveOptions.no);
		}catch(e){
			log('failed to open: '+id);
		}
	});
}


(function(){
	get_filenames(get_name());
})();

end_log();