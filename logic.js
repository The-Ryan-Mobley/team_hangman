var word_array = ["snoopy", "goofy", "ninja_turtles", "spongebob", "homer"];
var blank_spots = [];
var word = "";
var keyes=[];


$(document).ready(function () {
    

    


    function get_new_word() {
        word = word_array[Math.floor(Math.random() * word_array.length)];
    
    }

    function generate_blanks() {
        get_new_word();
        console.log(word);

        for(let i=0; i < word.length; i++){
            blank_spots.push("_");
        }
        draw_blanks();

    }
    function draw_blanks(){
        $(".name").empty();
        for(let i=0; i < blank_spots.length; i++){
            $(".name").append(blank_spots[i]);

        }
        
    }
    function right_guess(key){
        for(let i=0; i < word.length; i++){
            if(key === word[i]){
                blank_spots[i] = key;
            }
        }
    }
    function checkCompletion () {
        // var reconstructedWord = blank_spots.join();
        // console.log(reconstructedWord);
        if ( blank_spots.join('') === word ) {

            alert("Correct You win!");
        }
     }
   
    generate_blanks();



    document.onkeyup = function(event){
        let key = event.key.toLowerCase();
        
        console.log(key);
        if(keyes.indexOf(key) === -1){
            keyes.push(key);
            console.log(keyes);
            if(word.includes(key)){
                
                right_guess(key);
                draw_blanks();


                checkCompletion();
                
            }
        }
        


    }
});