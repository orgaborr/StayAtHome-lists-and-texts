let names = ['Laca', 'John', 'Jack', 'Jill', 'Gabor', 'Mary', 'Brunhilda'];

names.forEach((name) => {
    if(name === 'Gabor') {
        $('#myList').append('<li><strong>' + name + '</strong></li>');
    } else {
        $('#myList').append('<li>' + name + '</li>');
    }
});

let additionalBlock = {
    title: "Added wit hjavascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
}

$('main').append('<h3>' + additionalBlock.title + "</h3>");
$('main').append('<p>' + additionalBlock.text + '</p>');