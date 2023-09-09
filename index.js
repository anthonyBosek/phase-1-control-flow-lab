function scuberGreetingForFeet(n) {
  // Write your code here!
  if (n > 2500) {
    return "No can do.";
  } else if (n > 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (n > 400 && n < 2000) {
    return "That will be twenty bucks.";
  } else if (n < 400) {
    return "This one is on me!";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  // const response = city === "NYC" ? "Ok, sounds good." : "No go.";
  // return response;
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
