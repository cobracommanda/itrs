//differentiate BA2 packages for CC, TN, FL#include '/Volumes/BEC/15 User Files/INDD SCRIPTS/primitive/main.js';var utility_path = '/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 11.0/en_US/Scripts/Scripts Panel/team scripts/Jason/Utility';var itrs_root_path = '/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 11.0/en_US/Scripts/Scripts Panel/team scripts/Jason/BA2_based_on_pw/itrs';var projects_folder = Folder('/Volumes/BEC/15 User Files/INDD SCRIPTS/primitive/_JY_BU/JasonONE_DRIVE_UNSORTED/OneDrive - Benchmark Education/projects');var differentation_folder = Folder(projects_folder+'/BA2/itrs/differentation_materials'); var floop_folder = Folder(differentation_folder+'/floops');var standards_folder = Folder(differentation_folder+'/standards');var region = '';var myFiles = [];var currentFile;$.evalFile(utility_path+'/console.js');$.evalFile(utility_path+'/exporter.js');$.evalFile(utility_path+'/zone.js');$.evalFile(utility_path+'/library.js');$.evalFile(utility_path+'/json.js');start_log('log_BA2_eng_DIFFERENTIATION_' + app.getWWUser());$.evalFile(itrs_root_path+'/data/products_NAT_2p5.js');//this is based on the concept that 1) it will be included in /run, and 2) that we are always running SNI first.//make "national" (what I suspect is Florida)var fileSep = "/";if(File.fs=="Windows") fileSep = "\\";var selected_folder = Folder.selectDialog('Select the unit folder or the individual xcode folder.');var package_folder; //will be defined later// var myStuffFolder = Folder.selectDialog('What\'s the folder with the stuff you need?');// var myStuffFolder = Folder('/Volumes/user_files/User Files/0 - SCRIPTS/stuff_folder_batchregexgeneral');// var myFiles = product_folder.getFiles("*.html");var pleaseWaitWindow = new Window('palette', 'Please wait warmly while files are modified...');pleaseWaitWindow.bounds = [400,500,700,510];//pleaseWaitWindow.bringToFront();pleaseWaitWindow.show();//var pleaseWaitPanel = pleaseWaitWindow.add(pleaseWaitPanel, [0,0,200,30], 'Now modifying: ');var xcodeFolders = [];if(selected_folder.fsName.match(/X\d+/)){  xcodeFolders.push(selected_folder);}else{  GetXcodeFolders(selected_folder);}var product_folder, snixcode, sniProduct, grade, unit, xcode, fileCounter, dayLessonCounter, fixedHTML, bankxcode;for(var xf = 0; xf < xcodeFolders.length; xf++){  product_folder = xcodeFolders[xf];  snixcode = product_folder.fsName.match(/X\d+/)[0];  sniProduct = get_product_by_xcode(snixcode);  grade = sniProduct.grade;  unit = sniProduct.unit;  var xcode;  var fileCounter = 0;  var dayLessonCounter = 1; //only used in TN K-2  var fixedHTML;  var bankxcode; //used for alternateUtilities only  //differentiate  // var region = prompt('TN or CC?');  // var language = 'en';  // differentiate(region);  //alternate utilities  // var language = prompt('en or sp?'); //if running the original two aUs  // var region = prompt('SNI or CC?'); //if running formativeFix  alternateUtilities();}pleaseWaitWindow.close();alert('Done!');//FUNCTIONSfunction alternateUtilities(){  GetSubFolders(product_folder);  xcode = snixcode;  log(xcode);  log('Grade ' + grade + ' Unit ' + unit);  //ok time for HTML  var d = myFiles.length;  fileCounter = 0;  var lastCounter = 0;  log(d);  while (d--)   {      // grade = myFiles[d].fsName.match(/grade(\d|k)/i)[0].match(/(\d|k)/i)[0];      // if(grade == 'K') grade = 'k';      currentFile = myFiles[d];      // OPEN THE FILE      currentFile.open('r');      // pleaseWaitPanel.add(currentFile.name); //doesn't work      // pleaseWaitPanel.show();      // encoding!      currentFile.encoding = 'utf-8';      log('alternateUtilities attempt: ' + currentFile.fsName);      fixedHTML = currentFile.read();      // set lastCounter for comparison      lastCounter = fileCounter;      //DO STUFF      tocaddition();      if(fileCounter > lastCounter+1)      fileCounter = lastCounter+1;      if(fileCounter > lastCounter)      {         //WRITE THE FILE         currentFile.open('w');         currentFile.write(fixedHTML);         //fileCounter++;      }      currentFile.close();      // log('...file edited!');      // }  }}function tocaddition(){  if(!fixedHTML.match(/AR1/)) //this means it wasn't switched to internal  {    var gnun = 'G' + grade.toLowerCase() + 'U' + unit;    var unitpath = '/html/grade' + grade.toLowerCase() + '/unit' + unit;    var moreids = '';    moreids += '\t\t "' + gnun + 'OV1": "' + unitpath + '/overview/content_knowledge_alignment.html",\n';    moreids += '\t\t "' + gnun + 'OV2": "' + unitpath + '/overview/vertical_progression.html",\n';    moreids += '\t\t "' + gnun + 'OV3": "' + unitpath + '/overview/author_and_consultant_team.html",\n';    moreids += '\t\t "' + gnun + 'OV4": "' + unitpath + '/overview/about_the_program.html",\n';    // moreids += '\t\t "' + gnun + 'OV5": "' + unitpath + '/overview/welcome_to_benchmark_advance.html",\n';    moreids += '\t\t "' + gnun + 'OV6": "' + unitpath + '/overview/pacing_options.html",\n';    moreids += '\t\t "' + gnun + 'OV7": "' + unitpath + '/overview/digital_print_components.html",\n';    moreids += '\t\t "' + gnun + 'UR1": "' + unitpath + '/unit_resources/unit_opener.html",\n';    moreids += '\t\t "' + gnun + 'UR2": "' + unitpath + '/unit_resources/strategies_skills.html",\n';    moreids += '\t\t "' + gnun + 'UR3": "' + unitpath + '/unit_resources/components_at_a_glance.html",\n';    moreids += '\t\t "' + gnun + 'UR4": "' + unitpath + '/unit_resources/intervention_reteaching.html",\n';    moreids += '\t\t "' + gnun + 'UR5": "' + unitpath + '/unit_resources/guide_to_text_complexity.html",\n';    moreids += '\t\t "' + gnun + 'UR6": "' + unitpath + '/unit_resources/secl.html",\n';    moreids += '\t\t "' + gnun + 'UR7": "' + unitpath + '/unit_resources/vocabulary_development.html",\n';    moreids += '\t\t "' + gnun + 'UR8": "' + unitpath + '/unit_resources/inquiry.html",\n';    moreids += '\t\t "' + gnun + 'UR9": "' + unitpath + '/unit_resources/language_objectives.html",\n';    moreids += '\t\t "' + gnun + 'UR10": "' + unitpath + '/unit_resources/pathways_to_knowledge.html",\n';    if(!grade.match(/[k1]/i)) moreids += '\t\t "' + gnun + 'UR11": "' + unitpath + '/unit_resources/annotated_knowledge_blueprint.html",\n';    moreids += '\t\t "' + gnun + 'W1G": "' + unitpath + '/week1/goals.html",\n';    moreids += '\t\t "' + gnun + 'W1P": "' + unitpath + '/week1/planner.html",\n';    moreids += '\t\t "' + gnun + 'W2G": "' + unitpath + '/week2/goals.html",\n';    moreids += '\t\t "' + gnun + 'W2P": "' + unitpath + '/week2/planner.html",\n';    moreids += '\t\t "' + gnun + 'W3G": "' + unitpath + '/week3/goals.html",\n';    moreids += '\t\t "' + gnun + 'W3P": "' + unitpath + '/week3/planner.html",\n';    if(grade.toLowerCase() == 'k')    {      moreids += '\t\t "' + gnun + 'AR0": "' + unitpath + '/additional_resources/instructional_routines_strategies.html",\n';      moreids += '\t\t "' + gnun + 'AR1": "' + unitpath + '/additional_resources/constructive_conversation.html",\n';      moreids += '\t\t "' + gnun + 'AR2": "' + unitpath + '/additional_resources/independent_reading_program.html",\n';      moreids += '\t\t "' + gnun + 'AR3": "' + unitpath + '/additional_resources/recommended_trade_books.html",\n';      moreids += '\t\t "' + gnun + 'AR4": "' + unitpath + '/additional_resources/phonics_cumulative_assessments.html",\n';      moreids += '\t\t "' + gnun + 'AR5": "' + unitpath + '/additional_resources/small_group_texts.html",\n';      moreids += '\t\t "' + gnun + 'AR6": "' + unitpath + '/additional_resources/guide_to_text_complexity.html",\n';      moreids += '\t\t "' + gnun + 'AR7": "' + unitpath + '/additional_resources/access_equity.html",\n';      moreids += '\t\t "' + gnun + 'AR8": "' + unitpath + '/additional_resources/contrastive_analysis.html",\n';      moreids += '\t\t "' + gnun + 'AR9": "' + unitpath + '/additional_resources/scope_sequence.html",\n';    }    else if(grade == '1')    {      moreids += '\t\t "' + gnun + 'AR1": "' + unitpath + '/additional_resources/instructional_routines_strategies.html",\n';      moreids += '\t\t "' + gnun + 'AR2": "' + unitpath + '/additional_resources/constructive_conversation.html",\n';      moreids += '\t\t "' + gnun + 'AR3": "' + unitpath + '/additional_resources/independent_reading_program.html",\n';      moreids += '\t\t "' + gnun + 'AR4": "' + unitpath + '/additional_resources/recommended_trade_books.html",\n';      moreids += '\t\t "' + gnun + 'AR5": "' + unitpath + '/additional_resources/phonics_cumulative_assessments.html",\n';      moreids += '\t\t "' + gnun + 'AR6": "' + unitpath + '/additional_resources/small_group_texts.html",\n';      moreids += '\t\t "' + gnun + 'AR7": "' + unitpath + '/additional_resources/guide_to_text_complexity.html",\n';      moreids += '\t\t "' + gnun + 'AR8": "' + unitpath + '/additional_resources/access_equity.html",\n';      moreids += '\t\t "' + gnun + 'AR9": "' + unitpath + '/additional_resources/contrastive_analysis.html",\n';      moreids += '\t\t "' + gnun + 'AR10": "' + unitpath + '/additional_resources/scope_sequence.html",\n';    }    else if(grade == '2')    {      moreids += '\t\t "' + gnun + 'AR1": "' + unitpath + '/additional_resources/instructional_routines_strategies.html",\n';      moreids += '\t\t "' + gnun + 'AR2": "' + unitpath + '/additional_resources/constructive_conversation.html",\n';      moreids += '\t\t "' + gnun + 'AR3": "' + unitpath + '/additional_resources/independent_reading_program.html",\n';      moreids += '\t\t "' + gnun + 'AR4": "' + unitpath + '/additional_resources/recommended_trade_books.html",\n';      moreids += '\t\t "' + gnun + 'AR5": "' + unitpath + '/additional_resources/phonics_cumulative_assessments.html",\n';      moreids += '\t\t "' + gnun + 'AR6": "' + unitpath + '/additional_resources/answer_key.html",\n';      moreids += '\t\t "' + gnun + 'AR7": "' + unitpath + '/additional_resources/modeling_script.html",\n';      moreids += '\t\t "' + gnun + 'AR8": "' + unitpath + '/additional_resources/small_group_texts.html",\n';      moreids += '\t\t "' + gnun + 'AR9": "' + unitpath + '/additional_resources/guide_to_text_complexity.html",\n';      moreids += '\t\t "' + gnun + 'AR10": "' + unitpath + '/additional_resources/access_equity.html",\n';      moreids += '\t\t "' + gnun + 'AR11": "' + unitpath + '/additional_resources/contrastive_analysis.html",\n';      moreids += '\t\t "' + gnun + 'AR12": "' + unitpath + '/additional_resources/scope_sequence.html",\n';    }    else    {      moreids += '\t\t "' + gnun + 'AR1": "' + unitpath + '/additional_resources/instructional_routines_strategies.html",\n';      moreids += '\t\t "' + gnun + 'AR2": "' + unitpath + '/additional_resources/constructive_conversation.html",\n';      moreids += '\t\t "' + gnun + 'AR3": "' + unitpath + '/additional_resources/reading_big_words.html",\n';      moreids += '\t\t "' + gnun + 'AR4": "' + unitpath + '/additional_resources/independent_reading_program.html",\n';      moreids += '\t\t "' + gnun + 'AR5": "' + unitpath + '/additional_resources/recommended_trade_books.html",\n';      moreids += '\t\t "' + gnun + 'AR6": "' + unitpath + '/additional_resources/answer_key.html",\n';      moreids += '\t\t "' + gnun + 'AR7": "' + unitpath + '/additional_resources/modeling_script.html",\n';      moreids += '\t\t "' + gnun + 'AR8": "' + unitpath + '/additional_resources/small_group_texts.html",\n';      moreids += '\t\t "' + gnun + 'AR9": "' + unitpath + '/additional_resources/guide_to_text_complexity.html",\n';      moreids += '\t\t "' + gnun + 'AR10": "' + unitpath + '/additional_resources/access_equity.html",\n';      moreids += '\t\t "' + gnun + 'AR11": "' + unitpath + '/additional_resources/contrastive_analysis.html",\n';      if(grade != '6')      {        moreids += '\t\t "' + gnun + 'W1PWS1": "' + unitpath + '/week1/lessonpw1.html",\n';        moreids += '\t\t "' + gnun + 'W1PWS2": "' + unitpath + '/week1/lessonpw2.html",\n';        moreids += '\t\t "' + gnun + 'W1PWS3": "' + unitpath + '/week1/lessonpw3.html",\n';        moreids += '\t\t "' + gnun + 'W2PWS1": "' + unitpath + '/week2/lessonpw1.html",\n';        moreids += '\t\t "' + gnun + 'W2PWS2": "' + unitpath + '/week2/lessonpw2.html",\n';        moreids += '\t\t "' + gnun + 'W2PWS3": "' + unitpath + '/week2/lessonpw3.html",\n';        moreids += '\t\t "' + gnun + 'W3PWS1": "' + unitpath + '/week3/lessonpw1.html",\n';        moreids += '\t\t "' + gnun + 'W3PWS2": "' + unitpath + '/week3/lessonpw2.html",\n';        moreids += '\t\t "' + gnun + 'W3PWS3": "' + unitpath + '/week3/lessonpw3.html",\n';      }    }    fixedHTML = fixedHTML.replace(/"pageIds": \{/, '"pageIds": {\n' + moreids);    fileCounter++;    // log('print PDF button fixed!');  }}function GetXcodeFolders(theFolder){   var myFileList = theFolder.getFiles();     for (var i = 0; i < myFileList.length; i++)    {          var myFile = myFileList[i];          if (myFile instanceof Folder && myFile.fsName.match(/X\d+/))        {               xcodeFolders.push(myFile);          }   }}function GetSubFolders(theFolder) {  if (!(theFolder.name.match(/old$/i)) && !(theFolder.name.match(/rrhtml$/i)))  {       var myFileList = theFolder.getFiles();         for (var i = 0; i < myFileList.length; i++)        {              var myFile = myFileList[i];              if (myFile instanceof Folder)            {                   GetSubFolders(myFile);              }              else if (myFile instanceof File && myFile.name.match(/\.json$/i))             {                   myFiles.push(myFile);              }         }     }}//by Mikefunction returnSplit(file, mode) {    if (mode.match(/\n/)) {        file.open('r');        str = file.read();    } else {        str = file;    }    str = str.split(mode);    return str;}