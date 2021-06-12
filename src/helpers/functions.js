export const capitalize = (value) => {
  if (!value || typeof value !== "string") {
    return "";
  }

  return (
    value
      .split(" ") // ["san", "francisco"]
      .map(
        (word) =>
          // S + an = San
          word[0].toUpperCase() + word.slice(1)
      )
      // San + " "+ Francisco
      .join(" ")
  );
};
