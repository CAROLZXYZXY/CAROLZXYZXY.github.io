
// function that creates dummy data for demonstration
function createDummyData() {
  var date = new Date();
  var data = {};

  for (var i = 0; i < 10; i++) {
    data[date.getFullYear() + i] = {};

    for (var j = 0; j < 12; j++) {
      data[date.getFullYear() + i][j + 1] = {};

      for (var k = 0; k < Math.ceil(Math.random() * 10); k++) {
        var l = Math.ceil(Math.random() * 28);

        try {
          data[date.getFullYear() + i][j + 1][l].push({
            startTime: "10:00",
            endTime: "12:00",
            text: "Some Event Here"
          });
        } catch (e) {
          data[date.getFullYear() + i][j + 1][l] = [];
          data[date.getFullYear() + i][j + 1][l].push({
            startTime: "10:00",
            endTime: "12:00",
            text: "Some Event Here"
          });
        }
      }
    }
  }

  return data;
}

// creating the dummy static data
var data = {
    2018: {
        06: {
            25: [
                {
                    startTime: "00:00",
                    endTime: "18:00",
                    text: "DL583 DTW->PVG"
                },
                {
                    startTime: "18:00",
                    endTime: "21:00",
                    text: "reunion dinner with my family"
                }
            ],
            26 : [
                {
                    startTime: "9:00",
                    endTime: "12:00",
                    text: "Go to Dentist"
                }
                 
            ],
            28 : [
                {
                    startTime: "9:00",
                    endTime: "12:00",
                    text: "Go to Hospital & Check my Eyes"
                },
                {
                    startTime: "13:00",
                    endTime: "24:00",
                    text: "Visiting SJTU!"
                }

            ],
            29 : [
                {
                    startTime: "09:00",
                    endTime: "22:00",
                    text: "All day in SJTU!"
                }
            ],
            30: [
                {
                    startTime: "11:00",
                    endTime: "14:00",
                    text: "Lunch with my parents' friends & their children"
                }
            ],
            31: [
                {
                    startTime: "00:00",
                    endTime: "24:00",
                    text: "All day reserved for family"
                }
            ]
        },
        07:{
            03:{
                startTime: "12:00",
                endTime: "24:00",
                text: "DL582 PVG-> DTW, miss you guys!"
            }
        }
    }
}

// initializing a new calendar object, that will use an html container to create itself
var calendar = new Calendar("calendarContainer", // id of html container for calendar
  "small", // size of calendar, can be small | medium | large
  [
    "Wednesday", // left most day of calendar labels
    3 // maximum length of the calendar labels
  ], [
    "#ffc107", // primary color
    "#ffa000", // primary dark color
    "#ffffff", // text color
    "#ffecb3" // text dark color
  ],
  {
    // placeholder: "" // Removes Organizer's Placeholder
    placeholder: "<button style='width: calc(100% - 16px); background-color: #E6E6E6; border-radius: 6px; margin: 8px; border: none; padding: 12px 0px; cursor: pointer; position: relative'>Add New Event</button>"
  }
);

// initializing a new organizer object, that will use an html container to create itself
var organizer = new Organizer("organizerContainer", // id of html container for calendar
  calendar, // defining the calendar that the organizer is related to
  data // giving the organizer the static data that should be displayed
);
