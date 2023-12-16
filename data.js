const stationToken = 'R2wS7pStKxYVp9w6wU252DYL'; 

const apiBase = `https://app.birdweather.com/api/v1/stations/${stationToken}`;

async function fetchSpecies() {
  const url = `${apiBase}/species?period=week&since=2023-12-15`;
  const response = await fetch(url);
  const data = await response.json();
  return data.species;
}
async function fetchDetections() {
  const url = `${apiBase}/detections?limit=50&order=asc&period=week`;
  // Add missing closing bracket for fetchDetections function
  const response = await fetch(url);
  const data = await response.json();
  return data.detections;
}
async function fetchSoundscapes() {
  const url = `${apiBase}/soundscapes?limit=50&order=asc&period=week`;
  const response = await fetch(url);
  const data = await response.json();
  return data.soundscapes;
}

// Helper functions 
function getISODateString(date = new Date()) {
    // Return ISO format date string
  }
  
  function subWeeks(date, weeks) {
    // Subtract weeks from date 
  }
 
export {
    fetchSpecies,
    fetchDetections,
    fetchSoundscapes
  };