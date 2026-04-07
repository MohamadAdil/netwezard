NavSide
===================
DEMO: http://carlosmarch.es/navside/

#### How to use

#### **Include Jquery & Jquery Easing in your website. Add also navside.js & navside.css in your page.**
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script src="assets/js/jquery.easing.min.js" type="text/javascript"></script>

<script src="assets/js/jquery.navside.js" type="text/javascript"></script>
<link href="assets/css/navside.css" rel="stylesheet" type="text/css" />
```

#### **Create a menu with the id #navside, and put it just after the 'body' tag.**
```html
<nav id="navside">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Page-1</a></li>
      <li><a href="#">Page-2</a></li>
   </ul>
</nav>
```
#### **Call the plugin with options.**
```javascript

$("#navside").navside({
    position         : 'left',   // options for Position: 'left' or 'right'. Default is 'right'
    scroll           : 'fixed'  // options for Scroll: 'hidden' or 'fixed'. Default is 'hidden'
});

```


