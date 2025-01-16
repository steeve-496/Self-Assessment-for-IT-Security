function calculateScore() {
    let score = 0;
    const form = document.getElementById("selfAssessmentForm");
    const resultDiv = document.getElementById("assessmentResult");
  
    // Check answers
    if (form.q1 && form.q1.value === "yes") score++;
    if (form.q2 && form.q2.value === "yes") score++;
    if (form.q3 && form.q3.value === "yes") score++;
    if (form.q4 && form.q4.value === "yes") score++;
  
    // Display results with feedback
    resultDiv.style.display = "block";
    if (score === 4) {
      resultDiv.className = "result success";
      resultDiv.innerHTML =
        "Excellent! You're following top-notch IT security practices.";
    } else if (score >= 2) {
      resultDiv.className = "result warning";
      resultDiv.innerHTML =
        "Good effort, but there's room for improvement. Review your security habits.";
    } else {
      resultDiv.className = "result error";
      resultDiv.innerHTML =
        "You need to improve your IT security practices immediately!";
    }
  }
  