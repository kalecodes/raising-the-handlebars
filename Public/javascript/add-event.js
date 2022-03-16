async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="event-title"]').value.trim();
  const location = document
    .querySelector('input[name="event-location"]')
    .value.trim();
  const description = document
    .querySelector('textarea[name="event-description"]')
    .value.trim();
  const date = document.querySelector('input[name="event-date"]').value.trim();

  const response = await fetch("/api/events", {
    method: "POST",
    body: JSON.stringify({
      name,
      location,
      description,
      date,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-event-form")
  .addEventListener("submit", newFormHandler);
