function close_all_terminal_windows(){
  var text = '';
  text += 'tell application "Terminal"\r';
  text += '\tclose every window\r';
  text += 'end tell\r';

  app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}

close_all_terminal_windows();