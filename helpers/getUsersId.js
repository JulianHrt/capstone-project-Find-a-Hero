function getUserId(username) {
  switch (`${username}`) {
    case "Julian":
      return "1";
    case "Kathrin":
      return "2";
    case "Jana":
      return "3";
    case "Timo":
      return "4";
    case "Max":
      return "5";
    default:
      return undefined;
  }
}

export { getUserId };
