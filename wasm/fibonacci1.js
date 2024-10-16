// fibonacci.js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  self.onmessage = function(e) {
    let result = fibonacci(e.data);
    self.postMessage(result);
  }
  