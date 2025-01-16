function calculateScore() {
    let score = 0;
    const form = document.getElementById("selfAssessmentForm");
    const resultDiv = document.getElementById("assessmentResult");
  

    if (form.q1 && form.q1.value === "yes") score++;
    if (form.q2 && form.q2.value === "yes") score++;
    if (form.q3 && form.q3.value === "yes") score++;
    if (form.q4 && form.q4.value === "yes") score++;
    if (form.q5 && form.q5.value === "yes") score++;
  
  
    resultDiv.style.display = "block";
    if (score === 5) {
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
  
