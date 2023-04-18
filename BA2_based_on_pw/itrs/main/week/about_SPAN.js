//  ____                  _                          _      ____                _           _      __        __         _        _                 
// | __ )  ___ _ __   ___| |__  _ __ ___   __ _ _ __| | __ |  _ \ ___  __ _  __| | ___ _ __( )___  \ \      / /__  _ __| | _____| |__   ___  _ __  
// |  _ \ / _ \ '_ \ / __| '_ \| '_ ` _ \ / _` | '__| |/ / | |_) / _ \/ _` |/ _` |/ _ \ '__|// __|  \ \ /\ / / _ \| '__| |/ / __| '_ \ / _ \| '_ \ 
// | |_) |  __/ | | | (__| | | | | | | | | (_| | |  |   <  |  _ <  __/ (_| | (_| |  __/ |    \__ \   \ V  V / (_) | |  |   <\__ \ | | | (_) | |_) |
// |____/ \___|_| |_|\___|_| |_|_| |_| |_|\__,_|_|  |_|\_\ |_| \_\___|\__,_|\__,_|\___|_|    |___/    \_/\_/ \___/|_|  |_|\_\___/_| |_|\___/| .__/ 
//                                                                                                                                          |_|  

//CREATOR JY
//CREATED 2018-12-12
//UPDATED 2019-01-17
//VERSION 1.0

$.evalFile(itrs_root_path+'/library/components_SPAN.js');

function About(week){
	var self = this;
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;
	this.type = current_lesson_type;

	(3).forEvery(function(number){
		if(!!week){
			if(week != (number+1)){ return; }
		}		
		current_week = number+1;
		current_package_folder = Folder(output_folder +'/'+self.xcode);
		current_images_path = '/images/grade'+self.grade.toLowerCase()+'/unit'+self.unit+'/week'+current_week+'/'+self.type+'/about';
		
		images_list = [];
		figures_id = 0;	
 
		// self.indd_filename1 = current_package.ycode+'_TRS_Tabs_G'+current_package.grade+'_U'+current_package.unit;
		self.indd_filename1 = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, false, false, false, 'Tabs');
		// self.indd_filename2 = current_package.ycode+'_TRS_Skills_'+self.type.toUpperCase()+'_G'+current_package.grade+'_U'+current_package.unit;	
		self.indd_filename2 = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, false, false, false, 'Skills_' + self.type);
	    if(!self.indd_filename2)
	    {
	      var longType = 'MiniLessons';
	      switch(self.type)
	      {
	        case 'ira': longType = 'ReadAloud'; break;
	        case 'sr': longType = 'SharedReading'; break;
	      }
	      self.indd_filename2 = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, false, false, false, 'Skills_' + longType);
	    }
		self.introduction = new Introduction(self.indd_filename1);
		self.skills_at_a_glance = new SkillsAtAGlance(self.indd_filename2);

		self.html = self.toHTML();	

		self.filepath = output_folder+'/'+self.xcode+'/html/grade'+self.grade.toLowerCase()+'/unit'+self.unit+'/week'+current_week+'/'+self.type+'/about.html';	
		self.publish();
	});	
	close_all_documents();
}

About.prototype.publish = function(){
	var html_file = File(this.filepath);
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

About.prototype.toHTML = function(){
	var text = '';
	text += this.introduction.html;
	text += this.skills_at_a_glance.html;
	return text;
};
 

function Introduction(filename){	
	this.name = 'Introduction';
	current_section = this;
	open_file(filename);
	document_settings();
	this.page1_index;
	this.page2_index;
	this.title;
	switch(true){
		case current_lesson_type == 'ira': this.page1_index = 0; this.page2_index = 1; this.title = 'Lecturasenvozalta'; break;
		case current_lesson_type == 'sr' && !!current_package.grade.match(/[k12]/i): this.page1_index = 2; this.page2_index = 3; this.title = 'Lecturascompartidas'; break;
		case current_lesson_type == 'rml' && !!current_package.grade.match(/[k12]/i): this.page1_index = 4; this.page2_index = 5; this.title = 'Minileccionesdelectura'; break;		
		case current_lesson_type == 'rml' && !!current_package.grade.match(/[345]/): this.page1_index = 2; this.page2_index = 3; this.title = 'Minileccionesdelectura'; break;
		default: warning_message(current_lesson_type +' not found');
	}
	this.pour();
	this.html = this.toHTML();	
}

Introduction.prototype.pour = function(){	
	var page1 = document.pages[this.page1_index];
	var page2 = document.pages[this.page2_index];
  
  var header_zone = new Zone(page1, [0, 60, 100, 500]);
  this.header = header_zone.textFrames[0];
	this.intro_text = new Generic(new Zone(page2, [60, 100, 200, 300]));				
	var aside = new Zone(page2, [0, 520, 400, 600]);
	var textFrame = aside.textFrames[0];
	this.quote_frame = new QuoteFrame(textFrame);	
	this.captions = ['Week 1', 'Week 2', 'Week 3'];

	switch(current_lesson_type){
		case 'ira': 						
			this.figures = new Figures(new Zone(page1, [0, 0, 700, 600]));
		break;
		case 'sr':			
			this.figures = new Figures(new Zone(page1, [240, 60, 520, 140]));
		break;
		case 'rml':
			this.figures = new Figures(new Zone(page1, [0, 0, 700, 600]));
		break;
		default: warning_message(current_lesson_type +' not found');
	}
};

Introduction.prototype.toHTML = function(){
	var text = '';
	
	if(current_lesson_type != 'sr' && !!current_package.grade.match(/k|1/i)){
		text += '<section>\r';
		text += '<h2>'+this.header.contents+'</h2>\r';
		
		text += (this.figures.length > 1) ? this.figures.toHTML(this.figures.length, this.captions) : this.figures.toHTML();
		
		text += '</section>\r';
	}

	text += '<section class="row">\r';
	text += '<div class="col-12 col-md-7">\r';
	text += this.intro_text.html;
	text += '</div>\r';
	text += '<aside class="col-12 col-md-5">\r';
	if(current_lesson_type == 'sr' || !current_package.grade.match(/k|1/i)){		
		text += this.figures.toHTML();
	}
	text += this.quote_frame.html;
	text += '</aside>\r';
	text += '</section>\r';
	return text;
};

Figures.prototype.get_figures = function(captions){
  var figures = [];
  var self = this;
  var images = this.zone.images;
  images.forEach(function(image, x){    
    var figure = new Figure(image);    
    if(!!current_section.name.match(/QuoteFrame/i)){    	
    	if( (figure.width < 95) || (figure.height < 95) || (figure.width > 400 && figure.height > 400) ){ return; }
    	var paths = figure.image.paths;
    	if(paths.firstItem().pathPoints.count() > 4){return;}
    	if(figure.image.rotationAngle != 0){return;}
    }else{
    	if( (figure.width < 5 && figure.height < 5) || (figure.width > 400 && figure.height > 400)){ return; }
    }
    
    if(!!figure.full_image_name.match(/logo|check/ig)){ return; }
    if(!!captions){
      figure.caption.contents = captions[x];
    }else{
      figure.get_captions(self.zone.textFrames);  
    }        
    figures.push(figure);
  });
  return figures;
};

Figures.prototype.toHTML = function(with_columns, captions){
  var text = '';
  var columns = false;
  if(!!with_columns){ 
    text += '<div class="row align-items-end">\r';
    switch(true){
      case (this.length == 3): columns = 3; break;      
      default: columns = 2;
    }
  }
  this.figures.forEach(function(figure, x){  	
    var classname = ((x+1 == current_week && current_lesson_type != 'sr' && !!current_package.grade.match(/k|1/i)) ? 'outline' : false);

    if(!!columns){
	    switch(columns){
	      case 2: 
	        text += '<div class="col-6">\r';
	      break;
	      case 3: 
	        text += '<div class="col-4">\r';
	      break;
	      default:
	    }
	  }

	  if(figure.height > 200){
	  	figure.height = figure.height/2;
	  	figure.width = figure.width/2;
	  }
	  text += !!classname ? figure.toHTML(classname) : figure.toHTML();
	  if(!!captions && !!current_package.grade.match(/k|1/i)){
	  	text += '<h3 class="week_header">'+captions[x]+'</h3>\r';
	  }
	  if(!!columns){ text += '</div>\r'; }	  
  });  
  if(!!with_columns){ text += '</div>\r'; }
  return text;
};


function SkillsAtAGlance(filename){
	this.name = 'SkillsAtAGlance';
	current_section = this;
	open_file(filename);
	document_settings();	
	this.html = this.toHTML();		
}
 
SkillsAtAGlance.prototype.toHTML = function(){
	var page = document.pages.firstItem();
	this.zone = new Zone(page, [100, 60, 600, 600]);	
	var self = this;
	var text = '';	
	var textFrames = this.zone.textFrames;	
	textFrames.forEach(function(textFrame){	
		if(textFrame.isValid){
			textFrame.fit(FitOptions.FRAME_TO_CONTENT);
			text += '<section>\r';
			text += process_paragraphs(self, textFrame.paragraphs.everyItem().getElements());
			text += '</section>\r';
		}
	});
	return text;
}; 


SkillsAtAGlance.prototype.process_paragraph = function(paragraph){	
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
  var header = !!fontStyle.match(/bold/ig) ? true : false;  
  var h3 = (header) ? true : false;
  var h2 = header && pointSize > 30 ? true : false;
  var unit_header = (!!condensed_contents.match(/unit\d+/i) && h2) ? true : false;  

	switch(true){
		case has_table: text += build_skills_tables(tables); break;
		case unit_header: text += '<h2 class="skills_at_a_glance"><span class="bold">Unidad '+current_package.unit+'</span>'+contents.replace(/unit\s*\d+/i, '')+'</h2>\r'; break;
		case h2: text += '<h2>'+(has_special_characters ? process_characters(paragraph) : process_header_words(paragraph))+'</h2>\r'; break;
		case h3: text += '<h3>'+(has_special_characters ? process_characters(paragraph) : process_header_words(paragraph))+'</h3>\r'; break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};

function build_skills_tables(tables){    
  var text = '';
  var l = tables.length;
  for(var x = 0; x < l; x++){
    var table = tables[x];    
    
    switch(true){      
      default: text += build_skills_table(table);
    }
  }
  return text;
}

function build_skills_table(table, classname){
  var text = '';    
  var textFrame = table.parent;
  var geometricBounds = textFrame.geometricBounds;
  var current_top = geometricBounds[0];
  var current_left = geometricBounds[1];
  var textFrame_width = geometricBounds[3] - geometricBounds[1];
  var table_width = table.width;
  var width =  Math.round((table_width/textFrame_width)*100);  
  width = width >= 80 ? 100 : width;  

  classname = !!classname ? classname : '';  

  text += '<table class="'+classname+'" width="'+width+'%"><tbody>\r';
  var rows = table.rows.everyItem().getElements();
  rows.forEach(function(row, x){
    if(row){
      var no_border = !row.contents.toString().match(/\w/) ? true : false;
      text += '<tr'+( no_border ? ' class="no_border"' : '')+'>\r';       
      var cells = row.cells.everyItem().getElements();
      cells.forEach(function(cell){
        if(cell){               	
          var color = cell.fillColor.name;
          var column_width = Math.round( (cell.width/table.width) * 100);       
          var valign = set_vertical_align_attribute(cell.verticalJustification);
          var rowspan = cell.rowSpan == 1 ? '' : (' rowspan="'+cell.rowSpan+'"');
          var colspan = cell.columnSpan == 1 ? '' : (' colspan="'+cell.columnSpan+'"');
          var color_name = false;
          var has_border_color = false;
          var border_color = '';          
          var zone = new Zone(textFrame.parentPage, [current_top, current_left, current_top+cell.height, current_left+cell.width]);          
          var figures = new Figures(zone);     
          figures.figures.forEach(function(figure){		
						figure.zoomed_in = true;
					});

          var cell_style = get_cell_style(cell);
          cell_style = (cell_style ? cell_style : '');
                   
          var highlight_week = ( x > 0 && cell_is_in_current_week(cell, table) ) ? true : false;
          
          text += '<td'+( highlight_week ? ' class="background_color"' : '' )+rowspan+colspan+' height="'+(Math.round(cell.height)*1.7)+'" width="'+column_width+'%" valign="'+valign+'"'+cell_style+'>\r';          
          if(figures.length > 0){
          	text += '<div class="row">\r';          	
          	text += '<div class="col-12 col-xl-6">\r';
          	text += process_paragraphs(cell, cell.paragraphs.everyItem().getElements());
          	text += '</div>\r';
          	text += '<div class="col-12 col-xl-6">\r';
          	text += figures.toHTML();
          	text += '</div>\r';
          	text += '</div>\r';
          }else{
          	text += process_paragraphs(cell, cell.paragraphs.everyItem().getElements());	
          }
                    
          text += '</td>\r';
          current_left += cell.width;
        }
      });
      text += '</tr>\r';
      current_left = geometricBounds[1];
      current_top += row.height;
    } 
  });  
  text += '</tbody>\r</table>\r';  
  return text;
}

function cell_is_in_current_week(cell, table){
	var result = false;
	var columns = table.columns.everyItem().getElements();	
	columns.forEach(function(column){
		if(!!column.cells[0].contents.match(/week\s\d/i) && !column.cells[0].fillColor.name.match(/white|paper/i)){			
			var week = column.cells[0].contents.match(/week\s\d/i)[0].replace(/week\s/i, '');			
			if(week == current_week){
				var cells = column.cells.everyItem().getElements();
				cells.forEach(function(col_cell){
					if(col_cell == cell){ result = true; }
				});
			}
		}
	});	
	return result;
}


Cell.prototype.process_paragraph = function(paragraph){
  var text = '';      
  var contents = paragraph.contents.trim();     
  var listType = paragraph.bulletsAndNumberingListType;
  var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;
  var appliedFont = paragraph.appliedFont.name;
  var fontStyle = paragraph.fontStyle;
  var paragraphStyle = paragraph.appliedParagraphStyle.name;
  var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;  
  var has_textFrame = paragraph.textFrames.length > 0 ? true : false;
  var groups = paragraph.groups;
  var has_group = groups.length > 0 ? true : false;
  var rectangles = paragraph.rectangles;
  var has_rectangle = rectangles.length > 0 ? true : false;
  var has_oval = paragraph.ovals.length > 0 ? true : false;  
  var empty = !!paragraph.contents.match(/\w/) ? false : true;    
  var justification = set_align_attribute(paragraph.justification);  
  var has_special_characters = !!contents.match(/\u2013|\u2014/g) ? true : false;
  var check_icon = has_rectangle ? ( !!has_image(rectangles[0]) ? (!!rectangles[0].allGraphics[0].itemLink.name.match(/check/i) ? true : false) : false ) : false;

  switch(true){  	
  	case check_icon: text += '<p'+(justification != 'left' ? ' align="'+justification+'"' : '')+'><span class="brw-check-icon"></span>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r'; break;
  	case has_group: text += process_groups(groups, this); break;
    case has_rectangle && empty: text += process_rectangles(paragraph.rectangles); break;
    case empty: break;
    case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/, '')+'</li>\r'; break;     
    default: text += '<p'+(justification != 'left' ? ' align="'+justification+'"' : '')+'>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
  }
   
  text = text.replace(/&(m|n)d;/ig, '&$1dash;');  
  return text;
};


function Generic(zone){		
	this.name = 'Generic';
	current_section = this;
	this.textFrame = zone.textFrames[0];
	this.html = this.toHTML();
}
	
Generic.prototype.toHTML = function(){
	var text = '';	
	text += process_paragraphs(this, this.textFrame.paragraphs.everyItem().getElements());	
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
  var h3 = (header) ? true : false;
  var h2 = header && pointSize > 30 ? true : false;
  
	switch(true){
		case has_table: 
			log('table detected'); 
			text += build_tables(tables);
		break;				
		case h2: text += '<h2>'+contents+'</h2>\r'; break;
		case h3: text += '<h3>'+contents+'</h3>\r'; break;
		case header: text += '<h4>'+contents.trim()+'</h4>\r'; break;
		case bullet: text += '<li>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph)).replace(/\u2022/g, '')+'</li>\r'; break;		
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
 	
	return text;
};

function QuoteFrame(textFrame){
	this.name = 'QuoteFrame';
	current_section = this;
	this.textFrame = textFrame;	
	this.html = this.toHTML();
}

QuoteFrame.prototype.toHTML = function(){
	var text = '';
	var firstParagraphContents = this.textFrame.paragraphs[0].contents.replace(/\W/g, '');	
	var author = '';
	switch(firstParagraphContents){
		case 'WileyBlevins': 					author = 'author_wb'; break;
		case 'AdriaKlein': 						author = 'author_ak'; break;
		case 'DebbieWhittJarzombek': 	author = 'author_dwj'; break;
		case 'LindaHoyt': 						author = 'author_lh'; break;
		case 'PeterAfflerbach': 			author = 'author_pa'; break;
		case 'BarbaraAndrews': 				author = 'author_ba'; break;
		default: warning_message('author not found for: '+firstParagraphContents);
	}	
	text += '<section class="pd '+author+'">\r';
	text += '<span class="brw-pd-icon"></span>\r';
	text += process_paragraphs(this, this.textFrame.paragraphs.everyItem().getElements());
	text += '<span class="brw-crv-icon"></span>\r';
	text += '</section>\r';
	return text;
};

QuoteFrame.prototype.process_paragraph = function(paragraph){
	var text = '';
	var contents = paragraph.contents;
	var has_special_characters = !!contents.match(/\u2013|\u2014|\u000A/ig) ? true : false;
	var fontStyle = paragraph.fontStyle;
	var header = !!fontStyle.match(/bold/ig) ? true : false;

	switch(true){		
		case header: text += '<h4>'+contents.trim()+'</h4>\r<hr>\r'; break;
		default: text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';
	}
	return text;
};
