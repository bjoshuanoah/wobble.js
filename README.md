## wobble.js

wobble.js is a simple jquery method that adds a wobble/teeter effect to any div or photo on mouse-over with css3 transforms.

Simple to use. cross browser compatible: Chrome, Firefox, Safari, Opera, IE9

To wobble your div simply add the .wobble() method to the desired element.

    $('.logo').wobble();

The default maximum rotation angle is 15, so if that is too much, or too little, simply add the rotation angle as an argument.

    $('.logo').wobble(30); // Adds more rotation.
    $('.logo').wobble(7); // Makes the rotation angle smaller.

