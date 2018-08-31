let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

const congressionalDistStringBuilder =() => {
  const newString = `<h4> ${elizabethSanger.congressionalDistrict}</h4>`;
  printToDom(newString, 'congressionalDistrict');
}

const updateCongessionalDistrictStringBuilder =(newNum) => {
  elizabethSanger.congressionalDistrict = newNum;
  congressionalDistStringBuilder();
}

const statementsStringBuilder = () => {
  let newString = '';
  for(let i = 0; i < elizabethSanger.statements.length; i++) {
      newString += `<div class="statement">`;
      newString += `<h3>${elizabethSanger.statements[i].statement}</h3>`;
      newString += `<h6>${elizabethSanger.statements[i].category}</h6>`;
      newString += `</div>`;
  };
  printToDom(newString, 'statements');
}

const updatesStatementsStringBuilder =() => {
   let addStatement = elizabethSanger.statements.push({statement:'Free Pie on Staurday!', category:'Health care'});
   statementsStringBuilder();
}

const donationFormStringBuilder = () => {
  const newString =`<a class="donation" href=https://${elizabethSanger.donationFormUrl} target= "_blank">Donate Here </a>`
  printToDom(newString, 'donationForm');
}

const updateDonationFormStringBuilder = (newUrl) => {
  elizabethSanger.donationFormUrl = newUrl;
  donationFormStringBuilder();
}

const eventsStringBuilder = () => {
  let newString = '';
  for(let i = 0; i < elizabethSanger.events.length; i++){
      newString += `<div class="eventsList">`;
      newString += `<h3>${elizabethSanger.events[i].title}</h3>`;
      newString += `<h4> ${elizabethSanger.events[i].date}</h4>`;
      newString += `<p> ${elizabethSanger.events[i].description}</p>`;
      newString += `</div>`;
  }; 
  printToDom (newString, 'events');
}

const updateEventsStringBuilder = () => {
  let addEvent = elizabethSanger.events.push({title:'Meeting', date:'08/31/2018', description:'Attend meeting at NSS'});
  eventsStringBuilder();
}

const volunteersStringBuilder = () => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
     newString += `<div class="volunteersList">`;
     newString += `<h4>${elizabethSanger.volunteers[i].name}</h4>`;
     newString += `<p>${elizabethSanger.volunteers[i].address}</p>`;
     newString += `<p>${elizabethSanger.volunteers[i].email}</p>`;
     newString += `<p>${elizabethSanger.volunteers[i].phone}</p>`;
     newString += `<p>${elizabethSanger.volunteers[i].availability}</p>`;
     newString += `<p>${elizabethSanger.volunteers[i].activities}</p>`;
  };
  printToDom (newString, 'volunteers');
}

const updateVolunteerStringBuilder = () => {
  let addVolunteer = elizabethSanger.volunteers.push({name:'Joy', address: '23 joy st', email:'joy@gmail.com', phone:'2345678901', availability: 'never', activities:'Enjoy life'});
  volunteersStringBuilder();
}

const biographyStringBuilder = () => {
  let newString= `<p class="bioDescription"> ${elizabethSanger.biography}</p>`;
  printToDom (newString, 'biography');
}

const updateBiographyStringBuilder = (newString) => {
  elizabethSanger.biography = newString;
  biographyStringBuilder();
}

const imagesStringBuilder =() => {
  let newString = '';
  for (let i = 0; i < elizabethSanger.images.length; i++){
    newString += `<div class="imagesList">`;
    newString += `<img src="${elizabethSanger.images[i].imageUrl}">`;
    newString += `<p>${elizabethSanger.images[i].description}</p>`;
    newString += `<p>${elizabethSanger.images[i].type}</p>`;
    newString += `</div>`;
  };
  printToDom(newString, 'images');
}

const updateImagesStringBuilder = () => {
  let addImages = elizabethSanger.images.push({imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMswnUGaRbTohwRxtrjIvGLRE1kfYm9pAG0UNdtfh5olG36fZ2', description:'Family Pic', type: 'picture'});
  imagesStringBuilder();
}

const missionStatementStringBuilder = () => {
  let newString = `<p class="mission">${elizabethSanger.missionStatement}</p>`;
  printToDom (newString, 'missionStatement');
}

const updatemissionStatementStringBuilder = (newString) => {
  elizabethSanger.missionStatement = newString;
  missionStatementStringBuilder();
}

const voterRegistrationStringBuilder = () => {
  const newString = `<a class="registration" href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote Here</a>`;
  printToDom(newString, 'voterRegistration');

}

const updateVoterRegistration = (newUrl) => {
  elizabethSanger.voterRegistrationUrl = newUrl;
  voterRegistrationStringBuilder();
}

congressionalDistStringBuilder();
statementsStringBuilder();
donationFormStringBuilder();
eventsStringBuilder();
volunteersStringBuilder();
biographyStringBuilder();
imagesStringBuilder();
missionStatementStringBuilder();
voterRegistrationStringBuilder();
updateCongessionalDistrictStringBuilder(6);
updatesStatementsStringBuilder();
updateDonationFormStringBuilder('www.teamtreehouse.com');
updateEventsStringBuilder();
updateVolunteerStringBuilder();
updateBiographyStringBuilder('I am appropriate Candidate. Please vote for me');
updateImagesStringBuilder();
updatemissionStatementStringBuilder('Make everyone Happy!');
updateVoterRegistration('www.yahoo.com');