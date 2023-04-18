// BA2!                                                                                                                                 |_|                                                                                                                                              |_|  

//CREATOR JY, ALTERED BY EM
//CREATED 2019-02-19
//UPDATED 2019-11-21
//VERSION 2.0

$.evalFile(itrs_root_path+'/library/components.js');

function LessonComponent(week, day, type){			
	this.lowergrade = !!current_package.grade.match(/[k12]/i) ? true : false;
	week = !!week ? week : false;
	day = !!day ? day : false;
	type = !!type ? type : false;	
	this.pour(week, day, type);
}

LessonComponent.prototype.pour = function(week_value, day_value, type){
	var self = this;
	// var total_weeks = 3;
	// var total_days = 5;
	var week = week_value;
	var filename = '';

	if(!!current_package.grade.match(/[k12]/i))
	{
		// for(var week = 1; week <= 3; week++)
		// {
			//uhhh sorry I just need to make sure this works properly and this is the surest way (plus, you can easily skip a file this way!)

			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false);
			self.pour_file(filename);
			if(week==1) filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 5, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 4, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 5, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 4, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 4, false);
			self.pour_file(filename);
		// }
	}
	else
	{
		// for(var week = 1; week <= 3; week++)
		// {
			for(var lesson_number = 1; lesson_number <= (week==1?14:13); lesson_number++)
			{
				filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, false, lesson_number, false);
				self.pour_file(filename);
			}
		// }
	}

	// total_weeks.forEvery(function(week){
	// 	current_week = week+1;		
	// 	total_days.forEvery(function(day){
	// 		current_day = day+1;	
	// 		if(self.lowergrade){
	// 			filename = current_package.ycode+'_TRS_V'+current_package.volume+'_G'+current_package.grade+'U'+current_package.unit+'_W'+current_week+'D'+current_day+'_Lessons';
	// 		}else{
	// 			filename = current_package.ycode+'_TRS_V'+current_package.volume+'_G'+current_package.grade+'_U'+current_package.unit+'_W'+current_week+'_L'+current_day;
	// 		}			
			
	// 		if(!!week_value){
	// 			if(week_value == current_week){
	// 				// try
	// 				// {
	// 					if(!!day_value){ if(day_value == current_day){ self.pour_file(filename); } }else{ self.pour_file(filename); }
	// 			}
	// 		}else{
	// 			// try
	// 			// {
	// 				self.pour_file(filename, type);
	// 			// }
	// 			// catch(e)
	// 			// {
	// 			// 	if(self.lowergrade) filename = current_package.ycode+'_TRS_G'+current_package.grade+'U'+current_package.unit+'_W'+current_week+'D'+current_day+'_Lessons';
	// 			// 	else filename = current_package.ycode+'_TRS_G'+current_package.grade+'U'+current_package.unit+'_W'+current_week+'D'+current_day;
	// 			// 	try
	// 			// 	{
	// 			// 		self.pour_file(filename, type);
	// 			// 	}
	// 			// 	catch(e)
	// 			// 	{
	// 			// 		if(filename.match(/_Lessons/)) filename = filename.replace(/_Lessons/, '');
	// 			// 		else filename += '_Lessons';
	// 			// 		try
	// 			// 		{
	// 			// 			self.pour_file(filename, type);
	// 			// 		}
	// 			// 		catch(e)
	// 			// 		{
	// 			// 			filename = filename.replace(/TRS/, 'TRS_V' + current_package.volume);
	// 			// 			self.pour_file(filename, type); //this is getting ridiculous
	// 			// 		}
	// 			// 	}
	// 			// }
	// 		}
	// 	});
	// });
};

LessonComponent.prototype.pour_file = function(filename, type){	//type isn't passed
	open_file(filename);
	document_settings();
	group_pageItems_in_images();
	var lesson_textFrame = get_textFrame_by_label(document, 'lesson');
	if(lesson_textFrame.isValid && (type == 'wg' || !type)){
		var wg_lesson = new Lesson('Whole Group'); //regular lesson, we'll just...call it whole group for ease of things
	}
	var sg_textFrame = get_textFrame_by_label(document, 'sg_lesson');
	if(sg_textFrame.isValid && (type == 'sg' || !type)){
		var sg_lesson = new Lesson('Small Group');
	}	
	// close_document();
};

function Lesson(type){
	this.type = type;
	current_lesson_type = type;	
	current_package_folder = Folder(output_folder +'/'+current_package.xcode);
	var relative_path = '/grade'+current_package.grade.toLowerCase()+'/unit'+current_package.unit+'/week'+current_week+'/day'+current_day+'/'+this.type.replace(/\s/g, '_').toLowerCase();
	current_images_path = '/images'+relative_path;
	images_list = [];
	figures_id = 0;
	this.htmlpath = output_folder+'/'+current_package.xcode+'/html'+relative_path+'.html';
	this.lowergrade = !!current_package.grade.match(/[k12]/i) ? true : false;
	this.header;
	this.materials;
	this.standards;
	this.charts = [];
	this.generics = [];
	this.build();
	this.html = this.toHTML();
	// if(!collect_headers){
		this.publish();
	// }
	close_all_terminal_windows();
}

Lesson.prototype.build = function(){
	var self = this;	
	var textFrame;
	switch(this.type){
		case 'Whole Group': 
			textFrame = get_textFrame_by_label(document, 'lesson');			
		break;
		case 'Small Group': 
			textFrame = get_textFrame_by_label(document, 'sg_lesson');						
		break;
		default:
	}	

	var textFrames = get_story_textFrames(textFrame);						
	textFrames.forEach(function(textFrame){
		self.process_textFrame(textFrame);
	});
	//other textFrames (sidebars)
	for(var pg = 0; pg < document.pages.length; pg++)
	{
		textFrames = getTextFrames(document.pages[pg]);
	  	for(var t = 0; t < textFrames.length; t++)
	  	{
			if(textFrames[t] instanceof TextFrame)
			{
				if(!!textFrames[t].paragraphs.length > 0)
				{
					// if(!!textFrames[t].paragraphs[0].contents.match(/(Additional\sMaterials|PD\sTip|Learning\sTarget)/i))
					if(!textFrames[t].label.match(/Block|Lesson/i))
					{
						self.process_textFrame(textFrames[t]);
					}
				}
			}
		}
	}
	if(region != 'national'){
		this.standards = new Standards();
	}	
};

Lesson.prototype.process_textFrame = function(textFrame){
	log('textFrame.paragraphs[0].contents: ' + textFrame.paragraphs[0].contents);
	if(textFrame.paragraphs.length == 0){return;}
	var width = textFrame.geometricBounds[3]-textFrame.geometricBounds[1];
	var paragraphs = textFrame.paragraphs.everyItem().getElements();
	var firstParagraph = paragraphs[0];
	var label = textFrame.label;	
	var p_style = firstParagraph.appliedParagraphStyle.name;
	var a_head = !!p_style.match(/lesson_a-hd/ig) ? true : false;
	var materials = label == 'materials' ? true : false;	
	// alert(materials);
	var tables = textFrame.tables.everyItem().getElements();
	var has_table = tables.length > 0 ? true : false;
	var sg_lesson = label == 'lesson' ? true : false;
	var sg_aside = width <= 250 ? true : false;

	switch(true){
		case a_head: this.header = new Header(textFrame, this.type); break;		
		case materials: this.materials = new Materials(textFrame); break;
		case has_table: this.charts.push(new Chart(textFrame)); break;		
		case sg_lesson: this.generics.push(new Generic(textFrame, 'lesson')); break;
		case sg_aside: this.generics.push(new Generic(textFrame, 'aside')); break;
		default:
			this.generics.push(new Generic(textFrame, '')); break;		
	}
};


function get_story_textFrames(textFrame){
	var textFrames = [];
	var start = textFrame.startTextFrame;
	var end = textFrame.endTextFrame;
	var current_textFrame = start;
	while(current_textFrame != end){
		textFrames.push(current_textFrame);
		current_textFrame = current_textFrame.nextTextFrame;
	}
	textFrames.push(current_textFrame);
	return textFrames;
}

Lesson.prototype.toHTML = function(){
	var text = '';
	var classnames = [];
	classnames.push((this.lowergrade ? 'lower_grade' : 'upper_grade'));
	classnames.push(this.type.replace(/\s/ig, '_').toLowerCase());
	text += '<section class="'+classnames.join(' ')+'">\r';
	var wholegroup = this.type == 'Whole Group' ? true : false;
	var smallgroup = this.type == 'Small Group' ? true : false;
	switch(true){
		case wholegroup: 
		case smallgroup && !this.lowergrade:
			text += this.header.html;
			text += this.materials.html;
			this.charts.forEach(function(chart){
				text += chart.html;
			});
			// if(smallgroup){ text += '<p><span class="bpw-star-icon"></span> Appropriate for below- and on-level instruction&mdash;optional, could also be completed during Whole Group.</p>\r'; }
			if(region != 'national'){ text += this.standards.html; }						
		break;	
		case smallgroup: 
			text += this.header.html;
			this.charts.forEach(function(chart){
				text += chart.html;
			});
			this.generics.forEach(function(generic){
				text += generic.html;
			});
		break;
		default:
	}
	text += '</section>\r';
	return text;
}

Lesson.prototype.publish = function(){
	var html_file = File(this.htmlpath);	
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

function Header(textFrame, type){
	log('Header: ' + type);
	this.name = 'Header';
	current_section = this;
	this.type = type;	
	this.lowergrade = !!current_package.grade.match(/[k12]/i) ? true : false;
	this.textFrame = textFrame;	
	if(region != 'national'){
		this.indicators = get_textFrame_by_label(textFrame.parentPage, 'indicators');		
	}
	this.html = this.toHTML();
}

Header.prototype.process_paragraph = function(paragraph){
	var text = '';
	var contents = paragraph.contents;
	var paragraphStyle = paragraph.appliedParagraphStyle.name;
	var a_head = !!paragraphStyle.match(/lesson_a-hd/ig) ? true : false;
	var header_contents = a_head ? contents.trim().replace(/(\(\s*\d.*?min\.\s*\))/i, '<small>$1</small>').replace(/(\d)\s/, '$1&nbsp;') : '';
	switch(true){
		case a_head: text += '<h2>'+header_contents+'</h2><!-- end header -->\r'; break;
		default: text += contents+'\r';
	}
	return text;
};

Header.prototype.toHTML = function(){
	var text = '';
	var header = process_paragraphs(this, this.textFrame.paragraphs.everyItem().getElements());
	var wholegroup = this.type == 'Whole Group' ? true : false;
	var smallgroup = this.type == 'Small Group' ? true : false;
	switch(true){
		case wholegroup:
		case smallgroup && !this.lowergrade:
			text += '<h3 class="'+this.type.replace(/\s/ig, '_').toLowerCase()+'_title">'+this.type+'</h3>\r';
			text += header;
		break;
		case smallgroup && this.lowergrade:
			text += header.replace(/<h2/ig, '<h3 class="small_group_title"><span').replace(/<small/i, '</span><small').replace(/\)?<\/h2>/i, '</h3>');
		break;
	}
	
	if(region != 'national' && !!this.indicators){
		text += '<p class="standards">'+this.indicators.contents.trim()+'</p>\r';
	}		
	if(!!collect_headers){
		timer_off = true;
		log('type: '+current_lesson_type+'\t'+current_package.grade+current_package.unit+'\t'+header.applyHTMLCode() );
		timer_off = false;
	}
	return text;
};

function Materials(textFrame){
	log('Materials');
	this.name = 'Materials';
	current_section = this;	
	this.title = 'Additional Materials';	
	this.textFrame = textFrame;
	this.html = this.toHTML();
}

function has_epocketchart(rectangles){
	var result = false;
	rectangles.forEach(function(rectangle){
		var name = rectangle.allGraphics[0].itemLink.name;
		if(name.match(/pocketchart/i)){
			result = true;
		}
	});
	return result;
}

Materials.prototype.toHTML = function(){
	var self = this;
	var rectangles = this.textFrame.rectangles.everyItem().getElements();
	var has_rectangle = rectangles.length > 1 ? true : false;
	var epocketchart = has_epocketchart(rectangles);
	var columns = epocketchart ? 4 : 6;

	var text = '';
	text += '<section class="materials">\r';

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
  var textColumns = this.textFrame.textColumns.everyItem().getElements();
  textColumns.forEach(function(textColumn){
  	text += '<div class="col-12 col-sm-12 col-md-'+columns+'">\r';
  	text += process_paragraphs(self, textColumn.paragraphs.everyItem().getElements());
  	text += '</div>\r';
  });

  if(epocketchart){
	  text += '<div class="col-12 col-sm-12 col-md-4">\r';
	  text += '<figure class="epocketchart">\r';
	  
	  text += '<a href="javascript" data-code="X52634" data-type="epocketchart">\r';
	  text += '<img src="/images/shared/epocketchart.png">\r';
	  text += '</a>\r';

	  text += '</figure>\r';
	  text += '</div>\r';
	}
  text += '</div>\r';
	
  text += '</div>\r';
  text += '</div>\r';
  text += '</div>\r';
  text += '</div>\r';

	text += '</section>\r';
	return text;
};	

Materials.prototype.process_paragraph = function(paragraph){	
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
  var h3 = !!fontStyle.match(/medium\scondensed/ig) ? true : false;
  var b_head = ( !!paragraphStyle.match(/b-hd/ig) && !!condensed_contents.match(/studentobjectives/ig) ) ? true : false;  

	switch(true){
		case has_table: log('table detected'); break;
		case b_head: break;
		case h3: text += '<h3>'+contents.trim()+'</h3>\r'; break;		
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 
	return text;
};

function Chart(textFrame){
	log('Chart');
	this.name = 'Chart';
	current_section = this;
	this.textFrame = textFrame;
	this.html = this.toHTML();
}

Chart.prototype.toHTML = function(){
	var text = '';
	text += '<section class="charts">\r';
	log(this.textFrame.paragraphs[0].contents);
	text += process_paragraphs(this, this.textFrame.paragraphs.everyItem().getElements());
	text += '</section>\r';
	return text;
};

Chart.prototype.process_paragraph = function(paragraph){	
	var text = '';
	var contents = paragraph.contents;
	log('paragraph contents: ' + contents);
	var condensed_contents = contents.replace(/\W/g, '');
	var listType = paragraph.bulletsAndNumberingListType;
  var appliedFont = paragraph.appliedFont.name;
  var fontStyle = paragraph.fontStyle;
  var paragraphStyle = paragraph.appliedParagraphStyle.name;
  var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
  var color = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].fillColor.name : paragraph.words[0].fillColor.name) : paragraph.fillColor.name;
  var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;
  var tables = paragraph.tables.everyItem().getElements();
  var has_table = tables.length > 0 ? true : false;
  var groups = paragraph.groups.everyItem().getElements();
  var has_group = groups.length > 0 ? true : false;
  var header = !!fontStyle.match(/bold/ig) ? true : false;  
  var h3 = ( header && !!paragraphStyle.match(/(lesson_(head_)?[abc]-hd|lesson_min)/ig) ) ? true : false;  
  var header_contents = h3 ? contents.trim().replace(/(\(\s*\d.*?min\.\s*\))/i, '<small>$1</small>').replace(/(\d)\s/, '$1&nbsp;') : '';  
  var rectangles = paragraph.rectangles.everyItem().getElements();
  var has_rectangle = rectangles.length > 0 ? true : false;
  var msl_icon = h3 && has_rectangle ? ( !!rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;
  var textFrames = paragraph.textFrames.everyItem().getElements();
  var has_textFrame = textFrames.length > 0 ? true : false;
  var has_el_icon = has_textFrame ? ( !!textFrames[0].contents.match(/^el/i) ? true : false ) : false;
  var has_icon = has_el_icon || msl_icon ? true : false;
  var ovals = paragraph.ovals.everyItem().getElements();
  var has_oval = ovals.length > 0 ? true : false;
  var polygons = paragraph.polygons.everyItem().getElements();
  var has_polygon = polygons.length > 0 ? true : false;

	switch(true){
		case has_table: text += build_tables(this, tables); break;		
		case h3: text += '<h3>'+( has_icon ? process_header_characters(paragraph).replace(/(\(\s*\d.*?min\.\s*\))/i, '<small>$1</small>') : header_contents).replace(/(optional)/i, '<span class="optional">$1</span>')+( (has_oval || has_polygon) ? '<span class="bpw-star-icon"></span>' : '' )+'</h3><!-- end header -->\r'; break;
		case header: text += '<h4>'+contents.trim()+'</h4>\r'; break;
		case has_textFrame: 
			textFrames.forEach(function(textFrame){				
				var chart = new Chart(textFrame);
				text += chart.html;
			});
		break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};


Chart.prototype.build_table = function(table){	
  var text = '';       
  if(table.cells.length > 4){
  	return build_table(table);
  }
  text += '<section class="phonics_table container-fluid">\r';
  var rows = table.rows.everyItem().getElements();
  rows.forEach(function(row){
    if(row){      
      text += '<div class="row">\r';       
      var cells = row.cells.everyItem().getElements();
      cells.forEach(function(cell){
        if(cell){                   
          var color = cell.fillColor.name;
          var color_name = false;
          var has_border_color = false;
          var border_color = '';

          var cell_style = get_cell_style(cell);
          cell_style = (cell_style ? cell_style : '');          
          var columns;

          switch(cells.length){
          	case 1: columns = 12; break;
          	case 2: columns = 6; break;
          	case 3: columns = 4; break;
          	case 4: columns = 3; break;          	
          	default:
          }
 
          text += '<div class="cell col-12 col-sm-12 col-md-'+columns+'" '+cell_style+'>\r';
          text += process_paragraphs(cell, cell.paragraphs.everyItem().getElements());          
          text += '</div>\r<!--end cell-->';
        }
      });       
      text += '</div>\r<!--end row-->';
    } 
  });  
  text += '</section>\r'; 

  text = heidisong_postprocess(text);
  return text;
};

Cell.prototype.process_paragraph = function(paragraph){
  var text = '';      
  var contents = paragraph.contents; 
  var has_tabs = !!contents.match(/\u0009/) ? true : false;  
  var condensed_contents = contents.replace(/\W/g, '');
  var listType = paragraph.bulletsAndNumberingListType;
  var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;
  var appliedFont = paragraph.appliedFont.name;
  var fontStyle = paragraph.fontStyle;
  var paragraphStyle = paragraph.appliedParagraphStyle.name;
  var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;  
  var textFrames = paragraph.textFrames.everyItem().getElements();
  var has_textFrame = textFrames.length > 0 ? true : false;
  var groups = paragraph.groups.everyItem().getElements();
  var has_group = groups.length > 0 ? true : false;
  var has_rectangle = paragraph.rectangles.length > 0 ? true : false;
  var has_oval = paragraph.ovals.length > 0 ? true : false;  
  var empty = !!paragraph.contents.match(/\w/) ? false : true;    
  var justification = set_align_attribute(paragraph.justification);  
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u0009|\u00af/g) ? true : false;   
  var caption = !!paragraphStyle.match(/caption/) ? true : false;
  var rectangles = paragraph.rectangles.everyItem().getElements();
  var has_rectangle = rectangles.length > 0 ? true : false;
  var c_head = !!paragraphStyle.match(/c-hd/i) ? true : false;
  var msl_icon = c_head && has_rectangle ? ( !!rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;  
  var check = !!condensed_contents.match(/^checktosee/i) ? true : false;
  var pageItems = paragraph.pageItems.everyItem().getElements();
  var has_pageItem = pageItems.length > 0 ? true : false;

  switch(true){
  	// case has_tabs: text += '<tr><td'+(caption ? ' class="caption"' : '')+(justification != 'left' ? ' align="'+justification+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</td></tr>\r'; break;
  	case check && has_pageItem: text += '<p'+(caption ? ' class="caption"' : '')+(justification != 'left' ? ' align="'+justification+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'<span class="bpw-sg-icon"></span>'+'</p>\r'; break;
  	case has_rectangle && empty: text += process_rectangles(paragraph.rectangles); break;
  	case c_head: text += '<h4'+(justification != 'left' ? ' align="'+justification+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+( msl_icon ? '<div class="bpw-msl-icon"></div>' : '' )+'</h4>'; break;
  	case has_textFrame: text += process_phonics_table_textFrames(textFrames); break;
    case has_group: text += process_phonics_table_groups(groups); break;    
    case has_rectangle && !empty:
    	text += process_rectangles(paragraph.rectangles);
    	text += '<p'+(caption ? ' class="caption"' : '')+(justification != 'left' ? ' align="'+justification+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
    break;
    case empty: break;     
    case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/, '')+'</li>\r'; break;     
    default: text += '<p'+(caption ? ' class="caption"' : '')+(justification != 'left' ? ' align="'+justification+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
  }
   
  text = text.replace(/&(m|n)d;/ig, '&$1dash;');  
  return text;
};

function process_phonics_table_textFrames(textFrames){
	var text = '';
	textFrames.forEach(function(textFrame){
		var geobounds = textFrame.geometricBounds;
		var width = geobounds[3]-geobounds[1];
		var classname = '';
		switch(true){
			case textFrame.textFrames.length > 0: classname = 'epocketchart'; break;
			case !!textFrame.paragraphs[0].appliedParagraphStyle.name.match(/bubble/i): classname = 'bubbles'; break;
		}

		var figure = new Figure(textFrame);		
		text += figure.toHTML(classname);
	});
	return text;
}

function process_phonics_table_groups(groups){
	var text = '';
	groups.forEach(function(group){
		var rectangles = group.rectangles.everyItem().getElements();
		rectangles.sort(grid_sort);
		var textFrames = group.textFrames.everyItem().getElements();
		textFrames.sort(grid_sort);
		var has_textFrame = textFrames.length > 0 ? true : false;
		var has_rectangle = rectangles.length > 0 ? true : false;
    var has_image = has_rectangle ? (group.rectangles[0].allGraphics.length > 0 ? true : false) : false;
    var has_group = group.groups.length > 0 ? true : false;    

    switch(true){    	
      case has_group:
      	var figure = new Figure(group);
      	if(group.textFrames.length > 0){
      		figure.captions = group.textFrames.everyItem().getElements();
      	}
      	text += figure.toHTML();
      break;
      case has_image && has_rectangle && has_textFrame:
      	if(rectangles.length == textFrames.length){
	      	rectangles.forEach(function(rectangle, x){	      		
	      		var figure = new Figure(rectangle);
	      		figure.captions = [textFrames[x]];	      		
		      	text += figure.toHTML();
	      	});
      	}else{
      		var figure = new Figure(group);
    			text += figure.toHTML();	
      	}
      break; 
      default:
      	var figure = new Figure(group);
    		text += figure.toHTML();
    } 
    if(!!has_image){
			if(group.rectangles[0].allGraphics[0].itemLink.name.match(/heidisong/i)){
				log(group.rectangles[0].allGraphics[0].itemLink.name);
				log(text);
				log(has_group);
				log(has_image && has_rectangle && has_textFrame);
			}
		}
	});


	return text;
}
 



function Generic(textFrame, type){	
	log('Generic: ' + type);
	this.name = 'Generic';
	current_section = this;	
	this.textFrame = textFrame;	
	this.type = type;
	this.html = this.toHTML();
}
  
Generic.prototype.toHTML = function(){
	var text = '';
	if(this.type == 'lesson'){		
		text += '<section class="lesson">\r';	 
		text += '<div class="row">\r';
		text += '<div class="col-12 col-md-7 col-lg-7 col-xl-8">\r';
	}else if(this.type == 'aside'){
		text += '<aside class="col-12 col-md-5 col-lg-5 col-xl-4">\r';
	}else{
		text += '<section class="row">\r';
		text += '<div class="col-12">\r';
	}

	text += process_paragraphs(this, this.textFrame.paragraphs.everyItem().getElements());
	text = text.replace(/<\/h3><!-- end header -->(\r|\n)<h3>/g, ' ');
 	
 	if(this.type == 'lesson'){
		text += '</div>\r';
	}else if(this.type == 'aside'){
		text += '</aside>\r';
		text += '</div>\r';
		text += '</section>\r';
	}else{
		text += '</div>\r'; 
		text += '</section>\r';
	}

	text = heidisong_postprocess(text);
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
  var textFrames = paragraph.textFrames.everyItem().getElements();
  var has_textFrame = textFrames.length > 0 ? true : false;
  var rectangles = paragraph.rectangles.everyItem().getElements();
  var has_rectangle = rectangles.length > 0 ? true : false;
  var header = !!fontStyle.match(/bold/ig) ? true : false;  
  var h3 = !!paragraphStyle.match(/b-hd/ig) ? true : false;
  var header_contents = h3 ? contents.trim().replace(/(\(\s*\d.*?min\.\s*\))/, '<small>$1</small>').replace(/(\d)\s/, '$1&nbsp;') : '';
  var left_indent = (!bullet && paragraph.leftIndent > 0) ? true : false;  
  var divider = !!paragraphStyle.match(/divider/ig) ? true : false;  
  var caption = !!paragraphStyle.match(/caption/i) ? true : false;
  var classname = '';
  classname = caption ? classname+' caption' : classname;
  classname = left_indent ? classname+' left_indent' : classname;  
  var empty = !contents.match(/\w/) ? true : false;
  
	switch(true){
		case has_table: log('table detected'); break;
		case h3: text += ( divider ? '<hr>' : '' )+'<h3'+(classname ? ' class="'+classname+'"' : '')+'>'+process_header_characters(paragraph).replace(/(\(\s*\d.*?min\.\s*\))/i, '<small>$1</small>')+'</h3><!-- end header -->\r'; break;		
		case header: text += '<h4>'+contents.trim()+'</h4>\r'; break;
		case has_textFrame: text += process_phonics_table_textFrames(textFrames); break;
    case has_group: text += process_phonics_table_groups(groups); break;
    case has_rectangle: text += process_rectangles(paragraph.rectangles); break;
    case empty: break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;						
		default: text += '<p'+(classname ? ' class="'+classname+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}

	return text;
};
 
function Standards(){	
	log('Standards');
	this.name = 'Standards';
	current_section = this;
	this.standards = get_textFrame_by_paragraphStyle(document, 'standards|language');
	this.html = this.toHTML();
	
}

Standards.prototype.toHTML = function(){
	var text = '';
	if(!!this.standards){
		text += '<section class="standards">\r';
		text += process_paragraphs(this, this.standards.paragraphs.everyItem().getElements());
		text += '</section>\r';
	}	
	return text;
};

Standards.prototype.process_paragraph = function(paragraph){		
	var text = ''; 
	var contents = paragraph.contents;	
  var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;  
	text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	return text;
};

function heidisong_postprocess(text){
	var heidisong_caption = !!text.match(/<figure class="heidisong(.|\n|\r)*?<\/p>/ig) ? text.match(/<figure class="heidisong(.|\n|\r)*?<\/p>/ig) : false;
  if(!!heidisong_caption){
  	if(heidisong_caption.length > 1){
  		warning_message('heidisong_caption.length: '+heidisong_caption.length);	
  	}
	  heidisong_caption = heidisong_caption[0];
	  log('Heidisong: '+current_package.grade+current_package.unit+current_week+current_day+'_'+current_lesson_type+'_'+heidisong_caption.match(/<p(.|\n|\r)*?<\/p>/ig));
	  text = text.replace(/(<figure class="heidisong(.|\n|\r)*?)<\/figure>(\n|\r)(<p(.|\n|\r)*?<\/p>)/g, '$1<figcaption>$4</figcaption></figure>');
  }
  return text;
}