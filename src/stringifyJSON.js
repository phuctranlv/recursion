// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (Array.isArray(obj)) {
    var values = '';
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        values += stringifyJSON(obj[i]);
        continue;
      }
      values += stringifyJSON(obj[i]) + ',';
    }
    return '[' + values + ']';
  } else if (typeof obj === 'object') {
    var properties = '';
    for (var key in obj) {
      if (key === 'functions') {
        continue;
      }
      if (key === 'undefined') {
        continue;
      }
      properties += '"' + key + '"' + ':' + stringifyJSON(obj[key]) + ',';
    }
    properties = properties.slice(0, properties.length - 1);
    return '{' + properties + '}';
  }
};
