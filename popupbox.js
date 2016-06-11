function getTriangleDiv(xpos, direction = 'up', color = 'white', size = '7'){
    var triangleDiv = '<div id="triangleDiv" style="margin-left:' + xpos + 'px;width:0px;height:0px;';
    if(direction == 'up'){
        triangleDiv = triangleDiv + 'border-left: ' + size + 'px solid transparent;border-right: ' + size + 'px solid transparent;border-top: ' + size + 'px solid transparent;border-bottom: ' + size + 'px solid ' + color + ';';
    }
    if(direction == 'down'){
        triangleDiv = triangleDiv + 'border-left: ' + size + 'px solid transparent;border-right: ' + size + 'px solid transparent;border-bottom: ' + size + 'px solid transparent;border-top: ' + size + 'px solid ' + color + ';';
    }
    if(direction == 'left'){
        triangleDiv = triangleDiv + 'border-left: ' + size + 'px solid transparent;border-bottom: ' + size + 'px solid transparent;border-top: ' + size + 'px solid transparent;border-right: ' + size + 'px solid ' + color + ';';
    }
    if(direction == 'right'){
        triangleDiv = triangleDiv + 'border-bottom: ' + size + 'px solid transparent;border-right: ' + size + 'px solid transparent;border-top: ' + size + 'px solid transparent;border-left: ' + size + 'px solid ' + color + ';';
    }
    triangleDiv = triangleDiv + '"></div>'
    return triangleDiv;
}

// Actual function that opens and closes the popup window
function displayPopup(base, popupcontent, popupXLocation = 'middle', popupYLocation = 'below', arrow = true, arrowColor ='white', arrowSize = '7'){
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
    var coffsets = child.offset();
    var ctop = coffsets.top;
    var cleft = coffsets.left;
    var cwidth = child.outerWidth();
    var cheight = child.outerHeight();
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
        arrowx = cwidth/2;
    }
    if(popupXLocation == 'left'){
        var posx = eleft + ewidth*9/10 - cwidth;
        arrowx = cwidth - ewidth/2;
    }
    if(popupXLocation == 'right'){
        var posx = eleft + ewidth/10;
        arrowx = ewidth/2;
    }
    if (arrow == true){
        // Adjust position due to arrow
        posy = posy - arrowSize;
        //Insert a triangle befre the content
        if($('#triangleDiv').length == 0){
            if(popupYLocation == 'below'){
                $(getTriangleDiv(arrowx, 'up', 'black')).insertBefore(popupcontent);
            }
            if(popupYLocation == 'above'){
                $(popupboxcontent).after(getTriangleDiv(arrowx, 'down', arrowColor));
            }
        }
    }
    // Fix left position on overflow
    if(posx < 5){
        posx = 5;
    }
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
