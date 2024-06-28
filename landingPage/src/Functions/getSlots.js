
export const getSlots = async ({userId, date}) => {
  const response = await fetch(`https://us-central1-calendarninja-14bce.cloudfunctions.net/api/slots?uniqueString=${userId}&date=${date.toISOString()}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },
    });
  const data = await response.json();
  console.log(data);
  return(data)
};
