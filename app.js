// Activity Class: Represents an Activity
class Activity {
  constructor(challenge, competitor, time) {
    this.id = crypto.randomBytes(1).toString('hex');
    this.challenge = challenge;
    this.competitor = competitor;
    this.time = time;
  }
}

// UI Class: Handles UI Tasks
class UI {
  static displayActivities() {
    const storedActivities = [
      {
        id: '00aa',
        challenge: '1km Run',
        competitor: 'Jonathon',
        time: '04:00',
      },
      {
        id: '00ab',
        challenge: '2km Run',
        competitor: 'Jonathon',
        time: '09:04',
      },
      {
        id: '00ac',
        challenge: '3km Run',
        competitor: 'Jonathon',
        time: '15:33',
      },
      {
        id: '00ad',
        challenge: '1km Run',
        competitor: 'William',
        time: '04:09',
      },
      {
        id: '00ae',
        challenge: '2km Run',
        competitor: 'William',
        time: '09:21',
      },
      {
        id: '00af',
        challenge: '3km Run',
        competitor: 'William',
        time: '14:54',
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

  // Calculate & Display Leader Board
}

// Store Class: Handles all storage tasks

// Event: Display Activities
document.addEventListener('DOMContentLoaded', UI.displayActivities);

// Event: Add an Activity

// Event: Remove an Activity
