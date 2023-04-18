// BA2!                                                                                                                             |_|                                                                                                                                              |_|  

//CREATOR JY, CHANGED BY EM
//CREATED 2019-02-19
//UPDATED 2019-something-something
//VERSION 2.0

var nav_grade;

var getKeys = function(obj){
	var keys = [];
		for(var key in obj){
		  keys.push(key);
		}
	// log(keys);
	return keys;
}

DataMap.prototype.write_to_files = function(){
	var self = this;
	var keys = getKeys(self.records);	
	keys.forEach(function(key){
		var nav = self.get_record(key);				
    var file = File(output_folder+separator+nav.xcode+nav.html_file_path);
    if(!!file.exists){
      file.open('r');
      var text = file.read();
      file.close();
      nav.html = nav.toHTML();      
      text = text.replace(/<nav.*?>(.|\n)*<\/nav>/i, nav.html);
      file.encoding = 'UTF-8';
      file.open('w');
      file.write(text);
      file.close();
      log(file+' written!');
    }
  });
}
 
function Navigation(record){	
	this.id = record[0].trim();
	this.html_file_path = record[1].trim();
	this.css_file_paths = record[2].split(/&#44;/);
	this.js_file_paths = record[3].split(/&#44;/);
	this.display_title = record[4].trim();
	this.nav_root = record[5].trim();
	this.sub_level = record[6].trim();	
	this.grade = this.html_file_path.match(/grade(k|\d+)/ig)[0].replace(/grade/, '');
	nav_grade = this.grade;
	this.unit = this.html_file_path.match(/unit\d+/i)[0].replace(/unit/, '');	
	this.logo_name = 'adelante2';
	this.xcode = current_package.xcode;
	this.html = '';

	//this is the best place for this, probably ("It's a surprise tool that will help us later!" -Mickey Mouse)
	///week1/day2/lesson3.
	if(this.html_file_path.match(/lesson/))
	{
		eplanner_toc_json_content += '\t\t"G'+this.grade+'U'+this.unit+'W'+this.html_file_path.match(/week\d/)[0].replace(/week/, '');
		if(this.html_file_path.match(/day\d/)) eplanner_toc_json_content += 'D'+this.html_file_path.match(/day\d/)[0].replace(/day/, '');
		eplanner_toc_json_content += 'L'+this.html_file_path.match(/lesson\d+/)[0].replace(/lesson/, '')+'": "'+this.html_file_path+'",\r';
	}
}

Navigation.prototype.make_logo = function(){	
	var text = '';
	text += '<figure>\r';
	text += '<img class="img-fluid" src="/images/nav/logos/'+this.logo_name+'.png">\r';
	text += '</figure>\r';
	return text;
};

Navigation.prototype.make_unit_dropdown_collapse_icon = function(){
	var text = '';	
	text += '<div class="nav-icon-bars" data-toggle="collapse" data-target="#nav_root" aria-controls="nav_root" aria-expanded="false" aria-label="Toggle navigation"></div>\r';
	return text;
};

Navigation.prototype.make_unit_dropdown = function(){
	var text = '';	
	var unit_display = this.unit == 0 ? 'Launch' : 'Unidad '+this.unit;
	text += '<div class="dropdown">\r';
	text += '<h6 role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+unit_display+'<span class="nav-caret"></span></h6>\r';
	text += '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">\r';
	for(var x = 1; x < 11; x++){ //skip unit 0
		var unit = x;
		var product = get_product_span(this.grade, unit, region);
		var link = '';
		switch(unit){
			case 0: 	link = '/html/grade'+this.grade+'/unit'+unit+'/routines/planner_pacing_guide.html'; break;
			default: 	link = '/html/grade'+this.grade+'/unit'+unit+'/unit_resources/unit_opener.html';
		}
		text += '<a class="dropdown-item'+(unit == this.unit ? ' active' : '')+'" data-type="'+(unit == this.unit ? 'internal' : 'itrs')+'" data-code="'+product.xcode+'" data-extLink="'+link+'" href="'+link+'">'+(unit == 0 ? 'Launch' : 'Unidad '+unit)+'</a>\r';
	}
	text += '</div>\r';
	text += '</div>\r';
	return text;
};

Navigation.prototype.make_back_to_top_button = function(){	
	var text = '';
	text += '<a class="scroll" href="#top"><div class="back-to-top"><span>Back to Top</span></div></a>\r';
	return text;
};

Navigation.prototype.make_print_button = function(classname){	
	var text = '';	
	// text += '<div class="print_button '+classname+'"><p><a data-code="'+current_package.dmv+'" data-type="html" data-extLink="javascript" href="javascript">Versi&oacute;n reproducible <span class="nav-icon-external-link"></span></a></p></div>\r';
	// text += '<div class="print_button '+classname+'"><p><a href="/pdfs/print.pdf" target="_blank">Versi&oacute;n reproducible <span class="nav-icon-external-link"></span></a></p></div>\r'; //the default one
	text += '<div class="print_button '+classname+'"><!--<p><a href="/pdfs/print.pdf" target="_blank">Versi&oacute;n reproducible <span class="nav-icon-external-link"></span></a></p>--></div>\r'; //commented-out, don't use this most of the time
	return text;
};

// Navigation.prototype.make_main_accordion = function(){	
// 	var self = this;
// 	var text = '';
// 	var accordion_id = 'nav_root';
// 	var overview_card = {folder_name: 'overview', title: 'Overview', header_id: 'nav_overview_header', body_id: 'nav_overview_body', accordion_id: accordion_id, links: self.make_links(self.overview_ids)};
// 	var ur_card = {folder_name: 'unit_resources', title: 'Unit Resources', header_id: 'nav_ur_header', body_id: 'nav_ur_body', accordion_id: accordion_id, links: self.make_links(self.unit_resources_ids)};
// 	var week1_card = {folder_name: 'week1', title: 'Week 1', header_id: 'nav_week1_header', body_id: 'nav_week1_body', accordion_id: accordion_id, links: '<h5>'+datamap.get_record(self.week1_ids[0]).sub_level+'</h5>\r'+self.make_links(self.week1_ids)};
// 	var week2_card = {folder_name: 'week2', title: 'Week 2', header_id: 'nav_week2_header', body_id: 'nav_week2_body', accordion_id: accordion_id, links: '<h5>'+datamap.get_record(self.week2_ids[0]).sub_level+'</h5>\r'+self.make_links(self.week2_ids)};
// 	var week3_card = {folder_name: 'week3', title: 'Week 3', header_id: 'nav_week3_header', body_id: 'nav_week3_body', accordion_id: accordion_id, links: '<h5>'+datamap.get_record(self.week3_ids[0]).sub_level+'</h5>\r'+self.make_links(self.week3_ids)};	
// 	var ar_card = {folder_name: 'additional_resources', title: 'Additional Resources', header_id: 'nav_ar_header', body_id: 'nav_ar_body', accordion_id: accordion_id, links: self.make_links(self.additional_resources_ids)};
// 	var cards = [overview_card, ur_card, week1_card, week2_card, week3_card, ar_card];
// 	text += this.make_accordion(accordion_id, cards);
// 	return text;
// };

Navigation.prototype.make_main_accordion = function(){	
	var self = this;
	var text = '';
	var accordion_id = 'nav_root';
	var cards = [];
	var root_level_titles = this.get_root_level_titles();
	root_level_titles.forEach(function(root_level_title){
		if(!!root_level_title)
		{
			var root_level_ids = self.get_root_level_ids(root_level_title);
			var folder_name = root_level_title.replace(/\s/g, '_').toLowerCase();
			var title = root_level_title;
			var ids = root_level_ids;
			if(!!title.match(/semana/i))
			{
				if(nav_grade.match(/[k1]/i))
				{
					var card = { 
						folder_name: folder_name, 
						title: title, 
						header_id: 'nav_'+folder_name+'_header', 
						body_id: 'nav_'+folder_name+'_body', 
						accordion_id: accordion_id,
						links_resources: self.make_links(ids.splice(0,2)),
						links_lessons_day1: self.make_links(ids.splice(0,(title.match(/1/)?5:4))),
						links_lessons_day2: self.make_links(ids.splice(0,4)),
						links_lessons_day3: self.make_links(ids.splice(0,5)),
						links_lessons_day4: self.make_links(ids.splice(0,4)),
						links_lessons_day5: self.make_links(ids) //should be 4 long by this point
					};
				}
				else if(nav_grade.match(/2/)) //grade 2 is special
				{
					if(title.match(/1/))
					{
						var card = { 
							folder_name: folder_name, 
							title: title, 
							header_id: 'nav_'+folder_name+'_header', 
							body_id: 'nav_'+folder_name+'_body', 
							accordion_id: accordion_id,
							links_resources: self.make_links(ids.splice(0,2)),
							links_lessons_day1: self.make_links(ids.splice(0,4)),
							links_lessons_day2: self.make_links(ids.splice(0,4)),
							links_lessons_day3: self.make_links(ids.splice(0,4)),
							links_lessons_day4: self.make_links(ids.splice(0,3)),
							links_lessons_day5: self.make_links(ids) //should be 4 long by this point
						};
					}
					else if(title.match(/2/))
					{
						var card = { 
							folder_name: folder_name, 
							title: title, 
							header_id: 'nav_'+folder_name+'_header', 
							body_id: 'nav_'+folder_name+'_body', 
							accordion_id: accordion_id,
							links_resources: self.make_links(ids.splice(0,2)),
							links_lessons_day1: self.make_links(ids.splice(0,3)),
							links_lessons_day2: self.make_links(ids.splice(0,4)),
							links_lessons_day3: self.make_links(ids.splice(0,4)),
							links_lessons_day4: self.make_links(ids.splice(0,3)),
							links_lessons_day5: self.make_links(ids) //should be 3 long by this point
						};
					}
					else if(title.match(/3/))
					{
						var card = { 
							folder_name: folder_name, 
							title: title, 
							header_id: 'nav_'+folder_name+'_header', 
							body_id: 'nav_'+folder_name+'_body', 
							accordion_id: accordion_id,
							links_resources: self.make_links(ids.splice(0,2)),
							links_lessons_day1: self.make_links(ids.splice(0,3)),
							links_lessons_day2: self.make_links(ids.splice(0,4)),
							links_lessons_day3: self.make_links(ids.splice(0,3)),
							links_lessons_day4: self.make_links(ids.splice(0,3)),
							links_lessons_day5: self.make_links(ids) //should be 4 long by this point
						};
					}
				}
				else
				{
					var card = { 
						folder_name: folder_name, 
						title: title, 
						header_id: 'nav_'+folder_name+'_header', 
						body_id: 'nav_'+folder_name+'_body', 
						accordion_id: accordion_id,
						links_resources: self.make_links(ids.splice(0,2)),
						links_lessons: self.make_links(ids)
					};
				}
			}
			else
			{
				var card = { 
					folder_name: folder_name, 
					title: title, 
					header_id: 'nav_'+folder_name+'_header', 
					body_id: 'nav_'+folder_name+'_body', 
					accordion_id: accordion_id,
					links: self.make_links(ids)
				};
			}
			cards.push(card);
		}
	});
	text += this.make_accordion(accordion_id, cards);
	return text;
};

Navigation.prototype.get_root_level_titles = function(){
	var results = [];
	datamap.forEach(function(record){
		var root_level_title = record.nav_root;
		results.push(root_level_title);
		results = results.makeUnique();
	});
	return results;
};

Navigation.prototype.get_root_level_ids = function(title){
	var results = [];
	datamap.forEach(function(record){
		var root_level_title = record.nav_root;
		if(root_level_title == title){
			results.push(record.id);
		}
	});
	return results;
};

Navigation.prototype.get_sub_level_titles = function(ids){
	var results = [];
	ids.forEach(function(id){
		var id = id.trim();
		var nav = datamap.get_record(id);		
		var sub_level_title = nav.sub_level;
		results.push(sub_level_title);
		results = results.makeUnique();
	}); 
	return results;
};

// Navigation.prototype.make_weekly_accordion = function(week, ids){
// 	var self = this;
// 	var text = '';
// 	var accordion_id = 'nav_week'+week;
// 	var cards = [];
// 	var sub_level_titles = this.get_sub_level_titles(ids);	

// 	sub_level_titles.forEach(function(sub_level_title, index){				
// 		var folder_name = sub_level_title.replace(/\s/g, '').toLowerCase();		
// 		card = {folder_name: folder_name, title: sub_level_title, header_id: accordion_id+'_'+index+'_header', body_id: accordion_id+'_'+index+'_body', accordion_id: accordion_id, links: self.make_links(self.get_sub_level_ids(ids, sub_level_title))};
// 		cards.push(card);
// 	});

// 	text += this.make_accordion(accordion_id, cards);	
// 	return text;
// };

// Navigation.prototype.get_sub_level_ids = function(ids, title){
// 	var results = [];
// 	ids.forEach(function(id){
// 		var nav = datamap.get_record(id);		
// 		if(nav.sub_level == title){
// 			results.push(id);
// 		}
// 	});
// 	return results;
// };

Navigation.prototype.make_links = function(ids){
	var self = this;
	var text = '';
	// var sub_level_title = datamap.get_record(ids[0]).sub_level;
	// if(sub_level_title != ''){
	// 	text += '<h5>'+sub_level_title+'</h5>\r';
	// }

	ids.forEach(function(id){
		var id = id.trim();
		var nav = datamap.get_record(id);		
		text += '<a '+(self.id == id ? ' class="active"' : '')+'href="'+nav.html_file_path+'" data-type="internal" data-extLink="'+nav.html_file_path+'">\r';
		text += '<p>'+nav.display_title+nav.sub_level+'</p>\r';
		text += '</a>\r';
	});
	return text;
};

Navigation.prototype.make_accordion = function(accordion_id, cards){	
	var self = this;
	var text = '';
	text += '<div class="accordion collapse show" id="'+accordion_id+'">\r';
	cards.forEach(function(card){		
		if(card.title == ''){
			text += card.links;
		}else{
			text += self.make_card(card);
		}		
	});	
	text += '</div>\r';
	return text;
};

Navigation.prototype.make_card = function(card){
	var title = card.title;
	var header_id = card.header_id;
	var body_id = card.body_id;
	var accordion_id = card.accordion_id;	
	var show = '';
	var text = '';
	switch(true){
		// case !!this.html_file_path.match(RegExp(card.folder_name.replace(/_(\d+)/g, '$1'), 'i')):
		case (!!this.html_file_path.match(/overview/ig) && card.folder_name == 'vistazo'):
		case (!!this.html_file_path.match(/unit_resources/ig) && card.folder_name == 'recursos_de_la_unidad'):
		case (!!this.html_file_path.match(/week1/ig) && card.folder_name == 'semana_1'):
		case (!!this.html_file_path.match(/week2/ig) && card.folder_name == 'semana_2'):
		case (!!this.html_file_path.match(/week3/ig) && card.folder_name == 'semana_3'):
		case (!!this.html_file_path.match(/additional_resources/ig) && card.folder_name == 'recursos_adicionales'):
			show = ' show';
		break;
	}

	var nav_week = 1;
	if(card.folder_name == 'semana_2') nav_week = 2;
	else if(card.folder_name == 'semana_3') nav_week = 3;

	text += '<div class="card">\r';
	text += '<div class="card-header" id="'+header_id+'">\r';
	text += '<h5 class="mb-0">\r';
	text += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#'+body_id+'" aria-expanded="true" aria-controls="'+body_id+'">\r';
	text += title+'\r';
	text += '<span class="nav-caret"></span>\r';
	text += '</button>\r';
	text += '</h5>\r';
	text += '</div>\r';
	text += '<div id="'+body_id+'" class="collapse'+show+'" aria-labelledby="'+header_id+'" data-parent="#'+accordion_id+'">\r';
	text += '<div class="card-body">\r';
	if(card.folder_name.match(/semana/))
	{
		//CSV should just go by Week 1, Week 2, Week 3. First two things are always Weekly Resources, and then the rest is Mini-Lessons.

		text += '<div class="accordion collapse show" id="'+header_id+'">\r';
		text += '<div class="card">\r';
		text += '<div class="card-header" id="nav_week_'+nav_week+'_wr_header">\r';
		text += '<h5 class="mb-0">\r';
		text += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#nav_week_'+nav_week+'_wr_body" aria-expanded="true" aria-controls="nav_week_'+nav_week+'_wr_body">\r';
		text += 'Recursos semanales\r';
		text += '<span class="nav-caret"></span>\r';
		text += '</button>\r';
		text += '</h5>\r';
		text += '</div>\r';
		text += '<div id="nav_week_'+nav_week+'_wr_body" class="collapse'+(!!show.match(/\w/) && !!this.html_file_path.match(/(goals|planner)/i) ? ' show' : '')+'" aria-labelledby="nav_week_'+nav_week+'_wr_header" data-parent="#'+header_id+'">\r';
		text += '<div class="card-body">\r';
		text += card.links_resources;	
		text += '</div>\r';
        text += '</div>\r';
        text += '</div>\r';
        text += '</div>\r';

        if(nav_grade.match(/[k12]/i))
        {
        	for(var i = 1; i < 6; i++)
        	{
        		var showRegex = new RegExp('day' + i, 'i');
        		text += '<div class="accordion collapse show" id="'+header_id+'">\r';
				text += '<div class="card">\r';
				text += '<div class="card-header" id="nav_week_'+nav_week+'_day'+i+'_header">\r';
				text += '<h5 class="mb-0">\r';
				text += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#nav_week_'+nav_week+'_day'+i+'_body" aria-expanded="true" aria-controls="nav_week_'+nav_week+'_day'+i+'_body">\r';
				text += 'D&iacute;a '+i+'\r';
				text += '<span class="nav-caret"></span>\r';
				text += '</button>\r';
				text += '</h5>\r';
				text += '</div>\r';
				text += '<div id="nav_week_'+nav_week+'_day'+i+'_body" class="collapse'+(!!show.match(/\w/) && !!this.html_file_path.match(showRegex) ? ' show' : '')+'" aria-labelledby="nav_week_'+nav_week+'_day'+i+'_header" data-parent="#'+header_id+'">\r';
				text += '<div class="card-body">\r';
				switch(i)
				{
					case 1: text += card.links_lessons_day1; break;
					case 2: text += card.links_lessons_day2; break;
					case 3: text += card.links_lessons_day3; break;
					case 4: text += card.links_lessons_day4; break;
					case 5: text += card.links_lessons_day5; break;
				}	
				text += '</div>\r';
		        text += '</div>\r';
		        text += '</div>\r';
		        text += '</div>\r';
        	}
        }
        else
        {
        	text += '<div class="accordion collapse show" id="'+header_id+'">\r';
			text += '<div class="card">\r';
			text += '<div class="card-header" id="nav_week_'+nav_week+'_ml_header">\r';
			text += '<h5 class="mb-0">\r';
			text += '<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#nav_week_'+nav_week+'_ml_body" aria-expanded="true" aria-controls="nav_week_'+nav_week+'_ml_body">\r';
			text += 'Mini-lecciones\r';
			text += '<span class="nav-caret"></span>\r';
			text += '</button>\r';
			text += '</h5>\r';
			text += '</div>\r';
			text += '<div id="nav_week_'+nav_week+'_ml_body" class="collapse'+(!!show.match(/\w/) && !!this.html_file_path.match(/(lesson)/i) ? ' show' : '')+'" aria-labelledby="nav_week_'+nav_week+'_ml_header" data-parent="#'+header_id+'">\r';
			text += '<div class="card-body">\r';
			text += card.links_lessons;
			text += '</div>\r';
	        text += '</div>\r';
	        text += '</div>\r';
	        text += '</div>\r';
        }
	}
	else
	{
		text += card.links;	
	}
	text += '</div>\r';
	text += '</div>\r';
	text += '</div>\r';
	return text;
};


Navigation.prototype.toHTML = function(){	
	var self = this;
	var text = '';
	text += '<nav>\r';
	text += self.make_logo();
	text += self.make_unit_dropdown();	
	text += self.make_print_button('top');
	text += self.make_unit_dropdown_collapse_icon();
	text += self.make_main_accordion();	  	
	text += self.make_print_button('bottom');
	text += self.make_back_to_top_button();		
	text += '</nav>\r';
	return text;
};

