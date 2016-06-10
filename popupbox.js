// Actual function that opens and closes the popup window
function displayPopup(base, popupcontent, popupXLocation = 'middle', popupYLocation = 'below'){
    /*
    Options
       popupXLocation : left, right, middle
       popupYLocation : above, below
    */

    // Get the location of the parent so as to positon the popup
    var element = $(base);
    var child = $(popupcontent);
    var popupbox = child.parent().closest('div');
    var offsets = element.offset();
    var etop = offsets.top;
    var eleft = offsets.left;
    var eheight = element.outerHeight();
    var ewidth = element.outerWidth();
    var cwidth = child.outerWidth();
    var cheight = child.outerHeight();
    console.log(popupXLocation + ' - ' +  popupYLocation);
    //Fixing Y location
    if(popupYLocation == 'below'){
        var posy = etop + eheight;
    }
    if(popupYLocation == 'above'){
        var posy = etop - cheight;
    }
    //Fixing X location
    if(popupXLocation == 'middle'){
        var posx = eleft + ewidth/2 - cwidth/2;
    }
    if(popupXLocation == 'left'){
        var posx = eleft + ewidth/10 - cwidth/2;
    }
    if(popupXLocation == 'right'){
        var posx = eleft + ewidth*9/10 - cwidth/2;
    }
    // Fix left position on overflow
    if(posx < 5){
        posx = 5;
    }
    console.log('posx : ' + posx + ' posy : ' + eheight);
    popupbox.css('height', cheight + 'px');
    popupbox.css('width', cwidth + 'px');
    popupbox.css('margin-top', posy + 'px');
    popupbox.css('margin-left', posx + 'px');
    popupbox.css('display', 'block');
    $('html').click(function(){
        popupbox.hide();
    });
    $(popupcontent).click(function(e){
        e.stopPropagation();
        $(this).show();
    });
}
