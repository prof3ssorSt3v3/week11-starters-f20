//There are 3 marked places for you to add your code

const APP = {
  KEY: 'griffis-ex19',
  images: [],
  init() {
    APP.getStorage();
    document.body.addEventListener('click', APP.getData);
  },
  getStorage() {
    //check for localStorage
    let storage = localStorage.getItem(APP.KEY);
    //if we do have data save it in APP.images
    //show the last image saved on the page by calling showImage
    // 1. Your code goes here
  },
  showImage(obj) {
    let main = document.querySelector('main');
    //using the object passed in, show the image
    // 2. Your code goes here
  },
  getData() {
    const URL = `https://randomfox.ca/floof/`;
    let req = new Request(URL, {
      method: `GET`,
    });
    fetch(req)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          //did not get a HTTP 200 Status
          throw new Error(`ERROR: ${resp.status} ${resp.statusText}`);
        }
      })
      .then((data) => {
        //handle the floof data
        //show the image on the page
        //add the data to localStorage
        // 3. Your code goes here
      })
      .catch((err) => {
        //handle the error
        alert(err);
      });
  },
};
document.addEventListener('DOMContentLoaded', APP.init);
