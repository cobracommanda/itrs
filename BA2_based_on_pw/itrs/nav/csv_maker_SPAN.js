// BA2!                                                                                                                          |_|                                                                                                                                              |_|  

//CREATOR JY (BUT ACTUALLY COMPLETED BY EM MUCH LATER)
//CREATED 2019-02-20
//UPDATED 2019-06-11
//VERSION 1.1

$.evalFile(itrs_root_path+'/library/components_SPAN.js');

function LessonComponent(lesson_info){
	this.info = lesson_info;			
	this.weeks = [];
	this.make_weeks(3);
	this.filenames = this.get_filenames();
	// this.get_weekly_filenames();	
	this.pour_weeks();
}

LessonComponent.prototype.make_weeks = function(weeks){
	var self = this;
	weeks.forEvery(function(num){
		var week = num+1;
		log('make_weeks week ' + week);
		self.weeks.push(new Week(week.toString()));
	});
}

LessonComponent.prototype.get_filenames = function(){
	// var result = [];
	// var total = this.info.total;
	// var type = this.info.type;
	// current_lesson_type = type;

	if(!!current_package.grade.match(/[k1]/i))
	{
		for(var week = 1; week <= 3; week++)
		{
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false));
			if(week==1) this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 5, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 1, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 2, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 3, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 1, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 2, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 3, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 4, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 5, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 1, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 2, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 3, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 4, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 1, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 2, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 3, false));
			this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 4, false));
		}
	}
	else if(!!current_package.grade.match(/2/i))
	{
		var week = 1;
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 4, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 5, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 6, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 7, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 8, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 9, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 10, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 11, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 12, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 13, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 14, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 15, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 16, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 17, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 18, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 19, false));
		week = 2;
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 5, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 6, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 7, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 8, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 9, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 10, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 11, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 12, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 13, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 14, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 15, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 16, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 17, false));
		week = 3;
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 1, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 2, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 1, 3, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 4, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 5, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 6, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 2, 7, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 8, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 9, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 3, 10, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 11, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 12, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 4, 13, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 14, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 15, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 16, false));
		this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, 5, 17, false));
	}
	else
	{
		for(var week = 1; week <= 3; week++)
		{
			for(var lesson_number = 1; lesson_number <= (week==1?14:13); lesson_number++)
			{
				this.weeks[week-1].filenames.push(findFileNameWW(current_package.ycode, current_package.grade, current_package.unit, week, false, lesson_number, false));
			}
		}
	}

	// return result;
};

// LessonComponent.prototype.get_weekly_filenames = function(){
// 	var self = this;
// 	var total_filenames = this.filenames.length;
// 	var total_weeks = 3;
// 	var total_lessons = total_filenames/total_weeks;
// 	this.filenames.forEach(function(filename, index){
// 		var lesson_number = index+1;
// 		var week1 = (lesson_number <= total_lessons) ? true : false;
// 		var week2 = (lesson_number > total_lessons && lesson_number <= total_lessons*2) ? true : false;
// 		var week3 = (lesson_number > total_lessons*2) ? true : false;
// 		if(week1){ self.weeks[0].filenames.push(filename); }
// 		if(week2){ self.weeks[1].filenames.push(filename); }
// 		if(week3){ self.weeks[2].filenames.push(filename); }
// 	});
// };

LessonComponent.prototype.pour_weeks = function(){
	this.weeks.forEach(function(week){
			week.pour();	
	});	
};

function Week(value){
	this.value = value;
	this.filenames = [];	
} 

Week.prototype.pour = function(){
	var self = this;
	current_week = this.value;
	this.filenames.forEach(function(filename, index){		
		current_day = index+1;		
		var lessons_per_week;
		if(!!current_package.grade.match(/2/))
		{
			lessons_per_week = 17;
			if(current_week == 1) lessons_per_week = 19;
		}
		else
		{
			lessons_per_week = (!!current_package.grade.match(/[k1]/i) ? 21 : 13 );
			if(current_week == 1) lessons_per_week++;
		}
		current_lesson = ((current_week-1)*lessons_per_week)+current_day;
		self.pour_day(filename);
	});
};

Week.prototype.pour_day = function(filename){	
	open_file(filename);
	document_settings();
	var spreads = document.spreads;
	var lesson = new Lesson(spreads);
	close_document();		
}; 

function Lesson(spreads){	
	this.spreads = spreads;	
	this.make_template(); 
}

Lesson.prototype.make_template = function(){	
	var page1 = this.spreads[0].pages.firstItem();			
	this.header = new Header(page1);	
};
 
function Header(page){
	this.page = page;	
	// this.head = get_textFrame_by_label(page, 'lesson');	
	this.get_header(page);
}

Header.prototype.get_header = function(target_page){
	var header = process_header_paragraphs_in_lesson(target_page);
	// var text = (!current_package.grade.match(/[k12]/i) ? header.applyHTMLCode() : '<strong>Day: '+current_day+'</strong>:<br> '+header.applyHTMLCode() ).replace(/\s(\d+)/g, '&nbsp;$1');
	var text = header.applyHTMLCode(); //this is all it really takes, right?
	current_package.lesson_titles.push(text);
};

function lowergrade_template(){
	var text = '';
	var unit = current_package.unit;
	var grade = current_package.grade;
	// var volume = current_package.volume;
	var gradeLower = grade.toLowerCase();
	var titles = current_package.lesson_titles;

	text += 'id,html,css,js,display_title,nav_root,sub_level\r';

	//Overview
	text += '1,/html/grade'+gradeLower+'/unit'+unit+'/overview/content_knowledge_alignment.html,/css/main/overview/content_knowledge_alignment.css,,Gu&iacute;a general de conocimientos,Vistazo,\r'; //CV flap
	text += '2,/html/grade'+gradeLower+'/unit'+unit+'/overview/vertical_progression.html,/css/main/overview/vertical_progression.css,,Progresi&oacute;n vertical de temas y preguntas esenciales de la unidad para ampliar los conocimientos,Vistazo,\r'; //CV foldout
	text += '3,/html/grade'+gradeLower+'/unit'+unit+'/overview/author_and_consultant_team.html,/css/main/overview/author_and_consultant_team.css,,Equipo de autores y colaboradores,Vistazo,\r';
	text += '4,/html/grade'+gradeLower+'/unit'+unit+'/overview/about_the_program.html,/css/main/overview/about_the_program.css,,Acerca del programa,Vistazo,\r';
	text += '5,/html/grade'+gradeLower+'/unit'+unit+'/overview/welcome_to_benchmark_advance.html,/css/main/overview/welcome_to_benchmark_advance.css,,Bienvenidos a Benchmark Adelante,Vistazo,\r';
	text += '6,/html/grade'+gradeLower+'/unit'+unit+'/overview/pacing_options.html,/css/main/overview/pacing_options.css,,Opciones de ritmo y ejemplo de bloque de lectoescritura,Vistazo,\r';
	text += '7,/html/grade'+gradeLower+'/unit'+unit+'/overview/digital_print_components.html,/css/main/overview/digital_print_components.css,,Componentes digitales e impresos,Vistazo,\r';

	//Unit Resources
	text += '8,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/unit_opener.html,/css/main/week/lesson.css,,Presentaci&oacute;n de la unidad,Recursos de la unidad,\r';
	text += '9,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/strategies_skills.html,/css/main/unit_resources/strategies_skills.css,,Estrategias y destrezas,Recursos de la unidad,\r';
	text += '10,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/components_at_a_glance.html,/css/main/unit_resources/components_at_a_glance.css,,Vistazo a los componentes,Recursos de la unidad,\r';
	text += '11,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/intervention_reteaching.html,/css/main/unit_resources/intervention_reteaching.css,,Recursos de intervenci&oacute;n y para volver a ense&ntilde;ar,Recursos de la unidad,\r';
	text += '12,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/guide_to_text_complexity.html,/css/main/unit_resources/guide_to_text_complexity.css,,Gu&iacute;a para la complejidad del texto,Recursos de la unidad,\r';
	text += '13,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/secl.html,/css/main/unit_resources/secl.css,,Aprendizaje socioemocional y criterios sobre sensibilidad cultural,Recursos de la unidad,\r';
	text += '14,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/vocabulary_development.html,/css/main/unit_resources/vocabulary_development.css,,Desarrollo del vocabulario,Recursos de la unidad,\r';
	text += '15,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/inquiry.html,/css/main/unit_resources/inquiry.css,,Proyecto final de investigaci&oacute;n y an&aacute;lisis,Recursos de la unidad,\r';
	text += '16,/html/grade'+gradeLower+'/unit'+unit+'/unit_resources/language_objectives.html,/css/main/unit_resources/language_objectives.css,,Objetivos de lenguaje sugeridos,Recursos de la unidad,\r';

	//Week 1
	text += '17,/html/grade'+gradeLower+'/unit'+unit+'/week1/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 1,\r';
	text += '18,/html/grade'+gradeLower+'/unit'+unit+'/week1/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 1,\r';

	//Week 1
	text += '19,/html/grade'+gradeLower+'/unit'+unit+'/week1/day1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[0]+'\r';
	text += '20,/html/grade'+gradeLower+'/unit'+unit+'/week1/day1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[1]+'\r';
	text += '21,/html/grade'+gradeLower+'/unit'+unit+'/week1/day1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[2]+'\r';
	text += '22,/html/grade'+gradeLower+'/unit'+unit+'/week1/day1/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[3]+'\r';
	text += '23,/html/grade'+gradeLower+'/unit'+unit+'/week1/day1/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 1,'+titles[4]+'\r';
	text += '24,/html/grade'+gradeLower+'/unit'+unit+'/week1/day2/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[5]+'\r';
	text += '25,/html/grade'+gradeLower+'/unit'+unit+'/week1/day2/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[6]+'\r';
	text += '26,/html/grade'+gradeLower+'/unit'+unit+'/week1/day2/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[7]+'\r';
	text += '27,/html/grade'+gradeLower+'/unit'+unit+'/week1/day2/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[8]+'\r';
	text += '28,/html/grade'+gradeLower+'/unit'+unit+'/week1/day3/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[9]+'\r';
	text += '29,/html/grade'+gradeLower+'/unit'+unit+'/week1/day3/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[10]+'\r';
	text += '30,/html/grade'+gradeLower+'/unit'+unit+'/week1/day3/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[11]+'\r';
	text += '31,/html/grade'+gradeLower+'/unit'+unit+'/week1/day3/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[12]+'\r';
	text += '32,/html/grade'+gradeLower+'/unit'+unit+'/week1/day3/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 1,'+titles[13]+'\r';
	text += '33,/html/grade'+gradeLower+'/unit'+unit+'/week1/day4/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[14]+'\r';
	text += '34,/html/grade'+gradeLower+'/unit'+unit+'/week1/day4/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[15]+'\r';
	text += '35,/html/grade'+gradeLower+'/unit'+unit+'/week1/day4/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[16]+'\r';
	text += '36,/html/grade'+gradeLower+'/unit'+unit+'/week1/day4/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[17]+'\r';
	text += '37,/html/grade'+gradeLower+'/unit'+unit+'/week1/day5/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[18]+'\r';
	text += '38,/html/grade'+gradeLower+'/unit'+unit+'/week1/day5/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[19]+'\r';
	text += '39,/html/grade'+gradeLower+'/unit'+unit+'/week1/day5/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[20]+'\r';
	text += '40,/html/grade'+gradeLower+'/unit'+unit+'/week1/day5/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[21]+'\r';

	//Week 2
	text += '41,/html/grade'+gradeLower+'/unit'+unit+'/week2/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 2,\r';
	text += '42,/html/grade'+gradeLower+'/unit'+unit+'/week2/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 2,\r';

	//Week 2
	text += '43,/html/grade'+gradeLower+'/unit'+unit+'/week2/day1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[22]+'\r';
	text += '44,/html/grade'+gradeLower+'/unit'+unit+'/week2/day1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[23]+'\r';
	text += '45,/html/grade'+gradeLower+'/unit'+unit+'/week2/day1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[24]+'\r';
	text += '46,/html/grade'+gradeLower+'/unit'+unit+'/week2/day1/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[25]+'\r';
	text += '47,/html/grade'+gradeLower+'/unit'+unit+'/week2/day2/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[26]+'\r';
	text += '48,/html/grade'+gradeLower+'/unit'+unit+'/week2/day2/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[27]+'\r';
	text += '49,/html/grade'+gradeLower+'/unit'+unit+'/week2/day2/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[28]+'\r';
	text += '50,/html/grade'+gradeLower+'/unit'+unit+'/week2/day2/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[29]+'\r';
	text += '51,/html/grade'+gradeLower+'/unit'+unit+'/week2/day3/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[30]+'\r';
	text += '52,/html/grade'+gradeLower+'/unit'+unit+'/week2/day3/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[31]+'\r';
	text += '53,/html/grade'+gradeLower+'/unit'+unit+'/week2/day3/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[32]+'\r';
	text += '54,/html/grade'+gradeLower+'/unit'+unit+'/week2/day3/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[33]+'\r';
	text += '55,/html/grade'+gradeLower+'/unit'+unit+'/week2/day3/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 2,'+titles[34]+'\r';
	text += '56,/html/grade'+gradeLower+'/unit'+unit+'/week2/day4/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[35]+'\r';
	text += '57,/html/grade'+gradeLower+'/unit'+unit+'/week2/day4/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[36]+'\r';
	text += '58,/html/grade'+gradeLower+'/unit'+unit+'/week2/day4/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[37]+'\r';
	text += '59,/html/grade'+gradeLower+'/unit'+unit+'/week2/day4/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[38]+'\r';
	text += '60,/html/grade'+gradeLower+'/unit'+unit+'/week2/day5/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[39]+'\r';
	text += '61,/html/grade'+gradeLower+'/unit'+unit+'/week2/day5/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[40]+'\r';
	text += '62,/html/grade'+gradeLower+'/unit'+unit+'/week2/day5/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[41]+'\r';
	text += '63,/html/grade'+gradeLower+'/unit'+unit+'/week2/day5/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[42]+'\r';

	//Week 3
	text += '64,/html/grade'+gradeLower+'/unit'+unit+'/week3/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 3,\r';
	text += '65,/html/grade'+gradeLower+'/unit'+unit+'/week3/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 3,\r';

	//Week 3
	text += '66,/html/grade'+gradeLower+'/unit'+unit+'/week3/day1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[43]+'\r';
	text += '67,/html/grade'+gradeLower+'/unit'+unit+'/week3/day1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[44]+'\r';
	text += '68,/html/grade'+gradeLower+'/unit'+unit+'/week3/day1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[45]+'\r';
	text += '69,/html/grade'+gradeLower+'/unit'+unit+'/week3/day1/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[46]+'\r';
	text += '70,/html/grade'+gradeLower+'/unit'+unit+'/week3/day2/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[47]+'\r';
	text += '71,/html/grade'+gradeLower+'/unit'+unit+'/week3/day2/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[48]+'\r';
	text += '72,/html/grade'+gradeLower+'/unit'+unit+'/week3/day2/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[49]+'\r';
	text += '73,/html/grade'+gradeLower+'/unit'+unit+'/week3/day2/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[50]+'\r';
	text += '74,/html/grade'+gradeLower+'/unit'+unit+'/week3/day3/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[51]+'\r';
	text += '75,/html/grade'+gradeLower+'/unit'+unit+'/week3/day3/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[52]+'\r';
	text += '76,/html/grade'+gradeLower+'/unit'+unit+'/week3/day3/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[53]+'\r';
	text += '77,/html/grade'+gradeLower+'/unit'+unit+'/week3/day3/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[54]+'\r';
	text += '78,/html/grade'+gradeLower+'/unit'+unit+'/week3/day3/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 3,'+titles[55]+'\r';
	text += '79,/html/grade'+gradeLower+'/unit'+unit+'/week3/day4/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[56]+'\r';
	text += '80,/html/grade'+gradeLower+'/unit'+unit+'/week3/day4/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[57]+'\r';
	text += '81,/html/grade'+gradeLower+'/unit'+unit+'/week3/day4/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[58]+'\r';
	text += '82,/html/grade'+gradeLower+'/unit'+unit+'/week3/day4/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[59]+'\r';
	text += '83,/html/grade'+gradeLower+'/unit'+unit+'/week3/day5/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[60]+'\r';
	text += '84,/html/grade'+gradeLower+'/unit'+unit+'/week3/day5/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[61]+'\r';
	text += '85,/html/grade'+gradeLower+'/unit'+unit+'/week3/day5/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[62]+'\r';
	text += '86,/html/grade'+gradeLower+'/unit'+unit+'/week3/day5/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[63]+'\r';

	//Additional Resources
	var ars = 87; //additional resources start

	if(!!grade.match(/k/i)) ars--
	else text += ars + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/instructional_routines_strategies.html,/css/main/additional_resources/instructional_routines_strategies.css,,Rutinas y estrategias de ense&ntilde;anza,Recursos adicionales,\r';
	text += (ars+1) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/constructive_conversation.html,/css/main/additional_resources/constructive_conversation.css,,Conversaci&oacute;n constructiva,Recursos adicionales,\r';
	text += (ars+2) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/independent_reading_program.html,/css/main/additional_resources/independent_reading_program.css,,Gestionar un programa de lectura independiente,Recursos adicionales,\r';
	text += (ars+3) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/recommended_trade_books.html,/css/main/additional_resources/recommended_trade_books.css,,Libros comerciales recomendados,Recursos adicionales,\r';
	text += (ars+4) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/phonics_cumulative_assessments.html,/css/main/additional_resources/phonics_cumulative_assessments.css,,Evaluaciones acumulativas de fon&eacute;tica,Recursos adicionales,\r';
	text += (ars+5) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/small_group_texts.html,/css/main/additional_resources/small_group_texts.css,,Textos para grupos peque&ntilde;os para volver a ense&ntilde;ar estrategias y destrezas,Recursos adicionales,\r';
	text += (ars+6) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/guide_to_text_complexity.html,/css/main/additional_resources/guide_to_text_complexity.css,,Gu&iacute;a para la complejidad del texto,Recursos adicionales,\r';
	text += (ars+7) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/access_equity.html,/css/main/additional_resources/access_equity.css,,Acceso y equidad,Recursos adicionales,\r';
	text += (ars+8) + ',/html/grade'+gradeLower+'/unit'+unit+'/additional_resources/contrastive_analysis.html,/css/main/additional_resources/contrastive_analysis.css,,An&aacute;lisis contrastivo,Recursos adicionales,\r';

	return text;
}

function grade2_template(){
	var text = '';
	var unit = current_package.unit;
	var grade = current_package.grade;
	// var volume = current_package.volume;
	var titles = current_package.lesson_titles;

	text += 'id,html,css,js,display_title,nav_root,sub_level\r';

	//Overview
	text += '1,/html/grade'+grade+'/unit'+unit+'/overview/content_knowledge_alignment.html,/css/main/overview/content_knowledge_alignment.css,,Gu&iacute;a general de conocimientos,Vistazo,\r'; //CV flap
	text += '2,/html/grade'+grade+'/unit'+unit+'/overview/vertical_progression.html,/css/main/overview/vertical_progression.css,,Progresi&oacute;n vertical de temas y preguntas esenciales de la unidad para ampliar los conocimientos,Vistazo,\r'; //CV foldout
	text += '3,/html/grade'+grade+'/unit'+unit+'/overview/author_and_consultant_team.html,/css/main/overview/author_and_consultant_team.css,,Equipo de autores y colaboradores,Vistazo,\r';
	text += '4,/html/grade'+grade+'/unit'+unit+'/overview/about_the_program.html,/css/main/overview/about_the_program.css,,Acerca del programa,Vistazo,\r';
	text += '5,/html/grade'+grade+'/unit'+unit+'/overview/welcome_to_benchmark_advance.html,/css/main/overview/welcome_to_benchmark_advance.css,,Bienvenidos a Benchmark Adelante,Vistazo,\r';
	text += '6,/html/grade'+grade+'/unit'+unit+'/overview/pacing_options.html,/css/main/overview/pacing_options.css,,Opciones de ritmo y ejemplo de bloque de lectoescritura,Vistazo,\r';
	text += '7,/html/grade'+grade+'/unit'+unit+'/overview/digital_print_components.html,/css/main/overview/digital_print_components.css,,Componentes digitales e impresos,Vistazo,\r';

	//Unit Resources
	text += '8,/html/grade'+grade+'/unit'+unit+'/unit_resources/unit_opener.html,/css/main/week/lesson.css,,Presentaci&oacute;n de la unidad,Recursos de la unidad,\r';
	text += '9,/html/grade'+grade+'/unit'+unit+'/unit_resources/strategies_skills.html,/css/main/unit_resources/strategies_skills.css,,Estrategias y destrezas,Recursos de la unidad,\r';
	text += '10,/html/grade'+grade+'/unit'+unit+'/unit_resources/components_at_a_glance.html,/css/main/unit_resources/components_at_a_glance.css,,Vistazo a los componentes,Recursos de la unidad,\r';
	text += '11,/html/grade'+grade+'/unit'+unit+'/unit_resources/intervention_reteaching.html,/css/main/unit_resources/intervention_reteaching.css,,Recursos de intervenci&oacute;n y para volver a ense&ntilde;ar,Recursos de la unidad,\r';
	text += '12,/html/grade'+grade+'/unit'+unit+'/unit_resources/guide_to_text_complexity.html,/css/main/unit_resources/guide_to_text_complexity.css,,Gu&iacute;a para la complejidad del texto,Recursos de la unidad,\r';
	text += '13,/html/grade'+grade+'/unit'+unit+'/unit_resources/secl.html,/css/main/unit_resources/secl.css,,Aprendizaje socioemocional y criterios sobre sensibilidad cultural,Recursos de la unidad,\r';
	text += '14,/html/grade'+grade+'/unit'+unit+'/unit_resources/vocabulary_development.html,/css/main/unit_resources/vocabulary_development.css,,Desarrollo del vocabulario,Recursos de la unidad,\r';
	text += '15,/html/grade'+grade+'/unit'+unit+'/unit_resources/inquiry.html,/css/main/unit_resources/inquiry.css,,Proyecto final de investigaci&oacute;n y an&aacute;lisis,Recursos de la unidad,\r';
	text += '16,/html/grade'+grade+'/unit'+unit+'/unit_resources/language_objectives.html,/css/main/unit_resources/language_objectives.css,,Objetivos de lenguaje sugeridos,Recursos de la unidad,\r';

	//Week 1 Weekly Resources
	text += '17,/html/grade'+grade+'/unit'+unit+'/week1/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 1,\r';
	text += '18,/html/grade'+grade+'/unit'+unit+'/week1/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 1,\r';

	//Week 1
	text += '19,/html/grade'+grade+'/unit'+unit+'/week1/day1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[0]+'\r';
	text += '20,/html/grade'+grade+'/unit'+unit+'/week1/day1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[1]+'\r';
	text += '21,/html/grade'+grade+'/unit'+unit+'/week1/day1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[2]+'\r';
	text += '22,/html/grade'+grade+'/unit'+unit+'/week1/day1/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[3]+'\r';

	text += '23,/html/grade'+grade+'/unit'+unit+'/week1/day2/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 1,'+titles[4]+'\r';
	text += '24,/html/grade'+grade+'/unit'+unit+'/week1/day2/lesson6.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 6</strong>:<br>,Semana 1,'+titles[5]+'\r';
	text += '25,/html/grade'+grade+'/unit'+unit+'/week1/day2/lesson7.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 7</strong>:<br>,Semana 1,'+titles[6]+'\r';
	text += '26,/html/grade'+grade+'/unit'+unit+'/week1/day2/lesson8.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 8</strong>:<br>,Semana 1,'+titles[7]+'\r';

	text += '27,/html/grade'+grade+'/unit'+unit+'/week1/day3/lesson9.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 9</strong>:<br>,Semana 1,'+titles[8]+'\r';
	text += '28,/html/grade'+grade+'/unit'+unit+'/week1/day3/lesson10.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 10</strong>:<br>,Semana 1,'+titles[9]+'\r';
	text += '29,/html/grade'+grade+'/unit'+unit+'/week1/day3/lesson11.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 11</strong>:<br>,Semana 1,'+titles[10]+'\r';
	text += '30,/html/grade'+grade+'/unit'+unit+'/week1/day3/lesson12.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 12</strong>:<br>,Semana 1,'+titles[11]+'\r';

	text += '31,/html/grade'+grade+'/unit'+unit+'/week1/day4/lesson13.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 13</strong>:<br>,Semana 1,'+titles[12]+'\r';
	text += '32,/html/grade'+grade+'/unit'+unit+'/week1/day4/lesson14.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 14</strong>:<br>,Semana 1,'+titles[13]+'\r';
	text += '33,/html/grade'+grade+'/unit'+unit+'/week1/day4/lesson15.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 15</strong>:<br>,Semana 1,'+titles[14]+'\r';

	text += '34,/html/grade'+grade+'/unit'+unit+'/week1/day5/lesson16.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 16</strong>:<br>,Semana 1,'+titles[15]+'\r';
	text += '35,/html/grade'+grade+'/unit'+unit+'/week1/day5/lesson17.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 17</strong>:<br>,Semana 1,'+titles[16]+'\r';
	text += '36,/html/grade'+grade+'/unit'+unit+'/week1/day5/lesson18.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 18</strong>:<br>,Semana 1,'+titles[17]+'\r';
	text += '37,/html/grade'+grade+'/unit'+unit+'/week1/day5/lesson19.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 19</strong>:<br>,Semana 1,'+titles[18]+'\r';

	//Week 2 Weekly Resources
	text += '38,/html/grade'+grade+'/unit'+unit+'/week2/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 2,\r';
	text += '39,/html/grade'+grade+'/unit'+unit+'/week2/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 2,\r';

	//Week 2
	text += '40,/html/grade'+grade+'/unit'+unit+'/week2/day1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[19]+'\r';
	text += '41,/html/grade'+grade+'/unit'+unit+'/week2/day1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[20]+'\r';
	text += '42,/html/grade'+grade+'/unit'+unit+'/week2/day1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[21]+'\r';

	text += '43,/html/grade'+grade+'/unit'+unit+'/week2/day2/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[22]+'\r';
	text += '44,/html/grade'+grade+'/unit'+unit+'/week2/day2/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 2,'+titles[23]+'\r';
	text += '45,/html/grade'+grade+'/unit'+unit+'/week2/day2/lesson6.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 6</strong>:<br>,Semana 2,'+titles[24]+'\r';
	text += '46,/html/grade'+grade+'/unit'+unit+'/week2/day2/lesson7.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 7</strong>:<br>,Semana 2,'+titles[25]+'\r';

	text += '47,/html/grade'+grade+'/unit'+unit+'/week2/day3/lesson8.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 8</strong>:<br>,Semana 2,'+titles[26]+'\r';
	text += '48,/html/grade'+grade+'/unit'+unit+'/week2/day3/lesson9.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 9</strong>:<br>,Semana 2,'+titles[27]+'\r';
	text += '49,/html/grade'+grade+'/unit'+unit+'/week2/day3/lesson10.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 10</strong>:<br>,Semana 2,'+titles[28]+'\r';
	text += '50,/html/grade'+grade+'/unit'+unit+'/week2/day3/lesson11.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 11</strong>:<br>,Semana 2,'+titles[29]+'\r';

	text += '51,/html/grade'+grade+'/unit'+unit+'/week2/day4/lesson12.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 12</strong>:<br>,Semana 2,'+titles[30]+'\r';
	text += '52,/html/grade'+grade+'/unit'+unit+'/week2/day4/lesson13.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 13</strong>:<br>,Semana 2,'+titles[31]+'\r';
	text += '53,/html/grade'+grade+'/unit'+unit+'/week2/day4/lesson14.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 14</strong>:<br>,Semana 2,'+titles[32]+'\r';

	text += '54,/html/grade'+grade+'/unit'+unit+'/week2/day5/lesson15.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 15</strong>:<br>,Semana 2,'+titles[33]+'\r';
	text += '55,/html/grade'+grade+'/unit'+unit+'/week2/day5/lesson16.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 16</strong>:<br>,Semana 2,'+titles[34]+'\r';
	text += '56,/html/grade'+grade+'/unit'+unit+'/week2/day5/lesson17.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 17</strong>:<br>,Semana 2,'+titles[35]+'\r';

	//Week 3 Weekly Resources
	text += '57,/html/grade'+grade+'/unit'+unit+'/week3/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 3,\r';
	text += '58,/html/grade'+grade+'/unit'+unit+'/week3/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 3,\r';

	//Week 3
	text += '59,/html/grade'+grade+'/unit'+unit+'/week3/day1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[36]+'\r';
	text += '60,/html/grade'+grade+'/unit'+unit+'/week3/day1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[37]+'\r';
	text += '61,/html/grade'+grade+'/unit'+unit+'/week3/day1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[38]+'\r';

	text += '62,/html/grade'+grade+'/unit'+unit+'/week3/day2/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[39]+'\r';
	text += '63,/html/grade'+grade+'/unit'+unit+'/week3/day2/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 3,'+titles[40]+'\r';
	text += '64,/html/grade'+grade+'/unit'+unit+'/week3/day2/lesson6.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 6</strong>:<br>,Semana 3,'+titles[41]+'\r';
	text += '65,/html/grade'+grade+'/unit'+unit+'/week3/day2/lesson7.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 7</strong>:<br>,Semana 3,'+titles[42]+'\r';

	text += '66,/html/grade'+grade+'/unit'+unit+'/week3/day3/lesson8.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 8</strong>:<br>,Semana 3,'+titles[43]+'\r';
	text += '67,/html/grade'+grade+'/unit'+unit+'/week3/day3/lesson9.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 9</strong>:<br>,Semana 3,'+titles[44]+'\r';
	text += '68,/html/grade'+grade+'/unit'+unit+'/week3/day3/lesson10.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 10</strong>:<br>,Semana 3,'+titles[45]+'\r';

	text += '69,/html/grade'+grade+'/unit'+unit+'/week3/day4/lesson11.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 11</strong>:<br>,Semana 3,'+titles[46]+'\r';
	text += '70,/html/grade'+grade+'/unit'+unit+'/week3/day4/lesson12.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 12</strong>:<br>,Semana 3,'+titles[47]+'\r';
	text += '71,/html/grade'+grade+'/unit'+unit+'/week3/day4/lesson13.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 13</strong>:<br>,Semana 3,'+titles[48]+'\r';

	text += '72,/html/grade'+grade+'/unit'+unit+'/week3/day5/lesson14.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 14</strong>:<br>,Semana 3,'+titles[49]+'\r';
	text += '73,/html/grade'+grade+'/unit'+unit+'/week3/day5/lesson15.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 15</strong>:<br>,Semana 3,'+titles[50]+'\r';
	text += '74,/html/grade'+grade+'/unit'+unit+'/week3/day5/lesson16.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 16</strong>:<br>,Semana 3,'+titles[51]+'\r';
	text += '75,/html/grade'+grade+'/unit'+unit+'/week3/day5/lesson17.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 17</strong>:<br>,Semana 3,'+titles[52]+'\r';

	//Additional Resources
	var ars = 76; //additional resources start

	text += ars + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/instructional_routines_strategies.html,/css/main/additional_resources/instructional_routines_strategies.css,,Rutinas y estrategias de ense&ntilde;anza,Recursos adicionales,\r';
	text += (ars+1) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/constructive_conversation.html,/css/main/additional_resources/constructive_conversation.css,,Conversaci&oacute;n constructiva,Recursos adicionales,\r';
	text += (ars+2) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/independent_reading_program.html,/css/main/additional_resources/independent_reading_program.css,,Gestionar un programa de lectura independiente,Recursos adicionales,\r';
	text += (ars+3) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/recommended_trade_books.html,/css/main/additional_resources/recommended_trade_books.css,,Libros comerciales recomendados,Recursos adicionales,\r';
	text += (ars+4) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/phonics_cumulative_assessments.html,/css/main/additional_resources/phonics_cumulative_assessments.css,,Evaluaciones acumulativas de fon&eacute;tica,Recursos adicionales,\r';
	text += (ars+5) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/answer_key.html,/css/main/additional_resources/answer_key.css,,Evidencia del texto y clave de respuestas de la lectura atenta,Recursos adicionales,\r';
	text += (ars+6) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/modeling_script.html,/css/main/additional_resources/modeling_script.css,,Guiones para la demostraci&oacute;n de la conversaci&oacute;n constructiva,Recursos adicionales,\r';
	text += (ars+7) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/small_group_texts.html,/css/main/additional_resources/small_group_texts.css,,Textos para grupos peque&ntilde;os para volver a ense&ntilde;ar estrategias y destrezas,Recursos adicionales,\r';
	text += (ars+8) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/guide_to_text_complexity.html,/css/main/additional_resources/guide_to_text_complexity.css,,Gu&iacute;a para la complejidad del texto,Recursos adicionales,\r';
	text += (ars+9) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/access_equity.html,/css/main/additional_resources/access_equity.css,,Acceso y equidad,Recursos adicionales,\r';
	text += (ars+10) + ',/html/grade'+grade+'/unit'+unit+'/additional_resources/contrastive_analysis.html,/css/main/additional_resources/contrastive_analysis.css,,An&aacute;lisis contrastivo,Recursos adicionales,\r';

	return text;
}


function uppergrade_template(){
	var text = '';	
	var grade = current_package.grade.toLowerCase();
	var unit = current_package.unit;
	var titles = current_package.lesson_titles;

	text += 'id,html,css,js,display_title,nav_root,sub_level\r';

	//Overview
	text += '1,/html/grade'+grade+'/unit'+unit+'/overview/content_knowledge_alignment.html,/css/main/overview/content_knowledge_alignment.css,,Gu&iacute;a general de conocimientos,Vistazo,\r'; //CV flap
	text += '2,/html/grade'+grade+'/unit'+unit+'/overview/vertical_progression.html,/css/main/overview/vertical_progression.css,,Progresi&oacute;n vertical de temas y preguntas esenciales de la unidad para ampliar los conocimientos,Vistazo,\r'; //CV foldout
	text += '3,/html/grade'+grade+'/unit'+unit+'/overview/author_and_consultant_team.html,/css/main/overview/author_and_consultant_team.css,,Equipo de autores y colaboradores,Vistazo,\r';
	text += '4,/html/grade'+grade+'/unit'+unit+'/overview/about_the_program.html,/css/main/overview/about_the_program.css,,Acerca del programa,Vistazo,\r';
	text += '5,/html/grade'+grade+'/unit'+unit+'/overview/welcome_to_benchmark_advance.html,/css/main/overview/welcome_to_benchmark_advance.css,,Bienvenidos a Benchmark Adelante,Vistazo,\r';
	text += '6,/html/grade'+grade+'/unit'+unit+'/overview/pacing_options.html,/css/main/overview/pacing_options.css,,Opciones de ritmo y ejemplo de bloque de lectoescritura,Vistazo,\r';
	text += '7,/html/grade'+grade+'/unit'+unit+'/overview/digital_print_components.html,/css/main/overview/digital_print_components.css,,Componentes digitales e impresos,Vistazo,\r';

	//Unit Resources
	text += '8,/html/grade'+grade+'/unit'+unit+'/unit_resources/unit_opener.html,/css/main/week/lesson.css,,Presentaci&oacute;n de la unidad,Recursos de la unidad,\r';
	text += '9,/html/grade'+grade+'/unit'+unit+'/unit_resources/strategies_skills.html,/css/main/unit_resources/strategies_skills.css,,Estrategias y destrezas,Recursos de la unidad,\r';
	text += '10,/html/grade'+grade+'/unit'+unit+'/unit_resources/components_at_a_glance.html,/css/main/unit_resources/components_at_a_glance.css,,Vistazo a los componentes,Recursos de la unidad,\r';
	text += '11,/html/grade'+grade+'/unit'+unit+'/unit_resources/intervention_reteaching.html,/css/main/unit_resources/intervention_reteaching.css,,Recursos de intervenci&oacute;n y para volver a ense&ntilde;ar,Recursos de la unidad,\r';
	text += '12,/html/grade'+grade+'/unit'+unit+'/unit_resources/guide_to_text_complexity.html,/css/main/unit_resources/guide_to_text_complexity.css,,Gu&iacute;a para la complejidad del texto,Recursos de la unidad,\r';
	text += '13,/html/grade'+grade+'/unit'+unit+'/unit_resources/secl.html,/css/main/unit_resources/secl.css,,Aprendizaje socioemocional y criterios sobre sensibilidad cultural,Recursos de la unidad,\r';
	text += '14,/html/grade'+grade+'/unit'+unit+'/unit_resources/vocabulary_development.html,/css/main/unit_resources/vocabulary_development.css,,Desarrollo del vocabulario,Recursos de la unidad,\r';
	text += '15,/html/grade'+grade+'/unit'+unit+'/unit_resources/inquiry.html,/css/main/unit_resources/inquiry.css,,Proyecto final de investigaci&oacute;n y an&aacute;lisis,Recursos de la unidad,\r';
	text += '16,/html/grade'+grade+'/unit'+unit+'/unit_resources/language_objectives.html,/css/main/unit_resources/language_objectives.css,,Objetivos de lenguaje sugeridos,Recursos de la unidad,\r';

	//Week 1
	text += '17,/html/grade'+grade+'/unit'+unit+'/week1/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 1,\r';
	text += '18,/html/grade'+grade+'/unit'+unit+'/week1/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 1,\r';

	//Week 1
	text += '19,/html/grade'+grade+'/unit'+unit+'/week1/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 1,'+titles[0]+'\r';
	text += '20,/html/grade'+grade+'/unit'+unit+'/week1/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 1,'+titles[1]+'\r';
	text += '21,/html/grade'+grade+'/unit'+unit+'/week1/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 1,'+titles[2]+'\r';
	text += '22,/html/grade'+grade+'/unit'+unit+'/week1/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 1,'+titles[3]+'\r';
	text += '23,/html/grade'+grade+'/unit'+unit+'/week1/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 1,'+titles[4]+'\r';
	text += '24,/html/grade'+grade+'/unit'+unit+'/week1/lesson6.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 6</strong>:<br>,Semana 1,'+titles[5]+'\r';
	text += '25,/html/grade'+grade+'/unit'+unit+'/week1/lesson7.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 7</strong>:<br>,Semana 1,'+titles[6]+'\r';
	text += '26,/html/grade'+grade+'/unit'+unit+'/week1/lesson8.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 8</strong>:<br>,Semana 1,'+titles[7]+'\r';
	text += '27,/html/grade'+grade+'/unit'+unit+'/week1/lesson9.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 9</strong>:<br>,Semana 1,'+titles[8]+'\r';
	text += '28,/html/grade'+grade+'/unit'+unit+'/week1/lesson10.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 10</strong>:<br>,Semana 1,'+titles[9]+'\r';
	text += '29,/html/grade'+grade+'/unit'+unit+'/week1/lesson11.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 11</strong>:<br>,Semana 1,'+titles[10]+'\r';
	text += '30,/html/grade'+grade+'/unit'+unit+'/week1/lesson12.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 12</strong>:<br>,Semana 1,'+titles[11]+'\r';
	text += '31,/html/grade'+grade+'/unit'+unit+'/week1/lesson13.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 13</strong>:<br>,Semana 1,'+titles[12]+'\r';
	text += '32,/html/grade'+grade+'/unit'+unit+'/week1/lesson14.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 14</strong>:<br>,Semana 1,'+titles[13]+'\r';

	//Week 2
	text += '33,/html/grade'+grade+'/unit'+unit+'/week2/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 2,\r';
	text += '34,/html/grade'+grade+'/unit'+unit+'/week2/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 2,\r';

	//Week 2
	text += '35,/html/grade'+grade+'/unit'+unit+'/week2/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 2,'+titles[14]+'\r';
	text += '36,/html/grade'+grade+'/unit'+unit+'/week2/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 2,'+titles[15]+'\r';
	text += '37,/html/grade'+grade+'/unit'+unit+'/week2/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 2,'+titles[16]+'\r';
	text += '38,/html/grade'+grade+'/unit'+unit+'/week2/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 2,'+titles[17]+'\r';
	text += '39,/html/grade'+grade+'/unit'+unit+'/week2/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 2,'+titles[18]+'\r';
	text += '40,/html/grade'+grade+'/unit'+unit+'/week2/lesson6.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 6</strong>:<br>,Semana 2,'+titles[19]+'\r';
	text += '41,/html/grade'+grade+'/unit'+unit+'/week2/lesson7.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 7</strong>:<br>,Semana 2,'+titles[20]+'\r';
	text += '42,/html/grade'+grade+'/unit'+unit+'/week2/lesson8.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 8</strong>:<br>,Semana 2,'+titles[21]+'\r';
	text += '43,/html/grade'+grade+'/unit'+unit+'/week2/lesson9.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 9</strong>:<br>,Semana 2,'+titles[22]+'\r';
	text += '44,/html/grade'+grade+'/unit'+unit+'/week2/lesson10.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 10</strong>:<br>,Semana 2,'+titles[23]+'\r';
	text += '45,/html/grade'+grade+'/unit'+unit+'/week2/lesson11.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 11</strong>:<br>,Semana 2,'+titles[24]+'\r';
	text += '46,/html/grade'+grade+'/unit'+unit+'/week2/lesson12.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 12</strong>:<br>,Semana 2,'+titles[25]+'\r';
	text += '47,/html/grade'+grade+'/unit'+unit+'/week2/lesson13.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 13</strong>:<br>,Semana 2,'+titles[26]+'\r';

	//Week 3
	text += '48,/html/grade'+grade+'/unit'+unit+'/week3/goals.html,/css/main/week/goals.css,,Objetivos de aprendizaje,Semana 3,\r';
	text += '49,/html/grade'+grade+'/unit'+unit+'/week3/planner.html,/css/main/week/planner.css,,Plan integral de lectoescritura,Semana 3,\r';

	//Week 3
	text += '50,/html/grade'+grade+'/unit'+unit+'/week3/lesson1.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 1</strong>:<br>,Semana 3,'+titles[27]+'\r';
	text += '51,/html/grade'+grade+'/unit'+unit+'/week3/lesson2.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 2</strong>:<br>,Semana 3,'+titles[28]+'\r';
	text += '52,/html/grade'+grade+'/unit'+unit+'/week3/lesson3.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 3</strong>:<br>,Semana 3,'+titles[29]+'\r';
	text += '53,/html/grade'+grade+'/unit'+unit+'/week3/lesson4.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 4</strong>:<br>,Semana 3,'+titles[30]+'\r';
	text += '54,/html/grade'+grade+'/unit'+unit+'/week3/lesson5.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 5</strong>:<br>,Semana 3,'+titles[31]+'\r';
	text += '55,/html/grade'+grade+'/unit'+unit+'/week3/lesson6.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 6</strong>:<br>,Semana 3,'+titles[32]+'\r';
	text += '56,/html/grade'+grade+'/unit'+unit+'/week3/lesson7.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 7</strong>:<br>,Semana 3,'+titles[33]+'\r';
	text += '57,/html/grade'+grade+'/unit'+unit+'/week3/lesson8.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 8</strong>:<br>,Semana 3,'+titles[34]+'\r';
	text += '58,/html/grade'+grade+'/unit'+unit+'/week3/lesson9.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 9</strong>:<br>,Semana 3,'+titles[35]+'\r';
	text += '59,/html/grade'+grade+'/unit'+unit+'/week3/lesson10.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 10</strong>:<br>,Semana 3,'+titles[36]+'\r';
	text += '60,/html/grade'+grade+'/unit'+unit+'/week3/lesson11.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 11</strong>:<br>,Semana 3,'+titles[37]+'\r';
	text += '61,/html/grade'+grade+'/unit'+unit+'/week3/lesson12.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 12</strong>:<br>,Semana 3,'+titles[38]+'\r';
	text += '62,/html/grade'+grade+'/unit'+unit+'/week3/lesson13.html,/css/main/week/lesson.css,,<strong>Lecci&oacute;n 13</strong>:<br>,Semana 3,'+titles[39]+'\r';

	//Additional Resources
	text += '63,/html/grade'+grade+'/unit'+unit+'/additional_resources/instructional_routines_strategies.html,/css/main/additional_resources/instructional_routines_strategies.css,,Rutinas y estrategias de ense&ntilde;anza,Recursos adicionales,\r';
	text += '64,/html/grade'+grade+'/unit'+unit+'/additional_resources/constructive_conversation.html,/css/main/additional_resources/constructive_conversation.css,,Conversaci&oacute;n constructiva,Recursos adicionales,\r';
	text += '65,/html/grade'+grade+'/unit'+unit+'/additional_resources/reading_big_words.html,/css/main/additional_resources/reading_big_words.css,,Leer palabras dif&iacute;ciles,Recursos adicionales,\r';
	text += '66,/html/grade'+grade+'/unit'+unit+'/additional_resources/independent_reading_program.html,/css/main/additional_resources/independent_reading_program.css,,Gestionar un programa de lectura independiente,Recursos adicionales,\r';
	text += '67,/html/grade'+grade+'/unit'+unit+'/additional_resources/recommended_trade_books.html,/css/main/additional_resources/recommended_trade_books.css,,Libros comerciales recomendados,Recursos adicionales,\r';
	// text += ',/html/grade'+grade+'/unit'+unit+'/additional_resources/phonics_cumulative_assessments.html,/css/main/additional_resources/phonics_cumulative_assessments.css,,Evaluaciones acumulativas de fon&eacute;tica,Recursos adicionales,\r';
	text += '68,/html/grade'+grade+'/unit'+unit+'/additional_resources/answer_key.html,/css/main/additional_resources/answer_key.css,,Evidencia del texto y clave de respuestas de la lectura atenta,Recursos adicionales,\r';
	text += '69,/html/grade'+grade+'/unit'+unit+'/additional_resources/modeling_script.html,/css/main/additional_resources/modeling_script.css,,Guiones para la demostraci&oacute;n de la conversaci&oacute;n constructiva,Recursos adicionales,\r';
	text += '70,/html/grade'+grade+'/unit'+unit+'/additional_resources/small_group_texts.html,/css/main/additional_resources/small_group_texts.css,,Textos para grupos peque&ntilde;os para volver a ense&ntilde;ar estrategias y destrezas,Recursos adicionales,\r';
	text += '71,/html/grade'+grade+'/unit'+unit+'/additional_resources/guide_to_text_complexity.html,/css/main/additional_resources/guide_to_text_complexity.css,,Gu&iacute;a para la complejidad del texto,Recursos adicionales,\r';
	text += '72,/html/grade'+grade+'/unit'+unit+'/additional_resources/access_equity.html,/css/main/additional_resources/access_equity.css,,Acceso y equidad,Recursos adicionales,\r';
	text += '73,/html/grade'+grade+'/unit'+unit+'/additional_resources/contrastive_analysis.html,/css/main/additional_resources/contrastive_analysis.css,,An&aacute;lisis contrastivo,Recursos adicionales,\r';

	return text;
}

