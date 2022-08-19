var output = document.getElementById("output");

function tellFortune(job, location, partnerName, childNum) {
  output.innerHTML = `You will be a ${job} in ${location} and married to ${partnerName} with ${childNum} kids`;
}

tellFortune("front-end developer", "Yogyakarta", "Fulanah", "2");
