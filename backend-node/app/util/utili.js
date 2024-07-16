import crypto from 'crypto';

function generateAlphanumericCode(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') 
    .slice(0, length); 
}

export default generateAlphanumericCode;
