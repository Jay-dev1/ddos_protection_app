// Example ipBlacklist.js
const blacklistedIPs = new Set(['127.0.0.1', '1.2.3.4']);

export default function isIPBlacklisted(ip) {
  return blacklistedIPs.has(ip);
}
