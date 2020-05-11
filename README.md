# Coronavirus Dashboard Ireland

---

## Table of Contents:

* [UX](#ux-user-experience)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Colours](#colours)
    * [Wireframes](#wireframe-mockups)
        * [Homepage](#homepage)
        * [Graphs](#graphs)
        * [Interactive SVG](#interactive-svg)
* [Goals](#goals)
    * [Project Goals](#project-goals)
    * [User Goals](#user-goals)
* [User Stories](#user-stories)
* [Features](#features)
* [Future Goals](#future-goals)
* [Project Planning](#project-planning)
* [Technology Used](#technologies-used)
* [Testing](#testing)
* [Building for Source](#building-for-source)
    * [How to Run Project Locally](#how-to-run-project-locally)
* [Deployment](#deployment)
* [Credits](#credits)

---

## UX (User Experience)

The design of this site is pretty simple. There is a navigation menu on the left hand side to go between the different pages of the website.
In the dashboard there is a tabbed menu to swap between the graphs and the interactive map of Ireland

### Design Choices

#### Fonts
For the statistics font I chose a sans-serif font called Segoe UI as this font is very readible at small sizes. This is important when displaying lots of data.
For the body font I chose a sans-serif font called Poppins as this is a good font for websites with easy readability at diferent sizes.
For the Heading font I chose Helvetica as this font pairs well with Segoe UI  

#### Colours
Since this is a dasboard I kept the colours simple so that the data would be easy to read

* Background: #f5f6fa
* Side Bar Background: #212121
* Side Bar Active List Element: #32373d
* Chart Boxes: #FFF
* Highlight Colour: #fff

### Wireframe Mockups

### Homepage

<div style="text-align:center;">
    <img src="assets\Homepage.png"></img><br>
</div>

### Graphs

<div style="text-align:center;">
    <img src="assets\Dashboard Graphs.png"></img><br>
</div>

### Interactive SVG

<div style="text-align:center;">
    <img src="assets\Interactive SVG.png"></img><br>
</div>

### Contact Page

---

## Goals

### Project Goals

This project was developed to display the Coronavirus statistics for Ireland in an easy to use dashboard allowing users to stay up to date with the latest figures. Statistics can be analysed through charts and an interactive map of Ireland. The user can also sign up to receive daily updates by email

### User goals

The user needs to be able to easily view the latest figures for the Coronavirus

---


## User stories

1. As a user I want to be able to see the latest Coronavirus figures for Ireland.
2. As a user I want to be able to see the latest Coronavirus figures for specific counties in Ireland.
3. As a user I want to be able to see the amount of confirmed cases, deaths, recoveries in total and for today.
4. As a user I want to be able to see the breakdown of figures related to gender, age and how the virus is transmitted.
5. As a user I want to be kept up to date with the latest daily figures.

---


## Features

### View Daily Coronavirus Figures
The user has the ability to see the new confirmed cases, deaths and recoveries for that day.

### View Total Coronavirus Figures
The user has the ability to see the total confirmed cases, deaths and recoveries since the virus first occured in Ireland.

### View County Specific Coronavirus Figures
The user has the ability to see the total confirmed cases, deaths and recoveries for each county in Ireland.

### Sign Up For Email Updates
The user has the ability to subscribe for daily email updates to see the total new confirmed cases, deaths and recoveries for that day.

---


## Future Goals
There are many useful updates that could be implemented in this project in the future. 

### Worldwide statistic
This project could be expanded to provide worldwide statistics and a worldwide Interactive SVG map.

### News Updates
Another useful feature could be latest news updates from the Irish government, WHO and CDC.

---


## Project Planning

**Stage 1** - Implement the genral layout of the dashboard.

**Stage 2** - Create bar and pie charts using the chart.js library to display sample data. This data will later be replaced with the latest coronavirus figures.

**Stage 3** - Create an interactive SVG map of Ireland, which when a county is hovered over will display sample data. This data will later be replaced with the latest coronavirus figures.

**Stage 4** - Use the API from data.gov to populate the charts and SVG map

**Stage 5** - Test robustness of the site and optimize performance and code

## Technologies Used

* HTML 
* CSS 
* JavaScript 
* [Bootstrap](https://getbootstrap.com/) - to help adapt for numerous input types
* [Google Fonts](https://fonts.google.com/) - 
* [VSCode](https://code.visualstudio.com/) - IDE for local development
* [GIT](https://git-scm.com/) - Version Control
* [GitHub](https://github.com/) - to host the repositories for this project and the live 
* [JQuery](https://jquery.com)
* [Popper.js](https://popper.js.org/)
* [Chart.js](https://www.chartjs.org/)
* [data.gov API](https://data.gov.ie/dataset?q=covid&sort=score+desc%2C+metadata_created+desc)
* [Font Awesome](https://fontawesome.com/) - Used for Icons
* [svgMap](https://github.com/StephanWagner/svgMap) - GitHub World Map project, modified to work for Ireland

---


## Testing

Ensured correct styles were applied when hovering over elements

Ensured that correct figures were displayed when pulling in the data for the Coronavirus figures

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

---


## Building for Source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```

### How to Run Project Locally

To run this project in a local environment, you first need to clone this project from GitHub:

1. Copy the clone URL for the repository by using the "Clone or download" button at the top right of the repo. 
2. In a command line, navigate to the directiory you want to clone the repo to and type the following command:
    ```git clone https://github.com/Jakejamesreid/Coronavirus_Dashboard.git```
3. To run the project I use a VS Code addon called "Live Server". This allows you to launch a development local Server with a live reload feature for static & dynamic pages.

---


## Deployment

Steps for GitHub Pages deployment: 

1. Go to the **Settings** for the project.
2. Scroll down until you see the **GitHub Pages** section.
3. Under the **Source** heading, click the drop-down menu and select **Master Branch**
4. Scroll back down to the **GitHub Pages** section and copy the depoyment link to the description of the repository.
 
---


## Credits

### Content
The dashboard features maps and charts based on [Irelands open data portal](https://data.gov.ie/dataset?q=covid&sort=score+desc%2C+metadata_created+desc)

### Media
- The photos used in this site were obtained from ...
[Favicon](https://www.iconfinder.com/iconsets/coronavirus-12?utm_campaign=Virus%20awareness&utm_medium=landing%20page&utm_source=Webflow&utm_content=Coronavirus%20by%20dDara)
[Sidebar Image](https://www.twenty20.com/photos/78c63d85-e3c5-419b-87b4-bc137da4bd85)

### Acknowledgements
I received inspiration for the design of the website from:
[General layout](https://bootstrapious.com/p/bootstrap-sidebar)
[Layout elements](https://www.youtube.com/watch?v=dMNBuLcbOPY)
[News Letter Sign Up](https://mdbootstrap.com/docs/jquery/navigation/footer/)

I used the following websites for reseach:
[Used for understanding async functions](https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait)
[Get key for specific value](https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value)
[Toggle form success and error messages](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)

### Attribution
This project makes use of the [svgMap](https://github.com/StephanWagner/svgMap) project created by [Stephan Wagner](https://github.com/StephanWagner) which creates an SVG map to display the GDP values for each country. I modified this project to display the coronavirus statistics for each county in Ireland.
svgMap uses [svg-pan-zoom](https://github.com/ariutta/svg-pan-zoom) by [Anders Riutta.](https://github.com/ariutta)