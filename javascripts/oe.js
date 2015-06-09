//
// Optimized English
//
(function eventHandlers(data){

    $('.input-text')    
    .on("keyup", function(e){
        optimize(e.target.value);
    });

    $('.optimize-btn').on('click', function(e){
        e.preventDefault();
        optimize( $('.input-text').val() );
    });


})();



function optimize(text){

    //
    // Here should go logic of Optimization
    //

    var optimizedText = text;
    var articlesPattern = /( a | an | the )+/
    // TODO: Uppercase artciles as the start of sentence. 

    try{
        optimizedText = optimizedText.replace(articlesPattern, " ", "gi");
    }catch(ex){}

    // To Be Re-Thinked
    // var doPattern = /( do | does )/ // But have to be used only between pronoun and verb. If after verb only, should still be.
    // optimizedText = optimizedText.replace(doPattern, " ", "gi");

    var verbEndingPattern = /(s|es)\b/ // Needto find and replace by nothing. But in case of VERBS only.
    optimizedText = optimizedText.replace(verbEndingPattern, "", "gi");

    $('.optimized-text').text(optimizedText);
    $('.optimized-text-length').text(optimizedText.length);
    $('.input-text-length').text( $('.input-text').val().length );

}

// TBD
// $.ajax({
//     url : "english.txt",
//     dataType: "text",
//     success : function (data) {
//         A(data);
//     }
// });