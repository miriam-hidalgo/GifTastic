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
    $(document).on('click', '.an-btn', function() {

    var animal = $(this).attr("data-name");
    console.log(animal);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=D6YMYvkMMbqFkOOlI3xHL7AgzASDmIH7&limit=10";
    
    //ajax call to grab 10 static, non-animated gif images from GIPHY API & place on page
    $.ajax({
        url: queryURL,
        method: "GET"    
    }).then(function(response) {
        console.log(response)
        var results = response.data;
        var giphy = $("<img>");
        var viewGiphs = giphy.attr("src", results[0].images.fixed_height_still.url)
        $('#giphy-view').append(viewGiphs)       
        });
    })
        // Function when button is clicked
        $(document).on("click", "#add-animal", function(response){
        // Preventing the buttons default behavior when clicked
            event.preventDefault();
        // Grabs input from textbox
            var animalInput = $("#animals-input").val().trim();
            console.log(animalInput);
        // Adding animal from the textbox to array
            animals.push(animalInput);
            console.log(animalInput);
        // Calling renderButtons which handles the processing of animals array
            renderButtons();
        });
        
    //When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

    // Under every gif, display its rating (PG, G, so on).
    //    * This data is provided by the GIPHY API.
    //    * Only once you get images displaying with button presses should you move on to the next step.