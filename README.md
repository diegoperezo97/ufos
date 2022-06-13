# MODULE 11: UFO Sightings with JavaScript

## Overview of the Analysis

Dana is a data journalist who has reached the point in her career where she can write about whatever she wants. She takes advantage of the opportunity to write about her hometown of McMinnville, Oregon, for several reasons. For starters, it's a chance to reminisce about old times and people. The topic of UFOs, on the other hand, is the second and most enjoyable part. McMinnville is well-known for its UFO sightings, with an annual gathering of enthusiasts. Dana has been interested in this topic since she was a child in Innville, Oregon. When she first learned of farmer Trent's sighting in 1950, she was ecstatic.

So far, the only thing she has to go on for this assignment is a JavaScript file chock-full of sighting data. There is a lot of information in this file, including countries, cities, states, and the type of sighting. Fortunately, Dana is aware of JavaScript's visual capabilities. After all, it's a tried and true language. Her plan is to display the data as a table using Javascript first. However, sifting through all of the data without making any adjustments would be difficult. By using JavaScript, she can manipulate the data by adding filters. Adding more than one filter to McMinnville, Oregon, is a little tricky, but Dana is up to the task. Dana also wants to put everything together in a neat HTML page because you'll be posting her article online. Her paper, a table of data to back up her claims, and simple filters to fine-tune the results. 

### Purpose 

* Help Dana build her article through the use of JavaScript to filter UFO sighting data and help her present it in an appealing website employing HTML and CSS.

## Results of the Analysis

**Image 1. UFO Sightings Web Page Unfiltered**

![Captura de Pantalla 2022-04-14 a la(s) 13 14 29](https://user-images.githubusercontent.com/65054637/163460308-5e4fd51e-7378-4412-bf05-0927d409b4a0.png)

As seen from Image 1. UFO Sightings Web Page Unfiltered, the end goal of Dana’s final web page is to present in a clear and concise way her UFO article. Seen from top to bottom, left to right, first we added a label with the legend “UFO Sightings” followed by a  jumbotron banner using an image from space that Dana found on NASA’s website. Next, we decided to add the question “UFO Sightings: Fact of Fancy? Ufologists Weigh In” to engage the audience and make them reflect on UFO activity, followed by a brief background of our research. Finally, as the cherry on the cake, we decided to add an interactive table that presents UFO sightings with the ability to be filtered by:

- Date
- City
- State
- Country
- Shape

Through this filter the user can interact with our web page and input certain criteria to see whether there was a sighting with these characteristics… maybe that strange object that crashed into your backyard when you were a child and the police decided to cover up… 

**Image 2. UFO Web Page Filtered**

![Captura de Pantalla 2022-04-14 a la(s) 13 17 20](https://user-images.githubusercontent.com/65054637/163460643-453d2b2a-bdde-4b4a-9c15-e1c2c3254969.png)

Comparing Image 1. UFO Sightings Web Page Unfiltered and  Image 2. UFO Web Page Filtered, information from the presented tables differ from each other. By default, the table presents unfiltered data (the totality of sightings from the “data.js” file used to present our data). Image 2. UFO Web Page Filtered shows several filters applied to our table…

- Country: US
- Shape: Circle

… thus, presenting a reduced version of the original table.
To filter the table and return to the original table, the user has to follow the following steps:
Type in the desired filters into the filter input boxes. Remember to use dd/mm/yyyy format for dates, lower case characters for text, and correct country abbreviation for country filter.

Click on the “Filter Table” button to see filters applied to the table.
To go back to the original table, click on the “Clear Table” button.
Note: There can be instances in which all filters applied at the same time do not return any data, i.e., there are no sightings for that criteria (as seen on Image 3. No Sightings for Given Filters)

**Image 3. No Sightings for Given Filters**

![Captura de Pantalla 2022-04-14 a la(s) 13 54 46](https://user-images.githubusercontent.com/65054637/163460768-3d008f86-bf09-436b-af19-af06050c4182.png)

## Summary of the Analysis

- One drawback of this webpage: As stated on the 2. RESULTS OF THE ANALYSIS section of this document, the algorithm the user has to follow to filter table and return to original table is basically fill in filter input boxes and click on the “Filter Table” button and once user finishes reading the table, click on the “Clear Table” button to return to original table. Nevertheless, this is not always the case. Event listeners are implemented in the code so they are expecting changes to input boxes whether or not you click on the buttons, so they filter data based on the changes in those boxes instead of the buttons. This issue applies both to filtering and unfiltering data.

- Additional recommendations for further development:
  - Present a more standardized way to present the default table. I would suggest filtering original table with the place holders on the input tables
  - I would suggest adding an explanation directly in the web page on how the table works. Specifically on the blank space highlited in the Image 4. Explanation Box.

**Image 4. Explanation Box**

![Captura de Pantalla 2022-04-14 a la(s) 14 04 49](https://user-images.githubusercontent.com/65054637/163460957-df05e1a8-7a73-406b-aa69-3cfa4d351194.png)

  - Add a pop up message for the number of observations found given the imputed filters, whether or not the code finds information. This way the user can be sure there are no observations and avoid questioning himself if the page is actually working.