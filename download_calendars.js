function download_calendars(philip, adam, andreas) {
    const allCalendars = [extractCalendarData(philip), extractCalendarData(adam), extractCalendarData(andreas)];

    var jsonString = "function updateCalendars() { jsonString = " + JSON.stringify(allCalendars, null, 2);

    jsonString += ";const jsonData = JSON.parse(JSON.stringify(jsonString, null, 2)); const arrayOfArrays = jsonData.map(item => Object.values(item));setCurrentStatus(arrayOfArrays[0], 'philip-status');setCurrentStatus(arrayOfArrays[1], 'adam-status');setCurrentStatus(arrayOfArrays[2], 'andreas-status');} setInterval(updateCalendars, 2000);"

    const blob = new Blob([jsonString], { type: 'application/json' });

    // Create a URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = 'update-calendars.js'; // Specify the desired filename

    // Trigger a click event on the link to initiate the download
    a.click();

    // Clean up the Blob and URL objects
    URL.revokeObjectURL(blobUrl);
}


function extractCalendarData(calendar) {
    return array = calendar.map((item) => ({
        start: item.start,
        end: item.end,
        showAs: item.showAs,
      }));
}