document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("inputField");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function() {
        initializeMsal(inputField.value);
    });
});

var msalConfig;
var msalClient;

function initializeMsal(id) {
    //MSAL configuration
    msalConfig = {
        auth: {
            clientId: id,
            authority: 'https://login.microsoftonline.com/58af3eba-510e-4544-8cfd-85f5e0206382',
            redirectUri: 'https://fair-erin-bull-sock.cyclic.app/'
            //Uncomment when testing
            //redirectUri: 'http://localhost:8080'
        }
    };
    msalClient = new msal.PublicClientApplication(msalConfig);

}

const msalRequest = { scopes: [] };
function ensureScope (scope) {
    if (!msalRequest.scopes.some((s) => s.toLowerCase() === scope.toLowerCase())) {
        msalRequest.scopes.push(scope);
    }
}
//Initialize MSAL client

// Log the user in
async function signIn() {
    const authResult = await msalClient.loginPopup(msalRequest);
    sessionStorage.setItem('msalAccount', authResult.account.username);
}
//Get token from Graph
async function getToken() {
    let account = sessionStorage.getItem('msalAccount');
    if (!account) {
        throw new Error(
            'User info cleared from session. Please sign out and sign in again.');
    }
    try {
        // First, attempt to get the token silently
        const silentRequest = {
            scopes: msalRequest.scopes,
            account: msalClient.getAccountByUsername(account)
        };

        const silentResult = await msalClient.acquireTokenSilent(silentRequest);
        return silentResult.accessToken;
    } catch (silentError) {
        // If silent requests fails with InteractionRequiredAuthError,
        // attempt to get the token interactively
        if (silentError instanceof msal.InteractionRequiredAuthError) {
            const interactiveResult = await msalClient.acquireTokenPopup(msalRequest);
            return interactiveResult.accessToken;
        } else {
            throw silentError;
        }
    }
}
