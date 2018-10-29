//Create an array of animal strings & save it to a variable called animals
     var animals=["panda", "hippo", "girraffe", "monkey", "lion", "tiger", "flamingo"]
     console.log(animals)
//Function for displaying animal buttons
    function renderButtons() {
//Deleting the animal buttons prior to adding new animal buttons
    $("#animal-button").empty();
//Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {
//Generating buttons for each animal in the array.
    var animalButton = $("<button>");
//Adding a class of an-btn to animalButton variable
    animalButton.addClass("an-btn");
//Adding a data-attribute with a value of the animal at index i
    animalButton.attr("data-name", animals[i]);
//Providing the button's text with a value of the animal at index i
    animalButton.text(animals[i]);
//Adding the button to the HTML
    $("#animal-button").append(animalButton);
        }
    } 
    renderButtons(); 

// displayAnimalInfo function re-renders the HTML to display the appropriate content
    function displayAnimalInfo() {
    
    var animal = $(this).attr("data-name");
    var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=uEH8xhFmcb0anU7UDFSx7jwSAdmba81V&limit=10");

    //ajax call to grab 10 static, non-animated gif images from GIPHY API & place on page
    $.ajax({
        url: queryURL,
        method: "GET"    
    }).then(function(response) {
        var giphy = $("<img>")
        giphy.attr("src=", response.data[0].images.original_still)
        });
 
    // Function when animal button is clicked
    $("#add-animal").on("click", function(event) { 
    // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
    // Grabs input from textbox
        var animalInput = $("#animals-input").val().trim();
        console.log(animalInput)
    // Adding animal from the textbox to array
        animals.push(animalInput);
    // Calling renderButtons which handles the processing of animals array
        renderButtons();
    });

    // Adding a click event listener to all elements with a class of "an-btn"
      //  $(document).on("click", ".an-btn", displayAnimalInfo());

    // Calling the renderButtons function to display the intial buttons
    //    renderButtons();
    }    
// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on).This data is provided by the GIPHY API. Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the



