// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athlete) => {

  //Sandile's Section
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1); //to get latest race

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent= id;
  fragment.appendChild(title);

  const list = document.createElement('dl');


  //Sbabalwe's Section

  //Creating Date object and passing date string to its constructor
  const eventDate =new Date(date);

  const day = eventDate.getDate();
  const month = MONTHS[eventDate.getMonth()];
  const year = eventDate.getFullYear;

  //first, second, third, fourth = timeAsArray;
  //total = first + second + third + fourth;

  //Calculating total time
  const total = time.reduce((acc, curr) => acc + curr, 0);

  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}</dd>
  `;

  fragment.appendChild(list);
  return fragment;
}

//Qonda's Section

[NM372], [SV782] = data
document.querySelector(NM372).appendChild(createHtml(NM372));
document.querySelector(SV782).appendChild(createHtml(SV782));
