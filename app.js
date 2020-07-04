const moonPath =
  "M15.5 26C15.5 41.1878 27.5 54 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 -3.8147e-06 27.5 -3.8147e-06C27.5 -3.8147e-06 15.5 10.8122 15.5 26Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
const title = document.querySelector("#title");

let isDarkMode = false;

// CLICK THE SUN!
darkMode.addEventListener("click", () => {
  if (isDarkMode) {
    isDarkMode = false;
  } else {
    isDarkMode = true;
  }
  // Use the anime.js
  //   Set Up animation timeline
  const timeline = anime.timeline({
    duration: 750, // milisecond
    easing: "easeOutExpo",
  });

  //   Add different animation to the timeline
  timeline
    .add({
      targets: ".sun",
      d: [
        {
          value: isDarkMode ? moonPath : sunPath,
        },
      ],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: isDarkMode ? "rgb(22, 22, 22)" : "rgb(199, 199, 199)",
      },
      "-=700"
    )
    .add(
      {
        targets: "#title",
        color: isDarkMode ? "#FFFFFF" : "rgb(22, 22, 22)",
        easing: "easeOutExpo",
        begin() {
          title.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
        },
      },
      "-=700"
    );
});
