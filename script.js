// Set a cookie with the given name, value, expiration, path, and domain
function setCookie(cookieName, cookieValue, daysToExpire, path, domain) {
  // Construct the cookie string with name and encoded value
  var cookie = cookieName + "=" + encodeURIComponent(cookieValue);

  // Add expiration date if specified
  if (daysToExpire) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);
    cookie += "; expires=" + expirationDate.toUTCString();
  }

  // Add path if specified
  if (path) {
    cookie += "; path=" + path;
  }

  // Add domain if specified
  if (domain) {
    cookie += "; domain=" + domain;
  }

  // Set the cookie in the document
  document.cookie = cookie;
}

// Get the value of a cookie by its name
function getCookieValue(cookieName) {
  // Split all cookies by "; "
  var cookies = document.cookie.split("; ");

  // Iterate through the cookies and find the one with the matching name
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === cookieName) {
      // Return the decoded value of the matching cookie
      return decodeURIComponent(cookie[1]);
    }
  }

  // Return an empty string if the cookie is not found
  return "";
}

// Button click event handler to demonstrate getting cookie values
document.querySelector(".button").onclick = function () {
  // Get the value of the 'Foo' cookie and log it
  console.log("getCookieValue('Foo'): " + getCookieValue("Foo"));

  // Get the value of the 'Goo' cookie and log it
  console.log("getCookieValue('Goo'): " + getCookieValue("Goo"));
};

// Delete a cookie by its name
function deleteCookie(cookieName) {
  // Set the cookie's expiration date to a past date to delete it
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Log a message indicating that the cookie has been deleted
  console.log("Cookie deleted");
}
