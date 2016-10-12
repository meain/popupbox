# Popupbox

A sensible popupbox, just see the example here and use it. No weird syntax. All the shadow and anything inside is for you to do on our will. This module will place the `thing` you made along with an arrow where it should be.
One assumption that is made is that your popup box will be bigger than the target.


# Usage
* Include the files `popupbox.js` and `popupbox.css` in your project.

* Now you have to have this div structure somewhere in your html and put your **content to be displayed inside the inner div**.
    ```html
    <div class='popupbox'>
        <div id="popupboxcontent">
            Thing that will come up in the popup
        </div>
    </div>
    ```
    Don't change the outer div class, but change the inner div's id to whatever you want it to be. All the linking is done in `js`.

## displayPopup
This is used to show a simple popup window with or without an arrow to accompany it.
The function definition is like this:
```js
displayPopup(base, popupcontent, popupXLocation = 'middle', popupYLocation = 'below', arrow = true, arrowColor ='white', arrowSize = '7')
```
```
Options
   popupXLocation : left, right, middle
   popupYLocation : above, below
```
Now you can call this as and when you need, by default it is assumed to be removed on clicking outside the popup.

Example : 
```js
$('#button').click(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent');
});
```

You can also use this to implement a **popup on mouse hover**, like this : 
```js
$('#button').hover(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent', 'left', 'above', true, 'black');
},
function(e){
    e.stopPropagation();
    removePopup('#popupboxcontent');
});
```
The `removePopup()` function only takes one value, ie the id of the div of the `popupboxcontent`

### Screen shot
![popupBox](http://i.imgur.com/3CTc5pn.png)

## displayFullScreenPopup
This is used, as the name suggest to display a full screen popup - kinda like a model in bootstrap

This is how the function definition looks like:
```js
displayFullScreenPopup(popupcontent, overrideOutsideClick=false, backgound = true, backgoundOpacity = 0.9, backgoundColor = '256, 256, 256')
```
Like the native implementation of popupBox it will be removed on clicking anywhere outside the popup, but you can override it by setting overrideOutsideClick to true.

You can call this like :
```js
$('#button').click(function(e){
    e.stopPropagation();
    displayFullScreenPopup('#popupboximagecontent');
});
```
### Screen shot
![fullScreenPopup](http://i.imgur.com/V9D7Nrp.png)
