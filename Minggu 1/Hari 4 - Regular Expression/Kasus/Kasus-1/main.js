function checkPlatNomor(plat) {
  const regExp = /\S+\s+[0-9]{4}\s+\S+$/;

  result = regExp.test(plat);
  if (result) {
    console.log("Plat ini berasal dari Indonesia");
  } else {
    console.log("Plat ini bukan berasal dari Indonesia");
  }
}

checkPlatNomor("AB 4691 CV");
