// select the user and assign it to a variable
const user = document.querySelector('.user')

// store the URL in a variable
const baseEndpoint = "https://api.github.com";
const usersEndPoint = `${baseEndpoint}/users`;


// create an error-handling function
function handleError(err) {
  user.textContent = `Something went wrong: ${err}`;
}

  async function displayUser(username) {
    // create loading message before displaying the result
    user.textContent = "loading...."

    // get the data using fetch
    const response = await fetch(`${usersEndPoint}/${username}`)
    const data = await response.json()
    // get the data (assigned to the response variable), return it and log the data to the console
  //no need to run JSON.parse() on the data because response.json() will take care of that
  //we use two promises with fetch because the first promise gets the response and the second one converts it to JSON
      user.textContent = `${data.name} - ${data.blog}`    

  }
    displayUser("mojombo").catch(handleError);
