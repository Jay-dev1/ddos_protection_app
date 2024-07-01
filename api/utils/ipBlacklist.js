const blacklistedIps = ['123.45.67.89']; // Example blacklisted IPs

const ipBlacklist = (req, res, next) => {
  const clientIp = req.ip;

  if (blacklistedIps.includes(clientIp)) {
    return res.status(403).send('Your IP is blacklisted');
  }

  next();
};

module.exports = ipBlacklist;
