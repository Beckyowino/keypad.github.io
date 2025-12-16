document.addEventListener('DOMContentLoaded', function () {
  const map = {
    'tji-search': ['fa-solid','fa-magnifying-glass'],
    'tji-arrow-right-long': ['fa-solid','fa-arrow-right'],
    'tji-arrow-right': ['fa-solid','fa-arrow-right'],
    'tji-arrow-left': ['fa-solid','fa-arrow-left'],
    'tji-play': ['fa-solid','fa-play'],
    'tji-phone': ['fa-solid','fa-phone'],
    'tji-phone-3': ['fa-solid','fa-phone'],
    'tji-plane': ['fa-solid','fa-paper-plane'],
    'tji-box': ['fa-solid','fa-box'],
    'tji-innovative': ['fa-solid','fa-lightbulb'],
    'tji-award': ['fa-solid','fa-trophy'],
    'tji-support': ['fa-solid','fa-headset'],
    'tji-plus': ['fa-solid','fa-plus'],
    'tji-clock': ['fa-solid','fa-clock'],
    'tji-service-1': ['fa-solid','fa-briefcase'],
    'tji-service-2': ['fa-solid','fa-briefcase'],
    'tji-service-3': ['fa-solid','fa-briefcase'],
    'tji-service-4': ['fa-solid','fa-briefcase'],
    'tji-service-5': ['fa-solid','fa-briefcase'],
    'tji-service-6': ['fa-solid','fa-briefcase'],
    'tji-box': ['fa-solid','fa-box'],
    'tji-check': ['fa-solid','fa-check'],
    'tji-plus': ['fa-solid','fa-plus']
  };

  // Find elements that have any class starting with "tji-" and replace per map
  const elements = document.querySelectorAll('[class*="tji-"]');
  elements.forEach(function (el) {
    const clsList = Array.from(el.classList);
    clsList.forEach(function (cls) {
      if (map[cls]) {
        el.classList.remove(cls);
        map[cls].forEach(function (newCls) { el.classList.add(newCls); });
      }
    });
  });
});
