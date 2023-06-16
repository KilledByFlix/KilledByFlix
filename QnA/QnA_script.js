document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
  
    var questionInput = document.getElementById("question-input");
    var question = questionInput.value.trim();
  
    if (question !== "") {
      submitQuestion(question);
      clearQuestionInput();
      scrollToQnAContainer();
    }
  });
  
  function submitQuestion(question) {
    // Hier kannst du die Logik einfügen, um die Frage an deinen Server oder eine Datenbank zu senden
    // Beispiel: Hier könntest du eine AJAX-Anfrage verwenden, um die Frage zu übermitteln
    // Nachdem die Frage beantwortet wurde, kannst du die Funktion addQuestionAndAnswer(question, answer) aufrufen
    var answer = getAnswer(question);
    addQuestionAndAnswer(question, answer);
  }
  
  function addQuestionAndAnswer(question, answer) {
    var qnaList = document.getElementById("qna-list");
    var listItem = document.createElement("li");
    var questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerText = question;
    var answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.innerText = answer;
    listItem.appendChild(questionElement);
    listItem.appendChild(answerElement);
    qnaList.appendChild(listItem);
  }
  
  function getAnswer(question) {
    // Hier kannst du deine Logik einfügen, um die passende Antwort zur Frage zu erhalten
    // Beispiel: return "Antwort auf die Frage: " + question;
    return "Antwort auf die Frage: " + question;
  }
  
  function clearQuestionInput() {
    var questionInput = document.getElementById("question-input");
    questionInput.value = "";
  }
  
  function scrollToQnAContainer() {
    var qnaContainer = document.getElementById("qna-container");
    qnaContainer.scrollIntoView({ behavior: "smooth" });
  }