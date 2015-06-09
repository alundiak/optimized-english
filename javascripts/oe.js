//
// Optimized English
//
function A(data){

    $('.inputText')
    
    .on("keyup", function(e){
        $('.optimizedText').text( optimize(e.target.value) );
    });

}
A({});

function optimize(text){

    //
    // Here should go logic of Optimization
    //

    return text;

}

// $.ajax({
//     url : "english.txt",
//     dataType: "text",
//     success : function (data) {
//         A(data);
//     }
// });