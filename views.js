

// views.js
function displaySpecies(species) {

  let html = `
  <head>
  <link rel="stylesheet" type="text/css" href="styles.css"> 
  </head>
    <h2>Top Species</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Count</th> 
      </tr>
  `;

  species.forEach(s => {
    html += `
      <tr>
        <td>${s.name}</td> 
        <td>${s.count}</td>
      </tr>
    `;
  });

  html += `</table>`;
  
  document.getElementById("species").innerHTML = html;
  document.getElementById("detections").innerHTML = html;
}

function displayDetections(detections) {

  let html = `
    <h2>Latest Detections</h2>
    <table>
      <tr>
        <th>Species</th>
        <th>Date</th>
        <th>Audio</th>
      </tr>
  `;

  detections.forEach(d => {

    html += `
      <tr>
        <td>${d.species}</td>
        <td>${d.datetime}</td>
        <td>
          <audio controls>
            <source src="${d.audioURL}" type="audio/wav">
          </audio>
        </td>  
      </tr>
    `;

  });

    html += `</table>`;}