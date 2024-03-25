

document.getElementById('searchButton').addEventListener('click', async function() {
    const summonerName = document.getElementById('summonerName').value;
    const summonerTag = document.getElementById('summonerTag').value;
    changePage('stats.html',summonerName,summonerTag);

    const url = `/client-search?summonerName=${summonerName}&summonerTag=${summonerTag}`; // location of httpserver.js
    console.log("(HTML) Clicked! Sending and Receiving Data Now...");
    const response = await fetch(url); // sending GET request to client.js
    const data = await response.text();
    // document.getElementById('tempOutput').innerText = data; // displaying the returned data on front end
    // console.log("(HTML) Logging data from JavaScript into website console:");
    // console.log(data[1]);

    //Switch page at the end of getting data... 
    // changePage('stats.html',summonerName,summonerTag,data);
});


function changePage(file,playerName,playerTag,data) {
    //TODO: Local Storage is limited, with data --> 
    //https://stackoverflow.com/questions/17502071/transfer-data-from-one-html-file-to-another 
    window.location.href = file; //Change current page to param file(ie. stats.html)
    localStorage["playerName"] = playerName; // Used Local Storage to store playerName and playerTag Details
    localStorage["playerTag"] = playerTag;
};