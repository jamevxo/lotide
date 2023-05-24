// Function Implementation
const assertEqual = function(actual, expected)  {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

// Test Code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);

assertEqual('Light', 'light');
assertEqual('Light', 'Light');
assertEqual(10.0, 10.0);
assertEqual(10.1, 10.2);