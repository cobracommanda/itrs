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

$.evalFile(itrs_root_path+'/library/components.js');

function InquiryProject(){	
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;	
	
	current_package_folder = Folder(output_folder +'/'+this.xcode);
	current_images_path = '/images/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/research_and_inquiry_project';
	
	images_list = [];
	figures_id = 0;

	// this.indd_filename = current_package.ycode+'_TRS_Inquiry'+'_G'+current_package.grade+'_U'+current_package.unit+'_W1';
	this.indd_filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, false, false, false, 'Inquiry');				
	open_file(this.indd_filename);
	document_settings();	

	this.header = 							new Header(new Zone(document.pages.firstItem(), [0, 0, 110, 650]), 							'header');
	this.goals_and_materials = 	new GoalsAndMaterials(new Zone(document.pages.firstItem(), [140, 0, 300, 650]), 'goals_and_materials', 'Metas de aprendizaje');

	this.pacing_chart = 				new PacingChart(new Zone(document.pages.firstItem(), 	[350, 0, 700, 650]),			'pacing_chart');
	this.introduce = 						new Introduce(new Zone(document.pages.lastItem(), 		[0, 700, 500, 1350]), 		'introduce');	
	if(region == 'texas'){
		this.standards = 						new Standards(new Zone(document.pages.lastItem(), 		[600, 1100, 700, 1350]), 	'standards');	
	}
	this.html = this.toHTML();

	this.filepath = output_folder+'/'+this.xcode+'/html/grade'+this.grade.toLowerCase()+'/unit'+this.unit+'/unit_resources/research_and_inquiry_project.html';	
	this.publish();
	close_all_documents();
}


InquiryProject.prototype.publish = function(){
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

InquiryProject.prototype.toHTML = function(){
	var text = ''; 
	text += this.header.html;
	text += this.goals_and_materials.html;
	text += this.pacing_chart.html;
	text += this.introduce.html;
	if(region == 'texas'){
		text += this.standards.html; 
	}
	return text;
};


function Header(zone, label){
	this.name = 'Header';
	current_section = this;
	this.zone = zone;
	this.label = label;	
	this.textFrames = zone.textFrames;
	this.header_textFrame = zone.textFrames[0];
	if(region == 'texas'){
		this.standards = zone.textFrames[1];	
	}
	this.html = this.toHTML();	
}

Header.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += process_paragraphs(this, this.header_textFrame.paragraphs.everyItem().getElements()).replace(/(Proyecto de investigación y análisis:)/ig, '<small>$1</small><br>');
	if(region == 'texas'){
		text += '<p class="standards">'+this.standards.contents.trim()+'</p>\r';	
	}
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
  var h2 = header && pointSize > 25 ? true : false;

	switch(true){
		case has_table: 
			text += build_tables(tables); break;
		case h2: text += '<h2>'+contents+'</h2>\r'; break;		
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};

function GoalsAndMaterials(zone, label, title){
	this.zone = zone;	
	this.label = label;
	this.title = title;
	this.goals = zone.textFrames[0];
	this.materials = zone.textFrames[1];
	this.figures = new Figures(zone);
	this.html = this.toHTML();
}

GoalsAndMaterials.prototype.toHTML = function(){
	var text = '';
	text += '<section class="goals_and_materials'+(this.title == 'Metas de aprendizaje' ? ' learning_goals' : '')+'">\r';

	text += '<div class="panel-group" id="accordion">\r';
  text += '<div class="panel panel-default">\r';
  text += '<div class="panel-heading">\r';
  text += '<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\r';
  text += '<h4 class="panel-title">\r';  
  text += this.title+'\r';
  text += '</h4>\r';
  text += '</a>\r';
  text += '</div>\r';
  text += '<div id="collapseOne" class="panel-collapse collapse show">\r';
  text += '<div class="panel-body">\r';
	
	text += '<div class="row">\r';
	text += '<div class="col-12 col-md-6">\r';
  text += process_paragraphs(this, this.goals.paragraphs.everyItem().getElements());
  text += '</div>\r';
  text += '<div class="col-12 col-md-6">\r';
	text += process_paragraphs(this, this.materials.paragraphs.everyItem().getElements());
	if(this.figures.length > 0){
		text += this.figures.toHTML();
	}
	text += '</div>\r';
	text += '</div>\r';

  text += '</div>\r';
  text += '</div>\r';
  text += '</div>\r';
  text += '</div>\r';

	text += '</section>\r';
	return text;
};	

GoalsAndMaterials.prototype.process_paragraph = function(paragraph){	
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
  var h3 = !!fontStyle.match(/bold/ig) ? true : false;
  var goals_and_materials_header = ( h3 && !!condensed_contents.match(/metasdeaprendizaje|puntosdeenseanza/ig) ) ? true : false;    

	switch(true){
		case has_table: log('table detected'); break;
		case goals_and_materials_header: break;
		case h3: text += '<h3>'+contents.trim()+'</h3>\r'; break;		
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;			
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 
	return text;
};


function PacingChart(zone, label){
	this.name = 'PacingChart';
	current_section = this;
	this.zone = zone;
	this.label = label;	
	this.pacing_chart = zone.textFrames[0];
	group_pageItems(zone.page, zone.pageItems);
	var zone = new Zone(zone.page, zone.geometricBounds);
	this.figures = new Figures(zone);
	this.html = this.toHTML();	
}

PacingChart.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += '<div class="row">\r';	
	
	text += '<div class="col-12 col-md-7 col-lg-7 col-xl-8">\r';	
	text += process_paragraphs(this, this.pacing_chart.paragraphs.everyItem().getElements());

	text += '</div>\r';	
	text += '<div class="col-12 col-md-5 col-lg-5 col-xl-4">\r';
	text += this.figures.toHTML();
	text += '</div>\r';

	text += '</div>\r';

	text += '</section>\r';
	return text;
};

PacingChart.prototype.process_paragraph = function(paragraph){
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
			text += this.build_tables(tables); break;
		case h2: text += '<h2>'+contents+'</h2>\r'; break;
		case h3 && has_color: text += '<h3 class="week'+this.label.replace(/week/i, '')+'-clr">'+contents+'</h3>\r'; break;
		case h3: text += '<h3>'+contents+'</h3>\r'; break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};

PacingChart.prototype.build_tables = function(tables){
  var text = '';
  var l = tables.length;
  for(var x = 0; x < l; x++){
    var table = tables[x];    
    
    switch(true){      
      default: text += this.build_table(table);
    }
  }
  return text;
};

PacingChart.prototype.build_table = function(table){
  var text = '';     
  var self = this;
  var rows = table.rows.everyItem().getElements();
  text += '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\r';
  var table_headers = [];
  rows.forEach(function(row, x){
  	var cells = row.cells.everyItem().getElements();
  	if(x == 0){
  		cells.forEach(function(cell, y){
  			if(y > 0){ table_headers.push(cell); }
  		});
  	}
  	if(x > 0){
  		cells.forEach(function(cell, y){
  			if(y == 0){
					text += '<div class="panel panel-default">\r';
				  text += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse'+x+'" aria-expanded="true" aria-controls="collapse'+x+'" class="">\r';
				  text += '<div class="week'+x+'-bg-clr header" role="tab" id="heading'+x+'">\r';
				  text += '<h4 class="panel-title">\r';
				  text += cell.contents;
				  text += '</h4>\r';
				  text += '</div>\r';
				  text += '</a>\r';
				  text += '<div id="collapse'+x+'" class="panel-collapse collapse'+(x == 1 ? ' show' : '')+'" role="tabpanel" aria-labelledby="heading'+x+'" aria-expanded="true" style="">\r';
				  text += '<div class="panel-body">\r';
				  text += '<table>\r';
				  text += '<tbody>\r';
				  text += '<tr>\r';
				  table_headers.forEach(function(table_header){
				  	text += '<th>'+table_header.contents+'</th>\r';	
				  });
				  text += '</tr>\r';
				  text += '<tr>\r';
  			}else{
  				text += '<td>\r';
				  text += process_paragraphs(self, cell.paragraphs.everyItem().getElements()).replace(/(Benchmark Universe.)/g, '$1&nbsp;<div class="bu_globe_logo"></div>');
				  text += '</td>\r';
  			}
  		});
  		text += '</tr>\r';
		  text += '</tbody>\r';
		  text += '</table>\r';
		  text += '</div>\r';
		  text += '</div>\r';
		  text += '</div>\r';
  	}
  });
  text += '</div>\r';
 
  return text;
}

function Introduce(zone, label){
	this.name = 'Introduce';
	current_section = this;
	this.zone = zone;
	this.label = label;	
	this.textFrames = zone.textFrames;
	this.introduce_textFrame = zone.textFrames[0];
	this.group_textFrame = zone.textFrames[1];
	this.figures = new Figures(zone);	
	this.html = this.toHTML();	
}

Introduce.prototype.toHTML = function(){
	var text = '';
	text += '<section class="'+this.label+'">\r';
	
	text += '<div class="row">\r';	
	
	text += '<div class="col-12 col-md-7 col-lg-7 col-xl-8">\r';	
	text += process_paragraphs(this, this.introduce_textFrame.paragraphs.everyItem().getElements());

	text += '</div>\r';	
	text += '<div class="col-12 col-md-5 col-lg-5 col-xl-4">\r';
	
	text += '<section class="group">\r';
	text += process_paragraphs(this, this.group_textFrame.paragraphs.everyItem().getElements());
	text += this.figures.toHTML();
	text += '</section>\r';

	text += '</div>\r';

	text += '</div>\r';

	text += '</section>\r';
	return text;
};
 

Introduce.prototype.process_paragraph = function(paragraph){
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
  var rectangles = paragraph.rectangles;
  var has_rectangle = rectangles.length > 0 ? true : false;
  var explore_icon = has_rectangle ? true : false;

	switch(true){
		case has_table: 
			text += build_tables(tables); break;		
		case h3: text += '<h3>'+(explore_icon ? '<span class="brw-explore-icon"></span>' : '')+contents+'</h3>\r'; break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};
 

function Standards(){	
	this.standards = get_textFrame_by_label(document, 'standards');
	this.html = this.toHTML();
}

Standards.prototype.toHTML = function(){
	var text = '';
	text += '<section class="standards">\r';
	text += process_paragraphs(this, this.standards.paragraphs.everyItem().getElements());
	text += '</section>\r';
	return text;
};

Standards.prototype.process_paragraph = function(paragraph){		
	var text = ''; 
	var contents = paragraph.contents;	
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;  
	text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	return text;
};
