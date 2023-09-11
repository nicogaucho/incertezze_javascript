export async function getCharatersInfinityWar() {
  const response = await fetch('https://gateway.marvel.com:443/v1/public/events/29/characters?limit=100&apikey=3bc9fb624d8509e80c1b7085f020569f');
  const data = await response.json();
  // setto la cache per riperendermi i dati da li per le prossime chiamate...
  localStorage.charatersData = JSON.stringify(data);
  return data;
}





