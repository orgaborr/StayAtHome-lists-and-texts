let names = ['Laca', 'John', 'Jack', 'Jill', 'Gabor', 'Mary', 'Brunhilda'];

names.forEach((name) => {
    if(name === 'Gabor') {
        $('#myList').append('<li><strong>' + name + '</strong></li>');
    } else {
        $('#myList').append('<li>' + name + '</li>');
    }
});