// Code your solution here
// index.js

// Returns all drivers that match the passed in name (case-insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Returns drivers where the beginning letters match the provided string
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // Returns driver objects where the name property matches the provided name
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name === name
    );
  }
  
  // Export functions if using modules
  // module.exports = { findMatching, fuzzyMatch, matchName };
