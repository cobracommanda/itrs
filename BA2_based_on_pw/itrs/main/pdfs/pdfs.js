//  ____                  _                          _      ____                _           _      __        __         _        _                 
// | __ )  ___ _ __   ___| |__  _ __ ___   __ _ _ __| | __ |  _ \ ___  __ _  __| | ___ _ __( )___  \ \      / /__  _ __| | _____| |__   ___  _ __  
// |  _ \ / _ \ '_ \ / __| '_ \| '_ ` _ \ / _` | '__| |/ / | |_) / _ \/ _` |/ _` |/ _ \ '__|// __|  \ \ /\ / / _ \| '__| |/ / __| '_ \ / _ \| '_ \ 
// | |_) |  __/ | | | (__| | | | | | | | | (_| | |  |   <  |  _ <  __/ (_| | (_| |  __/ |    \__ \   \ V  V / (_) | |  |   <\__ \ | | | (_) | |_) |
// |____/ \___|_| |_|\___|_| |_|_| |_| |_|\__,_|_|  |_|\_\ |_| \_\___|\__,_|\__,_|\___|_|    |___/    \_/\_/ \___/|_|  |_|\_\___/_| |_|\___/| .__/ 
//                                                                                                                                          |_|  

//CREATOR JY
//CREATED 2018-12-18
//UPDATED 2018-12-26
//VERSION 1.0

function close_application(application){
	var text = '';

	text += 'tell application "'+application+'"\r';
	text += '\tquit\r';
	text += 'end tell\r';

	app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}

function remove_last_page_of_pdf(path){
	var path = File(path).fsName;
	path = 'Macintosh HD' +path.replace(/\//g, ':');
	var text = '';
	text += 'set pdf_file to "'+path+'" as alias\r';

	text += 'tell application "Adobe Acrobat"\r';
  text += '\topen pdf_file\r';  
  text += '\tdelete last page of document 1\r';
  text += '\tclose document 1 saving yes\r';
	text += 'end tell\r';

	app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}

function remove_first_page_of_pdf(path){
	var path = File(path).fsName;
	path = 'Macintosh HD' +path.replace(/\//g, ':');
	var text = '';
	text += 'set pdf_file to "'+path+'" as alias\r';

	text += 'tell application "Adobe Acrobat"\r';
  text += '\topen pdf_file\r';  
  text += '\tdelete first page of document 1\r'; 	
  text += '\tclose document 1 saving yes\r';	
	text += 'end tell\r';

	app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);	
}
