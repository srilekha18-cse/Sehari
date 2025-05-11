// Example script: Add event listener for dropdown
document.getElementById('event-select').addEventListener('change', function() {
    const selectedEvent = this.value;
    console.log("Event selected:", selectedEvent);
  });
  function callUs() {
    alert("Calling support...");
  }
  
  function openChat() {
    alert("Opening chat window...");
  }
  
  function generateEvent() {
    const event = document.getElementById("event-select").value;
    const date = document.getElementById("event-date").value;
    const time = document.getElementById("event-time").value;
    const venue = document.getElementById("venue").value;
    const thoughts = document.getElementById("thoughts").value;
  
    console.log("Generated Event Details:");
    console.log({ event, date, time, venue, thoughts });
  
    alert("Event details generated! Check console for values.");
  }
  