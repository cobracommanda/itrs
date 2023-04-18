// BA2!                                                                                                                                 |_|                                                                                                                                              |_|  

//CREATOR JY, ALTERED BY EM
//CREATED 2019-02-19
//UPDATED 2019-11-21
//VERSION 2.0

$.evalFile(itrs_root_path+'/library/components.js');
$.evalFile(itrs_root_path+'/library/terms.js');

var isPhonicsLesson = false; // only so far used in ield_section function, but probably useful to just have around, right?

var language = current_package.language;

var phonicsSmallGroupSituation = 0; //this is up here because if this is triggered it needs to do a few different things to set up the container
//0 = off
//1 = initial
//2 = second section (second text frame)
//3 = HOLD for end of section
//4 = closing before section close

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

	close_all_terminal_windows();

	if(!!current_package.grade.match(/[k1]/i))
	{
		// for(var week = 1; week <= 3; week++)
		// {
			//uhhh sorry I just need to make sure this works properly and this is the surest way (plus, you can easily skip a file this way!)
		if(week==1)
		{
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 5, false); //only week 1
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 5, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 4, false);
			// self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 1, false);
			self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 4, false);
			self.pour_file(filename);
		}
		else if(week==2)
		{
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 5, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 4, false);
			// self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 1, false);
			self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 4, false);
			// self.pour_file(filename);
		}
		else if(week==3)
		{
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 4, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 5, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 1, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 2, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 4, false);
			// self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 1, false);
			self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 2, false);
			// self.pousr_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 3, false);
			// self.pour_file(filename);
			// filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 4, false);
			// self.pour_file(filename);
		}
		// }
	}
	else if(!!current_package.grade.match(/2/i)) 
	{
		//yeah, all three weeks have a slightly different list. I might collapse this later, but I want to make sure it works.
		if(week==1)
		{
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 5, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 6, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 7, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 8, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 9, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 10, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 11, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 12, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 13, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 14, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 15, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 16, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 17, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 18, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 19, false);
			self.pour_file(filename);
		}
		else if(week==2)
		{
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 5, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 6, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 7, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 8, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 9, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 10, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 11, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 12, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 13, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 14, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 15, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 16, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 17, false);
			self.pour_file(filename);
		}
		else if(week==3)
		{
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 5, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 6, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 7, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 8, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 9, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 10, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 11, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 12, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 13, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 14, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 15, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 16, false);
			self.pour_file(filename);
			filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 17, false);
			self.pour_file(filename);
		}
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
			// if(week==1)
			// {
			// 	filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, false, 7, false); //server
			// 	self.pour_file(filename);
			// 	filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, false, 12, false);
			// 	self.pour_file(filename);
			// 	filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, false, 13, false);
			// 	self.pour_file(filename);
			// }
			// if(week==2)
			// {
			// 	filename = findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, false, 12, false); //server
			// 	self.pour_file(filename);
			// }
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

	//this is the most inelegant fix but the writing prompts AND sing swing learn sections are being a scourge upon my life
	for(var rect = 0; rect < app.activeDocument.spreads[0].rectangles.length; rect++)
	{
		// alert(app.activeDocument.spreads[0].rectangles[rect].graphics[0].name);
		if(app.activeDocument.spreads[0].rectangles[rect].graphics.length > 0)
		{
			if(app.activeDocument.spreads[0].rectangles[rect].graphics[0].itemLink.name.match(/Writing_prompt|SingSwingLearn_Logo/))
			{
				app.activeDocument.spreads[0].rectangles[rect].remove();
				// alert('found writing prompt image and deleted it');
			}
		}
	}

	var day_lessons = new DayLessons(filename);  
 	var lessons = day_lessons.lessons;
 	log('lessons.length: ' + lessons.length);
	var l = lessons.length;
	for(var x = 0; x < l; x++){
		var lesson = lessons[x];
		lesson.write_to_file();
	}
	// group_pageItems_in_images();
	// var lesson_textFrame = get_textFrame_by_label(document, 'lesson');
	// if(lesson_textFrame.isValid && (type == 'wg' || !type)){
	// 	var wg_lesson = new Lesson('Whole Group'); //regular lesson, we'll just...call it whole group for ease of things
	// }
	// var sg_textFrame = get_textFrame_by_label(document, 'sg_lesson');
	// if(sg_textFrame.isValid && (type == 'sg' || !type)){
	// 	var sg_lesson = new Lesson('Small Group');
	// }	
	// close_document(); //this was commented out before
};


//start things from BA1.5 script

var current_package_folder, current_images_path, current_grade, current_unit, current_week, current_day; 
var current_epocket_chart_index = 0;

Number.prototype.isOdd = function(){return !!(this % 2);};

String.prototype.remove_accents = function(){  
  var text = this;
  text = !!text.match(/\u00E1/) ? text.replace(/\u00E1/g, 'a') : text;
  text = !!text.match(/\u00E9/) ? text.replace(/\u00E9/g, 'e') : text;
  text = !!text.match(/\u00F1/) ? text.replace(/\u00F1/g, 'n') : text;
  return text;  
};

String.prototype.format = function(){
  var string = this;
  string = string.replace(/^\s*|\s*$/g, '');
  string = string.replace(/&#44;/g, ','); 
  string = string.replace(/&\s/g, '&amp; ');
  string = string.replace(/</g, '&lt;');
  string = string.replace(/>/g, '&gt;');
  return string;
};

String.prototype.toInt = function(){
  return parseInt(this);
};      

Folder.prototype.burn = function(){
  var files = this.getFiles();
  for(var x = 0; x < files.length; x++){
    if(files[x].type){files[x].remove();}
    else{files[x].burn();}
  }
  this.remove();
};

 //  _____ _ _                             _   _____     _     _               
 // |  ___(_) | ___  ___    __ _ _ __   __| | |  ___|__ | | __| | ___ _ __ ___ 
 // | |_  | | |/ _ \/ __|  / _` | '_ \ / _` | | |_ / _ \| |/ _` |/ _ \ '__/ __|
 // |  _| | | |  __/\__ \ | (_| | | | | (_| | |  _| (_) | | (_| |  __/ |  \__ \
 // |_|   |_|_|\___||___/  \__,_|_| |_|\__,_| |_|  \___/|_|\__,_|\___|_|  |___/

//K-2, to sort out the lessons in each day (might be able to be simplified into just going straight to Lesson)
function DayLessons(file){  
  this.grade = !!document.name.match(/Gr?(\d+|k)/i) ? document.name.match(/Gr?(\d+|k)/i)[0].replace(/Gr?/, '') : false;
  if(this.grade == 'K') this.grade = 'k';
  current_grade = this.grade;
  this.unit = !!document.name.match(/U\d+/) ? document.name.match(/U\d+/)[0].replace(/U/, '') : false;  
  current_unit = this.unit;
  this.week = !!document.name.match(/W\d+/) ? document.name.match(/W\d+/)[0].replace(/W/, '') : false;  
  current_week = this.week;
  this.day = !!document.name.match(/D\d+/) ? document.name.match(/D\d+/)[0].replace(/D/, '') : false;  
  current_day = this.day;
  this.package_folder = Folder(output_folder+separator+current_package.xcode);  
  if(this.grade.match(/[k12]/i)) this.images_path = '/images/grade'+this.grade+'/unit'+this.unit+'/week'+this.week+'/day'+this.day;
  else this.images_path = '/images/grade'+this.grade+'/unit'+this.unit+'/week'+this.week; 
  current_package_folder = this.package_folder;  
  current_images_path = this.images_path;  
  var images_folder = create_folder(current_package_folder+current_images_path);  
  // images_folder.burn();
  create_folder(current_package_folder+current_images_path);  
  this.lessons = [];
  this.pages = document.pages;
  this.pre_process();
  // var number_of_lessons;     // this is not useful for BA2 because the lessons are all separate!
  // var pages = [];
  // switch(this.day.toInt()){
  //   case 1: 
  //     number_of_lessons = (this.week.toInt() == 1) ? 5 : 4; 
  //     // pages = (this.week.toInt() == 1) ? [[0,1],[2,5],[3,4,5],[6,7],[8,9]] : [[0,3],[1,2,3],[4,5],[6,7]];
  //   break;
  //   case 2: 
  //     number_of_lessons = 4; 
  //     // pages = [[0,1],[1,2,3],[4,5],[6,7],[8,9]];
  //   break;
  //   case 3: 
  //     number_of_lessons = 5; 
  //     // pages = [[0,1,2],[3],[4,5],[6,7]];
  //   break;
  //   case 4: 
  //     number_of_lessons = 4; 
  //     // pages = [[0,1],[2,3],[4,5]];
  //   break;
  //   case 5: 
  //     number_of_lessons = 4; 
  //     // pages = [[0,1],[2,3],[4,5]];
  //   break;
  //   default: throw 'day not found for file: '+file;
  // }
  // var l = number_of_lessons;
  // for(var x = 0; x < l; x++){
  //   var index = (this.week.toInt() == 1 && this.day.toInt() == 1) ? x : x+1;    

  //   this.lessons.push(new Lesson(this, pages[x], index));
  // }
  var page_indices_dummy = []; //because it's just a thing to stand in for previous usefulness above
  for(var x = 0; x < this.pages.length; x++)
  {
    page_indices_dummy.push(x); //building just like...[0,1,2] for a three-spread lesson, that's all, nice
  }
  this.lessons.push(new Lesson(this, page_indices_dummy, parseInt(document.name.match(/L\d+/i)[0].replace(/L/i, '')))); //...and thus, we'll still give it "page_indices" so I don't have to rewrite as much
}

DayLessons.prototype.pre_process = function(){
  this.spreads = document.spreads;
  var l = this.spreads.length;
  for(var x = 0; x < l; x++){
    var spread = this.spreads[x];
    spread.textFrames.everyItem().fit(FitOptions.FRAME_TO_CONTENT);
    var z1 = new Zone(spread.pages[0], [0,0,50,200]);
    if(spread.pages > 1) 
	{
		var z2 = new Zone(spread.pages[1], [0,1150,50,1350]);
		lock_zones([z1,z2]);
	}
    else
	{
		lock_zones([z1]);
	}
    process_spread(spread);
  }  
};

function Lesson(parent, page_indices, lesson){
  this.lesson = lesson;
  this.parent = parent;
  this.page_indices = page_indices;
  this.grade = this.parent.grade;
  this.unit = this.parent.unit;
  this.week = this.parent.week;
  this.day = this.parent.day;
  this.package_folder = Folder(output_folder+separator+current_package.xcode);    
  images_list = [];

  //call details like filename, standards, etc using this handy master object! It's the same array you know and love!

  //0: filename
  //1: ycode
  //2: grade
  //3: unit
  //4: week
  //5: day (could be false)
  //6: lesson_number
  //7: titles
  //8: standards (to be implemented)

  // var master;
  // for(var m = 0; m < masterCSV.length; m++)
  // {
  //   if(masterCSV[m][1] == current_package.xcode)
  //   {
  //     this.master = masterCSV[m];
  //     m = masterCSV.length;
  //   }
  // }  
}



Lesson.prototype.write_to_file = function(){
  var filename = (this.lesson == 0) ? 'unit_introduction' : 'lesson'+this.lesson;
  var html_file;
  if(this.grade.match(/[k12]/i)) html_file = File(this.package_folder+separator+'html/grade'+this.grade+'/unit'+this.unit+'/week'+this.week+'/day'+this.day+'/'+filename+'.html');
  else html_file = File(this.package_folder+separator+'html/grade'+this.grade+'/unit'+this.unit+'/week'+this.week+'/'+filename+'.html');
  log(html_file.fsName);
  // log(this.package_folder+separator+'html/grade'+this.grade+'/unit'+this.unit+'/week'+this.week+'/day'+this.day+'/'+filename+'.html');
  html_file.encoding = 'UTF-8';
  html_file.lineFeed = 'Unix';
  html_file.open('r');
  var text = html_file.read();
  html_file.close();
  text = text.replace(/<\/nav>(.|\n)*<\/main>/, this.toHTML());  
  html_file.open('w');
  html_file.write(text);
  html_file.close();  
};

Lesson.prototype.toHTML = function(){
	var text = '';
	var phonics;
	var generic;
	text += '</nav>\r';
	text += '<div class="clearfix"></div>\r';
	text += '<main>\r';
  

   if(this.grade.match(/[k12]/i))
   {	
   		var daytxt = this.day + '';
   		var lesnum = parseInt(this.lesson); // - (this.week == '1' ? 1 : 0);
   		var lestxt = lesnum + '';
   		log('toHTML: ' + daytxt + lestxt + '');
   		if(this.grade.match(/[k1]/i))
		{
	   		if(this.week == '1')
	   		{
				switch(daytxt + lestxt + '')
				{
					case '13': case '22': case '32': case '42': case '52': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
					default: generic = new GenericLesson(this); text += generic.toHTML();
				}
			}
			else
			{
				switch(daytxt + lestxt + '')
				{
					case '12': case '22': case '32': case '42': case '52': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
					default: generic = new GenericLesson(this); text += generic.toHTML();
				}
			}
		}
		else //grade 2
		{
			if(this.week == '1')
	   		{
				switch(daytxt + lestxt + '')
				{
					case '12': case '25': case '39': case '413': case '516': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
					default: generic = new GenericLesson(this); text += generic.toHTML();
				}
			}
			else if(this.week == '2')
	   		{
				switch(daytxt + lestxt + '')
				{
					case '11': case '24': case '38': case '412': case '515': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
					default: generic = new GenericLesson(this); text += generic.toHTML();
				}
			}
			else if(this.week == '3')
	   		{
				switch(daytxt + lestxt + '')
				{
					case '11': case '24': case '38': case '411': case '514': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
					default: generic = new GenericLesson(this); text += generic.toHTML();
				}
			}
		}

		//old switch, don't use (here for reference)
			// case '11': phonics = new Day1Phonics1(this); text += phonics.toHTML(); break;
			// case '12': phonics = new Day1Phonics2(this); text += phonics.toHTML(); break;
			// case '21': phonics = new Day2Phonics1(this); text += phonics.toHTML(); break;
			// case '22': phonics = new Day2Phonics2(this); text += phonics.toHTML(); break;
			// case '31': phonics = new Day3Phonics1(this); text += phonics.toHTML(); break;
			// case '41': phonics = new Day4Phonics1(this); text += phonics.toHTML(); break;
			// case '51': phonics = new Day5Phonics1(this); text += phonics.toHTML(); break;
			// case '12': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
			// case '22': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
			// case '32': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
			// case '42': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
			// case '52': phonics = new PhonicsLesson(this); text += phonics.toHTML(); break;
	}
	else
	{
		generic = new GenericLesson(this); text += generic.toHTML();
	}

	text += '</main>\r';
	text = text.replace(/&(m|n)d;/ig, '&$1dash;');
	text = text.replace(/Vowel Pattern \/\s?oo\/, \/oo\//g, 'Vowel Pattern /o<span class="macron"></span>o/, /o<span class="breve"></span>o/');
	text = text.replace(/Vowel Pattern \/oo\/ and \/o.o\//g, 'Vowel Pattern /o<span class="macron"></span>o/ and /o<span class="breve"></span>o/');  

	text = text.replace(/\rundefined/g, ''); //maybe useful to comment this out while debugging
	text = text.replace(/\u0007/g, ''); //BELL character
	text = text.replace(/\uFFFC/g, ''); //OBJ character

	//this long one gets rid of mentor/student writing prompt image (and also swing swing learn), not super great to do it this way but it's slipping through still
	text = text.replace(/<a href="#" data-toggle="modal" data-target=".*?">(\n|\r)<img class="img-fluid" src=".*?(Writing_prompt|SingSwingLearn_logo)\.png" alt="Image Thumbnail">(\n|\r)<\/a>/m, '');
	text = text.replace(/<figure class="lg">(\r|\n)+<div class="modal fade" id=".*?" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">(\r|\n)<div class=".*?" role="document">(\r|\n)<div class="modal-content">(\r|\n)<div class="modal-body">(\r|\n)<img class="img-fluid" src="\/images\/grade.\/unit.\/week.\/Writing_prompt\.png" alt="Image Thumbnail">(\r|\n)<\/div>(\r|\n)<\/div>(\r|\n)<\/div>(\r|\n)<\/div>(\r|\n)<\/figure>/m, '');

	//fixes the Check to See cell in Phonics lessons
	if(this.grade.match(/[k12]/i)) text = text.replace(getTerm('checktoseespecial', language).regex, '</div>\r</div>\r<div class="phonics_table mb-4">\r<div class="row">\r$1'); 
	text = text.replace(/<strong>Check to see/ig, '<strong><span class="icon-check"></span>Check to see');

	//get rid of figureundefined, it's something unholy (probably actually the detritus from Language Transfer Support in a Phonics Lesson's Small Group)
	text = text.replace(/<figure class="diagram"><img src=".*?figure(undefined|NaN).png" alt="" width="100%"><\/figure>/, '');

	//add additional bank links

	var bankxcode;
	//figure out which additional materials bank is the right xcode
	var banks = theBankArray(language);
	for(var b = 0; b < banks.length; b++)
	{
	    var bank = banks[b].split(/,/);
	    if(bank[1] == this.grade.toUpperCase() && bank[2] == this.unit)
	    {
	      bankxcode = bank[0];
	      b = banks.length;
	    }
	}
    text = text.replace(/<h5 class="blue">\s*(Additional\s+)?Materials/, '<h5 class="blue"><a data-code="'+bankxcode+'" data-type="html" data-extLink="javascript" href="javascript">$1Materials <span class="nav-icon-external-link"></span></a>');
    text = text.replace(/undefinedMaterials/, 'Materials');

	return text;
};



function GenericLesson(parent){
  isPhonicsLesson = false;
  this.parent = parent;
  this.pages = document.pages;  
  this.indices = this.parent.page_indices;
  this.process(); 
}

GenericLesson.prototype.process = function(){  
  // if(this.indices.length == 1){    
  //   this.z1 = new Zone(this.pages[this.indices[0]], [100, 720, 900, 1080]);
  //   this.z2 = new Zone(this.pages[this.indices[0]], [100, 1120, 900, 1200]);
  //   this.header = header(this.z1.textFrames[0]);
  //   this.aside1 = new Aside(this.z2);
  //   this.main_lesson1 = main_lesson(this.z1.textFrames);      
  //   this.standards = process_textFrame(this.z1.textFrames[this.z1.textFrames.length-1]); 
    // this.standards = process_textFrame(this.z1.textFrames[this.z1.textFrames.length-1]); 
    // this.standards = this.master[8];                                                                                         //master: standards
  // }else 
    this.z1 = new Zone(this.pages[this.indices[0]], [100, 50, 900, 150]); 
    // this.z1 = remove_icons(this.z1); //whoa now, hold on
    // this.z1p5 = new Zone(this.pages[this.indices[0]], [100, 50, 325, 150]); //upper left, just for grouping
    // this.z1p5.group_images();
    this.z2 = new Zone(this.pages[this.indices[0]], [100, 300, 900, 500]);    
    // try
    // {
    	// if(this.z2.textFrames[0].label.match(/indicators/i)) this.header = header(this.z2.textFrames[1]);
    	// else this.header = header(this.z2.textFrames[0]);
    	var tfsp = getTextFrames(this.pages[this.indices[0]]);
    	var headerWorked = false;
    	for(var t = 0; t < tfsp.length; t++)
		{
		    if(tfsp[t] instanceof TextFrame)
		    {
		      if(!!tfsp[t].paragraphs.length > 0 && tfsp[t].itemLayer.name.match(/fl/i))
		      {
		        if(!!tfsp[t].paragraphs[0].appliedParagraphStyle.name.match(/lesson_A.hd/i))
		        {
		        	this.header = header(tfsp[t]);
		        	headerWorked = true;
		        	t = tfsp.length;
		          // var afterMin = false;
		          // for(var p = 0; p < tfsp[t].paragraphs.length; p++)
		          // {
		          //   if(!!tfsp[t].paragraphs[p].appliedParagraphStyle.name.match(/A.hd/i) && !afterMin)
		          //   { 
		          //     text += process_header_words(tfsp[t].paragraphs[p]);
		          //     if(tfsp[t].paragraphs[p].contents.match(/\d+\s*min\.?\)/i)) afterMin = true; //there shouldn't be more added after the parenthetical minutes are closed
		          //   }
		          //   else 
		          //   {
		          //     p = tfsp[t].paragraphs.length;
		          //   }
		          // }
		          // text
		        }
		      }
		    }
		}

		if(!headerWorked)
			this.header = header(this.z2.textFrames[0]);

    // }
    // catch(e)
    // {
    // 		this.header = header(this.z2.textFrames[0]);
    // }
    this.aside1 = new Aside(this.z1);
    this.main_lesson1 = main_lesson(this.z2.textFrames);  
	if(this.indices.length >= 2) //including blank page for last lessons
	{
	    this.z3 = new Zone(this.pages[this.indices[1]], [100, 720, 900, 1080]);
	    this.z4 = new Zone(this.pages[this.indices[1]], [100, 1120, 900, 1200]);
	    this.aside2 = new Aside(this.z4);
	    this.main_lesson2 = main_lesson(this.z3.textFrames);  
	    // this.standards = process_textFrame(this.z3.textFrames[this.z3.textFrames.length-1]);  
	    // this.standards = this.master[8];                                                                                       //master: standards
  	}
};

function remove_icons(zone){  
  var l = zone.images.length;  
  for(var x = l-1; x > 0; x--){
    var image = zone.images[x];    
    if(!!image.allGraphics[0].itemLink.name.match(/icon/i)){
      zone.images.splice(x, 1);
    }
  }  
  return zone;
}

GenericLesson.prototype.toHTML = function(){
  var text = '';
  if(this.indices.length == 1){
    text += this.header;
    text += '<div class="container">\r';
    text += '<div class="row">\r';
    text += '<aside class="col-xs-12 col-sm-12 col-md-5 col-lg-4">\r';
    text += this.aside1.toHTML();
    text += '</aside>\r';
    text += '<section class="col-xs-12 col-sm-12 col-md-7 col-lg-8">\r';
    text += this.main_lesson1;
    // text += this.standards;
    text += '</section>\r';          
    text += '</div>\r';
    text += '</div>\r';    
  }else if(this.indices.length >= 2){ //including blank page for last lessons, this still assumes 2 pages on one spread in terms of content
    text += this.header;
    text += '<div class="container">\r';
    text += '<div class="row">\r';
    text += '<aside class="col-xs-12 col-sm-12 col-md-5 col-lg-4">\r';
    text += this.aside1.toHTML();
    text += this.aside2.toHTML();
    text += '</aside>\r';
    text += '<section class="col-xs-12 col-sm-12 col-md-7 col-lg-8">\r';
    text += this.main_lesson1;
    text += this.main_lesson2;    
    // text += this.standards;
    text += '</section>\r'; 
    text += '</div>\r';
    text += '</div>\r';             
  }  
  return text;
};


function PhonicsLesson(parent){
  isPhonicsLesson = true;
  this.parent = parent;
  this.process(); 
}

PhonicsLesson.prototype.process = function(){
  var indices = this.parent.page_indices;
  var pages = document.pages;

  //All of these could either be the left or right page because sometimes these lessons are 2 pages and sometimes they're 3 (starting on the right).
  //So, it's a bit easier to rely on page bounds and then get rid of running/tab things.
  this.z1 = new Zone(pages[indices[0]], pages[indices[0]].bounds); //[25, 750, 900, 1200]
  this.z2 = new Zone(pages[indices[1]], pages[indices[1]].bounds); //[25, 50, 900, 500]
  if(pages.length > 2)
  {
	this.z3 = new Zone(pages[indices[2]], pages[indices[2]].bounds); 
	if(pages.length > 3) // a grade 2 thing
	{
		this.z4 = new Zone(pages[indices[3]], pages[indices[3]].bounds); 
	}
  }

  removeUnwantedTextFramesFromArray(this.z1.textFrames);
  removeUnwantedTextFramesFromArray(this.z2.textFrames);
  if(pages.length > 2)
  {
	removeUnwantedTextFramesFromArray(this.z3.textFrames);
	if(pages.length > 3) // a grade 2 thing
	{
		removeUnwantedTextFramesFromArray(this.z4.textFrames); 
	}
  }

  //ok, look, realistically, charts1, charts2, charts3, and charts4 are just more names for page 1, page 2, page 3, and page 4. That's it.
  //OH BUT, if it's grade 2 and it's a 4-page phonics lesson, there needs to be a "bonus page!"

  this.header = header(this.z1.textFrames[0], true);
  log('number of frames for charts1: ' + this.z1.textFrames.length);
  this.charts1 = process_textFrames(this.z1.textFrames);
  // if(pages.length == 2) this.ield = process_textFrame(this.z2.textFrames[0]); //...I'll need to double check this, since the iELD here is just a chart, right?
  log('number of frames for charts2: ' + this.z1.textFrames.length);
  this.charts2 = process_textFrames(this.z2.textFrames);

  if(pages.length > 2)
  {
	log('number of frames for charts3: ' + this.z3.textFrames.length);
	this.charts3 = process_textFrames(this.z3.textFrames);
	if(pages.length > 3) // a grade 2 thing
	{
		log('number of frames for charts4: ' + this.z4.textFrames.length);
		this.charts4 = process_textFrames(this.z4.textFrames);
	}
  }

  // this.msl = msl_section(this.z3.textFrames[2]); //I don't think this is a thing...well, it kind of is, but it probably doesn't work like this
  // this.quick_link_titles = [];
  // this.process_quick_links();
  current_epocket_chart_index = 0;
};

//useful when the zones seem to not be working well and it's easier to just exclude the day/unit things
function removeUnwantedTextFramesFromArray(tfs)
{
	for(var t = 0; t < tfs.length; t++)
	{
		if(!!tfs[t].paragraphs[0])
		{
			if(tfs[t].paragraphs[0].appliedParagraphStyle.name.match(/running|tab|footer/i))
			{
				tfs.splice(t,1);
				t--;
			}
		}
	}
}

//unused
// PhonicsLesson.prototype.process_quick_links = function(){
//   var titles = [];
//   titles = titles.concat(this.charts1.match(/<h3>(.|\n)*?<\/h3>/g));  
//   try{titles = titles.concat(this.ield.match(/<h3>(.|\n)*?<\/h3>/g));}catch(e){log('failed to concat ield titles, maybe they don\'t exist? (normal on days 1-4)');}
//   titles = titles.concat(this.charts2.match(/<h3>(.|\n)*?<\/h3>/g));
//   try{titles = titles.concat(this.charts3.match(/<h2>(.|\n)*?<\/h2>/g));}catch(e){log('no charts3 (normal on day 5)');}
//   var l = titles.length;  
//   for(var x = 0; x < l; x++){
//     var title = titles[x];
//     if(title == null){ continue; }
//     title = title.replace(/<.*?>/g, '').replace(/(\:|\().*/g, '').replace(/^\s*/, '');
//     this.quick_link_titles.push(title);    
//   }
//   var sections = [this.charts1, this.ield, this.charts2, this.charts3];
//   var l = sections.length;
//   var index = 0;
//   for(var x = 0; x < l; x++){    
//   	if(sections[x])
//     {
// 	    if(x == l-1){
// 		      while(!!sections[x].match(/<h2>/g)){
// 		        sections[x] = sections[x].replace(/<h2>/, '<h2 id="d'+index+'">');
// 		        index++;
// 		      }
// 	    }else{
// 			while(!!sections[x].match(/<h3>/g)){
// 				sections[x] = sections[x].replace(/<h3>/, '<h3 id="d'+index+'">');        
// 				index++;
// 			}
// 		}
//     }
//     else
//     {
// 		switch(x)
// 		{
// 			case 0: log('PhonicsLesson sections charts1 failed'); break;
// 			case 1: log('PhonicsLesson sections ield failed'); break;
// 			case 2: log('PhonicsLesson sections charts2 failed'); break;
// 			case 3: log('PhonicsLesson sections charts3 failed'); break;
// 			default: log('PhonicsLesson sections something unexpected failed');
// 		}
//     }
//   }
//   this.charts1 = sections[0];  
//   this.charts2 = sections[1];
//   this.ield = sections[2];
//   this.charts3 = sections[3];  
// };

PhonicsLesson.prototype.toHTML = function(){
  var text = '';
  // text += quick_links_section(this.quick_link_titles);
  text += this.header;
  text += '<div class="col-md-12">\r';
  text += this.charts1;
  text += '</div>\r';
  // text += '<div class="col-xs-12">\r';
  // text += this.ield;
  // text += '</div>\r';
  text += '<div class="col-md-12">\r';
  text += this.charts2;
  text += '</div>\r';
  if(document.pages.length > 2) //not true for day 5
  {
	  text += '<div class="col-md-12">\r';
	  text += this.charts3;

	  if(document.pages.length > 3) // grade 2 possibility
	  {
	  	text += '</div>\r';
	  	text += '<div class="col-md-12">\r';
	  	text += this.charts4;
	  }

	  // text += dots();
	  // text += this.msl;

	  if(phonicsSmallGroupSituation == 3)
	  {
	  	text += '<\/div>\r';
		text += '<\/div>\r';
		text += '<\/div>\r';
		phonicsSmallGroupSituation = 0;
	  }

	  text += '</div>\r';  
  }

  // alert(getTerm('checktoseespecial', language).regex);


  return text;
}


function Aside(zone){  
  this.zone = zone;
  this.figures = [];
  this.create_figures();
}

Aside.prototype.create_figures = function(){
  var textFrames = this.zone.textFrames;
  var images = this.zone.images;  
  var l = images.length;
  for(var x = 0; x < l; x++){
    var image = images[x];
    var image_name = image.allGraphics[0].itemLink.name;    
    if(!!image_name.match(/icon/i)){continue;}
    var figure = new Figure(image);    
    if(!figure.epocket_chart){
      var y = textFrames.length;
      while(y--){
        var textFrame = textFrames[y];       
        if( collides(figure.geometricBounds, textFrame.geometricBounds) ){
          figure.caption = textFrame;
          // textFrames.splice(y, 1);        //what does that do anyway
          break;
        }        
      }  
    }    
    this.figures.push(figure);    
  }  
};
  
Aside.prototype.toHTML = function(){  
  var text = '';
  
  var textFrames = this.zone.textFrames;
  var images = this.zone.images;  
  var figures = this.figures; 

  var aside_objects = textFrames.concat(figures);
  aside_objects.sort(grid_sort);
  var l = aside_objects.length;
  
  for(var x = 0; x < l; x++){
  	// alert(x+' of '+l);
    var object = aside_objects[x];    
    switch(true){
      case object.constructor.name == 'TextFrame': 
      	var frameText = '';
        frameText += '<div class="clearfix"></div>\r';
        var textFrame = object;
        // log('\r\r'+text);
        frameText += process_textFrame(textFrame);    

        if(frameText.match(/<div class="(real-world-action|gray-border-radius mt-4)/)) //dirty removing duplicate headers fix (RWA + SECL so far)
        {
        	// alert('duplicate headers fix');
        	var headerText = frameText.match(/<h.*?>(.*?)<\/h.>/)[0].replace(/<h.*?>(.*?)<\/h.>/, '$1');
        	// var duplicateRegex = new RegExp('<p>'+headerText.replace(/\s*(<.*?>)*\s*/g, '').replace(/\&\#\w+\;/g, '').replace(/\W+/g, '')+'<\\/p>', '');
        	frameText = frameText.split(/(\r|\n)/);
        	for(var t = 0; t < frameText.length; t++)
        	{
        		// alert(frameText[t].replace(/\s+(<.*?>)*/g, '').replace(/(<.*?>)*\s+/g, '').replace(/\&\#\w+\;/g, '').replace(/\W+/g, '').replace(/(span(classblue)?|^p|p$|strong)/g, '') + '\r' + headerText.replace(/\s*(<.*?>)*\s*/g, '').replace(/\&\#\w+\;/g, '').replace(/\W+/g, ''));
        		if(frameText[t].match(/<p>/) && frameText[t].replace(/\s+(<.*?>)*/g, '').replace(/(<.*?>)*\s+/g, '').replace(/\&\#\w+\;/g, '').replace(/\W+/g, '').replace(/(span(classblue)?|^p|p$|strong)/g, '') == headerText.replace(/\s*(<.*?>)*\s*/g, '').replace(/\&\#\w+\;/g, '').replace(/\W+/g, '')) //.replace(/(span(classblue)?|^p|p$|strong)/g, '') 
        		{
        			// alert('found!');
        			frameText.splice(t, 1);
        			t = frameText.length; //just once
        		}
        	}
        	frameText = frameText.join('\r');
        }
        else if(frameText.match(/<div class="yellow-box mt-4 mb-4">/))
        {
        	frameText = frameText.replace(/(<h4>.*?)(\(.*?\))(<\/h4>)/g, '$1<span>$2</span>$3');
        }

        text += frameText;

        if(text.match(/<div class="lang-transfer/)) //dirty lang transfer fix
        {
        	text = text.replace(/(<div class="lang-transfer mt-4">(\r|\n)<div>(\r|\n)<h6>Language<br>Transfer Support<\/h6><img class="svg-icon" src="\/images\/shared\/language.svg" alt="">(\r|\n)<\/div>(\r|\n)<div>(\r|\n))(<\/div>)(\r|\n)<div class="clearfix"><\/div>(\r|\n)<section>(\r|\n)((.*?(\r|\n))*?)<\/section>/mg, '$1$11$7');
        }
      break;
      case object.name == 'Figure':
        var figure = object;
        if(figure.epocket_chart)
        {
          text += epocket_chart();
        }
        else if(figure.ignored)
        {
          log('ignored an image on the ignore list');
        }
        else
        {
          var captionText = '';
          captionText += figure.toHTML(this.captioned_images);  
          // alert(captionText);
          text += captionText;
        }
      break;
    }    
  }  
  
  return text;
};

/*
function ImageObject(object){
  this.xcode = object.xcode;
  this.data_type = 'ebook';
  this.data_pages = object.pages;
  this.display_name = object.display_name;
}

function Figure(image){
  this.id = image.id;
  this.name = 'Figure';
  this.constructor = {name: 'Figure'};
  this.image = image;
  this.image_name = image.allGraphics[0].itemLink.name;  
  this.image.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;  
  this.caption_boundary = 15;
  this.geometricBounds = [this.image.geometricBounds[2]-30, this.image.geometricBounds[1], this.image.geometricBounds[2]+this.caption_boundary, this.image.geometricBounds[3]];
  this.full_image_name = !!image.constructor.name.match(/group/i) ? image.allGraphics[0].itemLink.name.replace(/\..*$/, '.png') : image.allGraphics[0].itemLink.name.replace(/\..*$/, '.jpg');  
  this.full_image_name = this.full_image_name.remove_accents();  
  this.caption = {contents: ''};
  this.epocket_chart = this.image.allGraphics[0].itemLink.name == 'epocket-chart-logo.psd' ? true : false;
  this.width = image.geometricBounds[3] - image.geometricBounds[1];  
  this.group = this.image.constructor.name == 'Group' ? true : false;
  this.image_objects = [];  
  if(!this.epocket_chart){this.process();}  
}

Figure.prototype.process_image_object = function(image){
  var image_name = image.allGraphics[0].itemLink.name;  
  var product = get_ebook_products(image_name);
  // if(!product){
  //   var xcode = find_product_code_by_title(image_name); 
  //   product = {xcode: xcode, pages: '', display_name: ''};
  // }
  this.image_objects.push(new ImageObject(product));
};

Figure.prototype.process_group = function(group){
  var rectangles = group.rectangles;
  var l = rectangles.length;
  for(var x = 0; x < l; x++){
    var rectangle = rectangles[x];        
    this.process_image_object(rectangle);
  }
  this.image_objects = this.image_objects.reverse();
};

Figure.prototype.process = function(){
  this.image_link = create_image_file(this.image, current_package_folder, current_images_path);  
  if(this.group){
    this.process_group(this.image);
  }else{
    this.process_image_object(this.image);
  }
};

Figure.prototype.toHTML = function(){
  var text = '';      
  if(this.group){
    text += '<div class="col-xs-12">\r';
    text += '<figure class="group">\r';
  }else{
    text += '<figure'+(this.width >= 150 ? '' : ' class="portrait"')+'>\r';  
  }  
  var image_object = this.image_objects[0];
  try
  {
  	switch(true){
	    case this.group:
	      text += '<img src="'+this.image_link+'" alt="Image Thumbnail" onclick="toggle_links(\'figure_ul_'+this.id+'\')">\r';  
	    break;
	    case !!image_object.xcode:    
	      text += '<a href="javascript" data-extLink="javascript" data-code="'+image_object.xcode+'" data-type="'+image_object.data_type+'"'+( image_object.data_pages ? ' data-pages="'+image_object.data_pages+'"' : '')+'>\r';
	      text += '<img src="'+this.image_link+'" alt="Image Thumbnail">\r';  
	      text += '</a>\r';
	    break; 
	    default:
	      text += '<img src="'+this.image_link+'" alt="Image Thumbnail">\r';
	}
  }
  catch(e)
  {
  	text += '<img src="'+this.image_link+'" alt="Image Thumbnail">\r';
  	log('!!!!!!! Error! Something is up with this one, so it defaulted to just an image! Probably should be something else. ' + this.image_link);
  }

  if(!!this.caption){ text += '<figcaption>'+this.caption.contents+'</figcaption>\r'; }
  if(this.group){
    var l = this.image_objects.length;
    var list_top = l >= 10 ? 15 : 25;
    text += '<ul id="figure_ul_'+this.id+'" style="top: '+list_top+'%;">\r';
    text += '<span class="glyphicon glyphicon-remove" onclick="toggle_links(\'figure_ul_'+this.id+'\')"></span>\r';
    for(var x = 0; x < l; x++){
      var image_object = this.image_objects[x];
      text += '<li><a href="javascript" data-extLink="javascript" data-code="'+image_object.xcode+'" data-type="'+image_object.data_type+'"'+( image_object.data_pages ? ' data-pages="'+image_object.data_pages+'"' : '')+'>'+image_object.display_name+'</a></li>\r';
    }
    text += '</ul>\r';
  }
  text += '</figure>\r';
  if(this.group){
    text += '</div>\r';
  }
  // log(this.image_name.replace(/\.\w+$/, '')+' - '+ ( !!this.image_name.match(/\p\d+/) ? this.image_name.match(/\p\d+/)[0] : '' ) );
  return text;
};
*/

function main_lesson(textFrames){  
  var text = '';
  
  var l = textFrames.length;
  for(var x = 0; x < l; x++){
    var textFrame = textFrames[x];
    var firstParagraph = textFrame.paragraphs[0];    
    var firstParagraphStyle = firstParagraph.appliedParagraphStyle.name;
    // var standards = !!firstParagraphStyle.match(/ccss/i) ? true : false;
    var standards = false;
    if(!standards){text += process_textFrame(textFrame);}
  }
  
  return text;
}

function header(textFrame, full_width){
  try
  {
	  var text = '';
	  var contents = textFrame.paragraphs[0].contents.replace(/\n|\r|\uFEFF/g, '');
	  var msl_icon_header =  !!textFrame.paragraphs[0].rectangles.length > 0 && !!textFrame.paragraphs[0].rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false;
      var mslTextHeader = msl_icon_header ? '&nbsp;<img class="img-fluid" style="height: 1em" src="/images/shared/multisensory_learning_icon.png">' : '';
	  if(!!full_width){
	    text += '<div class="col-md-12">\r';
	  }else{
	    text += '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-4"></div>\r';
	    text += '<div class="col-xs-12 col-sm-12 col-md-7 col-lg-8">\r';
	  }

	  //indicators
	  var indicators = '';
	  if(region == 'florida'){
		var indicatorsFrame = get_textFrame_by_label(textFrame.parentPage, 'indicators');
		if(!!indicatorsFrame)
		{
			indicators = indicatorsFrame.contents.replace(/^\s+/, '').replace(/\s+$/, '').replace(/\s+/, ' ');
		}
	  }
	  
	  if(current_grade.match(/[k12]/i))
	  	text += '<h2 class="day'+current_day+'-clr">'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">')+indicators+'</span></small>'+mslTextHeader+'</h2>';
	  else
	  	text += '<h2 class="week'+current_week+'-clr">'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">')+indicators+'</span></small>'+mslTextHeader+'</h2>';

	  
	  text += '</div>\r';
	  // log(textFrame.paragraphs[0].contents.replace(/\n|\r|\uFEFF/g, ''));
	  return text;
   }
   catch(e)
   {
   	  log('header failed on a probably empty textframe? Missing h2');
   	  if(!!full_width){
	    text += '<div class="col-md-12">\r';
	  }else{
	    text += '<div class="col-xs-12 col-sm-12 col-md-5 col-lg-4"></div>\r';
	    text += '<div class="col-xs-12 col-sm-12 col-md-7 col-lg-8">\r';
	  }	  
	  text += '</div>\r';
	  // log(textFrame.paragraphs[0].contents.replace(/\n|\r|\uFEFF/g, ''));
	  return text;
   }
}

function epocket_chart(){
  var text = '';
  var epocket_chart_xcode = false;
  try
  {
  	epocket_chart_xcode = get_epocketchart_code(current_grade+current_unit+current_week+current_day).xcode;
  }
  catch(e)
  {
  	log('epocket_chart epocket_chart_xcode failed, go back to this');
  }
  text += '<figure class="epocket_chart">\r';
  if(!!epocket_chart_xcode){
    text += '<a href="javascript" data-extLink="javascript" data-code="'+epocket_chart_xcode+'" data-type="epocketchart">\r';
    text += '<img src="/images/shared/epocketchart.png">\r';
    text += '</a>\r';
  }else{
    text += '<img src="/images/shared/epocketchart.png">\r';
  }  
  text += '</figure>\r';
  return text;
}

function additional_materials_section(textFrame){
  var text = '';
  if(isPhonicsLesson) //ASSUMES THERE WAS LEARNING TARGETS BEFORE (there should always be, if there are materials in a phonics lesson)
  {
	text += '</div>\r';
	text += '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\r';
  }
  text += '<h5 class="blue">'+textFrame.paragraphs[0].contents+'</h5>\r';  //had mb-4, might not need it
  // text += '<h5 class="mt-4 blue">'+getTerm('additional_materials', language).plain+'</h5>\r';  
  text += process_paragraphs(textFrame);
  if(isPhonicsLesson) //close it up
  {
	text += '</div>\r';
	text += '</div>\r';
	text += '</div>\r';
  }
  return text;
}

function handwriting_practice_section(textFrame){
  var text = '';
  text += '<div class="handwriting mt-4 mb-4">\r';
  text += '<h5><span class="icon-handwriting"></span>'+getTerm('handwriting_practice', language).plain+'</h5>\r';
  text += process_paragraphs(textFrame);
  text += '</div>\r';
  return text;
}

function corrective_feedback_section(textFrame){
  var text = '';
  text += '<div class="corrective_feedback mt-4 mb-4">\r';
  text += '<h3>'+getTerm('corrective_feedback', language).plain+'</h3>\r';
  // text += '<ul>\r';
  // text += '<li>';

  var paragraphsText = process_paragraphs(textFrame);
  // paragraphsText = paragraphsText.replace(/<span class="teacher_talk">(\(.*?\))<\/span>/g, '<span>$1</span>');
  paragraphsText = paragraphsText.replace(/<\/h3>/, '</h3>\r<ul>')
  paragraphsText = paragraphsText.replace(/<p>/g, '<li>');
  paragraphsText = paragraphsText.replace(/<\/p>/g, '</li>');
  paragraphsText = paragraphsText.replace(/>q\s/g, '></li>\r<li>');
  // paragraphsText = paragraphsText.replace(/\r/g, '</li>\r<li>');
  // paragraphsText = paragraphsText.replace(/<\/li><li>/, '');

  text += paragraphsText;
  // text += '</li>\r';
  text += '</ul>\r';
  text += '</div>\r';

  return text;
}

// function conferring_prompt_section(textFrame){
//   var text = '';
//   text += '<section class="conferring_prompt day'+current_day+'-bg-3">\r';
//   if(current_grade.match(/[k12]/i)) text += '<h3 class="day'+current_day+'-clr">'+getTerm('conferring_prompt', language).plain+'</h3>\r';
//   else text += '<h3 class="week'+current_week+'-clr">'+getTerm('conferring_prompt', language).plain+'</h3>\r';
//   text += process_paragraphs(textFrame);
//   text += '</section>\r';
//   return text;
// }

function learning_targets_section(textFrame){  
  var text = '';
  if(isPhonicsLesson) //ASSUMES THERE IS MATERIALS AFTER (there should always be, if there are learning targets in a phonics lesson)
  {
  	text += '<div class="fluid-container">\r';
	text += '<div class="row">\r';
	text += '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\r';
  }
  text += '<div class="learning-targets mb-4">\r'
  text += '<div><h5>'+getTerm('learning_targets', language).plain+'</h5></div>\r';
  text += '<div>\r';
  text += process_paragraphs(textFrame);
  text += '</div>\r';
  text += '</div>\r';
  return text;
}

function mentor_writing_prompt_section(textFrame){  
  var text = '';
  text += '<div class="mwp mb-4">\r';
  text += '<div></div>\r';
  text += '<div>\r';
  text += '<h5>'+textFrame.paragraphs[0].contents+'</h5>\r';
  text += process_paragraphs(textFrame);
  text += '</ul>\r';
  text += '</div>\r';
  text += '</div>\r';
  text = text.replace(/<p>.*?\w+\sWriting\sPrompt.*?<\/p>/i, '').replace(/<p>Be sure to include:?\s*?<\/p>/i, '<b>Be sure to include:<\/b>\r<ul>');
  if(!text.match(/<ul>/)) text = text.replace(/<\/ul>/, '');
  return text;
}

// function mentor_writing_prompt_section(textFrame){  
//   var text = '';
//   text += '<div class="mwp mt-4">\r';
//   text += '<div></div>\r';
//   text += '<div>\r';
//   text += '<h5>'+getTerm('mentor_writing_prompt', language).plain+'</h5>\r';
//   text += process_paragraphs(textFrame);
//   text += '</ul>\r';
//   text += '</div>\r';
//   text += '</div>\r';
//   text = text.replace(/<p>.*?Mentor\sWriting\sPrompt.*?<\/p>/i, '').replace(/<p>Be sure to include:?\s*?<\/p>/i, '<b>Be sure to include:<\/b>\r<ul>');
//   if(!text.match(/<ul>/)) text = text.replace(/<\/ul>/, '');
//   return text;
// }

function student_writing_prompt_section(textFrame){  
  var text = '';
  text += '<div class="mwp mt-4">\r';
  text += '<div></div>\r';
  text += '<div>\r';
  text += '<h5>'+getTerm('student_writing_prompt', language).plain+'</h5>\r';
  text += process_paragraphs(textFrame);
  text += '</ul>\r';
  text += '</div>\r';
  text += '</div>\r';
  text = text.replace(/<p>.*?Student\sWriting\sPrompt.*?<\/p>/i, '').replace(/<p>Be sure to include:?\s*?<\/p>/i, '<b>Be sure to include:<\/b>\r<ul>');
  if(!text.match(/<ul>/)) text = text.replace(/<\/ul>/, '');
  return text;
}

// function independent_practice_section(textFrame){
//   var text = '';
//   text += '<section class="small_group_instruction">\r';
//   text += process_paragraphs(textFrame);
//   text += '</section>\r';
//   return text;
// }

function msl_section(textFrame){
  var text = '';

  text += '<div class="gray-border-box mt-4">\r';
  text += '<img class="img-fluid" style="height: 50px" src="/images/shared/multisensory_learning_icon.png">\r';
  // text += '<img class="ml svg-icon" src="/images/shared/ml.svg" alt="">\r';
  // text += '<h6><small>'+getTerm('msl', language).plain+'</h6>\r';
  text += '<h5>'+textFrame.paragraphs[0].contents+'</h5>\r';			
  text += process_paragraphs(textFrame);
  text += '</div>\r';
  return text;
}

function dots(){
  var text = '';
  text += '<div class="dots">\r';
  text += '<div></div>\r';
  text += '<div></div>\r';
  text += '<div></div>\r';
  text += '</div>\r';
  return text;
}

function standards_section(textFrame){		
  var text = '';
  text += '<section class="standards">\r';
  text += process_paragraphs(textFrame);
  text += '</section>\r';
  return text;
}

function ield_section(textFrame, msl_ield){
  var text = '';  
  text += '<div class="yellow-box mt-4 mb-4">\r';
  var mslText = msl_ield ? '&nbsp;<img class="img-fluid" style="height: 2em" src="/images/shared/multisensory_learning_icon.png">' : ''; //different, 2em
  // text += '<h5><span class="icon-ield"></span> '+getTerm('integrated_ield', language).plain+'</h5>\r';
  text += '<h5><span class="icon-ield"></span> '+textFrame.paragraphs[0].contents+mslText+'</h5>\r';
  if(isPhonicsLesson)
  {
  	text += '<div class="fluid-container">\r';
	text += '<div class="row">\r';
	text += '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">\r';
  }
  text += process_paragraphs(textFrame);
  text = text.replace(/<p>(<strong>)?(Moderate|Substantial) Support (<\/strong>)?(.*?)<\/p>/ig, '<h4><strong>$2 Support </strong>$4</h4>');
  text = text.replace(/<h4>Light Support <\/strong>/i, '<h4><strong>Light Support </strong>');
  if(isPhonicsLesson)
  {
  	// text = text.replace(/<\/ul>(\r|\n)<h4/g, '</ul>\r</div>\r<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">\r<ol>\r<h4');
	text = text.replace(/<h4>(<strong>)?(Moderate|Substantial) Support (<\/strong>)?/g, '</div>\r<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">\r<h4><strong>$2 Support </strong>');
	text += '</div>\r';
	text += '</div>\r';
	text += '</div>\r';
  }
  text += '</div>\r';  
  return text;
}

function quick_links_section(titles){								//no updated version, is this even a thing? pretty sure it's K-2 only
  var text = '';
  text += '<section class="quick_links col-xs-12">\r';
  text += '<p><strong><i>'+getTerm('quick_links', language).plain+': </i></strong></p>\r';
  text += '<ul class="nav nav-pills">\r';
  var l = titles.length;
  for(var x = 0; x < l; x++){
    var title = titles[x];
    text += '<li'+( x == 0 ? ' class="active"' : '' )+'><a href="#d'+x+'">'+title+'</a></li>\r';
  }
  text += '</ul>\r';
  text += '</section>\r';
  return text;
}

function constructive_conversation_section(textFrame){				//no updated version
  var text = '';  
  text += '<section class="observation_checklist">\r';
  text += '<h3><span class="lesson-icon-checkbox"></span>&nbsp;'+getTerm('observation_checklist', language).plain+'</h3>\r';
  text += process_paragraphs(textFrame);
  text += '</section>\r';  
  return text;
}

//BEGIN NEW FOR BA2

function community_connection_section(textFrame){					//no updated version
  var text = '';  
  text += '<section class="community_connection">\r';
  text += '<h3><span class="lesson-icon-checkbox"></span>&nbsp;'+getTerm('community_connection', language).plain+'</h3>\r';
  text += process_paragraphs(textFrame);
  text += '</section>\r';  
  return text;
}

function sing_swing_learn_section(textFrame){
  var text = '';  
  text += '<div class="blue-border-radius mt-5">\r';
  text += '<div class="row">\r';
  text += '<div class="col-sm-4">\r';
  text += '<img class="sing svg-icon" src="/images/shared/sing.svg" alt="">\r';
  text += '</div>\r';
  text += '<div class="col">\r';
  text += process_paragraphs(textFrame);
  // text += '<p>Play the unit song throughout the unit to help build students’ knowledge and oral vocabulary. Have students participate through singing, movement, and dance.</p>\r';
  text += '</div>\r';
  text += '</div>\r';
  text += '</div>\r';
  return text;
}

function developing_vocabulary_section(textFrame){
  var text = '';  
  text += ' <div class="blue-border-box mt-4 mb-4">\r';
  text += '<h5 class="blue">'+textFrame.paragraphs[0].contents+'</h5>\r';
  text += process_paragraphs(textFrame);
  text += '</div>\r';  
  return text;
}

function grammar_section(textFrame){
  var text = '';  
  text += '<div class="blue-border-radius mt-4 mb-4">\r';
  text += '<h5>'+textFrame.paragraphs[0].contents+'</h5>\r';		
  text += process_paragraphs(textFrame);
  text += '</div>\r';  
  return text;
}

function pd_tip_section(textFrame){
  var text = '';  
  text += '<div class="pd mt-5 mb-4">\r';
  text += '<span class="icon-pd"></span>\r';
  text += '<h5>'+getTerm('pd_tip', language).plain+'</h5>\r';
  text += '<hr>\r';
  text += process_paragraphs(textFrame);
  text += '<span class="icon-crv"></span>\r';
  text += '</div>\r';
  return text;
}

function possible_response_section(textFrame){
  var text = '';  
  text += '<div class="pink-border-box mt-4">\r';
  text += '<h5><span class="lesson-icon-checkbox"></span>&nbsp;'+getTerm('possible_response', language).plain+'</h5>\r';
  text += process_paragraphs(textFrame);																						//h6 possible, for b-heads
  text += '</div>\r';  
  return text;
}

function buildreflectwrite_section(textFrame){
  var text = '';  
  text += '<div class="blue-border-box mt-4">\r';
  text += '<h5 class="brw"><span>Build</span><span>Reflect</span><span>Write</span></h5>\r';	//NOT IN TERMS
  text += process_paragraphs(textFrame);
  text += '</div>\r';  
  return text;
}

function language_transfer_support_section(textFrame){
  var text = '';  
  text += '<div class="lang-transfer mt-4">\r';
  text += '<div>\r';
  text += '<h6>'+getTerm('language_transfer_support', language).plain+'</h6><img class="svg-icon" src="/images/shared/language.svg" alt="">\r';
  text += '</div>\r';  
  text += '<div>\r';  
  text += process_paragraphs(textFrame);
  text += '</div>\r';  
  return text;
}

function advance_preparation_section(textFrame){		//maybe this isn't a real thing, it's unclear...uses materials styles but has rounded corners like grammar
	var text = '';
	text += '<div class="blue-border-radius">\r';
	text += '<h5>'+getTerm('advance_preparation', language).plain+'</h5>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	return text;
}

function ways_to_scaffold_section(textFrame){
	var text = '';
	text += '<div class="gray-box mt-4">\r';
	text += '<h5>'+textFrame.paragraphs[0].contents+'</h5>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	return text;
}

function model_section(textFrame){
	var text = '';
	text += '<div class="gray-border-box mt-4">\r';
	text += '<h6>'+process_paragraphs(textFrame).replace(/<\/?p>/g, '')+'</h6>\r';
	text += '</div>\r';
	return text;
}

function conferring_prompt_section(textFrame){
	var text = '';
	text += '<div class="pink-border-box mt-4">\r';
	text += '<h6>'+process_paragraphs(textFrame).replace(/<\/?p>/g, '')+'</h6>\r';
	text += '</div>\r';
	return text;
}

function small_group_section(textFrame){
	var text = '';
	text += '<div class="small-group mt-4">\r';
	text += '<div class="row">\r';
	text += '<div><span class="icon-smallgroup"></span></div>\r';
	text += '<div class="col">\r';
	text += '<h5 class="blue">'+textFrame.paragraphs[0].contents+'</h5>\r';	
	text += '</div>\r';
	text += '</div>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	return text;
}

function small_group_phonics_header_section(){ //this one's different! doesn't take a textframe because it's boilerplate!
	var text = '';
	text += '<div class="small-group-phonics mt-4">\r';
	text += '<div class="row">\r';
	text += '<div><span class="icon-smallgroup-big"></span></div>\r';
	text += '<div class="col">\r';
	text += '<h2 class="blue">'+getTerm('small_group_phonics_title', language).plain+'</h2>\r';	
	text += '<p>'+getTerm('small_group_phonics_sentence', language).plain+'</p>';
	text += '</div>\r';
	text += '</div>\r';
	text += '</div>\r';
	return text;
}

function observation_checklist_section(textFrame){
	var text = '';
	text += '<div class="blue-border-radius">\r';
	text += '<div class="row">\r';
	text += '<div> <span class="icon-observation"><span class="path1"></span></span></span></div>\r';
	text += '<div class="col">\r';
	text += '<h5>'+textFrame.paragraphs[0].contents+'</h5></div>\r';	
	text += '<div><span class="icon-collaborativeconversation"></span></div>\r';
	text += '</div>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	return text;
}

function secrl_section(textFrame){
	var text = '';
	text += '<div class="gray-border-radius mt-4">\r';
	text += '<h5 class="red">'+getTerm('secrl', language).plain+'</h5>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	return text;
}

function real_world_action_section(textFrame){
	var text = '';
	text += '<div class="real-world-action">\r';
	text += '<h5>'+getTerm('real_world_action', language).plain+'</h5>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	return text;
}

function formative_assessment_section(textFrame){
	var text = '';
	text += '<div class="row mt-4">\r';
	text += '<div class="col-md-6">\r';
	text += '<h5 class="blue">'+getTerm('formative_assessment', language).plain+'</h5>\r';
	text += process_paragraphs(textFrame);
	text += '</div>\r';
	text += '<div class="col-md-6">\r';
	if(region == 'florida')
	{
		switch(current_grade.toLowerCase())
		{
			case 'k': text += '<a href="javascript" data-extLink="javascript" data-code="X60601" data-type="html">\r'; break;
			case '1': text += '<a href="javascript" data-extLink="javascript" data-code="X60602" data-type="html">\r'; break;
			case '2': text += '<a href="javascript" data-extLink="javascript" data-code="X60603" data-type="html">\r'; break;
			case '3': text += '<a href="javascript" data-extLink="javascript" data-code="X60604" data-type="html">\r'; break;
			case '4': text += '<a href="javascript" data-extLink="javascript" data-code="X60605" data-type="html">\r'; break;
			case '5': text += '<a href="javascript" data-extLink="javascript" data-code="X60606" data-type="html">\r'; break;
			case '6': text += '<a href="javascript" data-extLink="javascript" data-code="X60607" data-type="html">\r'; break;
		}
	}
	else if(region == 'national')
	{
		switch(current_grade.toLowerCase())
		{
			case 'k': text += '<a href="javascript" data-extLink="javascript" data-code="X70398" data-type="html">\r'; break;
			case '1': text += '<a href="javascript" data-extLink="javascript" data-code="X70399" data-type="html">\r'; break;
			case '2': text += '<a href="javascript" data-extLink="javascript" data-code="X70400" data-type="html">\r'; break;
			case '3': text += '<a href="javascript" data-extLink="javascript" data-code="X70401" data-type="html">\r'; break;
			case '4': text += '<a href="javascript" data-extLink="javascript" data-code="X70402" data-type="html">\r'; break;
			case '5': text += '<a href="javascript" data-extLink="javascript" data-code="X70403" data-type="html">\r'; break;
			case '6': text += '<a href="javascript" data-extLink="javascript" data-code="X70404" data-type="html">\r'; break;
		}
	}
	else
	{
		switch(current_grade.toLowerCase())
		{
			case 'k': text += '<a href="javascript" data-extLink="javascript" data-code="X60608" data-type="html">\r'; break;
			case '1': text += '<a href="javascript" data-extLink="javascript" data-code="X60609" data-type="html">\r'; break;
			case '2': text += '<a href="javascript" data-extLink="javascript" data-code="X60610" data-type="html">\r'; break;
			case '3': text += '<a href="javascript" data-extLink="javascript" data-code="X60611" data-type="html">\r'; break;
			case '4': text += '<a href="javascript" data-extLink="javascript" data-code="X60612" data-type="html">\r'; break;
			case '5': text += '<a href="javascript" data-extLink="javascript" data-code="X60613" data-type="html">\r'; break;
			case '6': text += '<a href="javascript" data-extLink="javascript" data-code="X60614" data-type="html">\r'; break;
		}
	}
	text += '<img class="img-thumbnail" src="/images/shared/assessments_grade'+current_grade.toLowerCase()+'.png" alt="">\r';
	text += '</a>\r';
	text += '</div>\r';
	// default: text += '<div class="col-md-6"><img class="img-thumbnail" src="/images/shared/image-placeholder.jpg" alt=""></div>\r';
	text += '</div>\r';
	return text;
}

//MISSING:

//sample conferring prompt (in indd)
//real world action (in indd)
//essential question
//TEQC?
//community connection


//END NEW FOR BA2

function small_group_instruction_full(textFrame){
  var text = '';
  text += '<div class="col-xs-12 col-sm-12 col-md-45">\r';
  text += '<section class="small_group_instruction">\r';
  text += '<h2>'+getTerm('small_group_instruction', language).plain+' </h2>\r';  
  
  var paragraphs = textFrame.paragraphs;
  var div_opened, ol_opened, ul_opened = false;  
  var l = paragraphs.length;
  for(var x = 1; x < l; x++){
    var paragraph = paragraphs[x];
    var contents = paragraph.contents;
    var listType = paragraph.bulletsAndNumberingListType;
    var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
    var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
    var has_textFrame = paragraph.textFrames.length > 0 ? true : false;    
    var groups = paragraph.groups;
    var has_group = groups.length > 0 ? true : false;
    var has_rectangle = paragraph.rectangles.length > 0 ? true : false;
    var ield_icon = has_textFrame ? ( !!paragraph.textFrames[0].contents.match(getTerm('ield', language).regex) ? true : false ) : false;    
    if(paragraph.ruleAbove){
      text += '<hr>\r';
    }
    switch(true){
      case (bullet && !ul_opened): ul_opened = true; text += '<ul>\r'; break;
      case (ul_opened && !bullet): ul_opened = false; text += '</ul>\r'; break;
    } 
    switch(true){      
      case has_group: text += process_groups(groups); break;
      case has_rectangle: text += process_rectangles(paragraph.rectangles); break;      
      case has_textFrame && !ield_icon: text += export_object(paragraph.textFrames[0]); break;
      case pointSize == 14: text += '<h3>'+contents+'</h3>\r'; break;
      default: text += '<p>'+process_words(paragraph)+'</p>\r';
    }
    if(div_opened){ div_opened = false; text += '</div>\r'; }
    if(ul_opened){ ul_opened = false; text += '</ul>\r'; }
  }
  text += '</section>\r';
  text += '</div>\r';
  text += '<div class="arrow col-xs-12 col-sm-12 col-md-05">\r';
  text += '<div><div></div></div>\r';
  text += '</div>\r';
  text = text.replace(/\uFEFF/g, '');
  text = text.replace(/<\/strong>\s*<strong>/g, '');
  text = text.replace(/(<\/strong>\/\s*)<\/strong>/g, '$1');
  text = text.replace(/<strong>\s*(\/<strong>)/g, '$1');
  text = text.replace(/<\/em>\s*<em>/g, ''); 
  text = text.replace(/<\/u>\s*<u>/g, '');
  text = text.replace(/<\/s>\s*<s>/g, '');
  text = text.replace(/<\/span>\s*<span class="teacher_talk">/g, '');    
  return text;
}



function small_group_instruction(textFrame){
  var text = '';
  text += '<div class="col-xs-12 col-sm-12 col-md-45">\r';
  text += '<section class="small_group_instruction">\r';
  text += '<h2>'+getTerm('small_group_instruction', language).plain+' </h2>\r';  
  
  var paragraphs = textFrame.paragraphs;
  var div_opened, ol_opened, ul_opened = false;  
  var l = paragraphs.length;
  for(var x = 1; x < l; x++){
    var paragraph = paragraphs[x];
    var contents = paragraph.contents;
    var listType = paragraph.bulletsAndNumberingListType;
    var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
    var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
    var groups = paragraph.groups;
    var has_group = groups.length > 0 ? true : false;
    var has_rectangle = paragraph.rectangles.length > 0 ? true : false;
    var has_textFrame = paragraph.textFrames.length > 0 ? true : false;
    var ield_icon = has_textFrame ? ( !!paragraph.textFrames[0].contents.match(getTerm('ield', language).regex) ? true : false ) : false;    
    if(paragraph.ruleAbove){
      break;
    }else{
      switch(true){
        case (bullet && !ul_opened): ul_opened = true; text += '<ul>\r'; break;
        case (ul_opened && !bullet): ul_opened = false; text += '</ul>\r'; break;
      } 
      switch(true){        
        case has_group: text += process_groups(groups); break;
        case has_rectangle: text += process_rectangles(paragraph.rectangles); break;         
        case has_textFrame && !ield_icon: text += export_object(paragraph.textFrames[0]); break;
        case pointSize == 14: text += '<h3>'+contents+'</h3>\r'; break;
        default: text += '<p>'+process_words(paragraph)+'</p>\r';
      }
      if(div_opened){ div_opened = false; text += '</div>\r'; }
      if(ul_opened){ ul_opened = false; text += '</ul>\r'; }
    }
  }
  text += '</section>\r';
  text += '</div>\r';
  text += '<div class="arrow col-xs-12 col-sm-12 col-md-05">\r';
  text += '<div><div></div></div>\r';
  text += '</div>\r';
  text = text.replace(/\uFEFF/g, '');
  text = text.replace(/<\/strong>\s*<strong>/g, '');
  text = text.replace(/(<\/strong>\/\s*)<\/strong>/g, '$1');
  text = text.replace(/<strong>\s*(\/<strong>)/g, '$1');
  text = text.replace(/<\/em>\s*<em>/g, ''); 
  text = text.replace(/<\/u>\s*<u>/g, '');
  text = text.replace(/<\/s>\s*<s>/g, '');
  text = text.replace(/<\/span>\s*<span class="teacher_talk">/g, '');    
  return text;
}

function small_group_instruction_bottom(textFrame){
  var text = '';  
  text += '<section class="small_group_instruction">\r';
  text += '<h2>'+getTerm('small_group_instruction', language).plain+' </h2>\r';    
  var paragraphs = textFrame.parentStory.paragraphs;
  var div_opened, ol_opened, ul_opened = false;  
  var l = paragraphs.length;
  var start = false;
  for(var x = 0; x < l; x++){
    var paragraph = paragraphs[x];
    var contents = paragraph.contents;
    var listType = paragraph.bulletsAndNumberingListType;
    var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
    var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
    var has_textFrame = paragraph.textFrames.length > 0 ? true : false;    
    var ield_icon = has_textFrame ? ( !!paragraph.textFrames[0].contents.match(getTerm('ield', language).regex) ? true : false ) : false;    
    var groups = paragraph.groups;
    var has_group = groups.length > 0 ? true : false;
    var has_rectangle = paragraph.rectangles.length > 0 ? true : false;
    if(paragraph.ruleAbove){
      start = true;
    }
    if(start){
      switch(true){
        case (bullet && !ul_opened): ul_opened = true; text += '<ul>\r'; break;
        case (ul_opened && !bullet): ul_opened = false; text += '</ul>\r'; break;
      }
      switch(true){        
        case has_group: text += process_groups(groups); break;
        case has_rectangle: text += process_rectangles(paragraph.rectangles); break;         
        case has_textFrame && !ield_icon: text += export_object(paragraph.textFrames[0]); break;
        case pointSize == 14: 
          if(ield_icon){
            text += '<h3>'+contents.replace(/\n|\r/g, '')+'<span class="icon-ield"></span></h3>\r'; 
          }else{
            text += '<h3>'+contents.replace(/\n|\r/g, '')+'</h3>\r'; 
          }        
        break;
        default: text += '<p>'+process_words(paragraph)+'</p>\r';
      }
      if(div_opened){ div_opened = false; text += '</div>\r'; }
      if(ul_opened){ ul_opened = false; text += '</ul>\r'; }
    } 
  }
  text += '</section>\r';
  
  text = text.replace(/\uFEFF/g, '');
  text = text.replace(/<\/strong>\s*<strong>/g, '');
  text = text.replace(/(<\/strong>\/\s*)<\/strong>/g, '$1');
  text = text.replace(/<strong>\s*(\/<strong>)/g, '$1');
  text = text.replace(/<\/em>\s*<em>/g, ''); 
  text = text.replace(/<\/u>\s*<u>/g, '');
  text = text.replace(/<\/s>\s*<s>/g, '');
  text = text.replace(/<\/span>\s*<span class="teacher_talk">/g, '');    
  return text;
}


 //  ___ _   _ ____  ____     ___  _     _           _       
 // |_ _| \ | |  _ \|  _ \   / _ \| |__ (_) ___  ___| |_ ___ 
 //  | ||  \| | | | | | | | | | | | '_ \| |/ _ \/ __| __/ __|
 //  | || |\  | |_| | |_| | | |_| | |_) | |  __/ (__| |_\__ \
 // |___|_| \_|____/|____/   \___/|_.__// |\___|\___|\__|___/
 //                                   |__/                   


function process_textFrame(textFrame){   
  // alert(textFrame.geometricBounds);
  var text = '';
  var goAhead = true;
  try
  {
  	pre_process_textFrame(textFrame);  
  }
  catch(e)
  {
  	log('! something went wrong with processing a textFrame, it might not be valid!');
  	goAhead = false;
  }
  if(goAhead)
  {	
	  var contents = textFrame.contents;  
	  // alert(contents);
	  // log(contents);
	  var strokeColor = textFrame.strokeColor.name;
	  var strokeType = textFrame.strokeType.name;
	  var fillColor = textFrame.fillColor.name;
	  var firstParagraph = textFrame.paragraphs[0];
	  var firstParagraphContents = firstParagraph.contents;
	  var firstParagraphStyle = firstParagraph.appliedParagraphStyle.name;
	  var tint = textFrame.fillTint;
	  var rounded_corner = textFrame.topLeftCornerOption == CornerOptions.ROUNDED_CORNER ? true : false;
	  var strokeWeight = textFrame.strokeWeight;
	  var strokeTint = textFrame.strokeTint;
	  var scriptLabel = textFrame.label;
	  var skip = textFrame.label == 'skip' ? true : false;
	  var editorial_notes = !!fillColor.match(/eld_bg|c=0 m=0 y=100 k=0/ig) ? true : false;
	  // var independent_practice = !!firstParagraphContents.match(getTerm('independent_practice', language).regex) ? true : false; //but it DOES exist, technically
	  var learning_targets = !!firstParagraphContents.match(getTerm('learning_targets', language).regex) ? true : false;
	  // var student_writing_prompt = !!firstParagraphContents.match(getTerm('writing_prompt', language).regex) ? true : false;  
	  var standards = !!scriptLabel.match(/standards/i) ? true : false;
	  // var standards = false; //FORCED, standards are handled by the differentation script
	  var ield = !!firstParagraphContents.match(getTerm('integrated_ield', language).regex) || !!firstParagraphContents.match(getTerm('supporting_eld', language).regex) ? true : false;
	  var handwriting_practice = !!firstParagraphStyle.match(/handwriting_A-hd/i) ? true : false;
	  // var additional_materials = !!firstParagraphContents.match(getTerm('additional_materials', language).regex) ? true : false;
	  var additional_materials = !!firstParagraphStyle.match(/materials/i) && strokeWeight == '0'? true : false;
	  var sample_conferring_prompt = !!firstParagraphContents.match(getTerm('conferring_prompt', language).regex) && rounded_corner ? true : false;   
	  // var constructive_conversation = !!strokeColor.match(/Benchmark Blue 100C 87M/ig) ? true : false;
	  var community_connection = !!firstParagraphContents.match(getTerm('community_connection', language).regex) ? true : false;
	  // var sing_swing_learn = !!firstParagraphContents.match(getTerm('sing_swing_learn', language).regex) ? true : false;
	  var sing_swing_learn = !!firstParagraphStyle.match(/Sing_Swing/i) ? true : false;
	  var mentor_writing_prompt = !!firstParagraphContents.match(getTerm('mentor_writing_prompt', language).regex) ? true : false;
	  var student_writing_prompt = !!firstParagraphContents.match(getTerm('student_writing_prompt', language).regex) ? true : false;
	  // if(student_writing_prompt || mentor_writing_prompt) alert('mentor: ' + mentor_writing_prompt + ', student: ' + student_writing_prompt);
	  var developing_vocabulary = !!firstParagraphContents.match(getTerm('developing_vocabulary', language).regex) ? true : false;
	  var grammar = !!firstParagraphStyle.match(/grammar|materials/i) && rounded_corner ? true : false;
	  var pd_tip = !!firstParagraphContents.match(getTerm('pd_tip', language).regex) ? true : false;
	  var possible_response = !!firstParagraphContents.match(getTerm('possible_response', language).regex) && rounded_corner ? true : false;
	  var real_world_action = !!firstParagraphContents.replace(/^\W+/, '').match(getTerm('real_world_action', language).regex) && rounded_corner ? true : false;
	  
	  // var teqc = !!firstParagraphContents.match(getTerm('teqc', language).regex) ? true : false;
	  var language_transfer_support = !!firstParagraphContents.match(getTerm('language_transfer_support', language).regex) ? true : false;
	  var advance_preparation = !!firstParagraphContents.match(getTerm('advance_preparation', language).regex) ? true : false; //not sure about this one
	  var ways_to_scaffold = !!firstParagraphContents.match(getTerm('ways_to_scaffold', language).regex) ? true : false;
	  var observation_checklist = !!firstParagraphContents.replace(/^\W+/, '').match(getTerm('observation_checklist', language).regex) ? true : false;
	  var secrl = !!firstParagraphContents.match(getTerm('secrl', language).regex) ? true : false;
	  var formative_assessment = !!firstParagraphContents.match(getTerm('formative_assessment', language).regex) ? true : false;
	  var corrective_feedback = !!firstParagraphContents.match(getTerm('corrective_feedback', language).regex) ? true : false;

	  var small_group_phonics_header = textFrame.paragraphs.length > 1 ? (!!textFrame.paragraphs[1].contents.match(getTerm('small_group_phonics_sentence', language).regex) ? true : false ) : false;
	  var msl_box = !firstParagraphContents.match(/\w/) && firstParagraph.rectangles.length > 0  ? ( !!firstParagraph.rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;
	  var msl_ield = firstParagraph.rectangles.length > 0 ? ( !!firstParagraph.rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;

	  switch(phonicsSmallGroupSituation)
  	  {
  	  	case 1: //the frame after 
	  	  	text += '<div class="fluid-container blue-border-box">\r';
			text += '<div class="row">\r';
			text += '<div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">\r';
			phonicsSmallGroupSituation = 2;
			break;
		case 2: //independent practice frame, probably
			// text += '<!--phonics placeholder 1-->\r';
			// text = text.replace(/<\/section>(\r|\n)<section>(\r|\n)<!--phonics placeholder 1-->/m, '');
			text += '</div>\r';
			text += '<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>\r';
			text += '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">\r';
			phonicsSmallGroupSituation = 3;
			break;
		case 3: //HOLD then RELEASE (might not trigger, then it triggers in the phonics lesson toHTML closing)
			if(ield || handwriting_practice)
			{
				// text += '<!--phonics placeholder 2-->\r';
				// text = text.replace(/<\/section>(\r|\n)<section>(\r|\n)<!--phonics placeholder 2-->/m, '');
			  	text += '<\/div>\r';
				text += '<\/div>\r';
				text += '<\/div>\r';
				phonicsSmallGroupSituation = 0;
			}
			break;
		default:
			break;
  	  }


	  // alert('?');

	  switch(true){
	    case skip: case editorial_notes: break; 
	    // case constructive_conversation: text += constructive_conversation_section(textFrame); break;
	    case handwriting_practice: text += handwriting_practice_section(textFrame); break;
	    // case conferring_prompt: text += conferring_prompt_section(textFrame); break;
	    case standards: text += standards_section(textFrame); break;
	    case learning_targets: text += learning_targets_section(textFrame); break;      
	    // case student_writing_prompt: text += student_writing_prompt_section(textFrame); break;          
	    // case independent_practice: text += independent_practice_section(textFrame); break;       
	    case ield: text += ield_section(textFrame, msl_ield); break;

	    case community_connection: text += community_connection_section(textFrame); break;
	    case sing_swing_learn: text += sing_swing_learn_section(textFrame); break;
	    case mentor_writing_prompt: text += mentor_writing_prompt_section(textFrame); break;
	    case student_writing_prompt: text += student_writing_prompt_section(textFrame); break;
	    case developing_vocabulary: text += developing_vocabulary_section(textFrame); break;
	    case pd_tip: text += pd_tip_section(textFrame); break;
	    case possible_response: text += possible_response_section(textFrame); break;
	    case real_world_action: text += real_world_action_section(textFrame); break;
	    // case small_group: 
	    // 	if(!current_grade.match(/[k12]/i)) text += small_group_instruction_full(textFrame); //idk if this is a good idea (FIX THIS????)
	    // 	else text += small_group_section(textFrame); 
	    // 	break; 
	    // case buildreflectwrite: text += buildreflectwrite_section(textFrame); break;
	    case language_transfer_support: text += language_transfer_support_section(textFrame); break;
	    case advance_preparation: text += advance_preparation_section(textFrame); break;
	    // case model: text += model_section(textFrame); break;
	    case observation_checklist: text += observation_checklist_section(textFrame); break;
	    case secrl: text += secrl_section(textFrame); break;
	    case formative_assessment: text += formative_assessment_section(textFrame); break;
	    case corrective_feedback: text += corrective_feedback_section(textFrame); break;
	    case grammar: text += grammar_section(textFrame); break;
	    case ways_to_scaffold: text += ways_to_scaffold_section(textFrame); break;
	    case small_group_phonics_header: 
	    	text += small_group_phonics_header_section(); 
	    	phonicsSmallGroupSituation = 1; //IT BEGINS
	    	break;
	    case msl_box: text += msl_section(textFrame); break;
	    case additional_materials: text += additional_materials_section(textFrame); break; //keep this last, so many other things use materials paragraph styles :\

	    // case has_table: this.charts.push(new Chart(textFrame)); break;    //phonics! I hope!


	    default:
	      log('geobounds: ' + textFrame.geometricBounds);
	      // try
	      // {
	      	// if(phonicsSmallGroupSituation != 2)
      		text += '<section>\r';

	      	text += process_paragraphs(textFrame);

	      	// if(phonicsSmallGroupSituation != 1 || phonicsSmallGroupSituation != 2) 
      		text += '</section>\r';
	      // }
	      // catch(e)
	      // {
	      // 	log('ERROR: textFrame failed to process, page: ' + textFrame.parentPage.index + ', label: ' + textFrame.label);
	      // }
	  }  
	  text = text.replace(/&(m|n)d;/ig, '&$1dash;');

	  return text;
	}
};

function process_textFrames(textFrames){
  var text = '';
  var l = textFrames.length;
  for(var x = 0; x < l; x++){
    var textFrame = textFrames[x];
    text += process_textFrame(textFrame);      
  }
  return text;
};

function process_paragraphs(object){  
  var text = '';
  var paragraphs = false;
  try{paragraphs = object.paragraphs;}catch(e){log('!!! process_paragraphs failed')}
  if(!!paragraphs)
  {
	  var l = paragraphs.length;
	  var div_opened, ol_opened, ul_opened = false;  
	  var applyUnderstandingTrinary = 0; //0 = no, 2 = armed, 1 = wait one more paragraph
	  for(var x = 0; x < l; x++){
	  	log('process paragraph ' + x);
	    var paragraph = paragraphs[x];
	    var contents = paragraph.contents.replace(/\uFEFF/g, '');
	    contents = contents.replace(/\u2013/g, '&ndash;');    
	    var header_contents = contents.replace(/(\(.*\d+\s*min.*\))/ig, '<span class="minutes">$1');
	    header_contents = header_contents.replace(/(<span class="minutes">(.|\n|\r)*)</ig, '$1</span><');
	    header_contents = header_contents.replace(/\)\W*/ig, ')<br>');
	    find_and_replace(paragraph, '~_', '&md;');
	    var listType = paragraph.bulletsAndNumberingListType;
	    var appliedFont = paragraph.appliedFont.name;
	    var fontStyle = paragraph.fontStyle;
	    var paragraphStyle = paragraph.appliedParagraphStyle.name;
	    var pointSize = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].pointSize : paragraph.words[0].pointSize) : paragraph.pointSize;
	    var color = paragraph.words.length > 0 ? ( paragraph.words[0].characters.length > 1 ? paragraph.words[0].characters[1].fillColor.name : paragraph.words[0].fillColor.name) : paragraph.fillColor.name;
	    var bullet = listType == ListType.NO_LIST ? ( !!contents.match(/^\W*\u2022/) ? true : false ) : true;         
	    var skyblue = !!color.match(/new_bhd|C=62 M=0 Y=1 K=0|small group|C=94 M=0 Y=2 K=0|C=70 M=15 Y=0 K=0|C=100 M=0 Y=0 K=0/ig) ? true : false;
	    var black = !!color.match(/black/i) ? true : false;    
	    var tables = paragraph.tables;
	    var has_table = tables.length > 0 ? true : false;
	    var has_textFrame = paragraph.textFrames.length > 0 ? true : false;
	    var groups = paragraph.groups;
	    var has_group = groups.length > 0 ? true : false;
	    var has_rectangle = paragraph.rectangles.length > 0 ? true : false;
	    var has_oval = paragraph.ovals.length > 0 ? true : false;
	    var has_polygon = paragraph.polygons.length > 0 ? true : false;
	    var red = !!color.match(/small hds|day_red|language|Day 1=m100, y70|Day 1/ig) ? true : false;    
	    var empty = !!paragraph.contents.match(/\w/) ? false : true;
	    var learning_targets = !!paragraph.contents.match(getTerm('learning_targets', language).regex) && !!color.match(/white|paper/i) ? true : false;
	    var a_head = !!paragraphStyle.match(/a.hd/ig) ? true : false;
	    var h3 = ( !!paragraphStyle.match(/lesson_(divider_)?b-hd/ig) || !!color.match(/new_bhd/) ) ? true : false;
	    var h4 = (!!paragraphStyle.match(/lesson_c-hd|eld_b-hd/ig) || (red && pointSize == 9)) ? true : false;
	    var msl_icon = false;
	    try{msl_icon = (a_head || h3) && has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;}catch(e){}
	    var msl_icon_only = false;
	    try{msl_icon_only = empty && has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;}catch(e){}
	    var msl_box = false;
	    try{msl_box = empty && has_textFrame && !!current_grade.match(/[k12]/i) ? (!!paragraph.textFrames[0].paragraphs[0].rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false) : false;}catch(e){}
	    var music_logo = false;
	    try{music_logo = has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/Bec_Music_Video_Icon|HeidiSongs_Logos/i) ? true : false ) : false;}catch(e){} //intelligent: it replaces heidisongs logos, wow!
	    var ield_icon = has_textFrame ? ( !!paragraph.textFrames[0].contents.match(getTerm('ield', language).regex) ? true : false ) : false;    
	    var essential_question = !!paragraphStyle.match(/Essential_question_Body-txt/i) ? true : false;
	    var speech_bubble_icon = !!contents.match(/constructive\sconversation/i) ? true : false; //has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/new_conversation/i)
	    var video_play_icon = !!contents.match(/view\smultimedia/i) ? true : false; //has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/(playvideo_icon|asset)/i) ? true : false ) : false;
	    // var teacher_note = !!paragraphStyle.match(/Lesson_Tchr_Note/ig) ? true : false;
	    // var new_check_icon = has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/new_check|avk/ig) ? true : false ) : false;        
		var check_icon = has_polygon ? true : false;  //!!contents.match(/apply\sunderstanding/i) 
	 	var accesskey_icon = false;
	 	try{accesskey_icon = has_rectangle ? ( !!paragraph.rectangles[0].allGraphics[0].itemLink.name.match(/ese_access_key/i) ? true : false ) : false;}catch(e){}
	    // var weekly_presentations = !!contents.match(getTerm('weekly_presentation', language).regex) ? true : false;
	    var footer = !!contents.match(/Benchmark Education Company/i) ? true : false;
	    var constructive_conversation = !!paragraphStyle.match(/observation_checklist_Bullets/i) ? true : false;
	    var ield_word_bank;
	    try{ield_word_bank = !!paragraphStyle.match(/ield.body-txt|table.body-txt/i) && paragraph.parent.parent.parent.label == 'ield' ? true : false;}catch(e){ield_word_bank = false;}

	    // var sdfds = !!paragraphStyle.match(/sdfds/i) ? true : false;
	    // var sdfds = !!paragraphStyle.match(/sdfds/i) ? true : false;
	    // var sdfds = !!paragraphStyle.match(/sdfds/i) ? true : false;
	    // var sdfds = !!paragraphStyle.match(/sdfds/i) ? true : false;
	    // var sdfds = !!paragraphStyle.match(/sdfds/i) ? true : false;

	    switch(true){
	      case ((ul_opened && !bullet) /*|| listType == ListType.NUMBERED_LIST*/): ul_opened = false; text += '</ul>\r'; break;
	      case ((ol_opened && !bullet && !has_table) /*|| listType == ListType.BULLET_LIST*/): ol_opened = false; text += '</ol>\r'; break; //don't break the order for a table!
	    }
	    switch(true){
	      case (bullet && !ul_opened && listType == ListType.BULLET_LIST): ul_opened = true; text += '<ul>\r'; break;
	      case (bullet && !ol_opened && listType == ListType.NUMBERED_LIST): ol_opened = true; text += '<ol>\r'; break;      
	    }    
	    var mslText = msl_icon ? '&nbsp;<img class="img-fluid" style="height: 1em" src="/images/shared/multisensory_learning_icon.png">' : ''; //can be on anything
	    switch(true){ 
	      case msl_icon_only: break;
	      case has_table: text += build_tables(tables); log('has table!'); break;      
	      case msl_box: text += msl_section(paragraph.textFrames[0]); break; 
	      case learning_targets: case (a_head && x == 0): case footer: break;
	      case a_head: 
	      	text += '<h2>'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">')+'</span></small>'+mslText+'</h2>'; 
	        // switch(true){     
	        //   case ield_icon: 
	        //   	if(current_grade.match(/[k12]/i)) 
	        //   		text += '<h2 class="day'+current_day+'-clr">'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">').replace(/(\n|\s)*<small>/, '&nbsp;<span class="lesson-icon-ield"></span> <small>')+'</span></small></h2>'; 
	        //   	else 
	        //   		text += '<h2 class="week'+current_week+'-clr">'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">').replace(/(\n|\s)*<small>/, '&nbsp;<span class="lesson-icon-ield"></span> <small>')+'</span></small></h2>';
	        //   	break;
	        //   default: 
	        //   	if(current_grade.match(/[k12]/i)) 
	        //   		text += '<h2 class="day'+current_day+'-clr">'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">')+'</span></small></h2>';
	        //   	else
	        //   		text += '<h2 class="week'+current_week+'-clr">'+contents.replace(/(\(\s*\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1 <span class="standards">')+'</span></small></h2>';
	        // }
	        // log('<br>'+contents.replace(/\n|\r|\uFEFF/g, ''));
	      break;     
	      case has_rectangle && empty && music_logo: text += '<p><img class="img-fluid" style="height: 125px" src="/images/shared/bec_music_logo.png"></p>\r'; break;
	      case has_rectangle && empty: text += process_rectangles(paragraph.rectangles); break;
	      case empty: break;
	      case h3: // || (red && pointSize == 14))
	        contents = contents.replace(/\n|\r/g, '').replace(/(\(\d+)/, '<small>$1').replace(/(min.*?\))/i, '$1</small>');
	        // log(contents);
	        var ieldText = ield_icon ? '&nbsp;<span class="icon-ield"></span>' : ''; //can be on anything
	        switch(true){
	          // case new_check_icon: text += '<h3><span class="lesson-icon-checkbox"></span>&nbsp;'+contents+'</h3>\r'; break;
	          case speech_bubble_icon: text += '<h3><span class="icon-collaborativeconversation"></span>&nbsp;'+contents+mslText+ieldText+'</h3>\r'; break;
	          case video_play_icon: text += '<h3><span class="icon-video"></span>&nbsp;'+contents+mslText+ieldText+'</h3>\r'; break;
	          case check_icon: 
	          	text += '<h3><span class="icon-check"></span>&nbsp;'+contents+mslText+ieldText+'</h3>\r'; 
	          	applyUnderstandingTrinary = 3;
	          	break;
	          default: text += '<h3>'+contents+mslText+ieldText+'</h3>\r';
	        }        
	      break;      
	      case h4: text += '<h4>'+process_words(paragraph)+'</h4>\r'; break; 
	      case has_group: text += process_groups(groups); break;      
	      // case weekly_presentations: text += '<a href="javascript" data-code="'+get_wp_product_code(current_grade, current_unit, current_week)+'" data-type="ebook" data-extLink="javascript"><p class="weekly_presentations day'+current_day+'-clr">'+process_words(paragraph)+'</p></a>\r'; break;
	      case essential_question: text += '<p class="essential_question">'+process_words(paragraph)+'</p>\r'; break;
	      // case teacher_note: text += '<p class="teacher_note">'+process_words(paragraph)+'</p>\r'; break;
	      // case new_check_icon: text += '<p><span class="lesson-icon-checkbox"></span>&nbsp;'+process_words(paragraph)+'</p>\r'; break;      
	      case (bullet && constructive_conversation): text += '<li><div class="check_box"></div> '+process_words(paragraph).replace(/\u2022/, '')+'</li>\r'; break;      
	      case bullet: text += '<li>'+process_words(paragraph).replace(/\u2022/, '')+'</li>\r'; break;
	      case ield_word_bank: text += '<span class="wordbanksize"><strong>' + paragraph.contents.replace(/(\s{2,}|\t+|\n)/g, '<span class="wordbankspacing"></span>').replace(/\s/g, '$1&nbsp;').replace(/<span&nbsp;/g, '<span ').replace(/span>/g, 'span> ') + '</strong></span>'; break;
	      default: 
	      	if(music_logo) text += '<p><img class="img-fluid" style="height: 125px" src="/images/shared/bec_music_logo.png"></p>\r';
	      	text += '<p>'+(accesskey_icon?'<span class="icon-accesskey"></span>':'')+process_words(paragraph)+'</p>\r';
	      // default: text += '<p>'+(applyUnderstandingTrinary==1?'<span class="icon-accesskey"></span>':'')+process_words(paragraph)+'</p>\r';
	    }
	    if(applyUnderstandingTrinary > 0) applyUnderstandingTrinary--;
	  }  
	  if(div_opened){ div_opened = false; text += '</div>\r'; }
	  if(ul_opened){ ul_opened = false; text += '</ul>\r'; }
	  if(ol_opened){ ol_opened = false; text += '</ol>\r'; }
	  text = text.replace(/\uFEFF/g, '');  
	  text = text.replace(/<\/strong>\s*<strong>/g, '');
	  text = text.replace(/(<\/strong>\/\s*)<\/strong>/g, '$1');
	  text = text.replace(/<strong>\s*(\/<strong>)/g, '$1');
	  text = text.replace(/<\/strong>,\s*?<strong>/g, ', '); //solving the Read, Build, Write issue
	  text = text.replace(/<\/em>\s*<em>/g, ''); 
	  text = text.replace(/<\/u>\s*<u>/g, '');
	  text = text.replace(/<\/s>\s*<s>/g, '');
	  text = text.replace(/<\/span>\s*<span class="teacher_talk">/g, '');    
	  text = text.replace(/<\/span>\s*<span class="red">/g, '');
	  text = text.replace(/<\/span>\s*<span class="magenta">/g, '');
	  text = text.replace(/<\/span>\s*<span class="blue">/g, '');
	  text = text.replace(/<\/span>\s*<span class="yellow_highlight">/g, '');
	  // text = text.replace(/<span class="yellow_highlight'>\w+:</)    //come back to this, it's the needs-breaks issue but I didn't finish the regex, too conditional maybe
	  text = text.replace(/<\/span>\s*<span class="orange_highlight">/g, '');
	  text = text.replace(/<\/span>\s*<span class="overline">/g, '');    
	  text = text.replace(/<h4><strong>/g, '<h4>');
	  text = text.replace(/<\/strong><\/h4>/g, '</h4>');
	  text = text.replace(/<p>(<strong>)?<span class="blue">Independent.+?Practice\/\s?Partner.+?Work\s?<\/span>(<\/strong>)?<\/p>/g, '<h3>Independent Practice/Partner Work</h3>');
	  text = text.replace(/&(m|n)d;/ig, '&$1dash;');  
	  return text;
  }
}
 
function process_words(paragraph){
  var text = '';
  var words = false;
  try
  {
  	words = paragraph.words;
  }
  catch(e)
  {
  	log('!!! process_words failed');
  }
  if(!!words)
  {
	  var l = words.length;
	  var isModelIntroducePractice = false;
	  for(var x = 0; x < l; x++){    
	    var word = words[x];        
	    var contents = word.contents;
	    contents = contents.replace(/\u2013/g, '&nd;');
	    contents = contents.replace(/\u2014/g, '&md;');
	    contents = contents.replace(/\uFEFF/g, '');      
	    var appliedCharacterStyle = word.appliedCharacterStyle.name;
	    var fontStyle = word.fontStyle;
	    var underline = word.underline;
	    var color = word.fillColor.name;
	    var strike = word.strikeThru;
	    var yellow_highlight = isModelIntroducePractice || !!appliedCharacterStyle.match(/highlight1|kids_highlit1/g) ? true : false;
	    // alert(yellow_highlight);
	    var orange_highlight = !!appliedCharacterStyle.match(/highlight2|kids_highlit2/g) ? true : false;
	    if(yellow_highlight || orange_highlight){ underline = false; }
	    var blue = !!color.match(/Text Structure|Benchmark\s*Blue\s*100C\s*87M|Lesson_Tchr-tlk-nospace/ig) ? true : false;
	    var otherblue = !!color.match(/285\s*process/ig) ? true : false;
	    var darkred = !!color.match(/c=15 m=100 y=100 k=0/ig) ? true : false;
	    var red = !!color.match(/c=15 m=100 y=100 k=0|day 1/ig) ? true : false;
	    var magenta = !!word.fillColor.colorValue == [0,100,0,0] ? true : false;
	    var has_color = ( blue || red ) ? true : false;
	    var color_string = blue ? 'teacher_talk' : '';
	    // color_string = darkred ? 'darkred' : '';
	    color_string = red ? 'red' : '';

	    if(!!contents.match(/\W/)){
	      text += process_characters(word, isModelIntroducePractice);
	    }else{                  
	      var bold = !!fontStyle.match(/medium\scondensed|black|bold/ig) ? true : false;
	      var italic = !!appliedCharacterStyle.match(/italic/i) ? true : false;
	      italic = (!italic && !!fontStyle.match(/italic|oblique/ig)) ? true : italic;            
	      text += bold ? '<strong>' : '';
	      text += italic ? '<em>' : '';
	      text += underline ? '<u'+( has_color ? ' class="'+color_string+'"' : '')+'>' : '';
	      text += strike ? '<s'+( has_color ? ' class="'+color_string+'"' : '')+'>' : '';
	      text += blue ? '<span class="teacher_talk">' : '';
	      text += otherblue ? '<span class="blue">' : '';
	      // text += darkred ? '<span class="darkred">' : '';
	      text += red ? '<span class="red">' : '';
	      text += magenta ? '<span class="magenta">' : '';
	      text += yellow_highlight ? '<span class="yellow_highlight">' : '';
	      text += orange_highlight ? '<span class="orange_highlight">' : '';

	      text += contents + ' ';

	      text += orange_highlight ? '</span>' : '';
	      text += yellow_highlight ? '</span>' : '';
	      text += red ? '</span>' : '';
	      // text += darkred ? '</span>' : '';
	      text += blue ? '</span>' : '';
	      text += otherblue ? '</span>' : '';
	      text += magenta ? '</span>' : '';
	      text += strike ? '</s>' : '';
	      text += underline ? '</u>' : '';
	      text += italic ? '</em>' : '';
	      text += bold ? '</strong>' : '';      
	    }    
	    // if(word.appliedParagraphStyle.name.match(/lesson_c-hd_table_Body-txt/i) && contents.match(getTerm('model_introduce_practice_challenge', language).regex))
	    if(word.appliedParagraphStyle.name.match(/lesson_c-hd_table_Body-txt/i) && contents.match(/\:/))
		{
		  isModelIntroducePractice = true;
		}
	  }
	  text = text.replace(/&(m|n)d;/ig, '&$1dash;');  
	  text = text.replace(/-/g, '&#8209;');
	  // if(!!paragraph.contents.match(getTerm('music_library', language).regex)){  //Spanish only, I guess?
	  //   text = text.replace(/^(.)/, '<span class="icon-music"></span>$1');
	  // } 

	  return text.replace(/\s$/, '');
  }
}

function process_characters(word, isModelIntroducePractice){
  var text = '';
  var characters = word.characters;
  var l = characters.length;
  for(var x = 0; x < l; x++){    
    var character = characters[x];        
    var polygons = character.polygons;
    var has_polygons = polygons.length > 0 ? true : false;
    // var breve = has_polygons && polygons[0].endJoin == EndJoin.MITER_END_JOIN ? true : false;
    var breve = false;
    try{if(x != 0) breve = has_polygons && characters[x-1].match(/o/) ? true : false;}catch(e){log('breve broke')}
    
    var contents = character.texts[0].contents;
    contents = contents.replace(/\u2013/g, '&nd;');
    contents = contents.replace(/\u2014/g, '&md;');
    contents = contents.replace(/\uFEFF/g, '');
    var color = character.fillColor.name;
    var appliedCharacterStyle = character.appliedCharacterStyle.name;
    var blue = !!color.match(/Text Structure|Benchmark\s*Blue\s*100C\s*87M|Lesson_Tchr-tlk-nospace/ig) ? true : false;
    // var darkred = !!color.match(/c=15 m=100 y=100 k=0/ig) ? true : false;
    var red = !!color.match(/c=15 m=100 y=100 k=0|day 1/ig) ? true : false;
    var has_color = ( blue || red ) ? true : false;
    var color_string = blue ? 'teacher_talk' : '';
    // color_string = darkred ? 'darkred' : '';
    color_string = red ? 'red' : '';
    var bold = !!character.fontStyle.match(/medium\scondensed|black|bold/ig) ? true : false;
    var italic = !!appliedCharacterStyle.match(/italic/i) ? true : false;
    italic = (!italic && !!character.fontStyle.match(/italic|oblique/ig)) ? true : italic;
    var underline = character.underline;
    var overline = underline ? ( character.underlineOffset <= -8 && character.underlineOffset > -99 ? true : false ) : false;    
    var strike = character.strikeThru;   
    var yellow_highlight = !!contents.match(/\w/) && (isModelIntroducePractice || !!appliedCharacterStyle.match(/highlight1|kids_highlit1/g)) ? true : false;
    var orange_highlight = !!appliedCharacterStyle.match(/highlight2|kids_highlit2/g) ? true : false;    
    if(yellow_highlight || orange_highlight || overline){ underline = false; }
    var oo_macron = false;
    if(appliedCharacterStyle.match(/long.macron/ig))
    {
    	log('long macron found');
    	try{if(x != 0) oo_macron = !!appliedCharacterStyle.match(/long.macron/ig) && characters[x-1].match(/\/|\s/) ? true : false;}catch(e){log('oo_macron broke')}
    }

    text += bold ? '<strong>' : '';
    text += italic ? '<em>' : '';
    text += underline ? '<u'+( has_color ? ' class="'+color_string+'"' : '')+'>' : '';
    text += strike ? '<s'+( has_color ? ' class="'+color_string+'"' : '')+'>' : '';
    text += blue ? '<span class="teacher_talk">' : '';    
    text += red ? '<span class="red">' : '';
    text += yellow_highlight ? '<span class="yellow_highlight">' : '';
    text += orange_highlight ? '<span class="orange_highlight">' : '';
    text += overline ? '<span class="overline">' : '';

    if(breve){
      text += '<span class="breve"></span>';
    }else{
      text += x == l-1 ? contents+' ' : contents;
    }

    text += oo_macron ? '<span class="macron"></span>' : '';

    text += overline ? '</span>' : '';
    text += orange_highlight ? '</span>' : '';
    text += yellow_highlight ? '</span>' : '';
    text += red ? '</span>' : '';    
    text += blue ? '</span>' : '';
    text += strike ? '</s>' : '';
    text += underline ? '</u>' : '';
    text += italic ? '</em>' : '';
    text += bold ? '</strong>' : '';     
  }
  text = text.replace(/&(m|n)d;/ig, '&$1dash;');
  return text;
}

function process_groups(groups){
  var text = '';
  var l = groups.length;
  for(var x = 0; x < l; x++){
    var group = groups[x];
    text += export_and_create_diagram(group);  
  }
  return text;
}

function process_rectangles(rectangles){
  var text = '';
  var l = rectangles.length;
  for(var x = 0; x < l; x++){
    var rectangle = rectangles[x];
    if(!!rectangle.allGraphics[0].itemLink.name.match(/new_check|icon|avk|playvideo_icon|new_conversation|Lesson_Tchr_Note/ig)){continue;}
    var figure = new Figure(rectangle);
    // log(rectangle.allGraphics[0].itemLink.name);
    if(figure.epocket_chart)
	{
		text += epocket_chart();
	}
	else
	{
		text += figure.toHTML(this.captioned_images);
	}
  }  
  return text;
}

function export_and_create_diagram(group){
  var image_name = 'figure'+group.id+'.png';  
  var image_link = create_image_file(group, current_package_folder, current_images_path);
  return '<figure class="diagram"><img src="'+image_link+'" alt="" width="100%"></figure>';    
}

Array.prototype.testMangenta = function () {

	var isMagenta = false;

	this[0] == 0 && this[1] == 100 && this[2] == 0 && this[3] == 0 ? isMagenta = true : false;

	return isMagenta;
}

Array.prototype.test285Process = function () {

	var isBlue = false;

	this[0] == 91 && this[1] == 43 && this[2] == 0 && this[3] == 0 ? isBlue = true : false;

	return isBlue;
}

function build_tables(tables){    
	var text = '';
	var l = tables.length;
	for(var x = 0; x < l; x++)
	{
		var table = tables[x];
		var firstCell = table.cells[0];
		var firstCellStrokeColor = firstCell.topEdgeStrokeColor.name;    
		var firstCellStrokeValues;
		try
		{
			firstCellStrokeValues = {all: firstCell.topEdgeStrokeColor.colorValue, c: firstCell.topEdgeStrokeColor.colorValue[0], m: firstCell.topEdgeStrokeColor.colorValue[1], y: firstCell.topEdgeStrokeColor.colorValue[2], k: firstCell.topEdgeStrokeColor.colorValue[3], };
		}
		catch(e)
		{
			firstCellStrokeValues = false; //probably no stroke
		}
		var phonics_border_color = !!firstCellStrokeColor.match(/15c/i) ? true : false;    

		var firstCellFillColor = firstCell.fillColor.name;
		var blueprint_fill_color = !!firstCellFillColor.test285Process ? true : false;

		var special_type;

		var keepGoingTables = false;

		//special sidebars first, these aren't even tables! (well, they are, but not normal ones...)
		try
		{
			var blueprint_table = !!blueprint_fill_color && table.columns.length == 3;
			var buildreflectwrite_table = !!table.cells[0].paragraphs[0].contents.match(getTerm('buildreflectwrite', language).regex) ? true : false;
			var small_group_table = !!table.cells[0].paragraphs[0].appliedParagraphStyle.name.match(/Small_group_A-hd/i) ? true : false;
			var model_table = !!table.cells[0].paragraphs[0].appliedParagraphStyle.name.match(/Model_txt/i) ? true : false; //&& table.cells[0].paragraphs[0].characters[0].fillColor.colorValues == ''
			var developing_vocabulary_table = !!table.cells[0].paragraphs[0].contents.match(getTerm('developing_vocabulary', language).regex) ? true : false;
			var language_transfer_support_table = !!table.cells[0].paragraphs[0].contents.match(getTerm('language_transfer_support', language).regex) || !!table.cells[0].paragraphs[0].contents.match(getTerm('check_for_transferability', language).regex) ? true : false;
			// alert(firstCellStrokeValues.all);
			// var teqc_table = false;
			// if(firstCellStrokeValues.all == '0','100','0','0') teqc_table = true;
			var teqc_table = !!firstCellStrokeValues ? (firstCellStrokeValues.all.testMangenta() ? true : false) : false; // !!table.cells[0].paragraphs[0].appliedParagraphStyle.name.match(/cr_prompt/i) //table.topBorderStrokeColor.colorValue == [0,100,0,0]
			var teqc_big = firstCell.contents.replace(/^\W+/, '').replace(/\W+$/, '').match(getTerm('teqc_big_title', language).regex) ? true : false;
			var conferring_prompt_table = !!firstCellStrokeValues ? (firstCellStrokeValues.all.test285Process() ? true : false) : false; // !!table.cells[0].paragraphs[0].appliedParagraphStyle.name.match(/cr_prompt/i) //table.topBorderStrokeColor.colorValue == [91,43,0,0]

			// switch(true){
			// 	case buildreflectwrite_table: text += buildreflectwrite_section(table.cells[0]); break;
			// 	case small_group_table: 
			// 		if(!!current_grade.match(/[k12]/i)) text += small_group_instruction_full(table.parent); //idk if this is a good idea (FIX THIS????)
			// 		else text += small_group_section(table.cells[0]); 
			// 		break; 
			// 	case model_table: text += model_section(table.cells[0]); break;
			// 	case developing_vocabulary_table: text += developing_vocabulary_section(table.cells[0]); break;
			// 	case language_transfer_support_table: text += language_transfer_support_section(table.cells[1]); break; //first cell is the title
			// 	case conferring_prompt_table: text += conferring_prompt_section(table.cells[0]); break;
			// 	default: keepGoingTables = true;
			// }
		}
		catch(e){ log('!!!! something broke with a table here! Differentiation into special cases failed!'); }

		keepGoingTables = true; //remove if reinstating the previous switch statement for some reason

		//no florida standards box! bad florida standards box!
		// if(table.cells[0].paragraphs.length > 0)
		// {
		// 	if(!!table.cells[0].paragraphs[0].contents.match(/Florida\sStandards/i)) keepGoingTables = false;
		// }

		if(keepGoingTables)
		{
			switch(true)
			{
				// case !!firstCellStrokeValues.all == [0,0,0,100]: special_type = 'grammar'; break;
				case blueprint_table: special_type = 'blueprint'; break;
				case teqc_table: special_type = 'teqc'; break; //could also be the magenta version of cr_prompt but whatever I guess
				case buildreflectwrite_table: special_type = 'brw'; break; //!!firstCellStrokeValues.all == [91,43,0,0] || 
				case small_group_table: special_type = 'small_group_table'; break;
				case model_table: special_type = 'model_table'; break;
				case developing_vocabulary_table: special_type = 'developing_vocabulary_table'; break;
				case language_transfer_support_table: special_type = 'language_transfer_support_table'; break;
				case !buildreflectwrite_table && !small_group_table && conferring_prompt_table: special_type = 'conferring_prompt_table'; break;
				case teqc_big: special_type = 'teqc_big'; break;

				default: special = false;
			}

			// alert('special_type: ' + special_type);

			switch(true)
			{
				case phonics_border_color: text += create_phonics_table(table); break;
				default: text += build_table(table, false, special_type);
			}
		}
	}
	return text;
}

function is_phonics_table(cells){  
  var l = cells.length;
  for(var x = 0; x < l; x++){
    var cell = cells[x];
    if(!!cell.fillColor.name.match(/375 process|c=75 m=5 y=100 k=0/ig)){
      return true;
    }
  }
  return false;
}

function create_phonics_table(table){
  var text = '';
  var cells = table.cells;  
  switch(true){
    case (is_phonics_table(cells)): text += create_phonics_table_3_cells(cells); break;
    default: text += create_no_images_phonics_table(cells);
  } 
  return text;
}
function create_no_images_phonics_table(cells){
  var text = '';
  if(cells.length > 1)
  {
	  text += '<div class="phonics_table no_images">\r';
	  text += '<div class="row">\r';
	  text += '<div class="col-xs-12 col-sm-12 col-md-4">\r';
	  text += process_paragraphs(cells[0]);    
	  text += '</div>\r';  
	  text += '<div class="col-xs-12 col-sm-12 col-md-8">\r'; 

	  text += '<table class="no-border">\r';
	  text += '<tbody>\r';
	  var paragraphs = cells[1].paragraphs;
	  find_and_replace(cells[1], '\\t', ' &emsp;');
	  var l = paragraphs.length;
	  for(var x = 0; x < l; x++){
	    var paragraph = paragraphs[x];
	    if(!!paragraph.contents.match(/\w/)){
	      text += '<tr>\r';    
	      if(cells.length > 2){
	        text += '<td>\r';
	        text += '<p>'+process_words(paragraph)+'</p>\r';
	        text += '</td>\r';
	        text += '<td>\r';
	        text += '<p>'+process_words(cells[2].paragraphs[x])+'</p>\r';
	        text += '</td>\r';
	      }else{        
	        var contents = process_words(paragraph);
	        contents = contents.replace('<strong>&</strong><strong>e</strong><strong>m</strong><strong>s</strong><strong>p</strong><strong>;</strong>', '&emsp;');        
	        text += '<td>\r';        
	        text += '<p>'+contents.replace(/&emsp;/, '</p>\r</td>\r<td>\r<p>')+'</p>\r';
	        text += '</td>\r';
	      }
	      text += '</tr>\r';
	    }
	  }
	  text += '</tbody>\r';
	  text += '</table>\r';
	  
	  text += '</div>\r';  
	  text += '</div>\r';
	  text += '</div>\r';
  }
  else //single cell organism
  {
	  text += '<div class="phonics_table no_images">\r';
	  text += '<div class="row">\r';
	  text += '<div class="col-xs-12 col-sm-12 col-md-12">\r';
	  text += process_paragraphs(cells[0]);    
	  text += '</div>\r';  
	  text += '</div>\r';  
	  text += '</div>\r';
  }
  
  return text;
}

function is_epocketChart(cell){
  if(!!cell.contents.match(getTerm('card_combo', language).regex)){
    return true;
  }
  return false;
}

function create_phonics_table_3_cells(cells){
  var text = '';
  var is_epocket_chart = is_epocketChart(cells[1]);
  var epocket_chart_xcode;
  try
  {
  	var epocket_chart_xcode = get_epocketchart_code(current_grade+current_unit+current_week+current_day).xcode;
  }
  catch(e)
  {
  	log('create_phonics_table_3_cells epocket_chart_xcode failed, go back to this');
  }
  if(!epocket_chart_xcode){
    is_epocket_chart = false;
  }else{
    var epocket_chart_id = epocket_chart_xcode+'-'+current_epocket_chart_index;
  }

  if(cells.length < 4) 
  	text += '<div class="phonics_table mb-4">\r';
  else //this is check to see, fixed later
  	text += '<div class="phonics_table">\r';

  text += '<div class="row">\r';
  text += '<div class="col-xs-12 col-sm-12 col-md-4">\r';
  text += process_paragraphs(cells[0]);    
  text += '</div>\r';  
  text += '<div class="col-xs-12 col-sm-12 col-md-4'+(!!is_epocket_chart ? ' no-padding' : '')+'">\r';
  if(!!is_epocket_chart){
    text += '<a href="javascript" data-extLink="javascript" data-code="'+epocket_chart_xcode+'" data-type="epocketchart" data-activity="'+epocket_chart_id+'">\r'; 
  }
  text += '<div class="row">\r';
  text += create_phonics_middle_cell(cells[1]);
  text += '</div>\r';
  if(!!is_epocket_chart){
    text += '</a>\r';
    current_epocket_chart_index++;
  }
  text += '</div>\r';
  text += '<div class="col-xs-12 col-sm-12 col-md-4">\r';
  text += process_paragraphs(cells[2]);
  text += '</div>\r';
  if(cells.length > 3){
    text += '<div class="col-md-12">\r';
    text += process_paragraphs(cells[3]);
    text += '</div>\r';
  }
  text += '</div>\r';
  text += '</div>\r';  
  return text;
}  

function create_phonics_middle_cell(cell){
  var text = '';
  var has_figure = false;  
  if(!!cell.paragraphs[0].rectangles || !!cell.paragraphs[0].groups || !!cell.paragraphs[0].textFrames)
  {
  	text += '<p>&nbsp;</p>\r'; //this is so that the first paragraph is always a text line, so that the stuff in other columns doesn't get pushed down
  }
  var firstParagraphContents = cell.paragraphs[0].contents;
  if(!!firstParagraphContents.match(/\w/)){
    text += '<p><strong>'+firstParagraphContents+'</strong></p>\r';
  }
  var paragraphs = cell.paragraphs;
  var l = paragraphs.length;  
  var text_bubbles = [];
  for(var x = 0; x < l; x++){
    var paragraph = paragraphs[x];
    var textFrames = paragraph.textFrames;
    var groups = paragraph.groups;
    var rectangles = paragraph.rectangles;
    var has_group = groups.length > 0 ? true : false;
    var has_rectangle = rectangles.length > 0 ? true : false;
    var has_textFrame = textFrames.length > 0 ? true : false;
    var has_text_bubble = has_textFrame ? true : ( has_group ? ( groups[0].rectangles.length > 0 ? false : true ) : false );    
    if(has_rectangle){ text += phonics_table_rectangle_images_handler(cell, rectangles, x); has_figure = true;} 
    if(has_group){
      if(has_text_bubble){
        text_bubbles = text_bubbles.concat(phonics_table_grouped_images_handler(cell, groups));         
      }else{
        text += phonics_table_grouped_images_handler(cell, groups).join('\r');        
      }
      has_figure = true;
    } 
    if(has_textFrame){ 
      // alert('found some bubble');
      text_bubbles = text_bubbles.concat(phonics_table_textframe_images_handler(cell, textFrames)); 
      has_figure = true;
    }        
  }

  var l = text_bubbles.length;  
  for(var x = 0; x < l; x++){
    var text_bubble = text_bubbles[x];
    text += text_bubble;
    if(!!text_bubble.match(/col-xs-6/i)){ if(x.isOdd()){ text += '<div class="clearfix"></div>\r'; } }
  }

  if(!has_figure){
    var l = paragraphs.length;  
    for(var x = 1; x < l; x++){
      var paragraph = paragraphs[x];
      text += '<p>'+process_words(paragraph)+'</p>\r';
    }
  }
  return text;
}

function phonics_table_grouped_images_handler(cell, groups){
  var text = [];
  var l = groups.length;
  for(var x = 0; x < l; x++){
    var group = groups[x];
    var has_rectangle = group.rectangles.length > 0 ? true : false;
    var has_image = has_rectangle ? (group.rectangles[0].allGraphics.length > 0 ? true : false) : false;
    var has_group = group.groups.length > 0 ? true : false;
    switch(true){
      case has_group: if( group.groups[0].allGraphics.length > 0 ){ text.push(create_image_with_caption(group)); }else{ text.push(export_object(group)); } break;
      case has_image && has_rectangle: text.push(create_image_with_caption(group)); break;
      case has_textframe && !has_image: text.push(export_object(group)); break;      
    }
  }
  return text;
}

function export_object(object){
  var text = '';  
  object.exportFile(ExportFormat.PNG_FORMAT, new File(current_package_folder+current_images_path+separator+'figure-'+object.id+'.png'));
  var image_link = current_images_path+separator+'figure-'+object.id+'.png';  
  var object_width = object.geometricBounds[3]-object.geometricBounds[1];     
  text += '<div class="'+( object_width <= 100 ? 'col-xs-6' : 'col-xs-12' )+'"><figure><img src="'+image_link+'"></figure></div>\r';  
  return text;
}

function create_image_with_caption(group){
  var text = '';
  var object = group.groups.length > 0 ? group.groups[0] : group.rectangles[0]; 
  var image_name = object.allGraphics[0].itemLink.name;
  var textFrame = !!group.textFrames ? group.textFrames[0] : false;  
  object.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;
  var image_link = create_image_file(object, current_package_folder, current_images_path);
  var object_width = object.geometricBounds[3]-object.geometricBounds[1];
  var object_height = object.geometricBounds[2]-object.geometricBounds[0];
  text += '<div class="'+( object_width < object_height ? 'col-xs-6' : 'col-xs-9' )+'"><figure>\r';  
  text += '<img src="'+image_link+'">\r';
  try
  {
  	text += '<figcaption>'+textFrame.contents+'</figcaption>\r'; //if(textFrame) 
  }
  catch(e)
  {
  	log('create_image_with_caption: caption broke in group due to textFrame not having contents, might not exist though');
  }
  text += '</figure></div>\r';
  return text;
}

function phonics_table_rectangle_images_handler(cell, rectangles, index){  
  var text = '';
  // text += process_rectangles(rectangles);
  var l = rectangles.length;
  for(var x = 0; x < l; x++){
    var rectangle = rectangles[x];    
    if(rectangle.allGraphics.length == 0){    
      app.select(rectangle);
      try{
        app.select(rectangle.rectangles[0].images[0]);
        app.copy();
        app.select(rectangle);
        app.pasteInto();
      }catch(e){log('WARNING: image not found in: '+document.name);}
    }

    var image_name = false;
    var imageycode = false;

    try
    {
    	image_name = rectangle.allGraphics[0].itemLink.name;
    	imageycode = !!image_name.match(/[XY]\d{4,}/ig) ? image_name.match(/[XY]\d{4,}/ig)[0] : false;
    }
    catch(e){}

    var xcode = false;
    var deliveryformat = false;
    var datapages = false;

	try
	{
	    if(!!imageycode)
	    {
	      var product = get_metadata_from_mia(image_name, imageycode);
	      xcode = product.xcode;
	      datatype = product.data_type;
	      if(datatype == 'html_becreader') datatype = 'ebook';
	    }
	}
    catch(e)
    {
    	log('imageycode bit broke, something went wrong with a Mia metadata attempt, single link probably failed');
    }

    // var xcode = get_ebook_products(image_name).xcode;
    rectangle.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;
    var image_link = create_image_file(rectangle, current_package_folder, current_images_path);
    var rectangle_width = rectangle.geometricBounds[3]-rectangle.geometricBounds[1];
    var rectangle_height = rectangle.geometricBounds[2]-rectangle.geometricBounds[0];
    var caption;
    try
    {
      caption = cell.paragraphs.length > 1 ? (!!cell.paragraphs[index+1].contents.match(/\w/) ? '<figcaption>'+cell.paragraphs[index+1].contents+'</figcaption>' : '') : '';
    }
    catch(e)
    {
      log('caption attempt failed on phonics_table_rectangle_images_handler');
      caption = '';
    }

    try
    {
	    if(!!caption.match(/\w/))
		{
			if(!!caption.match(/\d/) && datatype == 'ebook') datapages = caption.match(/(page|AR|p|pg)s?\.?(\s|-|_)*(&nbsp;)?\d+/i)[0].match(/\d+/)[0]; //p\w+\.?\s\d+
		}
	}
	catch(e){}

    text += '<div class="'+( rectangle_width < rectangle_height ? 'col-xs-6' : 'col-xs-9' )+'"><figure>\r';
    if(!!xcode){
      text += '<a href="javascript" data-extLink="javascript" data-type="'+datatype+'" data-code="'+xcode+'"'+(!!datapages?' data-pages="'+datapages+'"':'')+'>\r';
      text += '<img src="'+image_link+'">\r';
      text += '</a>\r';
    }else{
      text += '<img src="'+image_link+'">\r';
    }
    text += caption+'</figure></div>\r';    
    if((x+1) % 2 == 0){ text += '<div class="clearfix"></div>\r'; }
  }
  return text;
}

function get_ebook_products(title)
{
	alert('replace get_ebook_products with curl MIA!');
}

function phonics_table_textframe_images_handler(cell, textFrames){
  var text = [];
  var l = textFrames.length;
  for(var x = 0; x < l; x++){
    var textFrame = textFrames[x];
    textFrame.exportFile(ExportFormat.PNG_FORMAT, new File(current_package_folder+current_images_path+separator+'figure-'+textFrame.id+'.png'));
    var image_link = current_images_path+separator+'figure-'+textFrame.id+'.png';
    var textFrame_width = textFrame.geometricBounds[3]-textFrame.geometricBounds[1];            
    text.push('<div class="'+( textFrame_width*2 <= cell.width ? 'col-xs-6' : 'col-xs-12' )+'"><figure><img src="'+image_link+'"></figure></div>\r');
  }
  return text;
}


function build_table(table, classname, special_type){
  var text = '';  
  var textFrame_width;
  try
  {
  	textFrame_width = table.parent.geometricBounds[3] - table.parent.geometricBounds[1];
  }
  catch(e)
  {
  	var textFrame_width = 410;
  	log('Set textFrame_width to 410 as a default because table.parent is not a TextFrame (likely a table within a table).')
  }
  var table_width = table.width;
  var width =  Math.round((table_width/textFrame_width)*100);  
  width = width >= 80 ? 100 : width;  
  log('special type: ' + special_type);
  switch(special_type)
  {
  	case 'grammar': text += '<div class="blue-border-box mt-4 mb-4">\r<h6>\r'; break;
  	case 'teqc_big':
  		text += '<div><span class="pink-knockout mt-4">'+getTerm('teqc_big_title', language).plain+'</span></div>\r';
  		text += '<div class="pink-border-box-square mb-4">\r<h6>\r';
  		break;
  	case 'teqc': text += '<div class="pink-border-box mt-4 mb-4">\r<h6>\r'; break;
  	case 'brw': 
  		text += '<div class="blue-border-box mt-4 mb-4">\r';
		text += '<h5 class="brw"><span>Build</span><span>Reflect</span><span>Write</span></h5>\r'; 
		break;
  	case 'small_group_table': 
		text += '<div class="small-group mt-4 mb-4">\r';
		text += '<div class="row">\r';
		text += '<div><span class="icon-smallgroup"></span></div>\r';
		text += '<div class="col">\r'; 
		text += '<h5 class="blue">'+table.cells[0].paragraphs[0].contents+'</h5>\r';
		text += '</div>\r';
		text += '</div>\r'; 
		break;
  	case 'model_table': text += '<div class="gray-border-box mt-4 mb-4">\r<h6>\r'; break;
  	case 'developing_vocabulary_table': text += ' <div class="blue-border-box mt-4 mb-4">\r'; break;
  	case 'language_transfer_support_table': 
		text += '<div class="lang-transfer mt-4 mb-4">\r';
		text += '<div>\r';
		text += '<h6>'+getTerm('language_transfer_support', language).plain+'</h6><img class="svg-icon" src="/images/shared/language.svg" alt="">\r';
		text += '</div>\r';  
		text += '<div>\r';  
		break;
  	case 'conferring_prompt_table': text += '<div class="blue-border-box mt-4 mb-4">\r<h6>\r'; break;
  	default: text += '<table'+(classname ? ' class="'+classname+'"' : '')+' width="'+width+'%"><tbody>\r';
  }
  var rows = table.rows;
  var l = rows.length;
  for(var x = 0; x < table.rows.length; x++){
    var row = table.rows[x];
    if(row){      
      var no_border = !row.contents.toString().match(/\w/) ? true : false;
      if(!special_type) text += '<tr'+( no_border ? ' class="no_border"' : '')+'>\r'; 
      var cells = row.cells;      
      var cl = cells.length;
      for(y = 0; y < cl; y++){
        var cell = cells[y];  
        if(cell){           
          var color = cell.fillColor.name;
          var column_width = Math.round( (cell.width/table.width) * 100);       
          var valign = set_vertical_align_attribute(cell.verticalJustification);
          // var valign = this.set_vertical_align_attribute(cell.verticalJustification);
          var rowspan = cell.rowSpan == 1 ? '' : (' rowspan="'+cell.rowSpan+'"');
          var colspan = cell.columnSpan == 1 ? '' : (' colspan="'+cell.columnSpan+'"');
          var color_name = false;
          switch(true){ 
            case cell.fillTint == 5 : color_name = 'grey'; break;
            case !!color.match(/C=43 M=95 Y=0 K=0/i): color_name = 'grade1'; break;
          }
          var cell_class = ' class="'+( color_name ? color_name : '' )+'"';
          
          if(!special_type) text += '<td'+cell_class+rowspan+colspan+' height="'+(Math.round(cell.height)*1.7)+'" width="'+column_width+'%" valign="'+valign+'">\r';
          
          if(special_type == 'teqc' || special_type == 'grammar' || special_type == 'model' || special_type == 'conferring_prompt_table') text += process_paragraphs(cell).replace(/<\/?p>/g, '').replace(/<\/?strong>/g, '');
          else if(special_type == 'teqc_big') text += process_paragraphs(cell).replace(/<em>/g, '<em><span class="pink">').replace(/<\/em>/g, '</em></strong>');
          else text += process_paragraphs(cell);  
          
          try{if(!cell.contents.match(/\w/)){ text += cell.contents; } }catch(e){log('cell.contents.match failed, cannot grab cell contents')}
          if(!special_type) text += '</td>\r';
        }
      }
      if(!special_type) text += '</tr>\r';
    } 
  }
  if(special_type == 'teqc' || special_type == 'teqc_big' || special_type == 'grammar' || special_type == 'model' || special_type == 'conferring_prompt_table') 
  {
  	text += '</h6>\r';
  	// alert(special_type);
  	if((special_type == 'grammar' || special_type == 'conferring_prompt_table') && text.match(/<span class="blue">/))
	{
		// alert('blue fix');
    	text = text.replace(/(.)<span class="blue">/g, '$1');
    	text = text.replace(/<\/span>(.)/g, '$1');
    	text = text.replace(/<h6>/, '<h6><span class="blue">');
    	text = text.replace(/<\/h6>/, '</span></h6>');
    }
  	if(special_type == 'teqc_big') text = text.replace(/DOK(\s?\d+)/ig, '<span class="dok-inline">DOK$1</span>').replace(/<\/?u>/g, '');
  	else text = text.replace(/DOK(\s?\d+)/i, '<span class="dok">DOK$1</span>');
  }
  // alert(special_type);
  if(!!special_type) text += '</div>\r';
  else text += '</tbody>\r</table>\r'; 
  if(special_type == 'brw' || special_type == 'small_group_table' || special_type == 'language_transfer_support_table') text += '</br>'; //no caption

  // if(text.match(/Florida\sStandards/i)) return ''; //not today, Florida.
  else return text;
}

function set_vertical_align_attribute(justification){
  switch(justification){
    case VerticalJustification.TOP_ALIGN: return 'top'; break;
    case VerticalJustification.CENTER_ALIGN: return 'middle'; break;
    case VerticalJustification.BOTTOM_ALIGN: return 'bottom'; break;
    case VerticalJustification.JUSTIFY_ALIGN: return 'baseline'; break;
    default: return 'top';
  }
}
function set_align_attribute(justification){
  switch(justification){
    case Justification.LEFT_ALIGN: return 'left'; break;
    case Justification.CENTER_ALIGN: return 'center'; break;
    case Justification.RIGHT_ALIGN: return 'right'; break;
    default: return 'justify';
  }
}

function create_image_file(image, package_path, images_path){  
	// log('create_image_file called');
  var full_image_name = 'IMAGENOTFOUND';
  try
  {
  	full_image_name = !!image.constructor.name.match(/group|textframe/i) ? 'figure-'+image.id+'.png' : image.allGraphics[0].itemLink.name.replace(/\..*$/, '.jpg');
  }
  catch(e){}

  if(!!full_image_name.match(/\.jpg/i)){
    var extension = full_image_name.match(/\.jpg/i)[0];
    full_image_name = full_image_name.replace(/\.jpg/g, '').replace(/\s/g, '_').replace(/\W/g, '')+extension;
  }
  var images_folder = create_folder(package_path+images_path);
  try
  {
  	!!image.constructor.name.match(/group/i) ? export_group(image, full_image_name, images_folder) : export_image(image, full_image_name, images_folder);  
  }
  catch(e){log('!!! image creation failed: ' + full_image_name);}
  return images_path+separator+full_image_name;
}


function document_settings(){
  var doc = app.activeDocument;
  doc.layoutWindows[0].viewDisplaySetting = ViewDisplaySettings.HIGH_QUALITY;
  //set ruler unit preferences
  doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.PIXELS;
  doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.PIXELS;
  app.activeWindow.transformReferencePoint = AnchorPoint.TOP_LEFT_ANCHOR;
  doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
  // doc.viewPreferences.rulerOrigin = RulerOrigin.PAGE_ORIGIN;
  doc.zeroPoint = [0, 0];   
}

function find_and_replace(object, find, change){  
  app.findGrepPreferences.findWhat = find;
  app.changeGrepPreferences.changeTo = change;
  object.changeGrep();
  app.findGrepPreferences = NothingEnum.nothing;
  app.changeGrepPreferences = NothingEnum.nothing;
}

function pre_process_textFrame(textFrame){  
  textFrame.fit(FitOptions.FRAME_TO_CONTENT);
  find_and_replace(textFrame, '~=', '&nd;');
  find_and_replace(textFrame, '~_', '&md;');
  textFrame.resize(CoordinateSpaces.innerCoordinates, AnchorPoint.TOP_CENTER_ANCHOR, ResizeMethods.ADDING_CURRENT_DIMENSIONS_TO, [50, 0]);  
  textFrame.fit(FitOptions.FRAME_TO_CONTENT);
}


function ungroup_all(object){   
  while(object.groups.length > 0){  
    object.groups.everyItem().ungroup();   
  }
}

function process_spread(spread){  
  var l = spread.pages.length;
  for(var x = 0; x < l; x++){
    var page = spread.pages[x];
    var groups = page.groups;    
    ungroup_all(page);    
  }  
  for(var x = 0; x < l; x++){
    var page = spread.pages[x];   
    process_rectangles_collision(page);
    process_groups_collision(page);
  }
}

function process_rectangles_collision(page){
  var rectangles = page.rectangles;
  var l = rectangles.length;
  var images = [];
  for(var x = 0; x < rectangles.length; x++){
    var rectangle = rectangles[x];
    if(rectangle.allGraphics.length > 0){      
      images.push(rectangle);
    }
  }
  l = images.length;
  for(var x = 0; x < l; x++){
    var image = images[x];    
    if(image.allGraphics.length > 0){       
      group_collided_images(image, page);
    }       
  }  
}

function process_groups_collision(page){
  var groups = page.groups;
  var l = groups.length;
  var images = [];
  for(var x = 0; x < groups.length; x++){
    var group = groups[x];
    if(group.allGraphics.length > 0){
      images.push(group);
    }
  }

  var l = images.length;
  for(var x = 0; x < l; x++){
    var group = images[x];      
    group_collided_groups(group, page);           
  }
}

function group_collided_images(image, page){
  var rectangles = page.rectangles;  
  var array = [];
  array.push(image);
  var l = rectangles.length;  
  for(var x = 0; x < l; x++){
    var rectangle = rectangles[x];
    if(image == rectangle){ continue; }
    if(!!rectangle.itemLayer.name.match(/correction/i)){ continue; }    
    if(collides(image.geometricBounds, rectangle.geometricBounds)){ 
      array.push(rectangle);
    }    
  }
  app.select(array);
  if(array.length > 1){
    try{
      page.groups.add(app.selection);
    }catch(e){
      log('object already in group :' + image.allGraphics[0].itemLink.name);
    }
  }
}

function group_collided_groups(self, page){
  var array = [self];
  var l = page.groups.length;
  for(var x = 0; x < l; x++){
    var group = page.groups[x];
    if(self == group){ continue; }    
    if(collides(self.geometricBounds, group.geometricBounds)){ array.push(group); }    
  }
  try{app.select(array);}catch(e){}  
  if(array.length > 1){
    try{ page.groups.add(app.selection); }catch(e){ }
  }
}

function lock_zones(zones){   
  var l = zones.length;
  for(var x = 0; x < l; x++){
    var zone = zones[x];    
    lock_all_pageItems(zone.pageItems);
  }
}

function lock_all_pageItems(pageItems){
  var l = pageItems.length;
  for(var x = 0; x < l; x++){
    var pageItem = pageItems[x];
    pageItem.locked = true;   
  }
}


function theBankArray(lang)
{
  var banky = [];

  switch(lang)
  {
    case 'en':
      banky.push('X68318,K,1');
      banky.push('X68319,K,2');
      banky.push('X68320,K,3');
      banky.push('X68321,K,4');
      banky.push('X68322,K,5');
      banky.push('X68323,K,6');
      banky.push('X68324,K,7');
      banky.push('X68325,K,8');
      banky.push('X68326,K,9');
      banky.push('X68327,K,10');
      banky.push('X68328,1,1');
      banky.push('X68329,1,2');
      banky.push('X68330,1,3');
      banky.push('X68331,1,4');
      banky.push('X68332,1,5');
      banky.push('X68333,1,6');
      banky.push('X68334,1,7');
      banky.push('X68335,1,8');
      banky.push('X68336,1,9');
      banky.push('X68337,1,10');
      banky.push('X68338,2,1');
      banky.push('X68339,2,2');
      banky.push('X68340,2,3');
      banky.push('X68341,2,4');
      banky.push('X68342,2,5');
      banky.push('X68343,2,6');
      banky.push('X68344,2,7');
      banky.push('X68345,2,8');
      banky.push('X68346,2,9');
      banky.push('X68347,2,10');
      banky.push('X68348,3,1');
      banky.push('X68349,3,2');
      banky.push('X68350,3,3');
      banky.push('X68351,3,4');
      banky.push('X68352,3,5');
      banky.push('X68353,3,6');
      banky.push('X68354,3,7');
      banky.push('X68355,3,8');
      banky.push('X68356,3,9');
      banky.push('X68357,3,10');
      banky.push('X68358,4,1');
      banky.push('X68359,4,2');
      banky.push('X68360,4,3');
      banky.push('X68361,4,4');
      banky.push('X68362,4,5');
      banky.push('X68363,4,6');
      banky.push('X68364,4,7');
      banky.push('X68365,4,8');
      banky.push('X68366,4,9');
      banky.push('X68367,4,10');
      banky.push('X68368,5,1');
      banky.push('X68369,5,2');
      banky.push('X68370,5,3');
      banky.push('X68371,5,4');
      banky.push('X68372,5,5');
      banky.push('X68373,5,6');
      banky.push('X68374,5,7');
      banky.push('X68375,5,8');
      banky.push('X68376,5,9');
      banky.push('X68377,5,10');
      banky.push('X68378,6,1');
      banky.push('X68379,6,2');
      banky.push('X68380,6,3');
      banky.push('X68381,6,4');
      banky.push('X68382,6,5');
      banky.push('X68383,6,6');
      banky.push('X68384,6,7');
      banky.push('X68385,6,8');
      banky.push('X68386,6,9');
      banky.push('X68387,6,10');
      return banky; //thanky mr banky
      break;
    case 'sp':
      banky.push('X73251,K,1');
      banky.push('X73252,1,1');
      banky.push('X73253,2,1');
      banky.push('X73254,3,1');
      banky.push('X73255,4,1');
      banky.push('X73256,5,1');
      banky.push('X73257,6,1');
      banky.push('X73258,K,2');
      banky.push('X73259,1,2');
      banky.push('X73260,2,2');
      banky.push('X73261,3,2');
      banky.push('X73262,4,2');
      banky.push('X73263,5,2');
      banky.push('X73264,6,2');
      banky.push('X73321,K,3');
      banky.push('X73322,1,3');
      banky.push('X73323,2,3');
      banky.push('X73324,3,3');
      banky.push('X73325,4,3');
      banky.push('X73326,5,3');
      banky.push('X73327,6,3');
      banky.push('X73330,K,4');
      banky.push('X73331,1,4');
      banky.push('X73332,2,4');
      banky.push('X73333,3,4');
      banky.push('X73334,4,4');
      banky.push('X73335,5,4');
      banky.push('X73336,6,4');
      banky.push('X73337,k,5');
      banky.push('X73338,1,5');
      banky.push('X73339,2,5');
      banky.push('X73340,3,5');
      banky.push('X73341,4,5');
      banky.push('X73342,5,5');
      banky.push('X73343,6,5');
      banky.push('X73344,K,6');
      banky.push('X73345,1,6');
      banky.push('X73346,2,6');
      banky.push('X73347,3,6');
      banky.push('X73348,4,6');
      banky.push('X73349,5,6');
      banky.push('X73350,K,7');
      banky.push('X73351,1,7');
      banky.push('X73352,2,7');
      banky.push('X73353,3,7');
      banky.push('X73354,4,7');
      banky.push('X73355,5,7');
      banky.push('X73356,6,7');
      banky.push('X73357,K,8');
      banky.push('X73358,1,8');
      banky.push('X73359,2,8');
      banky.push('X73360,3,8');
      banky.push('X73361,4,8');
      banky.push('X73362,5,8');
      banky.push('X73363,6,8');
      banky.push('X73364,K,9');
      banky.push('X73365,1,9');
      banky.push('X73366,2,9');
      banky.push('X73367,3,9');
      banky.push('X73368,4,9');
      banky.push('X73369,5,9');
      banky.push('X73370,6,9');
      banky.push('X73371,K,10');
      banky.push('X73372,1,10');
      banky.push('X73373,2,10');
      banky.push('X73374,3,10');
      banky.push('X73375,4,10');
      banky.push('X73376,5,10');
      banky.push('X73377,6,10');
      banky.push('X73378,6,6');
      return banky; //thanky mr banky
      break;
    default:
      alert('invalid language on theBankArray');
  }
}







//resume stuff from PW

/*

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

*/
