$('#button').click(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent', 'right', 'below', 'black');
});
