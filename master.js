$('#button').click(function(e){
    e.stopPropagation();
    displayFullScreenPopup('#popupboximagecontent');
});

$('#button').hover(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent', 'left', 'above', true, 'black', 10);
},
function(e){
    e.stopPropagation();
    removePopup('#popupboxcontent');
});
