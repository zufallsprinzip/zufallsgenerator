$( document ).ready(function() {
    
    $('#start').click(function(){ 
        const names = getNamesFromTextarea();
        const nameArr = createArrayFromString(names, ',');
        const filteredArr = filterName(nameArr, 'Martha');
        const randomName = pickRandomName(filteredArr);

        $('#randomName').text(randomName);
    });
});


function getNamesFromTextarea(){
    return document.getElementById('names').value;
}

function createArrayFromString(string, seperator){
    return sanitizeSpaces(string.split(seperator));
}

function sanitizeSpaces(array){
    let cleanArray = [];
    array.forEach(element => {
        cleanArray.push(element.trim());
    });
    return cleanArray;
}

function filterName(array, nameToFilter){
    return array.filter(name => name.toLowerCase() !== nameToFilter.toLowerCase());
}

function random(to){
    // to => from to grenze
    return Math.floor(Math.random() * to);
}

function pickRandomName(array){
    const randomIndex = random(array.length);
    return array[randomIndex];
}