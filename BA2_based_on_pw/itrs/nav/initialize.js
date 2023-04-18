//BA2 

//CREATOR JY, UPDATED BY EM
//CREATED 2019-02-20
//UPDATED 2020
//VERSION 1.2

function Record(record){		
	this.id = record[0];
	this.html_file_path = record[1];	
	this.css_file_paths = record[2].split(/&#44;\s*/);	
	this.js_file_paths = record[3].split(/&#44;\s*/);
	this.html_folders = this.html_file_path.match(/\/(\w|-)+/g);
	
	this.week = !!this.html_file_path.match(/week\d/ig) ? this.html_file_path.match(/week\d/ig)[0].replace(/week/, '') : false;	
	var package_folder = create_folder(output_folder+separator+current_package.xcode);	
	var html_folder = create_folder(package_folder+separator+'html');	
	content_folder = create_folder(dev_folder+'/content');

	this.css_file_paths.forEach(function(css_file_path){
		var css_folders = css_file_path.match(/\/(\w|-)+/g);
		var path = content_folder;
		css_folders.forEach(function(css_folder, x){
			if(x < css_folders.length-1){
				css_folder = css_folder.replace(/\//, '');
				path += separator+css_folder;
				create_folder(path);
			}
		});
		var css_file = create_file(content_folder+css_file_path);
		if(!css_file.exists){
			var text = '';
			text += 'main{\r';
			text += '\twidth: 100%;\r';
			text += '\tpadding: 0;\r';
			text += '\tfont-size: 0;\r';
			text += '}\r';
			text += 'iframe.pdf{\r';
			text += '\twidth: 100%;\r';
			text += '\theight: 100vh;\r';
			text += '\tborder: 0;\r';
			text += '}\r';
			css_file.open('w');
			css_file.write(text);
			css_file.close();
		}
	});
	
	var l = this.html_folders.length;
	var path = package_folder;
	for(var x = 0; x < l-1; x++){
		var folder_name = this.html_folders[x];
		folder_name = folder_name.replace(/\//, '');
		path += separator+folder_name;
		create_folder(path);
	}

	this.file = create_file(package_folder + this.html_file_path);
	log(this.file);
	this.write();
}

Record.prototype.write = function(){	
	var text = '';
	text += '<!doctype html>\r';
	text += '<html>\r';
	text += '<head>\r';
	text += '<meta charset="UTF-8">\r';
	text += '<title></title>\r';
	text += '<link rel="stylesheet" href="/css/bootstrap/bootstrap.css">\r';
  text += '<link rel="stylesheet" href="/fonts/fonts.css">\r';  
  text += '<link rel="stylesheet" href="/css/nav/icons/styles.css">\r';
  if(!!current_package.grade){
  	text += '<link rel="stylesheet" href="/css/nav/grade_colors/grade'+current_package.grade.toLowerCase()+'.css">\r';
  }  
  text += '<link rel="stylesheet" href="/css/nav/nav.css">\r';
  text += '<link rel="stylesheet" href="/css/icons/icons.css">\r';
  if(!!this.week){
  	text += '<link rel="stylesheet" href="/css/main/week_colors/week'+this.week+'.css">\r';
  }

	var l = this.css_file_paths.length;	
	for(var x = 0; x < l; x++){
		var css_file_path = this.css_file_paths[x];
		text += '<link rel="stylesheet" href="'+css_file_path+'">\r';
	}

	// text += '<link rel="stylesheet" href="/css/ba2-icons.css">\r';
	text += '</head>\r';
	text += '<body>\r';
	text += '<nav></nav>\r';
	text += '<main>\r';
	text += '<iframe class="pdf" src="'+this.html_file_path.replace(/\/html/ig, '/pdfs').replace(/\.html/ig, '.pdf')+'#view=Fit"></iframe>\r';	
	text += '</main>\r';

	text += '<script src="/js/jquery_v331.min.js"></script>\r';
  text += '<script src="/js/bootstrap/bootstrap.bundle.js"></script>\r';
  text += '<script src="/js/nav/nav.js"></script>\r';
	text += '<script src="/js/trs-communication-channel.js"></script>\r';
	// text += '<script src="/js/icons.js"></script>\r';
	
	var l = this.js_file_paths.length;	
	for(var x = 0; x < l; x++){
		var js_file_path = this.js_file_paths[x];
		text += '<script src="'+js_file_path+'"></script>\r';
	}

	text += '</body>\r';
	text += '</html>\r';
	this.file.open('w'); 
	this.file.write(text);
	this.file.close();	
};


Record.prototype.print = function(){
	
};
 

// (function(){			
// 	csv_folders.forEach(function(csv_folder){
// 		var csv_files = csv_folder.getFiles('*.csv');
// 		csv_files.forEach(function(csv_file){
// 			data_map = new DataMap(csv_file, Record, '0');
// 		});		
// 	});	
// })();
