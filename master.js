$('#button').click(function(e){
    e.stopPropagation();
    displayFullScreenPopup('#popupboximagecontent');
});

$('#button').hover(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent', 'left', 'above', true, 'black');
},
function(e){
    e.stopPropagation();
    removePopup('#popupboxcontent');
});
