export const fetchTikTokToken = async () => {
  const apiUrl = "https://open.tiktokapis.com/v2/oauth/token/";
  const clientKey = "YOUR_CLIENT_KEY";
  const clientSecret = "YOUR_CLIENT_SECRET";
  const code = "YOUR_CODE";
  const redirectUri = "YOUR_REDIRECT_URI";

  const requestData = new URLSearchParams({
    client_key: clientKey,
    client_secret: clientSecret,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
  });

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
      },
      body: requestData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // Handle the response data as needed
    return data;
  } catch (error) {
    return error;
  }
};
