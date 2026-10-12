// WeatherWatch AI - front-end demonstration. Values are simulated, not live forecasts.
const $ = (id) => document.getElementById(id);
const demoProfiles = [
  {temp:31, feels:35, humidity:78, rain:68, wind:24, dir:"NE · 42°", condition:"Cloudy with humid conditions", risk:"MODERATE"},
  {temp:28, feels:31, humidity:84, rain:82, wind:31, dir:"E · 86°", condition:"Overcast; rain likely", risk:"HIGH"},
  {temp:33, feels:36, humidity:65, rain:24, wind:17, dir:"SW · 225°", condition:"Partly cloudy", risk:"LOW"},
  {temp:29, feels:33, humidity:81, rain:74, wind:27, dir:"SE · 145°", condition:"Humid with possible showers", risk:"MODERATE"}
];
let profileIndex = 0;
function applyProfile(p, location) {
  $("temp").textContent = p.temp;
  $("feels").textContent = `${p.feels}°C`;
  $("humidity").textContent = `${p.humidity}%`;
  $("rain").innerHTML = `${p.rain}<span>%</span>`;
  $("rainBar").style.width = `${p.rain}%`;
  $("rainLabel").textContent = p.rain >= 75 ? "Very likely" : p.rain >= 50 ? "High chance" : p.rain >= 30 ? "Possible" : "Low chance";
  $("wind").textContent = p.wind;
  $("windDir").textContent = p.dir;
  $("condition").textContent = p.condition;
  $("riskText").textContent = p.risk;
  $("riskDesc").textContent = p.risk === "HIGH" ? "Take extra care and check official alerts." : p.risk === "LOW" ? "No major simulated weather concern." : "Stay aware of changing conditions.";
  document.querySelector(".risk-dot").style.background = p.risk === "HIGH" ? "#ff776f" : p.risk === "LOW" ? "#4cddaa" : "#ffbf69";
  document.querySelector(".risk-dot").style.boxShadow = p.risk === "HIGH" ? "0 0 0 5px #4a282b" : p.risk === "LOW" ? "0 0 0 5px #1c4038" : "0 0 0 5px #4b3525";
  $("locationName").textContent = location || "Chennai, Tamil Nadu";
  $("forecastMessage").textContent = p.rain >= 75
    ? "The demo model indicates a high chance of rain. Avoid waterlogged routes and monitor official local updates."
    : p.rain >= 50
      ? "Rain chances may rise during the next few hours. Keep checking official local updates."
      : "The demo model indicates a lower rain chance. Conditions can still change; check official local updates.";
  const heights = [Math.max(12,p.rain-28), Math.max(16,p.rain-20), Math.max(20,p.rain-8), Math.min(96,p.rain+10), Math.max(15,p.rain+3), Math.max(12,p.rain-10)];
  document.querySelectorAll(".bar").forEach((bar, i) => {
    bar.style.height = `${heights[i]}%`;
    bar.classList.toggle("high", heights[i] >= 75);
  });
  const riskLabel = p.risk === "HIGH" ? "HIGH RISK" : p.risk === "LOW" ? "LOW RISK" : "MODERATE RISK";
  $("alertCount").textContent = p.risk === "HIGH" ? "4" : p.risk === "LOW" ? "1" : "3";
  const list = $("alertList");
  if (p.risk === "HIGH") {
    list.innerHTML = `<div class="alert-item warning"><span class="alert-symbol">!</span><div><div class="alert-title">Heavy rainfall watch</div><p>High rain probability in this simulated scenario.</p><small>DEMO ALERT · JUST NOW</small></div></div><div class="alert-item warning"><span class="alert-symbol">↗</span><div><div class="alert-title">Strong wind awareness</div><p>Secure loose objects and avoid exposed areas.</p><small>DEMO ALERT · JUST NOW</small></div></div><div class="alert-item caution"><span class="alert-symbol">⌁</span><div><div class="alert-title">Waterlogging awareness</div><p>Low-lying roads may become difficult to cross.</p><small>SAFETY NOTICE</small></div></div>`;
  } else if (p.risk === "LOW") {
    list.innerHTML = `<div class="alert-item info"><span class="alert-symbol">✓</span><div><div class="alert-title">No major demo alert</div><p>Continue normal awareness and check official forecasts.</p><small>DEMO STATUS · JUST NOW</small></div></div>`;
  } else {
    list.innerHTML = `<div class="alert-item warning"><span class="alert-symbol">!</span><div><div class="alert-title">Rainfall watch</div><p>Rainfall may intensify in the next few hours.</p><small>DEMO ALERT · JUST NOW</small></div></div><div class="alert-item info"><span class="alert-symbol">↗</span><div><div class="alert-title">Gusty winds possible</div><p>Secure loose objects and avoid exposed areas.</p><small>DEMO ALERT</small></div></div><div class="alert-item caution"><span class="alert-symbol">⌁</span><div><div class="alert-title">Waterlogging awareness</div><p>Low-lying roads may become difficult to cross.</p><small>SAFETY NOTICE</small></div></div>`;
  }
}
$("refreshBtn").addEventListener("click", () => {
  profileIndex = (profileIndex + 1) % demoProfiles.length;
  applyProfile(demoProfiles[profileIndex], $("locationName").textContent);
});
$("locationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const location = $("locationInput").value.trim();
  if (!location) { $("locationInput").focus(); return; }
  profileIndex = (profileIndex + 1) % demoProfiles.length;
  applyProfile(demoProfiles[profileIndex], `${location} · demo`);
  $("locationInput").value = "";
});
