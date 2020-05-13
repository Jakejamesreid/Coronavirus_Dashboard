<div style="text-align:center;">
    <img src="assets\images\favicon.ico" style="width: 200px; height: 200px"></img><br>
</div>

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
* [User Stories](#user-stories)
* [Features](#features)
* [Future Goals](#future-goals)
* [Project Planning](#project-planning)
* [Technology Used](#technologies-used)
* [Testing](#testing)
    * [Homepage](#homepage)
    * [Graphs](#graphs)
    * [Interactive SVG](#interactive-svg)
* [### Issues](#issues)
    * [### Open Issues](#open-issues)
    * [### Closed Issues](#closed-issues)
* [How to Run Project Locally](#how-to-run-project-locally)
    * [Building svgMap for Source](#building-svgmap-for-source)
* [Deployment](#deployment)
* [Credits](#credits)

---

## UX (User Experience)

The design of this site is pretty simple. There is a sidebar that allows you to navigate through the website. This side bar can be toggled closed to allow for a better viewing experience when needed. The data for the Coronavirus statistics is split into 2 different sections. **Graphs** is used to display statistics in a graphical manner with statistics such as a breakdown of confirmed cases vs gender, hospitalisations, age, etc. **Interactive Map** is a visual representation of Ireland and its counties with a breakdown of the confirmed cases in each county. This data is displayed when hovering over the county.

### Design Choices

#### Fonts
**Statistics font** - I chose a sans-serif font called Segoe UI as this font is very readible at small sizes. This is important when displaying lots of data.
**Body font** - I chose a sans-serif font called Poppins as this is a good font for websites with easy readability at diferent sizes.
**Heading font** - I chose Helvetica as this font pairs well with Segoe UI.

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
    <img src="assets\images\homepage.png"></img><br>
</div>

### Graphs

<div style="text-align:center;">
    <img src="assets\images\dashboard_graphs.png"></img><br>
</div>

### Interactive SVG

<div style="text-align:center;">
    <img src="assets\images\interactive_map.png"></img><br>
</div>

---

## User stories
Below is a list if the specific user stories for this project.
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
The user has the ability to see the total confirmed cases for each county in Ireland.

### Sign Up For Email Updates
The user has the ability to subscribe for daily email updates to see the total new confirmed cases, deaths and recoveries for that day. Note: these daily email updates will be implemented at a later date, for now the emails are just being collected.

---

## Future Goals
There are many useful updates that could be implemented in this project in the future. 

### Use better datasets
The datasets that were used are very poor quality. A future update would use more accurate and regularly updated datasets

### Newsletter
The newsletter requires a backend so a future update would add a backend to this project which emails all subscribers with a daily update. Alternatively a paid plan with an email marketing platform would also work.

### Worldwide statistic
This project could be expanded to provide worldwide statistics and a worldwide Interactive SVG map.

### News Updates
Another useful feature could be latest news updates from the Irish government, WHO and CDC.

---

## Project Planning

**Stage 1** - Implement the genral layout of the dashboard.

**Stage 2** - Create bar and pie charts using the chart.js library to display sample data. This data will later be replaced with the latest coronavirus figures.

**Stage 3** - Create an interactive SVG map of Ireland, which when a county is hovered over will display sample data. This data will later be replaced with the latest coronavirus figures.

**Stage 4** - Use the data.gov APIs to populate the charts and interactive map with the data from the datasets.

**Stage 5** - Test robustness of the site and optimize performance and code.

---

## Technologies Used

* HTML 
* CSS 
* JavaScript 
* [Bootstrap](https://getbootstrap.com/) - to help adapt for numerous input types
* [Google Fonts](https://fonts.google.com/) - Fonts from Google
* [VSCode](https://code.visualstudio.com/) - IDE for local development
* [GIT](https://git-scm.com/) - Version Control
* [GitHub](https://github.com/) - to host the repositories for this project and the live 
* [JQuery](https://jquery.com) - Used to simplify Javascript
* [Chart.js](https://www.chartjs.org/) - Used to display charts
* [data.gov APIs](https://data.gov.ie/dataset?q=covid&sort=score+desc%2C+metadata_created+desc) - APIs used to access Coronavirus datasets
* [Font Awesome](https://fontawesome.com/) - Used for Icons
* [svgMap](https://github.com/StephanWagner/svgMap) - GitHub World Map project, modified to work for Ireland
* [svg-pan-zoom](https://github.com/ariutta/svg-pan-zoom) - JavaScript library that enables panning and zooming of an SVG in an HTML document
---


## Testing

### Homepage
Newsletter:
1. Try to submit the empty form and verify that an error message about the required fields appears.
2. Try to submit the form with an invalid email address and verify that a relevant error message appears.
3. Submit the form successfully and verify that a success message appears and the form disappears.

Buttons:
1. Ensure that the button under the graph section navigates the user to the graph page
2. Ensure that the button under the interactive map section navigates the user to the interactive map page
3. Ensure that the hamburger menu button at the top of the page, closes and opens the sidebar. On Desktop the sidebar, when opened should reduce the width of the content area but on mobile the sidebar should overlay on top of the content area.

Sidebar:
1. Ensure that when the Dashboard link is clicked, that two additional pages, Graphs and Interactive Map, are displayed
2. Ensure that links direct the user to the appropriate page.

### Graphs

Statistics:
1. Ensure that the values being displayed, match the values of the [dataset](https://opendata-geohive.hub.arcgis.com/datasets/d8eb52d56273413b84b0187a4e9117be_0/data?geometry=-7.695%2C53.288%2C-7.690%2C53.289&page=8) on the date specified next to **Last Updated**.
2. Ensure that Graphs Move to a single column row on mobile.
3. Ensure that graphs are being rendered.

Buttons:
1. Ensure that the hamburger menu button at the top of the page, closes and opens the sidebar. On Desktop the sidebar, when opened should reduce the width of the content area but on mobile the sidebar should overlay on top of the content area.

Sidebar:
1. Ensure that when the Dashboard link is clicked, that the Graphs and Interactive Map links are hidden
2. Ensure that links direct the user to the appropriate page.

### Interactive Map

Map:
1. Hover over each / Hold down on each county and ensure that the tooltip is being displayed.
2. The tooltip should display a "No Data Available" message when hovering over counties in Northern Ireland
3. The tooltip should display the confirmed cases when hovering over counties in Republic of Ireland. There is currently no data available for 'Active', 'Deaths' and 'Recovered'
4. When double clicking/tapping the map should zoom in.
5. Click and drag / hold and drag to pan.

Buttons:
1. Click the '+' button and ensure that the map zooms in.
2. Click the '-' button and ensure that the map zooms out.
3. Ensure that the hamburger menu button at the top of the page, closes and opens the sidebar. On Desktop the sidebar, when opened should reduce the width of the content area but on mobile the sidebar should overlay on top of the content area.

Sidebar:
1. Ensure that when the Dashboard link is clicked, that the Graphs and Interactive Map links are hidden.
2. Ensure that links direct the user to the appropriate page.

---

## Issues

### Open Issues
The list below displays the current **open** issues with the project:
1. There appears to be an issue with the dataset that is used for the Graphs page as the value for the daily confirmed recoveries is the same as the total confirmed recoveries.

2. To send a daily newsletter I would either need a backend to send the newsletter at a specific time each day or I would have to use a paid plan on an email marketing platform such as Mailchimp.

3. The [dataset](https://opendata-geohive.hub.arcgis.com/datasets/d9be85b30d7748b5b7c09450b8aede63_0?geometry=-29.217%2C51.133%2C12.597%2C55.710&page=188) for populating the county data does not contain any data for deaths or recoveries even those these parameters are available.

### Closed Issues

The list below displays the current **closed** issues with the project:
1. Renaming files cause issues with GitHub. Locally, case did not matter but it mattered on GitHub pages so some files were not being referenced properly.

2. The APIs from data.gov did not have an easy way to get the latest days data. For the Graphs data I had to make an API call which sorted the data by Date descending. This allowed me to take the 1st element from the data array to get all the data related to the latest date. For the interactive map I had to make an API call which sorted the data by TimeStamp descending. This allowed me to take the 1st 26 elements from the data array to get all the data related to the latest date for each of the 26 counties of Ireland.

3. The svgMap project did was developed for a map of the globe and each country was an element. I needed to refactor this whole project so that it used a map of Ireland and each county was an element. 

4. The tooltip did not get displayed when using a touch enabled device. This is a bug from the [svgMap](https://github.com/StephanWagner/svgMap) project. I have fixed this issue and also pushed a [fix](https://github.com/StephanWagner/svgMap/pulls) to the repo for the original project.

---

## How to Run Project Locally

To run this project in a local environment, you first need to clone this project from GitHub:

1. Copy the clone URL for the repository by using the "Clone or download" button at the top right of the repo. 
2. In a command line, navigate to the directiory you want to clone the repo to and type the following command:
    ```git clone https://github.com/Jakejamesreid/Coronavirus_Dashboard.git```
3. To run the project I use a VS Code addon called "Live Server". This allows you to launch a development local Server with a live reload feature for static & dynamic pages.

### Building svgMap for Source
If changes are made to the svgMap project, the project should be built using Gulp
1. Navigate to the interactiveSVG folder
2. Install Gulp with the following command:
```sh
$ npm install gulp
```
3. Build the project using:
```sh
$ gulp build
```

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
The dashboards' chart data is obtained from [Irelands open data portal: CovidStatisticsProfileHPSCIrelandOpenData](https://opendata-geohive.hub.arcgis.com/datasets/d8eb52d56273413b84b0187a4e9117be_0?geometry=-7.695%2C53.288%2C-7.690%2C53.289)
The dashboards' interactive map data is obtained from [Irelands open data portal: Covid19CountyStatisticsHPSCIreland](https://opendata-geohive.hub.arcgis.com/datasets/d9be85b30d7748b5b7c09450b8aede63_0?geometry=-29.217%2C51.133%2C12.597%2C55.710)

### Media
The photos used in this site were obtained from:
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

Also a special thanks to my mentor Akshat Garg for his help and advice during this project.