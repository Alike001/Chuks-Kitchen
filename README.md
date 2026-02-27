# Chuks Kitchen-Frontend

- GitHub Repository: [https://github.com/Alike001/Chuks-Kitchen]
- Live Demo: [https://alike001.github.io/Chuks-Kitchen/]

## Project Overview

Chuks Kitchen is a responsive frontend web application built from a provided Figma design. The goal of this project was to accurately translate the design into a functional and visually consistent website.

The project represents a Nigerian home-cooking food platform that allows users to explore meals, sign in, and navigate different sections of the website.

This only focus on layout structure, styling, and responsiveness.

## Tech Stack Used

1. HTML5 : Used to structure the web pages semantically. Key elements include:
- <nav> for navigation
- <section> for content grouping
- <form> for authentication pages
- <footer> for footer content
- Semantic HTML improves readability, accessibility, and maintainability.

2. CSS3 : Used for
- Flexbox 
- Responsive design using Media Queries
- Spacing and alignment
- Flexbox was primarily used to replicate the desktop horizontal layout.

3. Figma: The Figma file served as the design reference for
- Layout structure
- Typography
- Colors
- Spacing

## Project Structure

Chuks-Kitchen/
- index.html
- signin.html
- signup.html
- home.html
- explore.html
- style.css
- assets/
  - images/
     - Onboarding
  - icons
- README.md

## File Description

- index.html / home.html – Landing page.
- explore.html – Page displaying available meals.
- signin.html – User login page.
- signup.html – User registration page.
- style.css – Contains all global styling and responsive rules.
- assets/images – Stores background and food-related images.
- assets/icons – Contains SVG icons.

## Design Interpretation

- Structuring sections logically using semantic HTML.
- Recreating hero overlays using position: absolute with semi-transparent backgrounds.
- Using Flexbox for horizontal alignment on desktop screens.
- Ensuring consistent typography and color usage throughout the pages.

## Assumptions Made

- Interactive elements such as the hamburger toggle were styled visually but not implemented with JavaScript.
- Device UI elements (status bar, battery, etc.) seen in the design were not implemented since they are not part of webpage content.

## Limitations

- No backend integration.
- No JavaScript interactivity.

## Future Improvements

- Add JavaScript for Interactivity.
- Implement custom form validation.
