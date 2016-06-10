# Popupbox

A sensible popupbox, just see the example here and use it. No weird syntax. All the shadow and anything inside is for you to do on our will. This module will place the `thing` you made along with an arrow where it should be.

`Plug in popupbox.js and popupbox.css in your project`

## How to use : 

It displays a popupbox by making the overlay with the width and height configured as the inner element.

The structure is a nested div of the form :

```html
<div class='popupbox'>
    <div id="popupboxcontent">
        Thing that will come up in the popup
    </div>
</div>
```
Don't change the outer class `popupbox`, but the inner one can be changed as you wish.
In here the top one is a placeholder and the inner `popupboxcontent` is the actual content.
You can put this wherever you want in the code. All the linking is done in your js.

Now for the css, use this for `popupbox` (this is default and you can reuse it, just remember to make it the highest z-index on the page or something else might block the view):
```css
div.popupbox{
    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
```

Now inside the `popupboxcontent` as the name suggest put all your content and you are good to go.
Just remember to change the name of the classes in the js accordingly.
```js
$(1).click(function(e){
    e.stopPropagation();
    displayPopup('2', '3');
});
```
```md
1 : Trigger point
2 : The base from which the popup should come up
3 : Actual content
```
Example : 
```js
$('#button').click(function(e){
    e.stopPropagation();
    displayPopup('#button', '#popupboxcontent');
});
```
**More in displayPopup**
```js
function displayPopup(base, popupcontent, popupXLocation = 'middle', popupYLocation = 'below', arrowColor ='white', arrowSize = '7')
```

### Screenshot (basic)
![image](http://i.imgur.com/cAdGrke.png)
