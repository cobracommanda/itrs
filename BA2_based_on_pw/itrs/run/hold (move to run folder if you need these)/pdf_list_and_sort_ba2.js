#include '/Volumes/BEC/15 User Files/INDD SCRIPTS/primitive/main.js';

var itrs_root_path = '/Users/' + $.getenv('USER') + '/Library/Preferences/Adobe InDesign/Version 11.0/en_US/Scripts/Scripts Panel/team scripts/Jason/BA2_based_on_pw/itrs';
$.evalFile(itrs_root_path+'/data/products.js');

Application.prototype.showProgress = function(steps) {

    this.scriptPreferences.userInteractionLevel = UserInteractionLevels.INTERACT_WITH_ALERTS;

    var b;

    var t;

    var w;

    w = new Window("palette", "Progress", undefined, { closeButton: false });

    t = w.add("statictext");

    t.preferredSize = [450, -1]; // 450 pixels wide, default height.

    if (steps) {

        b = w.add("progressbar", undefined, 0, steps);

        b.preferredSize = [450, -1]; // 450 pixels wide, default height.

    }

    this.showProgress.close = function() {

        w.close();

    }

    this.showProgress.increment = function() {

        b.value++;

    }

    this.showProgress.message = function(message) {

        t.text = message;

    }

    w.show();
}

Application.prototype.notifications = function(param) {

    this.linkingPreferences.checkLinksAtOpen = param;

    if (param) {

        this.scriptPreferences.userInteractionLevel = UserInteractionLevels.INTERACT_WITH_ALL;

    } else {

        this.scriptPreferences.userInteractionLevel = UserInteractionLevels.NEVER_INTERACT;
    }
}

Application.prototype.openWW = function(filename, mode, blind) {

    filename = filename.toString();
    var query = ['Name, ' + filename, 'Type, Layout'];
    var results = app.queryObjects(query);

    blind == undefined ? blind = true : false;
    var id = !!results.match(/<\d+/) ? results.match(/<\d+/)[0].replace(/</g, '') : false;

    if (!!id) {

        app.openObject(id, mode, blind);
    }
}

Application.prototype.openAndDownload = function(files) {

    var folderName = files.name.replace(/\..+/, '');
    files.open('r');
    var str = files.read();
    str = str.split('\n');

    app.showProgress(str.length);

    for (var i = 0; i < str.length; i++) {

        app.showProgress.message('Exporting file: '  + str[i]);
        this.openWW(str[i], true, true);
        $.sleep(5000);

        try{ document.activeEdition = 'Florida'; }catch(e){ alert('edition not found!');}

        var pathappend = '';
        if(app.activeDocument.name.match(/strategies/i)) pathappend = 'unit_resources/strategies_skills.pdf';
        else if(app.activeDocument.name.match(/foldout/i)) pathappend = 'unit_resources/components_at_a_glance.pdf';
        else if(app.activeDocument.name.match(/reteach/i)) pathappend = 'unit_resources/intervention_reteaching.pdf';
        else if(app.activeDocument.name.match(/language/i)) pathappend = 'unit_resources/language_objectives.pdf';
        else if(app.activeDocument.name.match(/goals/i))
        {
            var wk = app.activeDocument.name.match(/W\d/)[0].match(/\d/)[0];
            pathappend = 'week'+wk+'/goals.pdf';
        }
        else if(app.activeDocument.name.match(/planner/i))
        {
            var wk = app.activeDocument.name.match(/W\d/)[0].match(/\d/)[0];
            pathappend = 'week'+wk+'/planner.pdf';
        }
        else alert('invalid type: ' + app.activeDocument.name);

        var unit = app.activeDocument.name.match(/U\d+/)[0].match(/\d+/)[0];
        var grade = app.activeDocument.name.match(/G(\d|k)/i)[0].match(/\d|k/i)[0];
        var xcode = get_product(grade, unit, 'florida', 'en').xcode;
        var pdfpath = '/Volumes/BEC/23 HTML eBooks/Benchmark Advance 2/Florida/iTRS_Revision/u'+unit+'/'+xcode+'/pdfs/grade'+grade.toLowerCase()+'/unit'+unit+'/' + pathappend;

        //pdfexport, shows dialog
        app.activeDocument.exportFile(ExportFormat.pdfType, File(pdfpath), true);

        // var source = File(app.activeDocument.filePath + '/' + app.activeDocument.name);
        // var target = Folder.desktop + '/' + folderName;
        // Folder(target).create();
        // source.copy(target + '/' + app.activeDocument.name);
        try{app.activeDocument.close(SaveOptions.NO);}catch(e){alert('uh...ok, it wants to stay open I guess');}
        app.showProgress.increment();
    }

    app.showProgress.close();
}

app.notifications(false);
var files = File.openDialog('Select the file list');

// try {

    app.openAndDownload(files);

// } catch(e) {

//     e.log();
// }

app.notifications(true);

