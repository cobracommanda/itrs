//CREATOR JY//CREATED 2019-02-07//UPDATED 2019-02-07//VERSION 1.0$.evalFile('/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 11.0/en_US/Scripts/Scripts Panel/team scripts/Jason/Utility/console.js');start_log();$.evalFile('/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 11.0/en_US/Scripts/Scripts Panel/team scripts/Jason/Utility/library.js');notifications_off();function VideoData(record){  this.id = record[0];  this.xcode = record[1];  this.id = record[2];} function make_screencaps(csv_file){  var video_data_collection = new DataMap(csv_file, VideoData);  var path = create_folder('~/Desktop/screencap');    video_data_collection.forEach(function(video){            var url = 'https://benchmark.wistia.com/medias/'+video.id;    log(url);    var text = 'tell application "Google Chrome" to set URL of active tab of window 1 to "'+url+'"';    app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);    $.sleep(5000);    text = 'do shell script "date=$(date \'+%Y%m%dT%H%M%S\'); screencapture -x -R799,262,960,506 ' + path + '/' + video.xcode + '.jpg"';    app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);  });}(function(){  var csv_folder = Folder.selectDialog();  var csv_files = csv_folder.getFiles('*.csv');  csv_files.forEach(function(csv_file){    make_screencaps(csv_file);    });})();end_log();