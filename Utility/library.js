//CREATOR JASON YIM
//CREATED 2016-08-04
//UPDATED 2019-03-26
//VERSION 1.9
 
function DataMap(csv_file, callback, index){  
  this.constructor = {name: 'DataMap'};
  this.index = !!index ? index : 1;
  this.csv_file = csv_file;
  this.data = this.data_extraction();
  this.records = this.create_records(this.data, callback);
}

DataMap.prototype.data_extraction = function(){
  var file = this.csv_file; 
  var data = [];
  if(file.exists){    
    file.open('r');
    while(!file.eof){
      data.push(file.readln().split(','));
    };
    file.close();
  }
  return data;
}; 

DataMap.prototype.create_records = function(data, callback){
  var records = {};  
  var l = data.length;
  for(var x = 1; x < l; x++){
    var record = data[x];       
    // records[record[1]] = (new callback(record));
    records[record[this.index]] = (new callback(record));
  }
  return records;
};

DataMap.prototype.get_record = function(key){
  var records = this.records;
  var record = records[key];
  if(!!record){
    return record;
  }
  return null;  
};

DataMap.prototype.forEach = function(fn){
  var self = this;
  var keys = [];
  for(var key in this.records){
    keys.push(key);
  }  
  var l = keys.length;
  for(var x = 0; x < l; x++){    
    if(!!fn){fn(self.get_record(keys[x]), x);}
  }  
};

DataMap.prototype.print = function(){ 
  timer_off = true;
  for(var key in this.records){    
    var record = this.records[key];
    try{
      record.clean_pages();
      record.print();
    }catch(e){}
  }
  timer_off = false;
};

Folder.prototype.copy = function(path){ 
  var target_folder = Folder(path);
  if(!target_folder.exists){target_folder.create();}
  var files = this.getFiles();  
  for(var x = 0; x < files.length; x++){
    if(files[x].type){
      var cloned_file = new File(target_folder+separator+files[x].name);
      files[x].copy(cloned_file);
    }else{
      var cloned_folder = new Folder(target_folder+separator+files[x].name);
      files[x].copy(cloned_folder);
    }
  } 
};

Folder.prototype.burn = function(){
  var files = this.getFiles();
  for(var x = 0; x < files.length; x++){
    // log('DELETED: '+files[x]);
    if(files[x].type){files[x].remove();}else{files[x].burn();}
  }
  this.remove();
};

Array.prototype.has = function(object){
  var self = this;
  var l = self.length;
  for(var x = 0; x < l; x++){
    var item = self[x];
    if(item == object){ return true;}
  }
  return false;
}

Array.prototype.indexOf = function(item, from_index){
  if(!from_index){from_index = 0;}
  for(var x = from_index; x < this.length; x++){    
    if(this[x] == item){ return x; }
  }
  return -1;
};

Array.prototype.makeUnique = function(){
  var result = [];
  for(var x = 0; x < this.length; x++){
    if(result.indexOf(this[x]) < 0){result.push(this[x]);}
  } 
  return result; 
};

Array.prototype.forEach = function(callback){
  var l = this.length;
  for(var x = 0; x < l; x++){
    if(!!callback){callback(this[x], x);}
  }
};

Array.prototype.subtract = function(array){
  var results = [];
  var self = this;
  self.forEach(function(item1){
    var has_item = false;
    array.forEach(function(item2){
      if(item1 == item2){
        has_item = true;
      }
    });
    if(!has_item){results.push(item1);}    
  });
  return results;
};

function toArray(collection){
  var array = [];  
  var l = collection.length;
  for(var x = 0; x < l; x++){
    var item = collection[x];
    array.push(item);
  }
  return array;
};


Document.prototype.update_stories = function (){
  var assignments = this.assignments;
  for(var x = 0; x < assignments.length; x++){
    assignments[x].update();
  }
};

Document.prototype.checkout_stories = function(){
  var stories = this.stories;
  for(var x = 0; x < stories.length; x++){
    stories[x].checkOut();
  }
};

Document.prototype.checkin_stories = function(){
  var stories = this.stories;
  for(var x = 0; x < stories.length; x++){
    stories[x].checkIn();
  }
};

Document.prototype.unlink_all_assignments = function(){ 
  var assignments = this.assignments;
  var a = assignments.length; 
  while(a--){
    var stories = assignments[a].assignedStories;
    var s = stories.length; 
    while(s--){ stories[s].storyReference.itemLink.unlink(); } 
    try{assignments[a].remove();}catch(error){}
  } 
}

Document.prototype.isSpanish = function(){
  return (this.getLanguage() == 'sp') ? true : false;
};

Document.prototype.getLanguage = function(){
  var path = this.fullName.toString();
  var language = !!path.match(/\/en\//) ? path.match(/\/en\//)[0].replace(/\//g, '') : false;
  if(!language){ language = !!path.match(/\/sp\//) ? path.match(/\/sp\//)[0].replace(/\//g, '') : language; }
  language = !language ? 'sp' : language;
  return language;
};

Number.prototype.isOdd = function(){return !!(this % 2);};
Number.prototype.isEven = function(){return !(this % 2);};
Number.prototype.currency = function(s, c, d, t){
  var n = this, 
  c = isNaN(c = Math.abs(c)) ? 2 : c, 
  d = !d ? "." : d, 
  t = !t ? "," : t, 
  s = !s ? "$" : s, 
  s = n < 0 ? s+"-" : s, 
  i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
  j = (j = i.length) > 3 ? j % 3 : 0; 
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (d + Math.abs(n - i).toFixed(c).slice(2));
}; 

Number.prototype.forEvery = function(callback){
  var l = this;
  for(var x = 0; x < l; x++){
    if(!!callback){callback(x);}
  }
};

Table.prototype.duplicate = function(textframe){ 
  textframe = textframe ? textframe : this.parent;
  while(textframe.constructor.name != 'TextFrame'){textframe = textframe.parent;}
  textframe.contents = textframe.contents + '\r'; 
  location = textframe.paragraphs.lastItem().insertionPoints.firstItem(); 
  app.select(this);  
  app.copy();  
  app.select(location);
  app.paste();  
};

String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase()+this.substr(1, this.length);
}
String.prototype.toTitle = function(){
  var title = this.split(' ');  
  var words = ['the', 'and', 'to', 'at', 'a'];  
  for(var x = 0; x < title.length; x++){    
    if(title[x].match(/\W/)){continue;}
    if(x == 0 || x == title.length-1){
      title[x] = title[x].capitalize(); 
    }else{
      for(var y = 0; y < words.length; y++){ 
        if(words[y].match(RegExp(title[x], 'i')) == null){          
          title[x] = title[x].capitalize();
        } 
        else{ 
          title[x] = words[y];
          break;
        }
      } 
    } 
  }   
  return title.join(' ');
} 
String.prototype.reverse = function(){
  return this.split('').reverse().join(''); 
} 

String.prototype.toInt = function(){
  return parseInt(this);
};

String.prototype.removeExtension = function(){
  return this.replace(/\.\w+$/, ''); 
};

String.prototype.removeAccents = function() {
  var self = this;
  self = self.replace(/\u00FA/ig, 'u');
  self = self.replace(/\u00F3/ig, 'o'); 
  self = self.replace(/\u00E1/ig, 'a'); 
  self = self.replace(/\u00ED/ig, 'i'); 
  self = self.replace(/\u00F1/ig, 'n'); 
  self = self.replace(/\u00E9/ig, 'e'); 
  self = self.replace(/\u00FC/ig, 'u'); 
  self = self.replace(/\u201C/ig, '"'); 
  self = self.replace(/\u201D/ig, '"');
  return self;
};

String.prototype.applyHTMLCode = function() {
  var self = this;  
  self = self.replace(/\u00FA/ig, '&uacute;');
  self = self.replace(/\u00DA/ig, '&Uacute;');
  self = self.replace(/\u00F3/ig, '&oacute;'); 
  self = self.replace(/\u00D3/ig, '&Oacute;'); 
  self = self.replace(/\u00E1/ig, '&aacute;');
  self = self.replace(/\u00C1/ig, '&Aacute;'); 
  self = self.replace(/\u00ED/ig, '&iacute;'); 
  self = self.replace(/\u00CD/ig, '&Iacute;'); 
  self = self.replace(/\u00F1/ig, '&ntilde;'); 
  self = self.replace(/\u00D1/ig, '&Ntilde;');
  self = self.replace(/\u00E9/ig, '&eacute;');
  self = self.replace(/\u00C9/ig, '&Eacute;');
  self = self.replace(/\u00FC/ig, '&uuml;');
  self = self.replace(/\u00DC/ig, '&Uuml;');
  self = self.replace(/\u201C/ig, '&ldquo;');
  self = self.replace(/\u201D/ig, '&rdquo;');
  self = self.replace(/\u00A1/ig, '&iexcl;');
  self = self.replace(/\u00BF/ig, '&iquest;');
  self = self.replace(/\u2018/ig, '&lsquo;');
  self = self.replace(/\u2019/ig, '&rsquo;');
  self = self.replace(/\u2026/ig, '&hellip;');
  self = self.replace(/\u002C/ig, '&#44;');  
  return self;
};

String.prototype.toUnicode = function() {
  var self = this;  
  self = self.replace(/\u00FA/ig, '\\u00FA');
  self = self.replace(/\u00DA/ig, '\\u00DA');
  self = self.replace(/\u00F3/ig, '\\u00F3'); 
  self = self.replace(/\u00D3/ig, '\\u00D3'); 
  self = self.replace(/\u00E1/ig, '\\u00E1');
  self = self.replace(/\u00C1/ig, '\\u00C1'); 
  self = self.replace(/\u00ED/ig, '\\u00ED'); 
  self = self.replace(/\u00CD/ig, '\\u00CD'); 
  self = self.replace(/\u00F1/ig, '\\u00F1'); 
  self = self.replace(/\u00D1/ig, '\\u00D1');
  self = self.replace(/\u00E9/ig, '\\u00E9');
  self = self.replace(/\u00C9/ig, '\\u00C9');
  self = self.replace(/\u00FC/ig, '\\u00FC');
  self = self.replace(/\u00DC/ig, '\\u00DC');
  self = self.replace(/\u201C/ig, '\\u201C');
  self = self.replace(/\u201D/ig, '\\u201D');
  self = self.replace(/\u00A1/ig, '\\u00A1');
  self = self.replace(/\u00BF/ig, '\\u00BF');
  self = self.replace(/\u2018/ig, '\\u2018');
  self = self.replace(/\u2019/ig, '\\u2019');
  self = self.replace(/\u2026/ig, '\\u2026');
  self = self.replace(/\u002C/ig, '\\u002C');
  return self;
};

String.prototype.trim = function(){
  var string = this;  
  string = string.replace(/^\s*|\s*$/g, '');
  string = string.replace(/\uFEFF|\u0007|\uFFFC/g, '');
  string = string.replace(/\n|\r|\t/g, ' ');
  return string;
};

Cell.prototype.padding = function(left, top, right, bottom){
  if(!top){var top = right = bottom = left;}
  this.leftInset = left;
  this.rightInset = top;
  this.topInset = right;
  this.bottomInset = bottom;
};

function open_from_woodwing(filename){
  if(app.documents.count() > 10){app.documents.everyItem().close(SaveOptions.no);} 
  var query = ['Name, '+filename, 'Type, Layout'];
  var results = app.queryObjects(query);    
  var id = !!results.match(/<\d+/) ? results.match(/<\d+/)[0].replace(/</g, '') : false;
  if(!!id){
    app.openObject(id, false);
  }else{
    alert('file not found: '+filename);
    throw 'exiting program';
  }
};

function rgb_to_hex(array){ 
  var red_value = parseInt(array[0]);
  var green_value = parseInt(array[1]);
  var blue_value = parseInt(array[2]);
  var rhd1 = deci_to_hex(Math.floor(red_value/16));
  var rhd2 = deci_to_hex(red_value % 16);
  var ghd1 = deci_to_hex(Math.floor(green_value/16));
  var ghd2 = deci_to_hex(green_value % 16);
  var bhd1 = deci_to_hex(Math.floor(blue_value/16));
  var bhd2 = deci_to_hex(blue_value % 16);
  return '#'+rhd1+rhd2+ghd1+ghd2+bhd1+bhd2;
}

function deci_to_hex(deci){
  var hex;
  var number = deci;
  switch(number){
    case 10: number = 'a'; break;
    case 11: number = 'b'; break;
    case 12: number = 'c'; break;
    case 13: number = 'd'; break;
    case 14: number = 'e'; break;
    case 15: number = 'f'; break;
  }
  hex = number;
  return hex.toString().toUpperCase();
}

function create_progress_bar(name, stop, x, y){
  var start = 0;  
  var x_origin = !!x ? x : 0;
  var y_origin = !!y ? y : 0;
  var padding = 15;
  var width = 400;
  var height = 80;
  var bar_width = 300;
  var ui_window = new Window("palette", "Progress Tracker", [x_origin, y_origin, x_origin+width, y_origin+height]);   
  ui_window.panel = ui_window.add("panel", [padding, padding, width-padding, height-padding], name);
  ui_window.panel.progressBar = ui_window.panel.add("progressbar", [padding, padding, bar_width+padding, 15+padding], 0, stop);  
  ui_window.panel.progBarLabel = ui_window.panel.add("statictext", [bar_width+(padding*2), 0, width-padding, height/2], "0%");      
  ui_window.update();
  ui_window.show();
  return ui_window;
}

function update_progress_bar(ui_window){
  ui_window.panel.progressBar.value++;
  ui_window.panel.progBarLabel.text = ( Math.round(ui_window.panel.progressBar.value*100/ui_window.panel.progressBar.maxvalue) ) +"%";  
  ui_window.update();
  ui_window.show();
}
