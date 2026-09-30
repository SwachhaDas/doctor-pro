const appointmentForm = document.querySelector("#appointmentForm");
const formFeedback = document.querySelector("#formFeedback");
const preferredDate = document.querySelector("#preferredDate");

document.querySelector("#currentYear").textContent = new Date().getFullYear();

if (preferredDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  preferredDate.min = localToday;
}

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!appointmentForm.reportValidity()) {
    return;
  }

  const patientName = appointmentForm.elements.fullName.value.trim();
  formFeedback.textContent = `Thanks, ${patientName}. Your request is ready. This demo form does not send data; please call (206) 555-0184 to complete your booking.`;
  formFeedback.classList.add("is-visible");
  formFeedback.focus();
});