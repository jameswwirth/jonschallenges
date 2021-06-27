// Activity Class: Represents an Activity
class Activity {
  constructor(challenge, competitor, time) {
    this.id = new Date().getMilliseconds();
    this.challenge = challenge;
    this.competitor = competitor;
    this.time = time;
  }
}

// Leader Board Class: Represents the current Leader Board and is dynamically calculated

class LeaderBoard {
  constructor(onekm, twokm, threekm) {
    this.onekm = onekm;
    this.twokm = twokm;
    this.threekm = threekm;
  }
}

// UI Class: Handles UI Tasks
class UI {
  static displayActivities() {
    const storedActivities = [
      {
        id: '001',
        challenge: '1km Run',
        competitor: 'Jonathon',
        time: '04:00',
      },
      {
        id: '002',
        challenge: '2km Run',
        competitor: 'Jonathon',
        time: '09:04',
      },
      {
        id: '003',
        challenge: '3km Run',
        competitor: 'Jonathon',
        time: '15:33',
      },
      {
        id: '004',
        challenge: '1km Run',
        competitor: 'William',
        time: '04:09',
      },
      {
        id: '005',
        challenge: '2km Run',
        competitor: 'William',
        time: '09:21',
      },
      {
        id: '006',
        challenge: '3km Run',
        competitor: 'William',
        time: '14:54',
      },
      {
        id: '007',
        challenge: '1km Run',
        competitor: 'Big Al',
        time: '15:16',
      },
      {
        id: '008',
        challenge: '1km Run',
        competitor: 'Big Al',
        time: '31:55',
      },
    ];

    const activities = storedActivities;

    activities.forEach((activity) => UI.addActivityToList(activity));
  }

  static addActivityToList(activity) {
    const list = document.querySelector('#activity-list');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${activity.id}</td>
        <td>${activity.challenge}</td>
        <td>${activity.competitor}</td>
        <td>${activity.time}</td>
        <td><button href="X" class="btn btn-danger btn-sm delete">X</button></td>
    `;

    list.appendChild(row);
  }
  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#activity-form');
    container.insertBefore(div, form);
    // Vanish in 2 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  static clearFields() {
    document.querySelector('#challenge').value = '1km Run';
    document.querySelector('#competitor').value = '';
    document.querySelector('#time').value = '';
  }

  static deleteActivity(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  // Calculate & Display Leader Board
}

// Store Class: Handles all storage tasks

// Event: Display Activities
document.addEventListener('DOMContentLoaded', UI.displayActivities);

// Event: Add an Activity
document.querySelector('#activity-form').addEventListener('submit', (e) => {
  // Prevent actual Submit
  e.preventDefault();

  // Get form values
  const challenge = document.querySelector('#challenge').value;
  const competitor = document.querySelector('#competitor').value;
  const time = document.querySelector('#time').value;

  // Validate
  if (competitor === '' || time === '') {
    UI.showAlert('Please fill in Competitor and Time', 'danger');
  } else {
    // Instantiate Activity
    const activity = new Activity(challenge, competitor, time);

    // Add Activity to UI
    UI.addActivityToList(activity);

    // Show successfully added message
    UI.showAlert('Activity added successfully', 'success');

    // Clear Fields
    UI.clearFields();
  }
});

// Event: Remove an Activity

document.querySelector('#activity-list').addEventListener('click', (e) => {
  UI.deleteActivity(e.target);

  // Show removal message
  UI.showAlert('Activity deleted', 'success');
});
