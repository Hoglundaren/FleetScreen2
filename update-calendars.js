function updateCalendars() { jsonString = [
  [
    {
      "start": {
        "dateTime": "2023-12-21T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-21T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-21T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-21T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-22T00:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2024-01-02T00:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "oof"
    },
    {
      "start": {
        "dateTime": "2023-12-22T07:45:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-22T08:15:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-25T14:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-25T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-26T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-26T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-26T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-26T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-27T14:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-27T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-28T09:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-28T11:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "oof"
    },
    {
      "start": {
        "dateTime": "2023-12-28T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-28T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-12-21T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-21T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-22T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-22T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-22T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-22T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-25T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-25T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-26T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-26T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "tentative"
    },
    {
      "start": {
        "dateTime": "2023-12-27T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-27T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    }
  ],
  [
    {
      "start": {
        "dateTime": "2023-12-21T13:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-21T14:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-22T12:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-22T12:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-22T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-22T15:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "free"
    },
    {
      "start": {
        "dateTime": "2023-12-26T08:30:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-26T08:45:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    },
    {
      "start": {
        "dateTime": "2023-12-28T10:00:00.0000000",
        "timeZone": "UTC"
      },
      "end": {
        "dateTime": "2023-12-28T12:00:00.0000000",
        "timeZone": "UTC"
      },
      "showAs": "busy"
    }
  ]
];const jsonData = JSON.parse(JSON.stringify(jsonString, null, 2)); const arrayOfArrays = jsonData.map(item => Object.values(item));setCurrentStatus(arrayOfArrays[0], 'philip-status');setCurrentStatus(arrayOfArrays[1], 'adam-status');setCurrentStatus(arrayOfArrays[2], 'andreas-status');} setInterval(updateCalendars, 2000);