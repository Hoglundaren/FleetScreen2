// Create an authentication provider
const authProvider = {
    getAccessToken: async () => {
        // Call getToken in auth.js
        return await getToken();
    }
};
// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });

async function getEvents(principal) {
  ensureScope('Calendars.Read.Shared');
  const dateNow = new Date();
  const dateNextWeek = new Date();
  dateNextWeek.setDate(dateNextWeek.getDate() + 7);
  const query = `startDateTime=${dateNow.toISOString()}&endDateTime=${dateNextWeek.toISOString()}`;

  return await graphClient
  .api(`/users/${principal}/calendarView`).query(query)
  .select('showAs,subject,start,end')
  .orderby(`start/DateTime`)
  .get();
}

