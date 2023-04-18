// var bec_path = Folder.selectDialog('Select the BEC root folder.');
// var bec_path = '/Volumes/BEC';
// alert(bec_path);
var itrs_root_path =
  "/Users/" +
  $.getenv("USER") +
  "/Library/Preferences/Adobe InDesign/Version 17.0/en_US/Scripts/Scripts Panel/team scripts/Jason/BA2_based_on_pw/itrs";

// $.evalFile(itrs_root_path+'/run/one_script_to_run_them_all.js');
// $.evalFile(itrs_root_path + "/run/one_script_to_run_them_all_2p5.js");
// $.evalFile(itrs_root_path + "/run/one_script_to_run_them_all_NAT_2p5.js");
// $.evalFile(itrs_root_path+'/run/one_script_to_run_them_all_RR_2p5.js');
$.evalFile(itrs_root_path + "/run/one_script_to_run_them_all_SPAN.js");
// $.evalFile(itrs_root_path+'/run/adelante_2p5.js');

// $.evalFile(itrs_root_path+'/run/one_script_to_run_them_all_FLPDFUDPATE.js');
