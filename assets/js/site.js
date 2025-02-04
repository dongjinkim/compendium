var selectedEnemy = 0;
var selectedJob = storageAvailable() ? window.localStorage.getItem('selectedJob') : 'MCH';

window.onload = function() {
  urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('enemy')) {
    const input = parseInt(urlParams.get('enemy'));
    if (Number.isInteger(input) && input >= 0) {
      selectedEnemy = input;
    }
  }

  if (urlParams.has('job')) {
    const input = urlParams.get('job').toUpperCase();
    const jobSelects = document.getElementsByClassName('jobSelect');
    if (jobSelects && jobSelects.length
        && Array.from(jobSelects[0].getElementsByTagName('option')).some(x => x.value === input)) {
      selectedJob = input;
    }
  }

  selectEnemy(selectedEnemy);
  selectJob(selectedJob);
}

function storageAvailable() {
  // Simpler version of recommendation here:
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage
  try {
      const storage = window.localStorage;
      if (!storage) {
        return false;
      }
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  } catch(e) {
      return false;
  }
}

function toggleOpen(id) {
  var element = document.getElementById(id);
  element.classList.toggle('open');
}

function selectNext() {
  selectEnemy(selectedEnemy + 1);
}

function selectPrevious() {
  selectEnemy(selectedEnemy - 1);
}

function selectEnemy(index) {
  var images = document.getElementsByClassName('galleryImage');
  if (!images.length) {
    return;
  }
  var texts = document.getElementsByClassName('galleryItem');
  var notes = document.getElementsByClassName('galleryJobNotes');
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
    texts[i].classList.remove('active');
    notes[i].classList.remove('active');
  }
  images[index].classList.add('active');
  texts[index].classList.add('active');
  notes[index].classList.add('active');
  selectedEnemy = index;
}

function selectJob(job) {
  var jobSelects = document.getElementsByClassName('jobSelect');
  if (!jobSelects || !jobSelects.length
      || !Array.from(jobSelects[0].getElementsByTagName('option')).some(x => x.value === job)) {
    return;
  }
  for (var i = 0; i < jobSelects.length; i++) {
    jobSelects[i].value = job;
  }
  var allJobs = document.getElementsByClassName('jobSpecific');
  for (var i = 0; i < allJobs.length; i++) {
    allJobs[i].className = allJobs[i].className.replace(' active', '');
  }
  var selectedJobElements = document.getElementsByClassName('job' + job);
  for (var i = 0; i < selectedJobElements.length; i++) {
    selectedJobElements[i].className += ' active';
  }
  selectedJob = job;
  if (storageAvailable()) {
    window.localStorage.setItem('selectedJob', job);
  }
}
