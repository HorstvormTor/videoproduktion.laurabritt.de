function cookieBannerSaveConsent(e) {
  document.cookie = "gdprConsent=true; path=/;"
  checkHideCookieBanner()
  // e.preventDefault();
}

function checkHideCookieBanner() {
  let cookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("gdprConsent="))
  if (cookie !== undefined && cookie.trim() === "gdprConsent=true") {
    const banner = document.querySelector(".cookie-banner-outer");
    banner.classList.add("hidden")
  }
}

window.addEventListener('load', checkHideCookieBanner)
