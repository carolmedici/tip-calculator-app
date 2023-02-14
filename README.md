# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](https://github.com/carolmedici/tip-calculator-app/blob/main/print/mobile-original.jpg)
![](https://github.com/carolmedici/tip-calculator-app/blob/main/print/mobile-pink.jpg)

![](https://github.com/carolmedici/tip-calculator-app/blob/main/print/desktop-original-at.jpg)

### Links

- Solution URL: [carolmedici.github.io/tip-calculator-app/](carolmedici.github.io/tip-calculator-app/)


## My process

### Built with

- Semantic HTML5 
- CSS custom properties
- Responsive Media Queries
- CSS Grid
- Mobile-first 
- JavaScript

### What I learned

In this project I expanded my knowledge and improved my skills in JS.

Check some of my codes:

```html
<div class="container">
       
        <label id="change" class="change">
                <input type="checkbox" onchange="changeTheme()" id="switch">
                <span class="slider"></span>
            </label>
```
```css
  input:checked + .slider {
    background-color: var(--select-color2);
  }
  
  input:checked + .slider:before {
  -webkit-transform: translateX(2.4rem);
  -ms-transform: translateX(2.4rem);
  transform: translateX(2.4rem);
  background: white;
  
  }
}
```
```js
function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'second-color'){
       setColor('original-color');
   } else {
       setColor('second-color');
   }
}

(function () {
   if (localStorage.getItem('theme') === 'second-color') {
       setColor('second-color');
   } else {
       setColor('original-color');
   }
})();
}
```

### Continued development

Even though I improved my JS skills, I need to keep studying and practicing more

### Useful resources

- [Changing background color](https://acervolima.com/como-mudar-a-cor-de-fundo-apos-clicar-no-botao-em-javascript/) - This site helped me learn how to change background color with one button.


## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/?locale=en_US)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)


