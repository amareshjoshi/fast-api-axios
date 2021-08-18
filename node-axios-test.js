const axios = require('axios');

//
// url1 and url2 return json
const url1 = 'https://fast.oclc.org/searchfast/fastsuggest?' +
    '&query=england&queryIndex=suggestall' +
    '&queryReturn=suggestall%2Cidroot%2Cauth%2Ctag%2Ctype%2Craw%2Cbreaker%2Cindicator' +
    '&suggest=autoSubject&rows=10&callback=testcall'
const url2 = 'https://reqres.in/api/users'
//
// returns xml
const url3 = 'https://experimental.worldcat.org/fast/search?query=cql.any+all+%22england%22&httpAccept=application/xml&maximumRecords=10'

function fetchUsingAxios() {
    axios({
        method: 'get',
        url: url3,
    })
     .then((response) => {
         const fastData = response.data
         console.log(fastData);
     })
      .catch((error) => console.error(error));
}

fetchUsingAxios();
