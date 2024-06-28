
export const createEvent = async (userId, eventDetails) => {
    console.log(eventDetails)

    const response = await fetch(`https://us-central1-calendarninja-14bce.cloudfunctions.net/api/createEvent?uniqueString=${userId}`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(eventDetails)
      });
    const data = await response.json();
    console.log(data);
    return(data)
  };
  