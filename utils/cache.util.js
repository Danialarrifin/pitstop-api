const Keyv = require('keyv'); 
const keyv = new Keyv();

const set = (key, value, ttl = 0) => keyv.set(key, value, ttl);

const get = (key) => keyv.get(key); 

const del = (key) => keyv.delete(key);

module.exports ={
    set,
    get,
    del,
}