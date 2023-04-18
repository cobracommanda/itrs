//  BA2!                                                                                                                              |_|                                                                                                                                              |_|  

//CREATOR JY, UPDATED BY EM
//CREATED 2019-02-25
//UPDATED 2019-02-25
//VERSION 2.0


function ImageObject(object, self){
  this.self = self;
  this.xcode = object.xcode;  
  this.data_type = object.data_type;
  this.data_pages = object.data_pages;
  this.display_name = object.display_name;
  this.constructor = {name: 'ImageObject'};
}

function Figure(image){
  // app.select(image);
  this.id = image.id;
  this.name = 'Figure';
  this.constructor = {name: 'Figure'};
  this.image = image;
  this.image_name = get_image_name(image);  
  this.image.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;    
  this.geometricBounds = this.image.geometricBounds;
  this.full_image_name = this.image_name.replace(/\..*$/, '.png');  
  this.full_image_name = this.full_image_name.removeAccents();  
  this.header_captions = [{contents: '', isValid: false}];
  this.captions = [{contents: '', isValid: false}];
  if(!!current_grade.match(/[k12]/i)) this.epocket_chart = this.image_name.match(/e(-|_)*pocketchart/i) ? true : false;
  else this.epocket_chart = false;
  this.heidisong = this.image_name.match(/heidisong/i) ? true : false; 
  this.width = image.geometricBounds[3] - image.geometricBounds[1];  
  this.height = image.geometricBounds[2] - image.geometricBounds[0];  
  this.group = this.image.constructor.name == 'Group' ? true : false;
  this.image_objects = [];
  // this.html_width = Math.round(this.width*2);
  // this.wide = !!this.group ? true : (this.width > this.height ? true : false);  
  this.has_video_icon = false;  
  this.zoomed_in = this.is_zoomed_in();  
  this.has_annos = this.has_annos();

  //ignored list
  switch(true)
  {
    case this.image_name.match(/Writing_prompt/):
      this.ignored = true;
      break;
    default: this.ignored = false;
  }
}

Figure.prototype.has_annos = function(){    
  var image = this.image;
  if(image.constructor.name == 'Group'){
    var textFrames = get_textFrames_by_paragraphStyle(image, 'annos');
    if(textFrames.length > 0){ 
      if(image.textFrames[0].paragraphs.length > 0){ if(is_red(image.textFrames[0].paragraphs[0].fillColor)){ return true; } }
      if(is_red(image.textFrames[0].strokeColor)){ return true; }
    }
  }
  if(image.graphicLines.length > 0){ if(is_red(image.graphicLines[0].strokeColor)){ return true; } }
  if(image.polygons.length > 0){ if(is_red(image.polygons[0].strokeColor)){ return true; } }
  if(image.ovals.length > 0){ if(is_red(image.ovals[0].strokeColor)){ return true; } }
  if(image.rectangles.length > 0){ if(is_red(image.rectangles[0].strokeColor)){ return true; } }
  return false;
};

function is_red(swatch){
  var colorname = swatch.name; 
  var color = document.colors.item(colorname);
  if(color.isValid && !color.name.match(/black|paper|none/ig)){  
    color.space = ColorSpace.CMYK;
    colorValue = color.colorValue;
    var c = colorValue[0];
    var m = colorValue[1];
    var y = colorValue[2];
    var k = colorValue[3];    
    if(c <= 15 &&
       m >= 80 &&
       y >= 75 &&
       k <= 10){
      return true;
    }
  }
  return false;
}

Figure.prototype.is_zoomed_in = function(){  
  var result = false;
  var frame = this.image;
  if(!!frame.constructor.name.match(/Group|Rectangle|Polygon/ig)){
    if(frame.allGraphics.length > 0){     
      var frame_width = frame.geometricBounds[3]-frame.geometricBounds[1];
      var frame_height = frame.geometricBounds[2]-frame.geometricBounds[0];
      var frame_area = frame_width * frame_height;
      var image = frame.allGraphics[0];
      var image_width = image.geometricBounds[3]-image.geometricBounds[1];
      var image_height = image.geometricBounds[2]-image.geometricBounds[0];
      var image_area = image_width * image_height;      
      result = (frame_area*4 <= image_area) ? true : result;
    }
  }
  return result;
};

Figure.prototype.get_size = function(){
  var size;
  var xl = this.width > 200 ? true : false;
  var lg = this.width > 130 && this.width <= 200 ? true : false;
  var md = this.width > 80  && this.width <= 130 ? true : false;
  var sm = this.width > 50  && this.width <= 80  ? true : false;
  var xs = this.width <= 50 ? true : false;
  
  switch(true){
    case xs: size = 'xs'; break;
    case sm: size = 'sm'; break;
    case md: size = 'md'; break;
    case lg: size = 'lg'; break;
    case xl: size = 'xl'; break;
    default: size = 'md';
  }
  return size;
};

function get_image_name(image){  
  try{
    if(!!image.constructor.name.match(/group/i)){    
      image = get_top_most_object(image.rectangles.everyItem().getElements());        
    }
    return image.allGraphics[0].itemLink.name;
  }catch(e){
    return 'textFrame';
  }
}

function get_top_most_object(objects){
  var result = objects[0];
  var min = objects[0].index;
  objects.forEach(function(object){
    if(min > object.index){
      min = object.index;
      result = object;
    }
  });
  return result;
}

Figure.prototype.get_header_captions = function(){  
  var self = this;  
  var page = this.image.parentPage;
  var zone = new Zone(page, [self.geometricBounds[0]-15, self.geometricBounds[1], self.geometricBounds[0], self.geometricBounds[3]]);  
  zone.textFrames.forEach(function(textFrame){
    var left = Math.abs(textFrame.geometricBounds[1]-self.geometricBounds[1]);    
    if(left < 30){
      self.header_captions.push(textFrame); 
    }
  });
};

Figure.prototype.get_captions = function(){  
  var self = this;  
  alert(this.image.parent.parent);
  if(this.image.parent.parent instanceof Paragraph)
  {
    alert('a paragraph!');
    var targetParagraph = this.image.parent.parent;
    if(targetParagraph.parent.length > targetParagraph.index+1)
    {
      self.captions.push(targetParagraph.parent.paragraphs[targetParagraph.index+1]);
    }
  }
  else
  {
    var page = this.image.parentPage;
    var zone = new Zone(page, [self.geometricBounds[2], self.geometricBounds[1], self.geometricBounds[2]+10, self.geometricBounds[3]]);  
    zone.textFrames.forEach(function(textFrame){
      var left = Math.abs(textFrame.geometricBounds[1]-self.geometricBounds[1]);    
      var top = Math.abs(textFrame.geometricBounds[0]-self.geometricBounds[2]);
      if(left < 30 && top < 30 && !textFrame.label.match(/sample|lesson/ig)){
        self.captions.push(textFrame);
      }
    });
  }
};

Figure.prototype.process_image_object = function(image){
  //alert('tries to process image object');
  $.evalFile(itrs_root_path+'/data/image_links_data.js');
  if(image.allGraphics.length == 0){return false;}  
  var itemLink = image.allGraphics[0].itemLink;
  var image_name = itemLink.name;  
  if(!!image_name.match(/videoicon/ig)){
    this.has_video_icon = true;
    this.image = image;
  }
  
  this.xcode = !!image_name.match(/X\d+/ig) ? image_name.match(/X\d+/ig)[0] : false;
  this.code = !!image_name.match(/[XY]\d{4,}/ig) ? image_name.match(/[XY]\d{4,}/ig)[0] : false;
  //alert(this.code);
  var pages = !!image_name.match(/_p\d+/) ? image_name.match(/_p\d+/)[0].replace(/_p/, '') : '';    
  //var object = image_links_data[image_name]; 
  var object = false;   
  var product = false;
  
  if(!!object){
    if(object.data_type == 'html_becreader'){ object.data_type = 'ebook'; }
    product = {xcode: object.code, pages: pages, data_type: object.data_type, data_pages: pages, display_name: object.display_name};      
  }  
  if(!!this.code && !object){
    //alert('tries to get metadata from mia');
    product = get_metadata_from_mia(image_name, this.code);
    if(!!product) product.pages = pages;
  }
  
  if(!!product){this.image_objects.push(new ImageObject(product, image));}  
};


function get_metadata_from_mia(image_name, code){
  var file = File(itrs_root_path+'/data/image_links_data.js');
  var json_file = f_curl_mia(code);
  var info = read_json_file(json_file, code); 
  if(!info) return false;
  info.filename = image_name;
  if(!!info.xcode && !!info.format && !image_links_data[info.filename]){ save_data_to_file(file, info); }
  var product = {xcode: info.xcode, data_type: info.format, display_name: info.title};    
  return product;
}

function f_curl_mia(code) {
  var path = '~/Desktop/MIA';
  var filename = 'json_mia.json';
  var json_file = create_file(path+'/'+filename);
  if(json_file.exists){
    json_file.remove();
    json_file = create_file(path+'/'+filename);
  }
  var com_file = create_file('~/Desktop/MIA/curl_mia.command');  
  com_file.open('w');
  com_file.writeln('cd '+path);
  com_file.writeln('curl -o '+filename+' https://mia.benchmarkconnect.com/api/freeandclear/Vn1f6H3sq7n2kFD/sibling_components?codes=' + code);
  // com_file.writeln('#osascript -e 'tell application "Terminal" to quit' & exit")
  com_file.close();
  
  var text = '';
  text += 'do shell script "chmod 777 ~/Desktop/MIA/curl_mia.command"';
  app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
  
  com_file.execute();
  return json_file;
}

function read_json_file(file, code){  
  var json_file = file;  
  while(!json_file.exists){
    $.sleep(500);
  }
  json_file.open('r');
  var text = json_file.read();
  var json = JSON.parse(text);
  // alert(text);  
  try
  {
    var components_info = json["data"][code].components;
  }
  catch(e)
  {
    return false;
  }
  var xcode = false;
  var title = json["data"][code].title;
  var format = false;
  for (var property in components_info) {    
    if (components_info.hasOwnProperty(property)) {      
      if(components_info[property].delivery_format == "html_becreader" || components_info[property].delivery_format == "html"){
        xcode = components_info[property].o_code.replace(/O-/ig, '');
        format = components_info[property].delivery_format;
        if(format == 'html_becreader') format = 'ebook';
      }
    }
  }

  json_file.remove();
  return {title: title, format: format, data_type: format, xcode: xcode};
}

function save_data_to_file(file, info){  
  file.open('r');
  var text = file.read();
  file.close();
  text = text.replace(/(\r|\n).*$/, '');
  text += '\r';
  text += '"'+info.filename+'": {code: "'+info.xcode+'", data_type: "'+info.format+'", display_name: "'+info.title+'"},';
  text += '\r';
  file.open('w');
  file.writeln(text);
  file.write('};');
  file.close();
}


Figure.prototype.process_group = function(group){
  var rectangles = group.rectangles;
  var l = rectangles.length;
  for(var x = 0; x < l; x++){
    var rectangle = rectangles[x];
    if(rectangle.allGraphics.length > 0){this.process_image_object(rectangle);}    
  }
  this.image_objects.sort(function(a, b){
    var aY = Math.round(a.self.geometricBounds[0]);
    var bY = Math.round(b.self.geometricBounds[0]);
    var aX = Math.round(a.self.geometricBounds[1]);
    var bX = Math.round(b.self.geometricBounds[1]);
    var proximity = 10;
    if( Math.abs(aY-bY) <= proximity ){
      return aX - bX;
    }else{
      return aY - bY;
    }  
  });
};

Figure.prototype.process = function(){    
  if(this.group){ this.process_group(this.image); }else{ this.process_image_object(this.image); }

  switch(true){
    case this.epocket_chart: this.image_link = get_epocket_chart_link(this.image, current_package_folder, current_images_path); break;    
    default: this.image_link = create_image_file(this.image, current_package_folder, current_images_path);
  }
};

function get_epocket_chart_link(image, package_path, images_path){
  var full_image_name = image.allGraphics[0].itemLink.name.replace(/\..*$/, '.png');  
  var epocketchart_img = File(projects_folder+'/assets/images/shared/epocketchart.png');
  var images_folder = create_folder(package_path+images_path);
  var image_file = create_file(images_folder + separator + full_image_name);
  epocketchart_img.copy(image_file);
  return images_path+separator+full_image_name;
}

Figure.prototype.toHTML = function(classname){  
  var text = '';
  var self = this;
  this.process();

  var image_objects = this.image_objects;      
  var image_object = image_objects[0];
  var image_collection = this.isImageCollection();
  var size = this.get_size();
  var figcaption = this.make_figcaptions();
  if(!!image_object){
    // alert(image_object.xcode);   //really not sure if this is necessary...it breaks at the moment
    // alert(current_package);
    // if(image_object.xcode == current_package.info['texas'].dmv || image_object.xcode == current_package.info['national'].dmv){
    //   this.zoomed_in = true;
    // }
  }
  var epocketchart = classname == 'epocketchart' ? true : false;

  text += '<figure class="'+size+( this.group ? ' group' : '')+( !!classname ? ' '+classname : '')+'">\r';  
  this.header_captions.forEach(function(caption){
    if(!!caption.contents.match(/\w/)){ 
      log('figure caption');
      text += process_paragraphs(self, caption.paragraphs.everyItem().getElements()).replace(/\s(\d)/g, '&nbsp;$1');
    }
  });

  switch(true){  
    case this.heidisong: 
      var links = get_heidisong_links();

      if(links.length > 1){
        text = '<figure class="heidisong '+size+'">\r';
        text += '<div class="dropdown">\r';
        text += '<a class=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">\r';
        text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';
        text += '</a>\r';
        
        text += '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\r';
        links.forEach(function(link, x){          
          text += '<a class="dropdown-item" href="javascript" data-extLink="javascript" data-code="'+link.xcode+'" data-type="html">'+link.title.applyHTMLCode()+'</a>\r';          
        });

        text += '</div>\r';
        text += '</div>\r';
        if(!!figcaption){ text += figcaption; }
        text += '</figure>\r';
      }else if(links.length == 1){
        var link = links[0];
        text = '<figure class="heidisong '+size+'">\r';
        text += '<a href="javascript" data-extLink="javascript" data-code="'+link.xcode+'" data-type="html">\r';
        text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';  
        text += '</a>\r';
        if(!!figcaption){ text += figcaption; }
        text += '</figure>\r';
      }else{
        text = '<figure class="heidisong '+size+'">\r';
        text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';
        if(!!figcaption){ text += figcaption; }
        text += '</figure>\r';
      }      
      return text; 
    break;
    case epocketchart:      
      text = '<figure class="epocketchart">\r';
      
      text += '<a href="javascript" data-code="X52634" data-type="epocketchart">\r';
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';
      text += '</a>\r';

      text += '</figure>\r';   
      return text;   
    break;
    case this.has_video_icon:
      var classname = 'video';
      var video = get_unit_video(current_package.grade, current_package.unit);      
      if(!!video){
        var video_id = get_video_id(video.xcode);
        if(!!video_id){
          text = '<figure class="xl">\r';
          text +='<div class="video_wrapper">\r';
          text +='<script src="https://fast.wistia.com/assets/external/E-v1.js"></script>\r';
          text +='<script src="https://fast.wistia.com/embed/medias/'+video_id+'.jsonp" async></script>\r';
          text +='<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">\r';
          text +='<div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">\r';
          text +='<span class="wistia_embed wistia_async_'+video_id+' popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;width:100%">&nbsp;</span>\r';
          text += figcaption;
          text +='</div>\r';
          text +='</div>\r';
          text +='</div>\r';
          text +='</figure>\r';
        }else{
          text = '<figure class="xl'+( !!classname ? ' '+classname : '')+'">\r';
          text += '<a href="javascript" data-extLink="javascript" data-code="'+video.xcode+'" data-type="video">\r';
          text += '<div class="nav-icon-play-video"></div>\r';
          text += figcaption;
          text += '</a>\r';
          text += '</figure>\r';
        }
      }else{
        text = '<figure class="xl'+( !!classname ? ' '+classname : '')+'">\r';
        text += '<div class="nav-icon-play-video"></div>\r';
        text += figcaption;
        text += '</figure>\r';
      }      
      return text;
    break;
    case image_collection:
      text += '<div class="dropdown">\r';
      text += '<a class=" dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">\r';
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';
      text += '</a>\r';
      
      text += '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">\r';
      image_objects.forEach(function(image_object, x){
        if(image_object.display_name == ''){image_object.display_name = 'link '+(x+1);}
        text += '<a class="dropdown-item" href="javascript" data-extLink="javascript" data-code="'+image_object.xcode+'" data-type="'+image_object.data_type+'"'+( image_object.data_pages ? ' data-pages="'+image_object.data_pages+'"' : '')+'>'+image_object.display_name.applyHTMLCode()+'</a>\r';          
      });

      text += '</div>\r';
      text += '</div>\r';
    break;
    case (!!image_object && !this.zoomed_in && !this.has_annos):
      // if(!figcaption.match(/\w/))
      // {
      //   figcaption = image_object.parent.
      // }
      // alert(figcaption);
      if(image_object.data_pages == ''){
        image_object.data_pages = !!figcaption.match(/(page|AR|p|pg|p[^\w\s]g|)s?\.?(\s|-|_)*(&nbsp;)?\d+/ig) ? figcaption.match(/(page|AR|p|pg|p[^\w\s]g)s?\.?(\s|-|_)*(&nbsp;)?\d+/ig)[0].match(/\d+/)[0] : '';        
      }      
      if(image_object.data_pages == ''){
        if( !!figcaption.match(/(title\spage|table\sof\scontents)/ig) ){
          image_object.data_pages = '1';
        }
      }
      // alert(image_object.data_pages);
      text += '<a href="javascript" data-extLink="javascript" data-code="'+image_object.xcode+'" data-type="'+image_object.data_type+'"'+( image_object.data_pages ? ' data-pages="'+image_object.data_pages+'"' : '')+'>\r';
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';  
      text += '</a>\r';
    break;
    case this.readers_notebook:
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r'; 
    break;
    case this.is_research_inquiry: 
      var link = '/html/grade'+current_package.grade+'/unit'+current_package.unit+'/unit_resources/research_and_inquiry_project.html';
      text += '<a href="'+link+'" data-type="internal" data-extLink="'+link+'">\r';
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';
      text += '</a>\r';
    break;
    default:
      text += '<a href="#" data-toggle="modal" data-target="#figure_'+this.id+'">\r';
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';
      text += '</a>\r';
      text += '<div class="modal fade" id="figure_'+this.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\r';
      text += '<div class="modal-dialog modal-'+size+' modal-dialog-centered" role="document">\r';
      text += '<div class="modal-content">\r';
      text += '<div class="modal-body">\r';
      
      text += '<img class="img-fluid" src="'+this.image_link+'" alt="Image Thumbnail">\r';

      text += '</div>\r';
      text += '</div>\r';
      text += '</div>\r';
      text += '</div>\r';
  }

  
  text += figcaption;
  text += '</figure>\r';
  
  // log(this.image_name.replace(/\.\w+$/, '')+' - '+ ( !!this.image_name.match(/\p\d+/) ? this.image_name.match(/\p\d+/)[0] : '' ) );
  return text;
};


Figure.prototype.make_figcaptions = function(){
  var self = this;
  var text = '';
  if(!this.captions[0].isValid){return text;}
  if(this.captions.length > 0){
    text += '<figcaption>\r';
    this.captions.forEach(function(caption){
      // alert(caption.contents);
      if(!!caption.contents.match(/\w/)){
        if(caption.isValid){
          log('figure caption (make_figcaptions)');
          if(captions instanceof TextFrame) text += process_paragraphs(self, caption.paragraphs.everyItem().getElements()).replace(/\s(\d)/g, '&nbsp;$1');   
          else text += process_paragraphs(self, caption, '&nbsp;$1');   //.replace(/\s(\d)/g
        }else{
          text += '<p>'+caption.contents+'<p>\r';
        }
      }
    });
    text += '</figcaption>\r';
  }  
  return text;
}

Figure.prototype.isImageCollection = function(){
  var image_objects = this.image_objects;
  if(image_objects.length <= 1){return false;}
  var result = false;  
  var display_name = image_objects[0].display_name;
  image_objects.forEach(function(image_object){
    if(image_object.display_name != display_name){
      result = true;
    }
  });
  return result;
};

Figure.prototype.process_paragraph = function(paragraph){
  var text = '';  
  var contents = paragraph.contents.trim();  
  var fontStyle = paragraph.fontStyle;
  var header = !!fontStyle.match(/bold/ig) ? true : false;  
  var h3 = (header) ? true : false;
  var has_special_characters = !!contents.match(/\u2013|\u2014/g) ? true : false;

  switch(true){
    case h3: text += '<h3>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</h3>\r'; break;
    default:
      text += '<p>'+(has_special_characters ? process_characters(paragraph) : process_words(paragraph))+'</p>\r';  
  }
  
  return text;
};

/*
Paragraph.prototype.process_paragraph = function(){ //I mean, it would just function on a Paragraph, so...
  var text = '';  
  var contents = this.contents.trim();  
  var fontStyle = this.fontStyle;
  var header = !!fontStyle.match(/bold/ig) ? true : false;  
  var h3 = (header) ? true : false;
  var has_special_characters = !!contents.match(/\u2013|\u2014/g) ? true : false;

  switch(true){
    case h3: text += '<h3>'+(has_special_characters ? process_characters(this) : process_words(this))+'</h3>\r'; break;
    default:
      text += '<p>'+(has_special_characters ? process_characters(this) : process_words(this))+'</p>\r';  
  }
  
  return text;
};
*/


function Figures(zone, captions){
  this.zone = zone;
  this.figures = !!captions ? this.get_figures(captions) : this.get_figures();  
  this.length = this.figures.length;
}

Figures.prototype.get_figures = function(captions){
  var figures = [];
  var self = this;
  var images = this.zone.images;
  images.forEach(function(image, x){    
    var figure = new Figure(image);
    // if(figure.width < 5 && figure.height < 5){ return; }
    if(!!figure.full_image_name.match(/writing_prompt/ig)){ alert('writing prompt image'); return; }
    // if(!!figure.full_image_name.match(/logo|check/ig)){ return; }
    if(!!captions){
      figure.caption.contents = captions[x];
    }else{
      figure.get_captions();  
    }        
    figures.push(figure);
  });
  return figures;
};

Figures.prototype.toHTML = function(with_columns){
  var text = '';
  var columns = false;
  if(!!with_columns){ 
    text += '<div class="row figures">\r';
    switch(true){      
      case this.length > 4: columns = 3; break;
      default: columns = 2;
    }    
  }
  this.figures.forEach(function(figure, x){
    if(!!columns){
      switch(columns){
        case 2: 
          text += '<div class="col-6">\r';
        break;
        case 3: 
          text += '<div class="col-6 col-md-6 col-lg-4 col-xl-4">\r';
        break;
        default:
      }
    }
    text += figure.toHTML();
    // if(x.isOdd()){text += '<div class="clearfix"></div>\r';}  
    if(!!columns){ text += '</div>\r'; }
  });
  if(!!with_columns){ text += '</div>\r'; }
  return text;
};
 

/*
function process_paragraphs(component, paragraphs){
  var text = '';  
  var ol_opened, ul_opened = false;
  try
  {
    if(!paragraphs) paragraphs = component.paragraphs.everyItem().getElements();
    log('paragraph 0: ' + paragraphs[0].contents)
  }
  catch(e)
  {
    paragraphs = [];
    log('NO PARAGRAPHS FOUND FOR COMPONENT');
  }
  paragraphs.forEach(function(paragraph){
    if(paragraph.isValid){
      var contents = paragraph.contents;    
      var paragraphStyle = paragraph.appliedParagraphStyle.name;
      var goals_bullet = !!paragraphStyle.match(/goals_bullet|checklist_bullet|best_practices_list_Bullet/ig) ? true : false;
      var listType = paragraph.bulletsAndNumberingListType;
      var bullet = (listType == ListType.BULLET_LIST || !!contents.match(/\u2022/)) ? true : false;
      switch(true){
        case ((ul_opened && !bullet) || (ul_opened && listType == ListType.NUMBERED_LIST)): ul_opened = false; text += '</ul>\r'; break;
        case ((ol_opened && !bullet) || (ol_opened && listType == ListType.BULLET_LIST)): ol_opened = false; text += '</ol>\r'; break;
      }
      switch(true){
        case (bullet && !ul_opened): ul_opened = true; text += '<ul'+(goals_bullet ? ' class="checkmarks"' : '')+'>\r'; break;
        case (bullet && !ol_opened || !ol_opened && listType == ListType.NUMBERED_LIST): ol_opened = true; text += '<ol>\r'; break;      
      }    
      // text += component.process_paragraph(paragraph);
      text += paragraph.process_paragraph();
    }
  });
  if(ul_opened){ ul_opened = false; text += '</ul>\r'; }
  if(ol_opened){ ol_opened = false; text += '</ol>\r'; }
  return text;
}

function process_header_paragraphs(paragraphs){
  var text = '';
  paragraphs.forEach(function(paragraph){
    text += process_header_words(paragraph);
  });
  return text;
}
*/

function process_header_paragraphs_in_lesson(target_page) //new! forked from previous, pass it the first page
{
  var text = '';
  var tfs = getTextFrames(target_page);
  for(var t = 0; t < tfs.length; t++)
  {
    if(tfs[t] instanceof TextFrame)
    {
      if(!!tfs[t].paragraphs.length > 0)
      {
        // if(!!tfs[t].paragraphs[0].appliedParagraphStyle.name.match(/A-hd/i) && !tfs[t].paragraphs[0].contents.match(/(Additional\sMaterials|PD\sTip|Learning\sTarget|)/i))
        if(!!tfs[t].paragraphs[0].appliedParagraphStyle.name.match(/lesson_A.hd/i))
        {
          var afterMin = false;
          for(var p = 0; p < tfs[t].paragraphs.length; p++)
          {
            if(!!tfs[t].paragraphs[p].appliedParagraphStyle.name.match(/A.hd/i) && !afterMin)
            { 
              text += process_header_words(tfs[t].paragraphs[p]);
              if(tfs[t].paragraphs[p].contents.match(/\d+\s*min\.?\)/i)) afterMin = true; //there shouldn't be more added after the parenthetical minutes are closed
            }
            else 
            {
              p = tfs[t].paragraphs.length;
            }
          }
          // text = text.replace(/min\.?\).*$/, 'min.)'); //get rid of whatever junk ends up after it sometimes (" Ôøº" in particular, which is just OBJ again)
          // text = text.replace(/(\d)\s(\d)/, '$1&ndash;$2');
          text = text.replace(/\s\(\d.*$/, ''); //destroy time
          return text;
        }
      }
    }
  }
}

function getTextFrames(pageToUse) 
{
    var allframes = pageToUse.allPageItems;
    var tfs = [];

    for (var af = 0; af < allframes.length; af++) 
    {
        if (allframes[af] instanceof TextFrame) 
        {  
          allframes[af].name = allframes[af].label;
            tfs.push(allframes[af]);
        }
    }

    return tfs;
}


function process_header_words(paragraph){
  var text = '';
  var words = paragraph.words;
  var l = words.length;
  for(var x = 0; x < l; x++){    
    var word = words[x];
    var contents = word.contents;
    contents = contents.replace(/\uFEFF/g, '');
    var appliedCharacterStyle = word.appliedCharacterStyle.name;
    var fontStyle = word.fontStyle;
    var underline = word.underline;
    var color = word.fillColor.name;
    var strike = word.strikeThru;    
    
    var standards = ( !!color.match(/black/ig) && (word.fillTint < 100 && word.fillTint > -1) ) ? true : false;
    var italic = !!fontStyle.match(/italic|oblique/ig) ? true : false;    
    
    
    text += standards ? '<span class="standards">' : '';
    text += italic ? '<em>' : '';
    text += underline ? '<u>' : '';
    text += strike ? '<s>' : '';

    text += contents + ' ';

    text += strike ? '</s>' : '';
    text += underline ? '</u>' : '';
    text += italic ? '</em>' : '';    
    text += standards ? '</span>' : '';
    
  }   
  text = text.replace(/\uFEFF/g, '');  
  text = text.replace(/&(m|n)d;/ig, '&$1dash;');  
  text = text.replace(/-/g, '&#8209;');
  text = text.replace(/<\/small><small>/g, '');
  text = text.replace(/<\/em><em>/g, '');
  text = text.replace(/<\/u><u>/g, '');
  text = text.replace(/<\/s><s>/g, '');
  text = text.replace(/<\/span><span class="standards">/g, '');
  text = text.replace(/\s+(<.*>)$/, '$1');
  return text;
}

function process_header_characters(paragraph){
  var text = '';
  var characters = paragraph.characters;  
  var l = characters.length;
  for(var x = 0; x < l; x++){    
    var character = characters[x];            
    var contents = character.texts[0].contents;
    contents = contents.replace(/\u2013/g, '&nd;');
    contents = contents.replace(/\u2014/g, '&md;');    
    var paragraphStyle = character.appliedParagraphStyle.name;
    var characterStyle = character.appliedCharacterStyle.name;    
    var fontStyle = character.fontStyle;
    var italic = !!character.fontStyle.match(/italic|oblique/ig) ? true : false;    
    var underline = character.underline;    
    var strike = character.strikeThru;    
    var textFrames = character.textFrames.everyItem().getElements();
    var has_textFrame = textFrames.length > 0 ? true : false;    
    var header = !!fontStyle.match(/bold/ig) ? true : false;    
    var rectangles = character.rectangles.everyItem().getElements();
    var has_rectangle = rectangles.length > 0 ? true : false;
    var has_msl_icon = has_rectangle ? ( !!rectangles[0].allGraphics[0].itemLink.name.match(/MultiSensoryLrngLogo/i) ? true : false ) : false;

    text += italic ? '<em>' : '';
    text += underline ? '<u>' : '';
    text += strike ? '<s>' : '';
    
    switch(true){
      case has_el_icon(character): text += '<span class="brw-el-icon"></span>'; break;
      case has_msl_icon: text += '<div class="bpw-msl-icon"></div>'; break;
      default: text += contents;
    }    
        
    text += strike ? '</s>' : '';
    text += underline ? '</u>' : '';
    text += italic ? '</em>' : '';
    
  }
  text = text.replace(/\uFEFF/g, '');  
  text = text.replace(/<\/em><em>/g, ''); 
  text = text.replace(/<\/u><u>/g, '');
  text = text.replace(/<\/s><s>/g, '');
  text = text.replace(/&(m|n)d;/ig, '&$1dash;');
  
  return text;
} 



function create_image_file(image, package_path, images_path){
  if(!!image.constructor.name.match(/rectangle/i)){
    var full_image_name = 'IMAGENOTFOUND';
    try{full_image_name = image.allGraphics[0].itemLink.name.replace(/\..*$/, '.png');}catch(e){}
  }else{
    full_image_name = 'figure-'+figures_id+'.png'; // uses figures_id because this.id is unique per pour for groups
    figures_id++;
  }
  if(!!full_image_name.match(/\.png/i)){
    var extension = full_image_name.match(/\.png/i)[0];
    full_image_name = full_image_name.replace(/\.png/g, '').replace(/\s/g, '_').replace(/\W/g, '')+extension;
  }
  var images_folder = create_folder(package_path+images_path);
  var image_file = File(images_folder + separator + full_image_name);
  var index = 1;
  var original_name = full_image_name.replace(/\.png/, '');
  while( images_list.has(full_image_name) && index < 100){
    full_image_name = original_name + '_' + index + '.png';
    image_file = File(images_folder + separator + full_image_name);
    index++;
  }
  var image_file_exists = image_file.exists;
  if(full_image_name == 'IMAGENOTFOUND' && image_file.exists) image_file_exists = false;
  if(!image_file_exists){
    var graphics = image.allGraphics;
    graphics.forEach(function(graphic){
      var itemLink = graphic.itemLink;
      try{
        var link_status = itemLink.status;
        if(link_status != LinkStatus.NORMAL){ log('hi-res not found for image: '+itemLink.name+', current status: '+get_link_status(link_status)+', in document: '+document.name); }
      }catch(e){
        try{
          log('WARNING: status not found for: '+itemLink.name+', in document: '+document.name);
        }catch(e){
          log('itemLink failed, which means a log message failed, amazing (completely unlinked broken image)')
        }
      }
    });    
    // if(!!current_section.name.match(/smallgroup/i) && !current_section.name.match(/SkillsAtAGlance/i)){      
    //   var width = image.geometricBounds[3]-image.geometricBounds[1];
    //   var ideal_width = 150;
    //   var factor = ideal_width/width;
    //   resize_image(image, factor);
    // }    
    !!image.constructor.name.match(/group|textframe/i) ? export_group(image, full_image_name, images_folder) : export_image(image, full_image_name, images_folder);        
    // if(!!current_section.name.match(/smallgroup/i) && !current_section.name.match(/SkillsAtAGlance/i)){
    //   factor = width/ideal_width;
    //   resize_image(image, factor);
    // }
  }
  images_list.push(full_image_name);
  return images_path+separator+full_image_name;
}



function get_link_status(status){
  var result = false;
  switch(status){    
    case LinkStatus.LINK_EMBEDDED: result = 'embedded'; break;
    case LinkStatus.LINK_INACCESSIBLE: result = 'inaccessible'; break;
    case LinkStatus.LINK_MISSING: result = 'missing'; break;
    case LinkStatus.LINK_OUT_OF_DATE: result = 'out of date'; break;
    case LinkStatus.NORMAL: result = 'normal'; break;
    default: log('status not found for: '+status);
  }
  return result;
} 

 

function lock_all_stock_images(page){
  var rectangles = page.rectangles.everyItem().getElements();
  rectangles.forEach(function(rectangle){
    if(rectangle.allGraphics.length > 0){
      if(rectangle.allGraphics[0].itemLink.name.match(/shutterstock|istock/i)){
        rectangle.locked = true;
      }
    }
  });
}

function ungroup_all(object)
{


  // the old version, which makes it harder to have conditional situations
  while(object.groups.length > 0)
  {
      object.groups.everyItem().ungroup(); 
  }
}

function unlock_all_textFrames(){
  var pages = document.pages.everyItem().getElements();
  pages.forEach(function(page){
    var textFrames = page.textFrames.everyItem().getElements();
    textFrames.forEach(function(textFrame){
      if(textFrame.overflows){ log('WARNING: overset text detected on page: '+textFrame.parentPage.name+', in document: '+document.name); }
      textFrame.locked = false;   
    });
  });
}

function unlock_all_pageItems(){
  app.activeDocument.pageItems.everyItem().locked = false;
  // var pages = document.pages.everyItem().getElements();
  // pages.forEach(function(page){
  //   var pageItems = page.allPageItems;
  //   pageItems.forEach(function(pageItem){
  //     // if(pageItem.overflows){ log('WARNING: overset text detected on page: '+pageItem.parentPage.name+', in document: '+document.name); }
  //     try{pageItem.locked = false;}catch(e){}
  //   });
  // });
}

function group_rectangles_with_images(){
  var pages = document.pages.everyItem().getElements();
  pages.forEach(function(page){
    process_rectangles_collision(page);
  });
}

function process_rectangles_collision(page){
  var rectangles = page.rectangles.everyItem().getElements();
  var images = [];
  rectangles.forEach(function(rectangle){
    if(rectangle.allGraphics.length > 0){      
      images.push(rectangle);
    }
  });
  images.forEach(function(image){
    var neighbors = group_collided_images(image, images);
    app.select(neighbors);
    if(neighbors.length > 1){
      try{        
        page.groups.add(app.selection);
      }catch(e){
        // log('object already in group :' + image.allGraphics[0].itemLink.name);
      }
    }
  });
}

function group_collided_images(image, items){
  var group = [];
  var grab_value = 5;
  var bounds = [image.geometricBounds[0], image.geometricBounds[1], image.geometricBounds[2]+grab_value, image.geometricBounds[3]+grab_value];
  items.forEach(function(item){  
    if(collides(bounds, item.geometricBounds)){
      group.push(item);
    }
  });
  var remaining_items = items.subtract(group);
  group.forEach(function(item){
    group = group.concat(group_collided_images(item, remaining_items));
  });
  group = group.makeUnique();
  return group;
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








function lock_empty_textFrames(){
  var textFrames = document.textFrames.everyItem().getElements();
  textFrames.forEach(function(textFrame){
    if(!textFrame.contents.match(/\w/) 
       && textFrame.tables.length == 0
       && textFrame.pageItems.length == 0){
      textFrame.locked = true;
    }
  });
}

function select_rectangles(page, selection_bounds){
  var result = [];  
  var rectangles = page.rectangles.everyItem().getElements();
  rectangles.forEach(function(rectangle){   
    var item_bounds = rectangle.geometricBounds;
    if(collides(selection_bounds, item_bounds)){
      if(item_bounds[1]+200 >= selection_bounds[1]){
        result.push(rectangle);       
      }
    }
  });
  return result;
}

function group_pageItems(page, pageItems, images){      
  images = !!images ? images : false;
  var x = pageItems.length;
  while(x--){    
    var pageItem = pageItems[x];    
    if(images){ if(pageItem.allGraphics.length == 0){pageItems.splice(x, 1); continue; } }
    if(!!pageItem.locked || !pageItem.visible){ pageItems.splice(x, 1); continue; }   
    if(!!pageItem.constructor.name.match(/textframe/i)){ if(!pageItem.contents.match(/\w/)){ pageItems.splice(x, 1); continue; } }    
    var bounds = pageItem.geometricBounds;
    var width = bounds[3]-bounds[1];
    var height = bounds[2]-bounds[0];
    var too_big = (width>400 || height>400) ? true : false;
    if(too_big){ pageItems.splice(x, 1); continue; }
  }
  pageItems.forEach(function(pageItem){    
    var neighbors = group_collided_pageItems(pageItem, pageItems);    
    if(neighbors.length > 1){
      try{
        page.groups.add(neighbors);         
      }catch(e){
        // log('object already in group :' + image.allGraphics[0].itemLink.name);
      }
    }
  });
}

function group_collided_pageItems(pageItem, pageItems){
  var group = [];
  var right_grab_value = 5;
  var bottom_grab_value = 5;
  var bounds = [pageItem.geometricBounds[0], pageItem.geometricBounds[1], pageItem.geometricBounds[2]+bottom_grab_value, pageItem.geometricBounds[3]+right_grab_value];
  pageItems.forEach(function(item){
    if(!!item.constructor.name.match(/textframe/i)){item.fit(FitOptions.FRAME_TO_CONTENT);}
    if(collides(bounds, item.geometricBounds)){
      group.push(item);
    }
  });
  var remaining_items = pageItems.subtract(group);
  group.forEach(function(item){
    group = group.concat(group_collided_pageItems(item, remaining_items));
  });
  group = group.makeUnique();
  return group;
}

function get_textFrame_with_header(page, header, style){
  var result = false;
  var textFrames = page.textFrames.everyItem().getElements();
  textFrames.forEach(function(textFrame){
    if(!textFrame.contents.match(/\w/)){return;}
    var firstParagraph = textFrame.paragraphs.firstItem();
    var contents_condensed = firstParagraph.contents.replace(/\W/g, '');
    if(contents_condensed.match(RegExp(header, 'i'))){
      if(!!style){
        if(!!firstParagraph.appliedParagraphStyle.name.match(RegExp(style, 'i'))){
          result = textFrame;
        }
      }else{
        result = textFrame;
      }      
    }
  });
  if(!result){ warning_message('textFrame not found for regex: '+header); }
  return result;
}

function get_textFrame_by_label(object, label){
  var result = false;
  var allPageItems = object.allPageItems;  
  allPageItems.forEach(function(pageItem){  
    if(pageItem.label == label){
      result = pageItem;
    }      
  });
  if(!result){ warning_message(label+' not found for document: '+document.name); }
  return result;
}

function get_textFrame_by_paragraphStyle(page, style){
  var result = false;
  var textFrames = page.textFrames.everyItem().getElements();
  textFrames.forEach(function(textFrame){
    if(textFrame.paragraphs.length > 0){
      if(!!textFrame.paragraphs[0].appliedParagraphStyle.name.match(RegExp(style, 'ig'))){
        result = textFrame;
      }
    }
  });  
  return result;
}

function get_textFrames_by_paragraphStyle(page, style){
  var results = [];
  var textFrames = page.textFrames.everyItem().getElements();
  textFrames.forEach(function(textFrame){
    if(textFrame.paragraphs.length > 0){
      if(!!textFrame.paragraphs[0].appliedParagraphStyle.name.match(RegExp(style, 'ig'))){
        results.push(textFrame);
      }
    }
  });
  results.sort(grid_sort);
  return results;
}

function document_settings(){
  document.revert();
  document.spreads[0].allowPageShuffle = false;
  // if(!!region){ try{ document.activeEdition = region.capitalize().replace(/sni/i, 'SNI National'); }catch(e){ alert('edition not found!'); /*error_message(e+' - '+filename);*/ } }    
  // if(!!region){try{document.activeEdition = 'National'}catch(e){alert('edition not found x2, National\'s even missing, something is messed up here')}} //dangerous, use with caution
  // alert(document.activeEdition);
  unlock_all_textFrames();
  unlock_all_pageItems(); //???
  ungroup_all(document);  
  lock_empty_textFrames();
  for(var lw = 0; lw < document.layoutWindows.length; lw++)
    document.layoutWindows[lw].viewDisplaySetting = ViewDisplaySettings.HIGH_QUALITY;
 //  document.layoutWindows[0].zoomPercentage = 80;
  //set ruler unit preferences
  document.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.PIXELS;
  document.viewPreferences.verticalMeasurementUnits = MeasurementUnits.PIXELS;
  app.activeWindow.transformReferencePoint = AnchorPoint.CENTER_ANCHOR;
  document.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;
  document.zeroPoint = [0,0];
}

function group_pageItems_in_images(){
  var pages = document.pages.everyItem().getElements();
  pages.forEach(function(page){
    var objects = page.rectangles.everyItem().getElements();
    objects = objects.concat(page.polygons.everyItem().getElements());

    objects.forEach(function(object){
      if(has_image(object) || has_pdf(object)){
        var group = [];
        var pageItems = page.pageItems.everyItem().getElements();
        pageItems.forEach(function(pageItem){
          if(pageItem == object){return;}
          if(!pageItem.locked && pageItem.visible){
            if(collides(object.geometricBounds, pageItem.geometricBounds)){
              if(!!pageItem.constructor.name.match(/TextFrame/)){
                if( !(pageItem.geometricBounds[1] > object.geometricBounds[1] && pageItem.geometricBounds[3] < object.geometricBounds[3] && pageItem.geometricBounds[0] > object.geometricBounds[0] && pageItem.geometricBounds[2] < object.geometricBounds[2]) ){
                  pageItem.fit(FitOptions.FRAME_TO_CONTENT);
                }
                if( !(pageItem.geometricBounds[1] > object.geometricBounds[1] && pageItem.geometricBounds[3] < object.geometricBounds[3] && pageItem.geometricBounds[0] > object.geometricBounds[0] && pageItem.geometricBounds[2] < object.geometricBounds[2]) ){
                  pageItem.textFramePreferences.autoSizingReferencePoint = AutoSizingReferenceEnum.TOP_CENTER_POINT;
                  pageItem.textFramePreferences.autoSizingType = AutoSizingTypeEnum.HEIGHT_ONLY;
                  pageItem.textFramePreferences.autoSizingReferencePoint = AutoSizingReferenceEnum.LEFT_CENTER_POINT;
                  pageItem.textFramePreferences.autoSizingType = AutoSizingTypeEnum.WIDTH_ONLY; 
                }                
              }
              if(pageItem.geometricBounds[1] > object.geometricBounds[1] && pageItem.geometricBounds[3] < object.geometricBounds[3] && pageItem.geometricBounds[0] > object.geometricBounds[0] && pageItem.geometricBounds[2] < object.geometricBounds[2]){
                group.push(pageItem);
              }
            }
          }
        });
        if(group.length > 0){
          group.push(object);
          page.groups.add(group);
        }
      }
    });
  });  
}

// function ungroup_all(object){
//   while(object.groups.length > 0){
//     object.groups.everyItem().ungroup();   
//   }
// }

function close_all_terminal_windows(){
  var text = '';
  text += 'tell application "Terminal"\r';
  text += '\tclose every window\r';
  text += 'end tell\r';

  app.doScript(text, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}


function close_all_documents(){
  var docs = app.documents.everyItem().getElements();
  docs.forEach(function(doc){
    var name = doc.name;
    doc.close(SaveOptions.no);
    log('Closed: '+name);
  });
}

function close_document(){
  var name = document.name; 
  document.close(SaveOptions.no);
  log('Closed: '+name);
}

function open_file(filename){
  filename = filename.replace(/\.indd$/, '');
  if(app.documents.count() > 5){app.documents.everyItem().close(SaveOptions.no);} 
  if(current_package.info.woodwing){
    var query = ['Name, '+filename, 'Type, Layout'];
    var results = app.queryObjects(query);
    var id = !!results.match(/<\d+/) ? results.match(/<\d+/)[0].replace(/</g, '') : false;
    if(!!id){ app.openObject(id, false); }else{ error_message('id returned false, file not found for filename: '+filename); }    
  }else{    
    // var grade = current_package.grade;
    // var unit = current_package.unit;
    // var file = File(indd_folder+'/g'+grade+'/u'+unit+'/'+current_lesson_type+'/'+filename);
    // log(indd_folder+'/'+filename+'.indd');
    var file = File(indd_folder+'/'+filename+'.indd');
    if(file.exists){
      app.open(file);
    }
    else alert('unable to open: ' + filename);
    //handle region
  }
  check_links();
  log('Opened: '+document.name);
  $.sleep(5000);
};



function check_links(){
  var links = document.links.everyItem().getElements();
  links.forEach(function(link){    
    try{
      if(link.status == LinkStatus.LINK_MISSING || link.status == LinkStatus.LINK_INACCESSIBLE){
        warning_message('LINK_STATUS: '+document.name);
        return;
      }
    }catch(e){

    }
  });
}



function findFileNameWW(fn_ycode, fn_grade, fn_unit, fn_week, fn_day, fn_lesson, fn_grep)
{
  var grep;
  if(fn_grep) grep = new RegExp(fn_grep, 'i');
  else grep = false;
  var lessongrep;
  if(fn_lesson) lessongrep = new RegExp('L' + fn_lesson + '([^\\d]|$)', 'i');
  else lessongrep = false;
  // $.evalFile(app.activeScript.parent.parent.fsName+'/nav/filenames_SPAN.js');
  $.evalFile(itrs_root_path+'/data/filenames_2p5.js');

  // alert(filenames[223]);

  log('findFileNameWW: ' + fn_ycode + ', G' + fn_grade + ', U' + fn_unit + ', W' + fn_week + ', D' + fn_day + ', L' + fn_lesson + ', ' + fn_grep);

  for(var f = 0; f < filenames.length; f++)
  {
    ycodeMatch = !!fn_ycode ? filenames[f].match(fn_ycode) : true;
    gradeMatch = !!fn_grade ? filenames[f].match('G' + fn_grade) : true;
    unitMatch = !!fn_unit ? filenames[f].match('U' + fn_unit) : true;
    weekMatch = !!fn_week ? filenames[f].match('W' + fn_week) : true;
    dayMatch = !!fn_day ? filenames[f].match('D' + fn_day) : true;
    lessonMatch = !!fn_lesson ? filenames[f].match(lessongrep) : true;
    grepMatch = !!fn_grep ? filenames[f].match(grep) : true;

    // if(f == 0) alert(ycodeMatch && gradeMatch && unitMatch && weekMatch && dayMatch && lessonMatch && grepMatch);

    // if(ycodeMatch && gradeMatch && unitMatch && weekMatch && dayMatch && grepMatch) log('partial match: ' + filenames[f]);

    if(ycodeMatch && gradeMatch && unitMatch && weekMatch && dayMatch && lessonMatch && grepMatch)
    {
      // log(filenames[f]);
      return filenames[f];
    }
  }
  log('not found');
  return false;
}


//downloader

Application.prototype.notifications = function(param) {

    this.linkingPreferences.checkLinksAtOpen = param;

    if (param) {

        this.scriptPreferences.userInteractionLevel = UserInteractionLevels.INTERACT_WITH_ALL;

    } else {

        this.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
    }
}

Application.prototype.openWW = function (filename, mode) {

    filename = filename.toString();
    var query = ['Name, ' + filename, 'Type, Layout'];
    var results = app.queryObjects(query);

    var id = !!results.match(/<\d+/) ? results.match(/<\d+/)[0].replace(/</g, '') : false;

    if (!!id) {
      
        app.openObject(id, mode);
    } 
}

Application.prototype.openAndDownload = function (files) {

  var folderName = files.name.replace(/\..+/,'');
  files.open('r');
  var str = files.read();
  str = str.split('\n');

  for (var i = 0; i < str.length; i++) {

    app.notifications(false);
    this.openWW(str[i], true);
    var source = File(app.activeDocument.filePath + '/' + app.activeDocument.name);
    var target = Folder.desktop + '/' + folderName;
    Folder(target).create();
    source.copy(target   + '/' + app.activeDocument.name);
    app.activeDocument.close(SaveOptions.NO);
    app.notifications(true);
  }
}