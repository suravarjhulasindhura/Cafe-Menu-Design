$(document).ready(function() {
    // Step 1: Create the div and paragraph elements with initial styles
    var divElement = $('<div></div>').addClass('custom-div');
    var paragraphElement = $('<p></p>').addClass('custom-paragraph').text('Initial paragraph content.');
  
    // Append the paragraph element to the div element
    divElement.append(paragraphElement);
  
    // Append the div element to the body of the document
    $('#myDiv').append(divElement);
  
    // Step 2: Remove the initial div style and modify the content of the paragraph
    divElement.removeClass('custom-div').addClass('new-div-style');
    paragraphElement.text('Modified paragraph content.');
  
    // Step 3: Toggle fading in and fading out the list element on button click
    var listElement = $('<ul></ul>').addClass('custom-list');
    listElement.append('<li>List item 1</li>');
    listElement.append('<li>List item 2</li>');
    listElement.append('<li>List item 3</li>');
    listElement.appendTo('#myDiv');
  
    $('#toggleListButton').click(function() {
      listElement.toggleClass('fade-in fade-out');
    });
  });
  