window.onload = goFetch;
async function goFetch() {
    try {
        let response = await fetch('https://my-horrible-webservice.com/data.json');
        let data = await response.json();
    }
    catch (err) {
        console.log(err)
    }
    try {

        let response = await fetch('../files/tests.json'); //response
        let parsedResultJS = await response.json();
        console.log(parsedResultJS)
    }
    catch (err) {

        console.log(err)
    }
}