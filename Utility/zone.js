//CREATOR JASON YIM
//CREATED 2016-6-21
//UPDATED 2019-01-09
//VERSION 2.7

function Zone(page, geometricBounds, num, layers){
  this.name = 'Zone';
  this.constructor = {name: 'Zone'};
  if(!!num){
    this.id = 'page'+page.name+'_zone'+num;
  }else{
    this.id = 'page'+page.name;
  }  
  this.layers = layers;
  this.geometricBounds = geometricBounds;
  this.page = page;
  this.images = [];    
  this.pageItems = []; 

  this.textFrames = this.get_pageItems('textframes');
  this.groups = this.get_pageItems('groups');
  this.rectangles = this.get_pageItems('rectangles');
  this.polygons = this.get_pageItems('polygons');    
  this.pageItems.sort(grid_sort);
  this.images.sort(grid_sort);  
}

Zone.prototype.get_pageItems = function(item_type){  
  var items;
  var output = [];  
  if(!!this.layers){
    var l = this.layers.length;
    for(var x = 0; x < l; x++){
      var layer = this.layers[x];
      var layer_obj = document.layers.itemByName(layer);
      if(!layer_obj){
        throw 'Error: Layer not found! Layer: '+layer;
      }
      output = this.process_items(layer_obj, item_type);
    }
  }else{
    output = this.process_items(this.page, item_type);
  }  
  return output;
};

Zone.prototype.process_items = function(object, item_type){  
  var items;     
  switch(item_type.toLowerCase()){   
    case 'textframes': items = object.textFrames; break;
    case 'rectangles': items = object.rectangles; break;
    case 'groups': items = object.groups; break;
    case 'polygons': items = object.polygons; break;    
    default: return [];
  } 
  var output = [];
  var l = items.length;  
  for(var x = 0; x < l; x++)
  { 
    var item = items[x];    
    if(item.visible && !item.locked && item.itemLayer.visible)
    {
      if(collides(this.geometricBounds, item.geometricBounds))
      {
        var correctEdition = false;
        for(var ed = 0; ed < item.editions.length; ed++)
        {
          if(item.editions[ed] == region.capitalize().replace(/sni/i, 'SNI National').replace(/^national/i, 'National 2_5'))
            correctEdition = true;
          
        }
        if(!correctEdition)
        {
          for(var ed = 0; ed < item.editions.length; ed++)
          {
            if(item.editions[ed] == 'Florida') //workaround for nat 2.5 pouring when the files aren't fixed correctly
              correctEdition = true;
          }
        } 
        switch(item.constructor.name)
        {
          case 'TextFrame': 
            if(!is_empty(item)){ 
              if(correctEdition || !document.activeEdition) output.push(item); 
            } 
            break;  
          case 'Rectangle': case 'Group': case 'Polygon': 
            if(!!has_image(item) || !!has_pdf(item)){              
              output.push(item);                            
              this.images.push(item); 
            } 
          break;
          default: output.push(item);
        }
        // alert(item.editions);
        if(correctEdition || !document.activeEdition) this.pageItems.push(item);        
      }
    } 
  }
  output.sort(grid_sort);
  return output;
};

Zone.prototype.group_images = function(){
  if(this.images.length > 1){
    app.select(this.images);    
    this.images = [this.page.groups.add(app.selection)];
  }
};

// function grid_sort(a, b){
//   var aY = Math.round(a.geometricBounds[0]);
//   var bY = Math.round(b.geometricBounds[0]);
//   var aX = Math.round(a.geometricBounds[1]);
//   var bX = Math.round(b.geometricBounds[1]);
//   var proximity = 15;
//   if( Math.abs(aX-bX) <= proximity ){
//     return aY > bY;
//   }else{
//     return aX > bX;
//   }  
// }
function grid_sort(a, b){
  var aY = Math.round(a.geometricBounds[0]);
  var bY = Math.round(b.geometricBounds[0]);
  var aX = Math.round(a.geometricBounds[1]);
  var bX = Math.round(b.geometricBounds[1]);
  var proximity = 10;
  if( Math.abs(aY-bY) <= proximity ){
    return aX - bX;
  }else{
    return aY - bY;
  }  
}

function vertical_sort(a, b){
  var aY = Math.round(a.geometricBounds[0]);
  var bY = Math.round(b.geometricBounds[0]);  
  return aY - bY;
}

function horizontal_sort(a, b){
  var aX = Math.round(a.geometricBounds[1]);
  var bX = Math.round(b.geometricBounds[1]);
  return aX - bX;
}

function sort_by_x(a, b){
  var aY = Math.round(a.geometricBounds[0]);
  var bY = Math.round(b.geometricBounds[0]);
  var aX = Math.round(a.geometricBounds[1]);
  var bX = Math.round(b.geometricBounds[1]);
  var proximity = 10;
  if( Math.abs(aX-bX) <= proximity ){
    return aY - bY;
  }else{
    return aX - bX;
  }  
}
function has_pdf(item){ 
  if(!!has_graphics(item)){ return item.allGraphics[0].constructor.name == 'PDF' ?  true : false; }
}  
function has_image(item){ 
  if(!!has_graphics(item)){ return item.allGraphics[0].constructor.name == 'Image' ?  true : false; }
}  
function has_graphics(item){ 
  return item.allGraphics.length > 0 ? true : false;
}
function has_group(item){ 
  return item.groups.length > 0 ? true : false;
}
function has_textframe(item){ 
  return item.textFrames.length > 0 ? true : false;
}
function has_tables(item){ 
  return item.tables.length > 0 ? true : false;
}
function is_empty(textFrame){  
  var contents = textFrame.contents;
  if(textFrame.tables.length > 0){return false;}
  if(textFrame.groups.length > 0){return false;}
  if(textFrame.textFrames.length > 0){return false;}  
  if(!contents.match(/\w/)){return true;}
  return false;
}
function collides(selector, object){
  try{
    if(selector[1] < object[3] && selector[3] > object[1] && selector[0] < object[2] && selector[2] > object[0]){ return true; }else{ return false; } 
  }catch(e){}
}
function Zones(page, geometricBounds, layers){
  var l = geometricBounds.length;
  var zones = []
  for(var x = 0; x < l; x++){
    var zone = new Zone(geometricBounds[x], page, x, layers);
    zones.push(zone);
  }
  return zones;
} 

//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// DEPRECATED
function create_zones(geometricBounds, page, layers){
  var l = geometricBounds.length;
  var zones = []
  for(var x = 0; x < l; x++){
    var zone = new Zone(geometricBounds[x], page, x, layers);
    zones.push(zone);
  }
  return zones;
}
function first_column_sort(a, b){return a[0] > b[0];} 
function sortX(pageItems){
  var records = []; 
  var output = [];
  for(var j = 0; j < pageItems.length; j++){
    records.push([pageItems[j].geometricBounds[1], pageItems[j]]);
  } 
  records.sort(first_column_sort);
  for(var j = 0; j < records.length; j++){output.push(records[j][1]);} 
  return output;
}
function sortY(pageItems){
  var records = [];
  var output = []; 
  for(var j = 0; j < pageItems.length; j++){records.push([pageItems[j].geometricBounds[0], pageItems[j]]);} 
  records.sort(first_column_sort);
  for(var j = 0; j < records.length; j++){output.push(records[j][1]);} 
  return output;
} 
Zone.prototype.get_pageItems_by_geometricBounds = function(){
  var pageItems = [];
  items = this.page.allPageItems; 
  for(var x = 0; x < items.length;x++){ 
    if(items[x].visible && !items[x].locked){if(collides(this.geometricBounds, items[x].geometricBounds)){pageItems.push(items[x]);}} 
  }
  return pageItems;
};
Zone.prototype.sort = function(pageItems){
  var records = []; 
  var output = [];
  var l = pageItems.length;
  for(var x = 0; x < l; x++){
    var pageItem = pageItems[x];
    var x = pageItem.geometricBounds[1];
    var y = pageItem.geometricBounds[0];
    var value = (2*y)+x;
    var object = {value: value, self: pageItem};
    records.push(object);
  }   
  records.sort(function(a, b){
    return a.value > b.value;
  });
  for(var x = 0; x < records.length; x++){
    output.push(records[x].self);
  }
  return output;
};
Zone.prototype.sort_data = function(){
  
  this.textFrames.sort(function(a, b){
    return a.geometricBounds[0] > b.geometricBounds[0];
  });
}; 
Zone.prototype.fill_data = function(){  
  var pageItems = this.pageItems;
  var l = pageItems.length;
  for(var a = 0; a < l; a++){ 
    switch(pageItems[a].constructor.name){
      case 'TextFrame': 
      if(!!this.layers){
        for(var b = 0; b < this.layers.length; b++){
          if(pageItems[a].itemLayer.name == this.layers[b]){
            this.textFrames.push(pageItems[a]); 
            break;
          }
        }  
      }else{
        this.textFrames.push(pageItems[a]);         
      }  
      break;
      case 'Rectangle': if(pageItems[a].allGraphics.length == 1){this.images.push(pageItems[a]);} break;
      case 'Polygon': if(pageItems[a].allGraphics.length == 1){this.images.push(pageItems[a]);} break;
      case 'Group': if( has_image(pageItems[a]) || has_pdf(pageItems[a]) ){this.groups.push(pageItems[a]);} break;
    }
  }
  for(var y = 0; y < this.textFrames.length; y++){       
    if(is_empty(this.textFrames[y])){this.textFrames.splice(y, 1);}
  }       
  for(var x = 0; x < this.textFrames.length; x++){
    if(this.textFrames[x].tables.length > 0){this.tables = this.tables.concat(this.textFrames[x].tables.everyItem());}      
  } 
}; 