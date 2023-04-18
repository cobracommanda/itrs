// BA2!                                                                                                                                |_|    

//CREATOR JY, UPDATED BY EM
//CREATED 2019-02-19
//UPDATED 2020-something-something
//VERSION 2.0

#include '/Volumes/BEC/15 User Files/INDD SCRIPTS/primitive/main.js';

var utility_path = '/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 17.0/en_US/Scripts/Scripts Panel/team scripts/Jason/Utility';
var itrs_root_path = '/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 17.0/en_US/Scripts/Scripts Panel/team scripts/Jason/BA2_based_on_pw/itrs';

var region = 'sni';
// var region = 'tennessee';
// var region = 'national';

$.evalFile(utility_path+'/console.js');
$.evalFile(utility_path+'/exporter.js');
$.evalFile(utility_path+'/zone.js');
$.evalFile(utility_path+'/library.js');
$.evalFile(utility_path+'/json.js');
start_log('log_BA2_span_debug' + region + '_' + app.getWWUser());
$.evalFile(itrs_root_path+'/data/products.js');
$.evalFile(itrs_root_path+'/data/heidisongs.js');
$.evalFile(itrs_root_path+'/data/image_links_data.js');

var indd_folder = Folder(itrs_root_path+'/indd_span');

var collect_headers = false;
var current_package, current_week, current_day, current_lesson, current_lesson_type, current_package_folder, current_images_path, figures_id, images_list, current_section, datamap;
var eplanner_toc_json_content = '';
var projects_folder = Folder('/Volumes/BEC/15 User Files/INDD SCRIPTS/primitive/_JY_BU/JasonONE_DRIVE_UNSORTED/OneDrive - Benchmark Education/projects');
var dev_folder = Folder(projects_folder+'/BA2/itrs/dev'); 
// var output_folder = create_folder(projects_folder+'/BA2/itrs/output_SPAN');
// var packages_folder = create_folder(projects_folder+'/BA2/itrs/packages_SPAN');
var local_folder = create_folder('/Users/' + $.getenv('USER') + '/Desktop/bw_script_output');
var output_folder = create_folder(local_folder+'/BA2_NAT_2p5/itrs/output_SPAN_spring2022');
var packages_folder = create_folder(local_folder+'/BA2_NAT_2p5/itrs/packages_SPAN_spring2022');
// var dmv_folder = Folder(itrs_root_path+'/_created assets⁩/⁨spanish dmv csvs⁩');
// var dmv_folder = Folder(projects_folder+'/BA2/itrs/assets/span_dmv_pdfs');
var dmv_folder = Folder(projects_folder+'/digitalMediaViewer/products/BA2');
var input_pdfs_folder = Folder(dmv_folder+'/packages');
var package_infos = [
// {grade: 'K', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64482', dmv: 'X64481'}, dossier_name: 'O-Y40694', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] }, //66
// {grade: '1', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64502', dmv: 'X64501'}, dossier_name: 'O-Y40699', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] }, //66
// {grade: '2', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64522', dmv: 'X64521'}, dossier_name: 'O-Y40704', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] }, //56
// {grade: '3', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64542', dmv: 'X64541'}, dossier_name: 'O-Y40709', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] }, //43
// {grade: '4', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64562', dmv: 'X64561'}, dossier_name: 'O-Y40714', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] }, //43
// {grade: '5', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64582', dmv: 'X64581'}, dossier_name: 'O-Y40719', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] }, //43
// {grade: '6', unit: 1,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64602', dmv: 'X64601'}, dossier_name: 'O-Y40724', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] }, //43

// {grade: 'K', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64484', dmv: 'X64483'}, dossier_name: 'O-Y40694', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64504', dmv: 'X64503'}, dossier_name: 'O-Y40699', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64524', dmv: 'X64523'}, dossier_name: 'O-Y40704', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64544', dmv: 'X64543'}, dossier_name: 'O-Y40709', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64564', dmv: 'X64563'}, dossier_name: 'O-Y40714', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64584', dmv: 'X64583'}, dossier_name: 'O-Y40719', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 2,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64604', dmv: 'X64603'}, dossier_name: 'O-Y40724', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64486', dmv: 'X64485'}, dossier_name: 'O-Y40695', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64506', dmv: 'X64505'}, dossier_name: 'O-Y40700', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64526', dmv: 'X64525'}, dossier_name: 'O-Y40705', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64546', dmv: 'X64545'}, dossier_name: 'O-Y40710', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64566', dmv: 'X64565'}, dossier_name: 'O-Y40715', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64586', dmv: 'X64585'}, dossier_name: 'O-Y40720', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 3,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64606', dmv: 'X64605'}, dossier_name: 'O-Y40725', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64488', dmv: 'X64487'}, dossier_name: 'O-Y40695', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64508', dmv: 'X64507'}, dossier_name: 'O-Y40700', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64528', dmv: 'X64527'}, dossier_name: 'O-Y40705', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64548', dmv: 'X64547'}, dossier_name: 'O-Y40710', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64568', dmv: 'X64567'}, dossier_name: 'O-Y40715', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64588', dmv: 'X64587'}, dossier_name: 'O-Y40720', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 4,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64608', dmv: 'X64607'}, dossier_name: 'O-Y40725', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64490', dmv: 'X64489'}, dossier_name: 'O-Y40696', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64510', dmv: 'X64509'}, dossier_name: 'O-Y40701', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64530', dmv: 'X64529'}, dossier_name: 'O-Y40706', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64550', dmv: 'X64549'}, dossier_name: 'O-Y40711', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64570', dmv: 'X64569'}, dossier_name: 'O-Y40716', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64590', dmv: 'X64589'}, dossier_name: 'O-Y40721', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 5,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64610', dmv: 'X64609'}, dossier_name: 'O-Y40726', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64492', dmv: 'X64491'}, dossier_name: 'O-Y40696', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64512', dmv: 'X64511'}, dossier_name: 'O-Y40701', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64532', dmv: 'X64531'}, dossier_name: 'O-Y40706', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64552', dmv: 'X64551'}, dossier_name: 'O-Y40711', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64572', dmv: 'X64571'}, dossier_name: 'O-Y40716', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64592', dmv: 'X64591'}, dossier_name: 'O-Y40721', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 6,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64612', dmv: 'X64611'}, dossier_name: 'O-Y40726', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64494', dmv: 'X64493'}, dossier_name: 'O-Y40697', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64514', dmv: 'X64513'}, dossier_name: 'O-Y40702', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64534', dmv: 'X64533'}, dossier_name: 'O-Y40707', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64554', dmv: 'X64553'}, dossier_name: 'O-Y40712', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64574', dmv: 'X64573'}, dossier_name: 'O-Y40717', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64594', dmv: 'X64593'}, dossier_name: 'O-Y40722', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 7,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64614', dmv: 'X64613'}, dossier_name: 'O-Y40727', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64496', dmv: 'X64495'}, dossier_name: 'O-Y40697', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64516', dmv: 'X64515'}, dossier_name: 'O-Y40702', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64536', dmv: 'X64535'}, dossier_name: 'O-Y40707', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64556', dmv: 'X64555'}, dossier_name: 'O-Y40712', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64576', dmv: 'X64575'}, dossier_name: 'O-Y40717', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64596', dmv: 'X64595'}, dossier_name: 'O-Y40722', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 8,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64616', dmv: 'X64615'}, dossier_name: 'O-Y40727', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64498', dmv: 'X64497'}, dossier_name: 'O-Y40698', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64518', dmv: 'X64517'}, dossier_name: 'O-Y40703', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64538', dmv: 'X64537'}, dossier_name: 'O-Y40708', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64558', dmv: 'X64557'}, dossier_name: 'O-Y40713', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '4', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64578', dmv: 'X64577'}, dossier_name: 'O-Y40718', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64598', dmv: 'X64597'}, dossier_name: 'O-Y40723', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 9,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64618', dmv: 'X64617'}, dossier_name: 'O-Y40728', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },

// {grade: 'K', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64500', dmv: 'X64499'}, dossier_name: 'O-Y40698', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '1', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64520', dmv: 'X64519'}, dossier_name: 'O-Y40703', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 64}] },
// {grade: '2', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64540', dmv: 'X64539'}, dossier_name: 'O-Y40708', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 53}] },
// {grade: '3', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64560', dmv: 'X64559'}, dossier_name: 'O-Y40713', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
{grade: '4', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64580', dmv: 'X64579'}, dossier_name: 'O-Y40718', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '5', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64600', dmv: 'X64599'}, dossier_name: 'O-Y40723', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] },
// {grade: '6', unit: 10,  national: {xcode: '', dmv: ''}, sni: {xcode: 'X64620', dmv: 'X64619'}, dossier_name: 'O-Y40728', language: 'sp', woodwing: false, lessons: [{type: 'lesson', total: 40}] }

];

function make_packages(){
	package_infos.forEach(function(package_info){
		var product_package = new Package(package_info);
		current_package = product_package;
		// product_package.check_link_statuses();
		product_package.build();
	});
}

function Package(package_info){
	this.info = package_info;
	this.grade = package_info.grade;
	this.unit = package_info.unit;
	this.volume = this.unit <= 5 ? 1 : 2;
	this.ycode = package_info.dossier_name.replace(/O-/, '');
	this.xcode = package_info[region].xcode;
	this.dmv = package_info[region].dmv;
	this.language = package_info.language;
	this.lessons_info = package_info.lessons;	
	this.export_images = true;
	this.csv_path = '/Volumes/BEC/15 User Files/INDD SCRIPTS/primitive/_JY_BU/JasonONE_DRIVE_UNSORTED/OneDrive - Benchmark Education/projects/BA2/itrs/csv';
	this.csv_file = File(this.csv_path+'/g'+this.grade.toLowerCase()+'/g'+this.grade.toLowerCase()+'_u'+this.unit+'_'+region+'_nav_SPAN_csv.csv');		
}



Package.prototype.build = function(){	
	this.product_folder = create_folder(output_folder+'/'+this.xcode);
	// try{

		this.initialize();
		this.make_nav();		
		this.make_unit_opener_page();
		this.copy_itrs_pdfs();

		this.make_lesson_pages(1);
		this.make_lesson_pages(2);
		this.make_lesson_pages(3);

		this.stack();
		this.finalize();

		// app.seriesTracker(File('/Volumes/BEC/15 User Files/INDD SCRIPTS/trackers/phonics_workshop_itrs.csv'), this.xcode);
	// }catch(e){warning_message("failed on: "+this.xcode+', error: '+e);}
};

Package.prototype.initialize = function(){	
	$.evalFile(itrs_root_path+'/nav/initialize.js');
	// if(!this.csv_file.exists){
		this.make_csv_file();
	// }
	data_map = new DataMap(this.csv_file, Record, '0');
};

Package.prototype.make_csv_file = function(){
	$.evalFile(itrs_root_path+'/nav/csv_maker_SPAN.js');
	this.lesson_titles = [];
	this.get_lesson_titles();	
	var text = '';
	log('Grade: ' + current_package.grade);
	switch(current_package.grade){
		case 'K': case '1': text = lowergrade_template(); break;
		case '2': text = grade2_template(); break;
		case '3': case '4': case '5': case '6': text = uppergrade_template(); break;
		default:
	}
	log(text);
	this.csv_file = create_file(this.csv_file);
	this.csv_file.open('w');
	this.csv_file.write(text);
	this.csv_file.close();
};

Package.prototype.get_lesson_titles = function(){	
	$.evalFile(itrs_root_path+'/nav/csv_maker_SPAN.js');
	this.lessons_info.forEach(function(lesson_info){	
		var lesson_component = new LessonComponent(lesson_info);
	});
};

Package.prototype.make_nav = function(){
	$.evalFile(itrs_root_path+'/nav/nav_maker_SPAN.js');
	datamap = new DataMap(this.csv_file, Navigation, '0');
	datamap.write_to_files();
};

Package.prototype.copy_itrs_pdfs = function(){
	$.evalFile(itrs_root_path+'/main/pdfs/pdfs.js');
	var self = this;
	var output_pdfs_folder = create_folder(output_folder+'/'+this.xcode+'/pdfs');
	output_pdfs_folder.burn();
	output_pdfs_folder = create_folder(output_folder+'/'+this.xcode+'/pdfs');
	var grade_folder = create_folder(output_pdfs_folder+'/grade'+this.grade.toLowerCase());
	var unit_folder = create_folder(grade_folder+'/unit'+this.unit);
	var overview_folder = create_folder(unit_folder+'/overview');
	var unit_resources_folder = create_folder(unit_folder+'/unit_resources');
	var week1_folder = create_folder(unit_folder+'/week1');
	var week2_folder = create_folder(unit_folder+'/week2');
	var week3_folder = create_folder(unit_folder+'/week3');
	var additional_resources_folder = create_folder(unit_folder+'/additional_resources');
	var grade = this.grade;
	var lower = true;
	if(grade.match(/[3456]/)) lower = false;
	var unit = this.unit;
	var volume = this.volume;
	var id = grade+unit;

	//overview and unit resources PDFs

	//grab the two CV pdfs not in the shell (one is by grade, the other is global)
	var pdf_assets_folder;
	pdf_assets_folder = Folder(projects_folder+'/BA2/itrs/assets/pdfs');
	var pdfFiles = pdf_assets_folder.getFiles();
	var ckaRegex = new RegExp('content_knowledge_alignment_span_g'+this.grade, 'i');
	var l = pdfFiles.length;
	for(var x = 0; x < l; x++)
	{
		var pdfFile = pdfFiles[x];
		if(!!pdfFile.name.match(/\.ds_store/i)){continue;}
		if(!!pdfFile.name.match(ckaRegex))
			pdfFile.copy(Folder(overview_folder+'/content_knowledge_alignment.pdf'));
		else if(!!pdfFile.name.match(/verticalprogression_span/))
			pdfFile.copy(Folder(overview_folder+'/vertical_progression.pdf'));
	}

	copy_pdf(1, overview_folder+'/welcome_to_benchmark_advance.pdf');
	copy_pdf(4, overview_folder+'/author_and_consultant_team.pdf'); //new

	//start combine
	var about_the_program_folder = create_folder(overview_folder+'/about_the_program');
	copy_pdf(5, about_the_program_folder+'/1.pdf');
	copy_pdf(6, about_the_program_folder+'/2.pdf');
	combine_pdfs(Folder(overview_folder+'/about_the_program')); //new
	//end combine

	copy_pdf(7, overview_folder+'/pacing_options.pdf');
	copy_pdf(8, overview_folder+'/digital_print_components.pdf');

	//unit opener is 7...shouldn't that be in this??? --> ah, but it is after all! see above

	copy_pdf(10, unit_resources_folder+'/strategies_skills.pdf');
	copy_pdf(11, unit_resources_folder+'/components_at_a_glance.pdf'); //this and the next should be flipped in the csv
	copy_pdf(12, unit_resources_folder+'/intervention_reteaching.pdf');
	//13 is observational strategies, omitted?
	copy_pdf(14, unit_resources_folder+'/guide_to_text_complexity.pdf');
	copy_pdf(15, unit_resources_folder+'/secl.pdf');
	copy_pdf(16, unit_resources_folder+'/vocabulary_development.pdf'); //new
	copy_pdf(17, unit_resources_folder+'/inquiry.pdf');
	copy_pdf(18, unit_resources_folder+'/language_objectives.pdf');

	//weekly resources PDFs

	copy_pdf(19, week1_folder+'/goals.pdf');
	// remove_first_page_of_pdf(week1_folder+'/goals.pdf');
	copy_pdf(20, week1_folder+'/planner.pdf');

	copy_pdf(21, week2_folder+'/goals.pdf');
	// remove_first_page_of_pdf(week2_folder+'/goals.pdf');
	copy_pdf(22, week2_folder+'/planner.pdf');

	copy_pdf(23, week3_folder+'/goals.pdf');
	// remove_first_page_of_pdf(week3_folder+'/goals.pdf');
	copy_pdf(24, week3_folder+'/planner.pdf');
	
	//additional resources PDFs

	var additional_materials_id;
	var assessment_count;
	var blm_count;
	var contrastive_analysis_count;
	if(lower)
	{
		additional_materials_id = 26;

		// if(!grade.match(/k/i)) 
		// {
		// 	copy_pdf(additional_materials_id, additional_resources_folder+'/instructional_routines_strategies.pdf');
		// 	// remove_first_page_of_pdf(additional_resources_folder+'/instructional_routines_strategies.pdf');
		// 	additional_materials_id++;
		// }
		copy_pdf(additional_materials_id, additional_resources_folder+'/instructional_routines_strategies.pdf');
		additional_materials_id++; //awkward but keeping this for easy reversal of this new rule that grade k gets this first one
		copy_pdf(additional_materials_id, additional_resources_folder+'/constructive_conversation.pdf');
		// if(!!grade.match(/k/i)) remove_first_page_of_pdf(additional_resources_folder+'/instructional_routines_strategies.pdf');
		copy_pdf(additional_materials_id+1, additional_resources_folder+'/independent_reading_program.pdf');
		copy_pdf(additional_materials_id+2, additional_resources_folder+'/recommended_trade_books.pdf');
		copy_pdf(additional_materials_id+3, additional_resources_folder+'/phonics_cumulative_assessments.pdf');
		if(!!grade.match(/2/)) 
		{
			copy_pdf(additional_materials_id+4, additional_resources_folder+'/answer_key.pdf');
			copy_pdf(additional_materials_id+5, additional_resources_folder+'/modeling_script.pdf');
			additional_materials_id += 2;
		}
		copy_pdf(additional_materials_id+4, additional_resources_folder+'/small_group_texts.pdf');
		copy_pdf(additional_materials_id+5, additional_resources_folder+'/guide_to_text_complexity.pdf'); //K-2 global issue
		copy_pdf(additional_materials_id+6, additional_resources_folder+'/access_equity.pdf');
		// remove_first_page_of_pdf(additional_resources_folder+'/access_equity.pdf');
		copy_pdf(additional_materials_id+7, additional_resources_folder+'/contrastive_analysis.pdf')
	}
	else
	{
		// additional_materials_id = 66;

		copy_pdf(26, additional_resources_folder+'/instructional_routines_strategies.pdf');
		copy_pdf(27, additional_resources_folder+'/constructive_conversation.pdf');
		copy_pdf(28, additional_resources_folder+'/reading_big_words.pdf');
		copy_pdf(29, additional_resources_folder+'/independent_reading_program.pdf');
		copy_pdf(30, additional_resources_folder+'/recommended_trade_books.pdf');
		copy_pdf(31, additional_resources_folder+'/answer_key.pdf');
		copy_pdf(32, additional_resources_folder+'/modeling_script.pdf');
		copy_pdf(33, additional_resources_folder+'/small_group_texts.pdf');
		copy_pdf(34, additional_resources_folder+'/guide_to_text_complexity.pdf');
		copy_pdf(35, additional_resources_folder+'/access_equity.pdf');
		copy_pdf(36, additional_resources_folder+'/contrastive_analysis.pdf');
	}

	close_application('Adobe Acrobat');

	function copy_pdf(number, path){
		// var pdf_file = File(input_pdfs_folder+'/g'+grade.toLowerCase()+'u'+unit+'/pdfs/'+number+'.pdf');
		var pdf_file = File(input_pdfs_folder+'/sp/adelante/unit'+unit+'/'+self.dmv+'/pdfs/'+number+'.pdf');	
		// log(pdf_file.fsName);		
		if(!File(path).exists){
			pdf_file.copy(path);
		}
	}
};

function combine_pdfs(folder){
	if(folder.getFiles().length > 0){
		use_applescript(folder);			
	}
	folder.burn();
}	

function split_pdfs(file, split_amount){	
	var folder = file.parent;
	var filename = file.name.replace(/\.\w+$/, '');
	var text = '';
	text += 'tell application "Adobe Acrobat"\r';
	text += '\tclose all docs saving no\r';
	text += '\topen "'+file.fsName+'"\r';
	text += '\tset activedoc to document 1\r';
	text += '\tset filepath to "'+folder.fsName+'"\r';
	text += '\tset filename to "'+filename.toString()+'"\r';
	text += '\tset page_index to 1\r';
	text += '\tset split_amount to '+split_amount.toString()+'\r';
	text += '\tset total_pages to count of pages of activedoc\r';
	text += '\tset loop_total to round (total_pages / split_amount)\r';
	text += '\tset x to 1\r';
	text += '\trepeat loop_total times\r';
	text += '\t\tmake new document\r';
	text += '\t\tset newdoc to document 2\r';
	text += '\t\tbring to front newdoc\r';
	text += '\t\tinsert pages newdoc after 0 from activedoc starting with page_index number of pages split_amount\r';
	text += '\t\tset pagecount to count of pages of newdoc\r';
	text += '\t\tdelete pages newdoc first pagecount last pagecount\r';
	text += '\t\tsave newdoc to filepath & "/" & filename & x & ".pdf"\r';
	text += '\t\tclose document 2\r';
	text += '\t\tset page_index to page_index + split_amount\r';
	text += '\t\tset x to x + 1\r';
	text += '\tend repeat\r';
	text += 'end tell	\r';
	app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}

function use_applescript(folder){	
	var text = '';
	text += 'set pdf_files to {}\r';		
	var files = folder.getFiles('*.pdf');
	files.sort(function(a, b){
		return parseInt(a.name.replace(/_/g, '')) > parseInt(b.name.replace(/_/g, ''));
	});
	var l = files.length;
	for(var x = 0; x < l; x++){
		var file = files[x];
		text += 'set file'+x+' to "Macintosh HD'+folder.fsName.replace(/\//g, ':')+':'+file.name+'" as alias\r';
		text += 'set end of pdf_files to file'+x+'\r';
	}	
	text += 'tell application "Adobe Acrobat"\r';
	text += '	set x to 1\r';
	text += '	repeat with pdf_file in pdf_files	\r';
	text += '		open pdf_file with invisible\r';
	text += '		if (x = 1) then\r';
	text += '			set Master_Doc to document 1\r';
	text += '		else\r';
	text += '			set pdf_doc to document 2\r';
	text += '			set PageCount to count of pages of Master_Doc\r';
	text += '			set pdf_doc_PageCount to count of pages of pdf_doc\r';
	text += '			insert pages Master_Doc after PageCount from pdf_doc starting with 1 number of pages pdf_doc_PageCount\r';
	text += '			close pdf_doc without saving\r';
	text += '		end if\r';
	text += '		set x to x + 1\r';
	text += '	end repeat\r';
	text += '	save document 1 to file "Macintosh HD'+folder.parent.fsName.replace(/\//g, ':')+':'+folder.name+'.pdf"\r';
	text += '	close document 1\r';	
	text += 'end tell\r';	
	app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}


// Package.prototype.make_overview_pages = function(){	
// 	$.evalFile(itrs_root_path+'/main/overview/inquiry_project.js');
// 	this.inquiry_project = new InquiryProject();
// 	close_all_terminal_windows();

// 	$.evalFile(itrs_root_path+'/main/overview/inquiry_project.js');
// 	this.inquiry_project = new InquiryProject();
// 	close_all_terminal_windows();

// 	$.evalFile(itrs_root_path+'/main/overview/inquiry_project.js');
// 	this.inquiry_project = new InquiryProject();
// 	close_all_terminal_windows();
// };

// Package.prototype.make_unit_resources_pages = function(){
// 	$.evalFile(itrs_root_path+'/main/unit_resources/inquiry_project.js');
// 	this.inquiry_project = new InquiryProject();
// 	close_all_terminal_windows();
// }

// Package.prototype.make_secrl_pages = function(){		
// 	$.evalFile(itrs_root_path+'/main/unit_resources/secrl.js');
// 	this.secrl  = new SECRL();
// 	close_all_terminal_windows();
// };

// Package.prototype.make_about_pages = function(type, week){	
// 	$.evalFile(itrs_root_path+'/main/week/about.js');
// 	var self = this;
// 	self.lessons_info.forEach(function(lesson_info){
// 		current_lesson_type = lesson_info.type;
// 		if(!type || type == 'all' || lesson_info.type == type && lesson_info.total > 0){
// 			var about = new About(week);
// 		}
// 	});
// 	close_all_terminal_windows();
// };

// Package.prototype.make_guide_to_sr_pages = function(week){	
// 	week = !!week ? week : false;
// 	if(!!current_package.grade.match(/[k12]/i)){ 
// 		$.evalFile(itrs_root_path+'/main/week/guide_to_shared_reading.js');
// 		var self = this;
// 		self.lessons_info.forEach(function(lesson_info){
// 			current_lesson_type = lesson_info.type;		
// 			if(lesson_info.type == 'sr')  { self.sr_about  = new GuideToSharedReading(week); }		
// 		});
// 		close_all_terminal_windows();
// 	}
// };

// Package.prototype.routines = function(lesson){	
// 	$.evalFile(itrs_root_path+'/launch/routines.js');	
// 	new Routines(lesson);
// };

// Package.prototype.mini_lessons = function(lesson){	
// 	$.evalFile(itrs_root_path+'/launch/mini-lessons.js');	
// 	new MiniLessons(lesson);
// };

Package.prototype.make_lesson_pages = function(week, day){	
	$.evalFile(itrs_root_path+'/main/week/lessons_span.js');	
	var self = this;
	new LessonComponent(week, day);	
};

Package.prototype.make_unit_opener_page = function()
{
	log('filling in unit opener html...');
	var self = this;

	//open target html file
	var html_file;
	this.package_folder = Folder(output_folder+separator+current_package.xcode);
	// alert(this.package_folder+'/html/grade'+this.grade+'/unit'+this.unit+'/unit_resources/unit_opener.html');
	html_file = File(this.package_folder+'/html/grade'+this.grade+'/unit'+this.unit+'/unit_resources/unit_opener.html');
	html_file.encoding = 'UTF-8';
	html_file.lineFeed = 'Unix';
	html_file.open('r');
	var text = html_file.read();
	// alert(text);
	html_file.close();

	//set up new main tag
	var main = '';
	main += '</nav>\r';
	main += '<div class="clearfix"></div>\r';
	main += '<main>\r';

	//get the stuff that goes in the main tag from edgar's files
	var opener_file;
	opener_file = File(projects_folder+'/BA2/itrs/assets/unitopeners_span/grade'+this.grade.toUpperCase()+'unit'+this.unit+'.txt');
	// opener_file = File.openDialog('sddgsdf');
	opener_file.encoding = 'UTF-8';
	opener_file.lineFeed = 'Unix';
	opener_file.open('r');
	var opener_text = opener_file.read();
	opener_file.close();

	//add that and close new main tag
	main += opener_text;
	main += '</main>\r';

	//replace default main tag and save
	text = text.replace(/<\/nav>(.|\r|\n)*<\/main>/, main);  
	html_file.open('w');
	html_file.write(text);
	html_file.close();
	log('...done!');
};

// Package.prototype.make_srff_pages = function(){	
// 	if(!!current_package.grade.match(/[3456]/i)){ 
// 		$.evalFile(itrs_root_path+'/main/additional_resources/shared_reading_for_fluency.js');
// 		(3).forEvery(function(x){
// 			var week = x+1;
// 			var filename = current_package.ycode+'_TRS_SR_G'+current_package.grade+'_U'+current_package.unit+'_L'+week;
// 			new SharedReadingForFluency(filename, week);
// 		});
// 		close_all_terminal_windows();
// 	}
// };

Package.prototype.stack = function(){		
	var files = this.product_folder.getFiles();
	var l = files.length;
	for(var x = 0; x < l; x++){
		var file = files[x];
		if(!file.type){ file.copy(Folder(dev_folder+'/content/'+file.name)); }else{ file.copy(dev_folder+'/content/'+file.name); }
	}
};

Package.prototype.finalize = function(){	
	this.package_folder = create_folder(packages_folder+'/'+region+'/u'+current_package.unit+'/'+this.xcode);
	this.product_folder.copy(this.package_folder);
	this.package_assets();
	this.place_library_thumbnail();
	this.create_json();
};

Package.prototype.package_assets = function(){
	var assets_folder;
	if(this.unit == 0){
		assets_folder = Folder(projects_folder+'/BA2/itrs/assets/launch');
	}else{
		assets_folder = Folder(projects_folder+'/BA2/itrs/assets/itrs');
	}
	var files = assets_folder.getFiles();
	var l = files.length;
	for(var x = 0; x < l; x++){
		var file = files[x];
		if(!!file.name.match(/\.ds_store/i)){continue;}
		file.copy(Folder(this.package_folder+'/'+file.name));
	}
};

Package.prototype.place_library_thumbnail = function(){	
	var library_thumbnails_folder = Folder(projects_folder+'/BA2/itrs/thumbnails/itrs');
	var files = library_thumbnails_folder.getFiles();
	var l = files.length;	
	for(var x = 0; x < l; x++){
		var file = files[x];
		if(!!file.name.match(/\.ds_store/i)){continue;}
		if(!!file.name.match(RegExp(this.xcode, 'i'))){		//this line was "this.dmv" but that was the old, this is the new
			file.copy(File(this.package_folder+'/bu_library_thumbnail_'+this.xcode));
		}
	}
};

Package.prototype.create_json = function(){
  var text = '';
  var opener = '';
  opener = 'html/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/unit_opener.html';
  text += '{\r';
  text += '\t"launchPage":"'+opener+'",\r';
  text += '\t"title":"Grade '+this.grade+', Unit '+this.unit+'",\r';
  text += '\t"vcode":"'+this.xcode+'",\r';

  //eplanner stuff
  text += '\t"pageIds": {\r';
  eplanner_toc_json_content = eplanner_toc_json_content.slice(0, -1); //get rid of the last comma
  eplanner_toc_json_content = eplanner_toc_json_content.replace(/\,/g, ',\r');
  eplanner_toc_json_content += '\r';
  text += eplanner_toc_json_content;
  text += '\t}\r';
  eplanner_toc_json_content = '';
  
  text += '}\r';
  var json_file = create_file(this.package_folder+'/toc.json');
  json_file.lineFeed = 'Unix';
  json_file.encoding = 'UTF-8';
  json_file.open('w');
  json_file.write(text);
  json_file.close();
};


(function(){		
	notifications_off();
	set_image_export_preferences();		
	make_packages();			
})();

end_log();