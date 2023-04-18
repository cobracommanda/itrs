//  ____                  _                          _      ____                _           _      __        __         _        _                 
// | __ )  ___ _ __   ___| |__  _ __ ___   __ _ _ __| | __ |  _ \ ___  __ _  __| | ___ _ __( )___  \ \      / /__  _ __| | _____| |__   ___  _ __  
// |  _ \ / _ \ '_ \ / __| '_ \| '_ ` _ \ / _` | '__| |/ / | |_) / _ \/ _` |/ _` |/ _ \ '__|// __|  \ \ /\ / / _ \| '__| |/ / __| '_ \ / _ \| '_ \ 
// | |_) |  __/ | | | (__| | | | | | | | | (_| | |  |   <  |  _ <  __/ (_| | (_| |  __/ |    \__ \   \ V  V / (_) | |  |   <\__ \ | | | (_) | |_) |
// |____/ \___|_| |_|\___|_| |_|_| |_| |_|\__,_|_|  |_|\_\ |_| \_\___|\__,_|\__,_|\___|_|    |___/    \_/\_/ \___/|_|  |_|\_\___/_| |_|\___/| .__/ 
//                                                                                                                                          |_|  

//CREATOR JY
//CREATED 2018-12-18
//UPDATED 2019-01-17
//VERSION 1.0

$.evalFile(itrs_root_path+'/library/components.js');

function GuideToTextComplexity(){
	if(!!current_package.grade.match(/k|1/i)){
		new GuideToTextComplexityLowerGrade();
	}else{
		new GuideToTextComplexityUpperGrade();
	}
}

function GuideToTextComplexityLowerGrade(){	
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;
	this.type = current_lesson_type;
	
	current_package_folder = Folder(output_folder +'/'+this.xcode);
	current_images_path = '/images/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/guide_to_text_complexity';
	
	images_list = [];
	figures_id = 0;

	this.indd_filename = current_package.ycode+'_TRS_TextComplexity_'+current_lesson_type.toUpperCase()+'_G'+current_package.grade+'_U'+current_package.unit;				
	open_file(this.indd_filename);
	document_settings();	
	document.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
	document.textFrames.everyItem().fit(FitOptions.FRAME_TO_CONTENT);

	var page1 = document.pages.firstItem();
	var page2 = document.pages.lastItem();

	var p1_zones = get_week_zones(page1);
	var p2_zones = get_week_zones(page2);

	this.header = 	new Header(new Zone(page1, 	[0, 0, 120, 500]), 	'header');
	this.week1 = 		new Week(new Zone(page1, 		p1_zones[0]),				'week1');
	this.week2 = 		new Week(new Zone(page2, 		p2_zones[0]), 			'week2');
	this.week3 = 		new Week(new Zone(page2, 		p2_zones[1]), 			'week3');

	this.html = this.toHTML();

	this.filepath = output_folder+'/'+this.xcode+'/html/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/guide_to_text_complexity.html';	
	this.publish();
	close_all_documents();
}

GuideToTextComplexityLowerGrade.prototype.publish = function(){
	var html_file = File(this.filepath);	
	log(this.filepath);
  if(html_file.exists){
    html_file.encoding = 'UTF-8';  
    html_file.open('r');
    var text = html_file.read();  
    html_file.close();

    text = text.replace(/<main>(.|\n)*<\/main>/, '<main>'+this.html+'</main>' );

    html_file.open('w');
    html_file.write(text);
    html_file.close();
    log(html_file+' written!');
  }
};

GuideToTextComplexityLowerGrade.prototype.toHTML = function(){
	var text = ''; 
	text += this.header.html;
	text += this.week1.html;
	text += this.week2.html;
	text += this.week3.html; 
	return text;
};


function GuideToTextComplexityUpperGrade(){	
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;
	this.type = current_lesson_type;
	
	current_package_folder = Folder(output_folder +'/'+this.xcode);
	current_images_path = '/images/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/guide_to_text_complexity';
	
	images_list = [];
	figures_id = 0;

	this.indd_filename = current_package.ycode+'_TRS_TextComplexity_'+current_lesson_type.toUpperCase()+'_G'+current_package.grade+'_U'+current_package.unit;				
	open_file(this.indd_filename);
	document_settings();	
	document.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
	document.textFrames.everyItem().fit(FitOptions.FRAME_TO_CONTENT);

	var page1 = document.pages.firstItem();
	var page2 = document.pages.lastItem();

	var p1_zones = get_week_zones(page1);
	var p2_zones = get_week_zones(page2);

	this.header = 		new Header(new Zone(page1, [0, 0, 120, 660]), 'header');	
	this.week1_1 = 		new Week(new Zone(page1, 		p1_zones[0]),			'week1');
	this.week1_2 = 		new Week(new Zone(page1, 		p1_zones[1]),			'week1');
	this.week2_1 = 		new Week(new Zone(page2, 		p2_zones[0]), 		'week2');
	this.week2_2 = 		new Week(new Zone(page2, 		p2_zones[1]), 		'week2');
	this.week3_1 = 		new Week(new Zone(page2, 		p2_zones[2]), 		'week3');

	this.html = this.toHTML();

	this.filepath = output_folder+'/'+this.xcode+'/html/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/guide_to_text_complexity.html';	
	this.publish();
	close_all_documents();
}

function get_week_zones(page){
	var zones = [];
	var summary_textFrames = get_textFrames_by_paragraphStyle(page, 'Summary_(Text|Hd)');
	var header_textFrames = get_textFrames_by_paragraphStyle(page, 'C-Hd');
	header_textFrames.forEach(function(textFrame, x){
		zones.push([Math.round(textFrame.geometricBounds[0]), 0, Math.round(summary_textFrames[x].geometricBounds[2]), 660]);
	}); 
	return zones;
}

GuideToTextComplexityUpperGrade.prototype.publish = function(){
	var html_file = File(this.filepath);	
	log(this.filepath);
  if(html_file.exists){
    html_file.encoding = 'UTF-8';  
    html_file.open('r');
    var text = html_file.read();  
    html_file.close();

    text = text.replace(/<main>(.|\n)*<\/main>/, '<main>'+this.html+'</main>' );

    html_file.open('w');
    html_file.write(text);
    html_file.close();
    log(html_file+' written!');
  }
};

GuideToTextComplexityUpperGrade.prototype.toHTML = function(){
	var text = ''; 
	text += this.header.html;
	text += this.week1_1.html;
	text += this.week1_2.html;
	text += this.week2_1.html;
	text += this.week2_2.html;
	text += this.week3_1.html;
	return text;
};

function Header(zone, label){
	this.name = 'Header';			
	current_section = this;
	this.zone = zone;
	this.label = label;	
	this.textFrames = zone.textFrames;
	this.header_textFrame = zone.textFrames[0];
	this.intro_textFrame = zone.textFrames[1];
	this.figures = new Figures(zone);	
	this.html = this.toHTML();	
}

Header.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += '<div class="row">\r';
	if(this.figures.length > 0){
		text += '<div class="col-12">\r';
		text += process_paragraphs(this, this.header_textFrame.paragraphs.everyItem().getElements());	
		text += '</div>\r';
		text += '<div class="col-8">\r';
		text += process_paragraphs(this, this.intro_textFrame.paragraphs.everyItem().getElements());
		text += '</div>\r';
		text += '<div class="col-4">\r';
		text += this.figures.toHTML();
		text += '</div>\r';
	}else{
		text += '<div class="col-12">\r';
		text += process_paragraphs(this, this.header_textFrame.paragraphs.everyItem().getElements());	
		text += process_paragraphs(this, this.intro_textFrame.paragraphs.everyItem().getElements());
		text += '</div>\r';
	}
	text += '</row>\r';
	text += '</section>\r';
	return text;
};

Header.prototype.process_paragraph = function(paragraph){
	var text = '';
	var contents = paragraph.contents;
	var condensed_contents = contents.replace(/\W/g, '');
	var listType = paragraph.bulletsAndNumberingListType;
  var appliedFont = paragraph.appliedFont.name;
  var fontStyle = paragraph.fontStyle;
  var paragraphStyle = paragraph.appliedParagraphStyle.name;
  var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
  var color = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].fillColor.name : paragraph.words[0].fillColor.name) : paragraph.fillColor.name;
  var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;
  var tables = paragraph.tables;
  var has_table = tables.length > 0 ? true : false;
  var groups = paragraph.groups.everyItem().getElements();
  var has_group = groups.length > 0 ? true : false;
  var header = !!fontStyle.match(/light/ig) ? true : false;  
  var h2 = header && pointSize > 30 ? true : false;

	switch(true){
		case has_table: 
			text += build_tables(tables); break;
		case h2: text += '<h2>'+contents+'</h2>\r'; break;		
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};


function Week(zone, label){
	this.name = 'Week';		
	current_section = this;
	this.zone = zone;
	this.label = label;	
	this.textFrames = zone.textFrames;
	this.textFrames.sort(vertical_sort);
	this.header_textFrame = this.textFrames[0];
	this.lexile_textFrame = this.textFrames[1];
	this.table_textFrame = this.textFrames[2];
	this.summary_textFrame = this.textFrames[3];
	var pageItems = select_rectangles(zone.page, zone.geometricBounds);
	group_pageItems(zone.page, pageItems);
	var fz = new Zone(zone.page, zone.geometricBounds);	
	this.figures = new Figures(fz);	
	this.html = this.toHTML();
}

Week.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += '<div class="row">\r';
	text += '<div class="col-12">\r';
	text += '<h3 class="week_header">Week '+this.label.replace(/week/i, '')+'</h3> \r';
	text += process_paragraphs(this, this.header_textFrame.paragraphs.everyItem().getElements()).trim();	
	text += '</div>\r';
	text += '<div class="col-12 col-md-4 col-lg-3">\r';
	text += this.figures.toHTML();
	text += '</div>\r';
	text += '<div class="col-12 col-md-8 col-lg-9">\r';
	text += process_paragraphs(this, this.lexile_textFrame.paragraphs.everyItem().getElements());
	text += process_paragraphs(this, this.table_textFrame.paragraphs.everyItem().getElements());
	text += '</div>\r';
	if(!!current_package.grade.match(/k|1/i)){
		text += '<div class="col-12 col-md-11 col-lg-10 col-xl-9">\r';
		text += process_paragraphs(this, this.summary_textFrame.paragraphs.everyItem().getElements());
		text += '</div>\r';
	}
	text += '</div>\r';

	text += '</section>\r';
	return text;
};

Week.prototype.process_paragraph = function(paragraph){
	var text = '';
	var contents = paragraph.contents;
	var condensed_contents = contents.replace(/\W/g, '');
	var listType = paragraph.bulletsAndNumberingListType;
  var appliedFont = paragraph.appliedFont.name;
  var fontStyle = paragraph.fontStyle;
  var paragraphStyle = paragraph.appliedParagraphStyle.name;
  var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
  var color = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].fillColor.name : paragraph.words[0].fillColor.name) : paragraph.fillColor.name;
  var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;
  var tables = paragraph.tables;
  var has_table = tables.length > 0 ? true : false;
  var groups = paragraph.groups.everyItem().getElements();
  var has_group = groups.length > 0 ? true : false;
  var header = !!fontStyle.match(/bold/ig) ? true : false;  
  var h3 = (header && pointSize >= 13) ? true : false;
  var h2 = header && pointSize > 30 ? true : false;

	switch(true){
		case has_table: 
			text += build_tables(tables); break;
		case h2: text += '<h2>'+contents+'</h2>\r'; break;
		case h3: text += '<h3>'+contents+'</h3>\r'; break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};


Figures.prototype.get_figures = function(){
  var figures = [];
  var self = this;
  var images = this.zone.images;
  images.forEach(function(image, x){    
    var figure = new Figure(image);
    if(figure.width < 5 && figure.height < 5 || figure.width > 400 || figure.height > 400 ){ return; }
    if(!!figure.full_image_name.match(/logo|check/ig)){ return; }
    if(!current_package.grade.match(/k|1/i)){
    	figure.get_captions();
    }
    figures.push(figure);
  });
  return figures;
};
