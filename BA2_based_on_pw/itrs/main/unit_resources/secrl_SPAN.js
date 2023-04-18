//  ____                  _                          _      ____                _           _      __        __         _        _                 
// | __ )  ___ _ __   ___| |__  _ __ ___   __ _ _ __| | __ |  _ \ ___  __ _  __| | ___ _ __( )___  \ \      / /__  _ __| | _____| |__   ___  _ __  
// |  _ \ / _ \ '_ \ / __| '_ \| '_ ` _ \ / _` | '__| |/ / | |_) / _ \/ _` |/ _` |/ _ \ '__|// __|  \ \ /\ / / _ \| '__| |/ / __| '_ \ / _ \| '_ \ 
// | |_) |  __/ | | | (__| | | | | | | | | (_| | |  |   <  |  _ <  __/ (_| | (_| |  __/ |    \__ \   \ V  V / (_) | |  |   <\__ \ | | | (_) | |_) |
// |____/ \___|_| |_|\___|_| |_|_| |_| |_|\__,_|_|  |_|\_\ |_| \_\___|\__,_|\__,_|\___|_|    |___/    \_/\_/ \___/|_|  |_|\_\___/_| |_|\___/| .__/ 
//                                                                                                                                          |_|  

//CREATOR JY
//CREATED 2018-12-19
//UPDATED 2019-01-09
//VERSION 1.0

$.evalFile(itrs_root_path+'/library/components_SPAN.js');

function SECRL(){	
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;	
	
	current_package_folder = Folder(output_folder +'/'+this.xcode);
	current_images_path = '/images/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/secrl';
	
	images_list = [];
	figures_id = 0;

	this.indd_filename = current_package.ycode+'_TRS_SECRL'+'_G'+current_package.grade+'_U'+current_package.unit;				
	this.indd_filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, false, false, false, 'SECR');
	open_file(this.indd_filename);
	document_settings();

	this.header = 	new Header(new Zone(document.pages.firstItem(), [0, 0, 120, 500]), 				'header');
	this.week1 = 		new Week(new Zone(document.pages.firstItem(), 	[260, 50, 700, 600]),			'week1');
	this.week2 = 		new Week(new Zone(document.pages.lastItem(), 		[30, 740, 300, 1350]), 		'week2');
	this.week3 = 		new Week(new Zone(document.pages.lastItem(), 		[380, 740, 700, 1350]), 	'week3');

	this.html = this.toHTML();

	this.filepath = output_folder+'/'+this.xcode+'/html/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/secrl.html';	
	this.publish();
	close_all_documents();
}

SECRL.prototype.publish = function(){
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

SECRL.prototype.toHTML = function(){
	var text = '';
	text += this.header.html;
	text += this.week1.html;
	text += this.week2.html;
	text += this.week3.html;	
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
	this.html = this.toHTML();	
}

Header.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += process_paragraphs(this, this.header_textFrame.paragraphs.everyItem().getElements());	
	text += process_paragraphs(this, this.intro_textFrame.paragraphs.everyItem().getElements());
	
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
	this.figures = new Figures(zone);	
	this.html = this.toHTML();	
}

Week.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += '<div class="row">\r';	
	text += '<div class="col-12 col-md-4">\r';
	text += this.figures.toHTML();
	text += '</div>\r';
	text += '<div class="col-12 col-md-8">\r';
	
	text += '<h3 class="week_header">Semana '+this.label.replace(/week/i, '')+'</h3> \r';
	text += this.process_textFrames().trim();

	text += '</div>\r';	
	text += '</div>\r';

	text += '</section>\r';
	return text;
};

Week.prototype.process_textFrames = function(){
	var text = '';
	var self = this;
	this.textFrames.forEach(function(textFrame){
		text += process_paragraphs(self, textFrame.paragraphs.everyItem().getElements());
	});
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
  var has_color = !color.match(/white|black|paper/ig) ? true : false;

	switch(true){
		case has_table: 
			text += build_tables(tables); break;
		case h2: text += '<h2>'+contents+'</h2>\r'; break;
		case h3 && has_color: text += '<h3 class="week'+this.label.replace(/week/i, '')+'-clr">'+contents+'</h3>\r'; break;
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
    if(figure.width < 5 && figure.height < 5 || figure.width > 400){ return; }
    if(!!figure.full_image_name.match(/logo|check/ig)){ return; }    
    figures.push(figure);
  });
  return figures;
};
