const hours = () => {
  const hour = document.querySelector("#hour");
  const date = new Date();

  const newHour = date.getHours().toString().padStart(2, "0");
  const newMinutes = date.getMinutes().toString().padStart(2, "0");

  hour.textContent = `${newHour}:${newMinutes}`;
};

const temps = async () => {
  const lat = "47.2186371";
  const lon = "-1.5541362";
  const temp = document.querySelector("#temp");
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}1&current=temperature_2m"
    );

    if (!res.ok) {
      throw new Error("Error: fetch API");
    }
    const data = await res.json();

    temp.textContent = `${data.current.temperature_2m}°C`;
  } catch (err) {
    temp.textContent = err.message;
  }
};

const launchFunc = () => {
  hours();
  setInterval(() => {
    hours();
  }, 1000);

  temps();
};

launchFunc();
