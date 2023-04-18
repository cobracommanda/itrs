//  ____                  _                          _      ____                _           _      __        __         _        _                 
// | __ )  ___ _ __   ___| |__  _ __ ___   __ _ _ __| | __ |  _ \ ___  __ _  __| | ___ _ __( )___  \ \      / /__  _ __| | _____| |__   ___  _ __  
// |  _ \ / _ \ '_ \ / __| '_ \| '_ ` _ \ / _` | '__| |/ / | |_) / _ \/ _` |/ _` |/ _ \ '__|// __|  \ \ /\ / / _ \| '__| |/ / __| '_ \ / _ \| '_ \ 
// | |_) |  __/ | | | (__| | | | | | | | | (_| | |  |   <  |  _ <  __/ (_| | (_| |  __/ |    \__ \   \ V  V / (_) | |  |   <\__ \ | | | (_) | |_) |
// |____/ \___|_| |_|\___|_| |_|_| |_| |_|\__,_|_|  |_|\_\ |_| \_\___|\__,_|\__,_|\___|_|    |___/    \_/\_/ \___/|_|  |_|\_\___/_| |_|\___/| .__/ 
//                                                                                                                                          |_|  

//CREATOR JY
//CREATED 2018-01-03
//UPDATED 2019-01-14
//VERSION 1.0

$.evalFile(itrs_root_path+'/library/components.js');


function SharedReadingForFluency(filename, week){
	open_file(filename);
	document_settings();
	current_package_folder = Folder(output_folder +'/'+current_package.xcode);
	current_images_path = '/images/grade'+current_package.grade.toLowerCase()+'/unit'+current_package.unit+'/additional_resources/shared_reading_for_fluency_week'+week;
	
	images_list = [];
	figures_id = 0;
	this.spreads = document.spreads;
	if(this.spreads.length > 1){ warning_message('expected 1 spread but got '+this.spreads.length); }
	var page1 = this.spreads[0].pages.firstItem();
	var page2 = this.spreads[0].pages.lastItem();
	// var goals_zones = get_zones(page1, 'goals_A-Hd', 'materials_A-Hd');
	var whitebox = get_textFrame_by_label(page1, 'whitebox');	
	var goals_bounds = [whitebox.geometricBounds[0]+10, whitebox.geometricBounds[1]+10, whitebox.geometricBounds[2]-10, whitebox.geometricBounds[3]-10];
	this.header 								= new Header(page1);
	if(!collect_headers){
		this.goals_and_materials 	= new GoalsAndMaterials(new Zone(page1, goals_bounds), 'goals_and_materials', 'Metas de aprendizaje');
		this.lesson1 							= new Generic(page1, 'lesson');
		this.lesson2 							= new Generic(page2, 'lesson');		
		this.formative_assessment = new FormativeAssessment(page2);
		if(region == 'texas'){
			this.standards 					= new Standards();
		}
	}
	this.html = this.toHTML();
	this.filepath = output_folder+'/'+current_package.xcode+'/html/grade'+current_package.grade.toLowerCase()+'/unit'+current_package.unit+'/additional_resources/shared_reading_for_fluency_week'+week+'.html';	
	this.publish();
	close_document();
}

function get_zones(page, top_pstyle, bottom_pstyle){
	document.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
	var zones = [];
	var top_textFrames = get_textFrames_by_paragraphStyle(page, top_pstyle);
	var bottom_textFrames = get_textFrames_by_paragraphStyle(page, bottom_pstyle);
	top_textFrames.forEach(function(textFrame, x){
		zones.push([Math.round(textFrame.geometricBounds[0]), 0, Math.round(bottom_textFrames[x].geometricBounds[2]), 660]);
	});

	document.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
	return zones;
}


SharedReadingForFluency.prototype.publish = function(){
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

SharedReadingForFluency.prototype.toHTML = function(){
	var text = ''; 
	text += this.header.html;
	text += this.goals_and_materials.html;
	text += this.lesson1.html;
	text += this.lesson2.html;
	text += this.formative_assessment.html;
	if(region == 'texas'){
		text += this.standards.html; 
	}
	return text;
};


function Header(page){
	this.name = 'Header';	
	current_section = this;
	this.page = page;	
	this.head = get_textFrame_by_label(page, 'head');	
	if(region == 'texas'){
		this.indicators = get_textFrame_by_label(page, 'indicators');
	}
	this.html = this.toHTML();
}

Header.prototype.toHTML = function(){
	var text = '';
	var header = process_header_paragraphs(this.head.paragraphs.everyItem().getElements());
	text += '<h3 class="whole_group_title">Whole Group</h3>\r';
	text += '<h2>'+header+'</h2>\r';
	if(region == 'texas'){
		text += '<p class="standards">'+this.indicators.contents.trim()+'</p>\r';
	}		
	if(!!collect_headers){
		timer_off = true;
		log('type: '+current_lesson_type+'\t'+current_package.grade+current_package.unit+'\t'+( current_lesson_type == 'ira' ? '<em>'+header.applyHTMLCode()+'</em>' : '<strong>Day '+current_day+'</strong>: '+header.applyHTMLCode() ) );
		timer_off = false;
	}
	return text;
};

function GoalsAndMaterials(zone, label, title){
	this.name = 'GoalsAndMaterials';	
	current_section = this;
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
	text += '<section class="goals_and_materials'+(this.title == 'Learning Goals' ? ' learning_goals' : '')+'">\r';

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
	text += '<div class="col-12">\r';
  text += process_paragraphs(this, this.goals.paragraphs.everyItem().getElements());
  
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
  var goals_and_materials_header = ( h3 && !!condensed_contents.match(/learninggoals|teachingpoints/ig) ) ? true : false;    

	switch(true){
		case has_table: log('table detected'); break;
		case goals_and_materials_header: break;
		case h3: text += '<h3>'+contents.trim()+'</h3>\r'; break;						
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 
	return text;
};


function Generic(page, title){	
	this.name = 'Generic';	
	current_section = this;
	this.page = page;
	this.title = title;	
	this.textFrame = !!get_textFrame_with_header(page, title) ? get_textFrame_with_header(page, title) : get_textFrame_by_label(page, title);	
	if(!this.textFrame){ error_message('textFrame not found with title: '+title); }	
	this.textFrame.fit(FitOptions.FRAME_TO_CONTENT);
	var tfb = this.textFrame.geometricBounds;
	var geobounds = [tfb[0], tfb[3]+10, tfb[2], tfb[3]+210];
	var pageItems = select_rectangles(page, geobounds);
	group_pageItems(page, pageItems);
	var zone = new Zone(page, geobounds);
	this.figures = new Figures(zone);
	if(page.side == PageSideOptions.RIGHT_HAND){
		this.feedback = new Feedback();
	}
	this.html = this.toHTML();
}
	
Generic.prototype.toHTML = function(){
	var text = '';
	text += '<section class="row">\r';	 
	text += (this.figures.length > 0) ? '<div class="col-12 col-md-7 col-lg-7 col-xl-8">\r' : '<div class="col-12">\r';

	text += process_paragraphs(this, this.textFrame.paragraphs.everyItem().getElements());
	text = text.replace(/<\/h3><!-- end header -->(\r|\n)<h3>/g, ' ');
  
	text += '</div>\r';
	text += (this.figures.length > 0) ? '<aside class="col-12 col-md-5 col-lg-5 col-xl-4">\r' : '';
 

	text += this.figures.toHTML();

	if(!!this.feedback){
		text += this.feedback.html;
	}
		
	text += (this.figures.length > 0) ? '</aside>\r' : '';
	text += '</section>\r';


	return text;
};

Generic.prototype.process_paragraph = function(paragraph){	
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
  var h3 = (header && !!appliedFont.match(/rockwell/ig) && pointSize > 15 ) ? true : false;
  var seld_header = ( header && !!condensed_contents.match(/SupportingEnglishLanguageDevelopment/i) ) ? true : false;
  var share_and_reflect_header = (h3 && this.title == 'ShareAndReflect') ? true : false;
  var bridge_to_transfer_header = (h3 && this.title == 'BridgeToTransfer') ? true : false;
  var has_icon = paragraph.groups.length > 0 ? true : false;
  var look_for_icon = has_icon ? ( (paragraph.groups[0].textFrames.length > 0) ? ( !!paragraph.groups[0].textFrames[0].contents.match(/Lk(\r|\n)*Fors/i) ? true : false ) : false ) : false;  
  var header_contents = h3 ? contents.trim().replace(/(\(\s*\d.*?min\.\s*\))/, '<small>$1</small>').replace(/(\d)\s/, '$1&nbsp;') : '';
  var left_indent = (!bullet && paragraph.leftIndent > 0) ? true : false;

	switch(true){
		case has_table: log('table detected'); break;		
		case bridge_to_transfer_header: text += '<h3><span class="brw-bridge-icon"></span>'+header_contents+'</h3>\r'; break;
		case share_and_reflect_header: text += '<h3 class="whole_group_title">Whole Group</h3>\r<h3>'+header_contents+'</h3>\r'; break;
		case seld_header: text += '<h4 class="left_indent"><span class="brw-el-icon"></span>'+contents.trim()+'</h4>\r'; break;
		case h3: text += '<h3>'+header_contents+'</h3><!-- end header -->\r'; break;
		case header: text += '<h4>'+contents.trim()+'</h4>\r'; break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p'+( left_indent ? ' class="left_indent"' : '' )+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+(!!look_for_icon ? '<span class="brw-look-fors-icon"></span>' : '')+'</p>\r';
	}
 	
	return text;
};

function FormativeAssessment(page, label){
	this.name = 'FormativeAssessment';
	current_section = this;
	this.page = page;
	this.label = label;	
	this.assessment = get_textFrame_by_label(page, 'assessment');	
	this.notes = get_notes_textFrame(page);
	this.html = this.toHTML();
}

function get_notes_textFrame(page){
	var result = get_textFrame_with_header(page, 'makeobservationalnotes');	
	if(!result){ result = get_textFrame_by_paragraphStyle(page, 'assessment_note'); }		
	return result;
}

FormativeAssessment.prototype.toHTML = function(){
	var text = '';
	text += '<section class="formative_assessment">\r';
	text += '<div><h3><span class="brw-look-fors-icon"></span>Formative Assessment</h3></div>	\r';
	text += '<div class="row">\r';
	text += '<div class="col-12 col-lg-6">\r';

	text += process_paragraphs(this, this.assessment.textColumns[1].paragraphs.everyItem().getElements());

	text += '</div>\r';
	text += '<div class="col-12 col-lg-6">\r';

	text += process_paragraphs(this, this.assessment.textColumns[2].paragraphs.everyItem().getElements());

	text += '</div>\r';

	if(!!this.notes){
		text += '<div class="col-12 col-md-12 col-lg-6">\r';	
		text += '<p class="condensed">'+this.notes.contents.replace(/\u2013|\u2014|\u000A|\uFEFF/g)+'</p>\r';
		text += '</div>\r';
	}
	text += '</div>\r';
	text += '</section>\r';
	return text;
};

FormativeAssessment.prototype.process_paragraph = function(paragraph){		
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
	var h4 = !!fontStyle.match(/demi/ig) ? true : false;  

	switch(true){
		case has_table: log('table detected'); break;		
		case h4: text += '<h4>'+contents.trim()+'</h4>\r'; break;
		case bullet: text += '<li>'+(!!paragraphStyle.match(/assessment_checklist/i) ? '<span class="ballotbox"></span>' : '')+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;			
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 
	return text;
};

function Standards(){	
	this.name = 'Standards';	
	current_section = this;
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

function Feedback(){
	this.name = 'Feedback';		
	current_section = this;	
	this.feedback = get_textFrame_by_label(document, 'feedback');	
	if(!!this.feedback){
		this.captions = this.get_captions();
		this.html = this.toHTML();		
	}
}

Feedback.prototype.toHTML = function(){
	var text = '';
	var self = this;
	text += '<figure class="xl">\r';
	text += '<section class="feedback">\r';
	text += process_paragraphs(this, this.feedback.paragraphs.everyItem().getElements());
	text += '</section>\r';
	text += '<figcaption>\r';
	this.captions.forEach(function(caption){
		log(caption.contents);
		text += process_paragraphs(self, caption.paragraphs.everyItem().getElements());
	});
	text += '</figcaption>\r';
	text += '</figure>\r';
	return text;
};

Feedback.prototype.process_paragraph = function(paragraph){		
	var text = ''; 
	var contents = paragraph.contents;
	var condensed_contents = contents.replace(/\W/g, '');
	var listType = paragraph.bulletsAndNumberingListType;    
  var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;  

	switch(true){		
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
	
	return text;
};

Feedback.prototype.get_captions = function(){  
	var results = [];
  var self = this;  
  var page = this.feedback.parentPage;  
  var zone = new Zone(page, [self.feedback.geometricBounds[2], self.feedback.geometricBounds[1], self.feedback.geometricBounds[2]+15, self.feedback.geometricBounds[3]]);  
  log(zone.textFrames.length);
  zone.textFrames.forEach(function(textFrame){
    var left = Math.abs(textFrame.geometricBounds[1]-self.feedback.geometricBounds[1]);    
    var top = Math.abs(textFrame.geometricBounds[0]-self.feedback.geometricBounds[2]);    
    if(left < 30 && top < 30){
      results.push(textFrame); 
    }
  });
  log(results);
  return results;
};
