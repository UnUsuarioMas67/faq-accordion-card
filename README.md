# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](https://github.com/UnUsuarioMas67/faq-accordion-card/blob/main/design/end-result.png?raw=true)

### Links

- Solution URL: [https://github.com/UnUsuarioMas67/faq-accordion-card](https://github.com/UnUsuarioMas67/faq-accordion-card)
- Live Site URL: [https://unusuariomas67.github.io/faq-accordion-card/](https://unusuariomas67.github.io/faq-accordion-card/)

## My process

### Built with

- HTML
- CSS
- JavaScript

### What I learned

- Manually positioning elements using `position: relative` and `position: absolute`.

- In the mobile version, when I used set values in the `margin-top` for `.faq-section`, it would result in the spacing between the illustration image and the FAQ Section looking inconsistent due to the image having variable size.

  To solve this, I assigned the illustration size to its own variable and set the `margin-top` to a percentage of said value:
  ```css
  :root {
      --illustration-size-mobile: min(70%, 300px);
  }

  .faq-section {
    padding: 0 2rem 4rem;
    margin-top: calc(var(--illustration-size-mobile) * 0.2 * -1);
  }
  ```

- I learned how to transition height using `grid-template-rows`. I used this to animate the accordion expand/collapse:
  ```css
  .answer-wrapper {
    display: grid;
    grid-template-rows: 0fr;

    transition: grid-template-rows 0.2s;
  }

  .accordion_question-answer.active > .answer-wrapper {
    grid-template-rows: 1fr;
  }

  .answer {
    overflow: hidden;
  }
  ```

### Useful resources

- [Kevin Powell - The simple trick to transition from height 0 to auto with CSS](https://www.youtube.com/watch?v=B_n4YONte5A)

## Author

- Github - [@UnUsuarioMas67](https://github.com/UnUsuarioMas67)
- Frontend Mentor - [@UnUsuarioMas67](https://www.frontendmentor.io/profile/UnUsuarioMas67)