//  ____                  _                          _      ____                _           _      __        __         _        _                 
// | __ )  ___ _ __   ___| |__  _ __ ___   __ _ _ __| | __ |  _ \ ___  __ _  __| | ___ _ __( )___  \ \      / /__  _ __| | _____| |__   ___  _ __  
// |  _ \ / _ \ '_ \ / __| '_ \| '_ ` _ \ / _` | '__| |/ / | |_) / _ \/ _` |/ _` |/ _ \ '__|// __|  \ \ /\ / / _ \| '__| |/ / __| '_ \ / _ \| '_ \ 
// | |_) |  __/ | | | (__| | | | | | | | | (_| | |  |   <  |  _ <  __/ (_| | (_| |  __/ |    \__ \   \ V  V / (_) | |  |   <\__ \ | | | (_) | |_) |
// |____/ \___|_| |_|\___|_| |_|_| |_| |_|\__,_|_|  |_|\_\ |_| \_\___|\__,_|\__,_|\___|_|    |___/    \_/\_/ \___/|_|  |_|\_\___/_| |_|\___/| .__/ 
//                                                                                                                                          |_|  

//CREATOR JY
//CREATED 2018-12-17
//UPDATED 2019-01-09
//VERSION 1.0

$.evalFile(itrs_root_path+'/library/components.js');

function GuideToSharedReading(week){
	week = !!week ? week : false;
	if(!!current_package.grade.match(/k|1/i)){		
		new GuideToSharedReadingLowerGrade(week);
	}else{
		new GuideToSharedReadingUpperGrade(week);
	}
}


function GuideToSharedReadingLowerGrade(week){
	var self = this;	
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;
	this.type = current_lesson_type;
	(3).forEvery(function(number){
		if(!!week && (number+1) == week){
			current_week = number+1;
			current_package_folder = Folder(output_folder +'/'+self.xcode);
			current_images_path = '/images/grade'+self.grade.toLowerCase()+'/unit'+self.unit+'/week'+current_week+'/'+self.type+'/guide_to_shared_reading';
			
			images_list = [];
			figures_id = 0;

			self.indd_filename = current_package.ycode+'_TRS_TextComplexity_SR_G'+current_package.grade+'_U'+current_package.unit;				
			open_file(self.indd_filename);
			document_settings();		
			var page1 = document.pages.firstItem();
			var page2 = document.pages.lastItem();
			
			self.shared_reading = new SharedReadingSection(new Zone(page1, 	[140, 60, 180, 100]), 	'shared_reading');
			self.week1 = 					new SharedReadingSection(new Zone(page1, 	[0, 400, 480, 640]),		'week1');
			self.week2 = 					new SharedReadingSection(new Zone(page2, 		[0, 740, 480, 980]), 		'week2');
			self.week3 = 					new SharedReadingSection(new Zone(page2, 		[0, 1100, 480, 1340]), 	'week3');
			self.poetry =					new SharedReadingSection(new Zone(page2, 		[500, 920, 700, 1080]),	'poetry');	

			self.html = self.toHTML();

			self.filepath = output_folder+'/'+self.xcode+'/html/grade'+self.grade.toLowerCase()+'/unit'+self.unit+'/week'+current_week+'/'+self.type+'/guide_to_shared_reading.html';	
			self.publish();
			close_all_documents();
		}		
	});	
}

GuideToSharedReadingLowerGrade.prototype.publish = function(){
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

GuideToSharedReadingLowerGrade.prototype.toHTML = function(){
	var text = '';
	text += '<h2>Guide to Shared Reading</h2>\r';
	text += '<div class="row align-items-center">\r';

	text += this.shared_reading.html;
	text += this.week1.html;
	text += this.week2.html;
	text += this.week3.html;
	text += this.poetry.html;

	text += '</div>\r';
	return text;
};

function GuideToSharedReadingUpperGrade(week){
	var self = this;	
	this.xcode = current_package.xcode;
	this.grade = current_package.grade;
	this.unit = current_package.unit;
	this.type = current_lesson_type;
	(3).forEvery(function(number){
		if(!!week && (number+1) == week){
			current_week = number+1;
			current_package_folder = Folder(output_folder +'/'+self.xcode);
			current_images_path = '/images/grade'+self.grade.toLowerCase()+'/unit'+self.unit+'/week'+current_week+'/'+self.type+'/guide_to_shared_reading';
			
			images_list = [];
			figures_id = 0;

			self.indd_filename = current_package.ycode+'_TRS_TextComplexity_SR_G'+current_package.grade+'_U'+current_package.unit;				
			open_file(self.indd_filename);
			document_settings();			
			document.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
			document.textFrames.everyItem().fit(FitOptions.FRAME_TO_CONTENT);
			// unlock_all_pageItems();
			var page1 = document.pages.firstItem();
			var page2 = document.pages.lastItem();
			var p1_zones = get_week_zones(page1);
			var p2_zones = get_week_zones(page2);			

			self.week1 = new Week(new Zone(page1, p1_zones[0]),	'week1');
			self.week2 = new Week(new Zone(page2, p2_zones[0]), 'week2');
			self.week3 = new Week(new Zone(page2, p2_zones[2]), 'week3');
			
			self.html = self.toHTML();

			self.filepath = output_folder+'/'+self.xcode+'/html/grade'+self.grade.toLowerCase()+'/unit'+self.unit+'/week'+current_week+'/'+self.type+'/guide_to_shared_reading.html';	
			self.publish();
			close_all_documents();
		}	
	});	
}

GuideToSharedReadingUpperGrade.prototype.publish = function(){
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

GuideToSharedReadingUpperGrade.prototype.toHTML = function(){
	var text = '';
	text += '<h2>Guide to Shared Reading</h2>\r';
	text += '<div class="row">\r';
	
	text += this.week1.html;
	text += this.week2.html;
	text += this.week3.html;

	text += '</div>\r';
	return text;
};

function get_week_zones(page){
	var zones = [];
	var top_textFrames = get_textFrames_by_paragraphStyle(page, 'C-Hd');
	var bottom_textFrames = get_textFrames_by_paragraphStyle(page, 'Level_Lexile');	
	top_textFrames.forEach(function(textFrame, x){
		zones.push([Math.round(textFrame.geometricBounds[0]), 0, Math.round(bottom_textFrames[x].geometricBounds[2]), 660]);
	});
	return zones;
}

function Week(zone, label){
	this.name = 'Week';	
	current_section = this;
	this.zone = zone;
	this.label = label;	

	var pageItems = select_rectangles(zone.page, zone.geometricBounds);
	group_pageItems(zone.page, pageItems);
	var fz = new Zone(zone.page, zone.geometricBounds);	
	this.figures = new Figures(fz);	
	this.figures.figures.forEach(function(figure){		
		figure.zoomed_in = true;
	});
	
	this.html = this.toHTML();	
}

Week.prototype.toHTML = function(){
	var text = '';
	if(this.label == 'week3'){
		text += '<section class="col-12 '+this.label+'">\r';
	}else{
		text += '<section class="col-12 col-sm-6 '+this.label+'">\r';
	}
	if(!!this.label.match(/week/i)){ text += '<h3>Week '+this.label.replace(/week/i, '')+'</h3>\r'; }
	
	text += this.figures.toHTML(this.label);
	
	text += '</section>\r';
	return text;
};


function SharedReadingSection(zone, label){
	this.name = 'SharedReadingSection';	
	current_section = this;
	this.zone = zone;
	this.label = label;	

	var pageItems = select_rectangles(zone.page, zone.geometricBounds);
	group_pageItems(zone.page, pageItems);
	var fz = new Zone(zone.page, zone.geometricBounds);	
	this.figures = new Figures(fz);	
	this.figures.figures.forEach(function(figure){		
		figure.zoomed_in = true;
	});
	
	this.html = this.toHTML();	
}

SharedReadingSection.prototype.toHTML = function(){
	var text = '';
	text += '<section class="col-12 col-sm-6 '+this.label+'">\r';
	if(!!this.label.match(/week/i)){ text += '<h3>Week '+this.label.replace(/week/i, '')+'</h3>\r'; }

	text += this.figures.toHTML();
	
	text += '</section>\r';
	return text;
};

Figures.prototype.get_figures = function(captions){
  var figures = [];
  var self = this;
  var images = this.zone.images;
  images.forEach(function(image, x){    
    var figure = new Figure(image);
    if( (figure.width < 5 && figure.height < 5) || (figure.width > 400 && figure.height > 400)){ return; }
    if(!!figure.full_image_name.match(/logo|check/ig)){ return; }
    if(!!captions){
      figure.caption.contents = captions[x];
    }else{
      figure.get_captions(self.zone.textFrames);  
    }    
    if(current_section.label != 'shared_reading'){figure.get_header_captions(self.zone.textFrames);}    
    figures.push(figure);
  });
  return figures;
};

Figures.prototype.toHTML = function(week){
  var text = '';
  week = !!week ? week : '';
  text += '<div class="row">\r';
  this.figures.forEach(function(figure, x){      	
    text += week == 'week3' ? '<div class="col-12 col-sm-6">\r' : '<div class="col-12">\r';
    text += figure.toHTML();  
	  text += '</div>\r';
  });    
  text += '</div>\r';
  return text;
};
