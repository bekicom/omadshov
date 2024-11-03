let language = window.navigator
  ? window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage
  : "en";

// Til kodini kichik harflar bilan olish
language = language.slice(0, 2).toLowerCase();

if (language !== "en") {
  fetch("../text.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => {
      const localizedText = json[language];
      if (localizedText) {
        // DOM elementlarining class nomlari
        const elements = [
          "title",
          "text1",
          "text2",
          "text3",
          "ok",
          "comment1",
          "comment2",
          "comment3",
          "comment4",
          "comment5",
          "comment6",
          "comment7",
          "comment8",
        ];

        elements.forEach((className) => {
          // Har bir elementni class orqali tanlab olamiz
          const element = document.querySelector(`.${className}`);
          if (element && localizedText[className]) {
            element.innerHTML = localizedText[className];
          }
        });
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
