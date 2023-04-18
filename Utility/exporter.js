//CREATOR JASON YIM
//CREATED 2016-10-24
//UPDATED 2019-03-07
//VERSION 1.8

function export_pdf(path, page_range){
  if(!path || !page_range){return;}
  
  var file = File(path);  
  if(typeof page_range == 'String'){
    if(!!page_range.match(/-/)){
      var firstpage = get_first_page(page_range);
      var lastpage = get_last_page(page_range);
      var range_is_valid = document.pages.item(firstpage).isValid;  
      range_is_valid = !!range_is_valid ? document.pages.item(lastpage).isValid : range_is_valid;  
    }else{
      range_is_valid = document.pages.item(page_range).isValid;  
    }    
  }else{
    range_is_valid = true;
  }
  if(!range_is_valid){
    log('range is not valid: '+page_range);
  }

  if(!file.exists && !!range_is_valid){
    app.pdfExportPreferences.pageRange = page_range;
    try{
      document.exportFile(ExportFormat.PDF_TYPE, file);
    }catch(e){
      log('WARNING: failed to export pdf. Trying without compression.\r'+e);
      try{
        app.pdfExportPreferences.compressionType = PDFCompressionType.COMPRESS_NONE;
        document.exportFile(ExportFormat.PDF_TYPE, file);
      }catch(e){
        log('ERROR: failed to export pdf.\r'+e);
      }
    }
  }
  return file;
}
function get_first_page(page_range){    
  var count = !!page_range.match(/-/g) ? page_range.match(/-/g).length : 0;
  var index = Math.floor(count/2)+1;
  var l = page_range.length;
  var result = '';
  var new_count = 0;
  for(var x = 0; x < l; x++){
    var character = page_range[x];
    if(!!character.match(/-/)){new_count++;}
    if(new_count >= index){break;}
    result += character;
  }
  return result;
}

function get_last_page(page_range){    
  var count = !!page_range.match(/-/g) ? page_range.match(/-/g).length : 0;
  var index = Math.floor(count/2)+1;
  var l = page_range.length-1;
  var result = '';
  var new_count = 0;  
  for(var x = l; x >= 0; x--){
    var character = page_range[x];
    if(!!character.match(/-/)){new_count++;}
    if(new_count >= index){break;}
    result += character;
  }
  return result;
}

function export_page(path, page_range){  
  app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
  app.jpegExportPreferences.pageString = page_range;  
  var image_file = new File(path);
  if(!image_file.exists){  
    document.exportFile(ExportFormat.JPG, image_file);
  }
} 
function set_pdf_export_preferences(){
  app.pdfExportPreferences.pdfColorSpace = PDFColorSpace.RGB; 
  app.pdfExportPreferences.pdfDestinationProfile = PDFProfileSelector.USE_DOCUMENT;
  app.pdfExportPreferences.colorBitmapCompression = BitmapCompression.JPEG;
  app.pdfExportPreferences.colorBitmapQuality = CompressionQuality.HIGH;  
  app.pdfExportPreferences.colorBitmapSampling = Sampling.BICUBIC_DOWNSAMPLE;
  app.pdfExportPreferences.colorBitmapSamplingDPI = 300;  
  app.pdfExportPreferences.compressionType = PDFCompressionType.COMPRESS_STRUCTURE;
  app.pdfExportPreferences.grayscaleBitmapCompression = BitmapCompression.JPEG;
  app.pdfExportPreferences.grayscaleBitmapQuality = CompressionQuality.HIGH;  
  app.pdfExportPreferences.grayscaleBitmapSampling = Sampling.BICUBIC_DOWNSAMPLE;
  app.pdfExportPreferences.grayscaleBitmapSamplingDPI = 300;  
  app.pdfExportPreferences.monochromeBitmapCompression = MonoBitmapCompression.ZIP;
  app.pdfExportPreferences.monochromeBitmapSampling = Sampling.BICUBIC_DOWNSAMPLE;
  app.pdfExportPreferences.monochromeBitmapSamplingDPI = 300;
  app.pdfExportPreferences.exportReaderSpreads = false;
  app.pdfExportPreferences.exportWhichLayers = ExportLayerOptions.EXPORT_VISIBLE_LAYERS;
  app.pdfExportPreferences.bleedMarks = false;
  app.pdfExportPreferences.colorBars = false;
  app.pdfExportPreferences.compressTextAndLineArt = true;
  app.pdfExportPreferences.cropImagesToFrames = true;
  app.pdfExportPreferences.cropMarks = false;
  app.pdfExportPreferences.exportGuidesAndGrids = false;
  app.pdfExportPreferences.exportLayers = false;
  app.pdfExportPreferences.exportNonprintingObjects = true;
  app.pdfExportPreferences.exportReaderSpreads = false;  
  app.pdfExportPreferences.generateThumbnails = true;
  app.pdfExportPreferences.includeBookmarks = false;
  app.pdfExportPreferences.includeHyperlinks = true;
  app.pdfExportPreferences.includeSlugWithPDF = false;
  app.pdfExportPreferences.includeStructure = false;
  app.pdfExportPreferences.omitBitmaps = false;
  app.pdfExportPreferences.omitEPS = false;
  app.pdfExportPreferences.omitPDF = false;  
  app.pdfExportPreferences.optimizePDF = true;
  app.pdfExportPreferences.pageInformationMarks = false;
  app.pdfExportPreferences.registrationMarks = false;  
  app.pdfExportPreferences.useDocumentBleedWithPDF = false;
  app.pdfExportPreferences.useSecurity = false;  
  app.pdfExportPreferences.viewPDF = false;  
} 

function set_image_export_preferences(){
  app.jpegExportPreferences.antiAlias = true;
  app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.PROGRESSIVE_ENCODING;
  app.jpegExportPreferences.jpegColorSpace = JpegColorSpaceEnum.RGB;
  app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
  app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.HIGH;
  app.jpegExportPreferences.exportResolution = 300;
  app.jpegExportPreferences.exportingSpread = false;    
   
  app.pngExportPreferences.antiAlias = true; 
  app.pngExportPreferences.pngColorSpace = PNGColorSpaceEnum.RGB;
  app.pngExportPreferences.pngQuality = PNGQualityEnum.HIGH;
  app.pngExportPreferences.exportResolution = 300;
  app.pngExportPreferences.exportingSpread = false;
  app.pngExportPreferences.pngExportRange = PNGExportRangeEnum.EXPORT_RANGE;
  app.pngExportPreferences.transparentBackground = true;
}
function set_jpg_export_preferences_to_thumbnail(){
  app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.PROGRESSIVE_ENCODING;
  app.jpegExportPreferences.jpegColorSpace = JpegColorSpaceEnum.RGB;
  app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
  app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.MEDIUM;
  app.jpegExportPreferences.exportResolution = 32;
  app.jpegExportPreferences.exportingSpread = false;       
}
function set_jpg_export_preferences_to_pdf_thumbnails(){
  app.jpegExportPreferences.antiAlias = true;
  app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.PROGRESSIVE_ENCODING;
  app.jpegExportPreferences.jpegColorSpace = JpegColorSpaceEnum.RGB;
  app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
  app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.MEDIUM;
  app.jpegExportPreferences.exportResolution = 72;
  app.jpegExportPreferences.exportingSpread = false;
}
function set_jpg_export_preferences_to_good(){
  app.jpegExportPreferences.antiAlias = true;
  app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.PROGRESSIVE_ENCODING;
  app.jpegExportPreferences.jpegColorSpace = JpegColorSpaceEnum.RGB;
  app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
  app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.HIGH;
  app.jpegExportPreferences.exportResolution = 150;
  app.jpegExportPreferences.exportingSpread = false;
}
function set_jpg_export_preferences_to_best(){
  app.jpegExportPreferences.antiAlias = true;
  app.jpegExportPreferences.jpegRenderingStyle = JPEGOptionsFormat.PROGRESSIVE_ENCODING;
  app.jpegExportPreferences.jpegColorSpace = JpegColorSpaceEnum.RGB;
  app.jpegExportPreferences.jpegExportRange = ExportRangeOrAllPages.EXPORT_RANGE;
  app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.MAXIMUM;
  app.jpegExportPreferences.exportResolution = 300;
  app.jpegExportPreferences.exportingSpread = false;
}
function export_image(image, filename, path){    
  app.jpegExportPreferences.pageString = image.parentPage.name;
  var image_file = new File(path + separator + filename);
  var format = !!filename.match(/\.png/i) ? ExportFormat.PNG_FORMAT : ExportFormat.JPG;
  if(!image_file.exists){ 
    if(!image){
      document.exportFile(format, File(image_file));
    }else{
      app.select(image);
      try{app.selection[0].exportFile(format, File(image_file));}catch(e){log('!!! exporter.js failed')}
    }    
  }
}
function export_group(group, filename, path){   
  app.pngExportPreferences.pageString = group.parentPage.name;
  var image_file = new File(path + separator + filename);  
  if(!image_file.exists){
    app.select(group);
    app.selection[0].exportFile(ExportFormat.PNG_FORMAT, File(image_file));
  }
}  

