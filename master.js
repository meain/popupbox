$('#button').click(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent', 'left', 'above', true, 'black');
});
