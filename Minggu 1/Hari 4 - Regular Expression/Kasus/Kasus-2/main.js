function detectEmail(email) {
  const pattern = /@/;
  const adSymbol = email.search(pattern);

  let username = email.slice(0, adSymbol);
  let domain = email.slice(adSymbol + 1);

  result = `Halo, username Anda adalah ${username} dan domain Anda adalah ${domain}`;
  return result;
}

console.log(detectEmail("namaku@praxisacademy.id"));
