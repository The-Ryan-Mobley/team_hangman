$(document).ready(function () {
    var word_array = ["snoopy", "goofy", "ninja_turtles", "spongebob", "homer"];
    var blank_spots = [];
    var word = "";
    var keyes=[];


    function get_new_word() {
        let new_word = word_array[Math.random() * word_array.length];
            return new_word;
    }

    function generate_blanks() {
        for(let i=0; i < word.length; i++){
            blank_spots.push("_");
        }

    }
    function reset(){
        word = get_new_word();
    }
    reset();
    generate_blanks();



    document.onkeypress = function(event){
        let key = event.key.toLowerCase();
        if(keyes.indexOf(key) === -1){
            keyes.push(key);
        }
        if(word.indexOf(key) !== -1){
            blank_spots.push(word.indexOf(key));
        }

        


    }
}