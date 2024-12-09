document.addEventListener("DOMContentLoaded", () => {
  // Select the button and input elements
  const chooseButton = document.querySelector('.choose');
  const numberInput = document.querySelector('.number-input');

  // Add an event listener to ensure only numbers are input
  numberInput.addEventListener('input', function () {
    // Replace any non-numeric characters except for numbers
    this.value = this.value.replace(/[^0-9]/g, '');

    // Limit the input to a maximum of 3 characters
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  });

  // Add an event listener to the button
  chooseButton.addEventListener('click', function () {
    // Get the value from the input
    const inputValue = numberInput.value;

    // Check if the number is less than 1 or greater than 100
    if (inputValue < 1 || inputValue > 100 || inputValue === "") {
      document.querySelector(".text").innerHTML = "Choose a number between 1 and 100";
    } else {
      const saints = [
        "Saint Charbel Makhlouf",   // 1 Lebanese
        "Saint Rafqa",              // 2 Lebanese
        "Saint Nimatullah Kassab", // 3 Lebanese
        "Saint Maron",             // 4 Lebanese (founder of the Maronite Church)
        "Saint George",             // 5 Internationally recognized, popular in Lebanon
        "Saint Elias",              // 6 Lebanese, Prophet Elijah in Christian tradition
        "Saint Anthony of Padua",  // 7 International, very popular in Lebanon
        "Saint Theresa of Lisieux", // 8 French, beloved by Lebanese Catholics
        "Saint Joseph",             // 9 Universal, highly revered in Lebanon
        "Saint Michael the Archangel", // 10 Universal, patron of Lebanon
        "Saint John the Baptist",   // 11 International, important in Lebanese Christianity
        "Saint Paul",               // 12 Universal, important in Lebanon as the birthplace of Saint Paul
        "Saint Peter",              // 13 Universal, highly revered in Lebanon's Catholic tradition
        "Saint Catherine of Siena", // 14 International, known in Lebanon
        "Saint Clare of Assisi",    // 15 International, widely honored
        "Saint Benedict of Nursia", // 16 Italian, known in Lebanon
        "Saint Augustine of Hippo", // 17 North African, significant globally and in Lebanon
        "Saint Therese of Lisieux", // 18 French, known in Lebanon
        "Saint Joan of Arc",        // 19 French, honored in Lebanon
        "Saint Bernadette Soubirous", // 20 French, known in Lebanon
        "Saint Vincent de Paul",    // 21 French, loved in Lebanon
        "Saint John Bosco",         // 22 Italian, influential in Lebanon
        "Saint Francis of Assisi",  // 23 Italian, revered in Lebanon
        "Saint Thomas Aquinas",     // 24 Italian, significant globally
        "Saint Ignatius of Loyola", // 25 Spanish, influential worldwide and in Lebanon
        "Saint Teresa of Avila",    // 26 Spanish, known in Lebanon
        "Saint Francis Xavier",     // 27 Spanish, well-known in Lebanon
        "Saint Louis de France",    // 28 French, beloved in Lebanon
        "Saint Padre Pio",          // 29 Italian, very popular in Lebanon
        "Saint Maximilian Kolbe",   // 30 Polish, known globally, including Lebanon
        "Saint John Paul II",       // 31 Polish, very popular in Lebanon
        "Saint Stanislaus Kostka",  // 32 Polish, recognized in Lebanon
        "Saint Kateri Tekakwitha",  // 33 Native American, known globally
        "Saint Josemaria Escrivá",  // 34 Spanish, influential in Lebanon
        "Saint Dominic",            // 35 Spanish, known in Lebanon
        "Saint Vincent Ferrer",     // 36 Spanish, popular in Lebanon
        "Saint Hildegard of Bingen", // 37 German, known worldwide
        "Saint Cecilia",            // 38 Roman, popular globally
        "Saint Lawrence",           // 39 Roman, known in Lebanon
        "Saint Sebastian",          // 40 Roman, venerated in Lebanon
        "Saint Thomas More",        // 41 English, known in Lebanon
        "Saint John Fisher",        // 42 English, known in Lebanon
        "Saint Bonaventure",        // 43 Italian, revered in Lebanon
        "Saint Teresa of Calcutta", // 44 Albanian-Indian, beloved in Lebanon
        "Saint Lawrence Ruiz",      // 45 Filipino, recognized in Lebanon
        "Saint Isidore of Seville", // 46 Spanish, known globally
        "Saint Bede the Venerable", // 47 English, well-known in Lebanon
        "Saint Lawrence of Brindisi", // 48 Italian, known in Lebanon
        "Saint Teresa Benedicta of the Cross", // 49 German, known in Lebanon
        "Saint Gregory the Great",  // 50 Roman, recognized worldwide
        "Saint Bernard of Clairvaux", // 51 French, honored in Lebanon
        "Saint Alphonsus Liguori",  // 52 Italian, well-known in Lebanon
        "Saint Bernardine of Siena", // 53 Italian, recognized in Lebanon
        "Saint Angela Merici",      // 54 Italian, known in Lebanon
        "Saint George of Lydda",    // 55 Roman, widely honored
        "Saint Michael the Archangel", // 56 Universal, patron of Lebanon
        "Saint Cecilia",            // 57 Roman, revered in Lebanon
        "Saint Rita of Cascia",     // 58 Italian, known globally
        "Saint Benedict",           // 59 Italian, very revered in Lebanon
        "Saint Lawrence of Rome",   // 60 Roman, known in Lebanon
        "Saint James the Greater",  // 61 Spanish, significant in Lebanon
        "Saint Augustine",          // 62 Roman, known globally
        "Saint Dominic Savio",      // 63 Italian, beloved in Lebanon
        "Saint Faustina Kowalska",  // 64 Polish, revered in Lebanon
        "Saint Alphonsus Liguori",  // 65 Italian, influential in Lebanon
        "Saint Pio of Pietrelcina", // 66 Italian, revered in Lebanon
        "Saint Rose of Lima",       // 67 Peruvian, known in Lebanon
        "Saint Philomena",          // 68 Greek, widely known
        "Saint George of Cappadocia", // 69 Greek, known globally
        "Saint Nicholas",           // 70 Greek, venerated in Lebanon
        "Saint George the Great Martyr", // 71 Greek, known in Lebanon
        "Saint Apollonia",          // 72 Egyptian, known in Lebanon
        "Saint Clement of Rome",    // 73 Roman, known in Lebanon
        "Saint Bernard of Menthon", // 74 French, known in Lebanon
        "Saint Junipero Serra",     // 75 Spanish, known in Lebanon
        "Saint Mary Magdalene",     // 76 Biblical, widely revered
        "Saint Edith Stein",        // 77 German, recognized globally
        "Saint Edith of Wilton",    // 78 English, known in Lebanon
        "Saint Catherine Laboure",  // 79 French, popular in Lebanon
        "Saint Teresa of the Andes", // 80 Chilean, loved by many Lebanese
        "Saint John Chrysostom",    // 81 Greek, popular in Lebanon
        "Saint Gregory Nazianzus", // 82 Greek, known in Lebanon
        "Saint Augustine of Canterbury", // 83 English, revered in Lebanon
        "Saint Boniface",           // 84 German, widely recognized
        "Saint John Neumann",       // 85 Bohemian-American, known in Lebanon
        "Saint John the Evangelist", // 86 Roman, important in Lebanon
        "Saint Simeon Stylites",    // 87 Syrian, known in Lebanon
        "Saint George of Georgia",  // 88 Georgian, known in Lebanon
        "Saint Andrew",             // 89 Greek, known in Lebanon
        "Saint Elizabeth of Hungary", // 90 Hungarian, popular in Lebanon
        "Saint Polycarp",           // 91 Early Christian, known in Lebanon
        "Saint Anselm of Canterbury", // 92 Italian-English, known in Lebanon
        "Saint Ignatius of Antioch", // 93 Syrian, known in Lebanon
        "Saint Cyril of Alexandria", // 94 Egyptian, known in Lebanon
        "Saint Basil the Great",    // 95 Greek, popular in Lebanon
        "Saint Nicholas of Myra",   // 96 Turkish, well known in Lebanon
        "Saint Jerome",             // 97 Roman, revered in Lebanon
        "Saint Cyprian",            // 98 African, known in Lebanon
        "Saint Chrysostom",         // 99 Greek, revered in Lebanon
        "Saint Thomas Aquinas"     // 100 Italian, significant in Lebanon
      ];
      
      const randomSaint = saints[Math.floor(Math.random() * saints.length)];

      // Display it on the page
      document.querySelector(".text").innerHTML = `Your Saint of the year of 2025 is : ${randomSaint}`;
    }
  });
});