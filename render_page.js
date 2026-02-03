const fileItems = document.querySelectorAll('.file-item');
const sections = document.querySelectorAll('section');
const main = document.getElementById('main');

fileItems.forEach(item => {
    item.addEventListener('click', () => {
    document.getElementById(item.dataset.section).scrollIntoView();
    });
});

main.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 100) {
            current = section.id;
        }
    });
    fileItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === current);
    });
});

const birthDate = new Date('2010-08-22T00:00:00');
const lifeExpectancy = 82.8;
const expectedDeath = new Date(birthDate.getTime() + lifeExpectancy * 365.25 * 24 * 60 * 60 * 1000);

document.getElementById('deathDate').textContent = `~${expectedDeath.getFullYear()}`;

function updateStats() {
    const now = new Date();
    const ageMs = now - birthDate;
    const ageSec = ageMs / 1000;
    const ageMin = ageSec / 60;
    const ageHours = ageMin / 60;
    const ageDays = ageHours / 24;
    const ageYears = ageDays / 365.25;

    // assuming average life expectancy
    const years = Math.floor(ageYears);
    const remainingDays = Math.floor(ageDays % 365.25);
    const remainingHours = Math.floor(ageHours % 24);
    const remainingMinutes = Math.floor(ageMin % 60);
    const remainingSeconds = Math.floor(ageSec % 60);

    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = remainingDays;
    document.getElementById('hours').textContent = remainingHours;
    document.getElementById('minutes').textContent = remainingMinutes;
    document.getElementById('seconds').textContent = remainingSeconds;

    const lifePercent = (ageYears / lifeExpectancy) * 100;
    document.getElementById('lifePercent').textContent = lifePercent.toFixed(6) + '%';
    document.getElementById('lifeFill').style.width = lifePercent + '%';

    const yearsLeft = lifeExpectancy - ageYears;
    const daysLeft = yearsLeft * 365.25;
    document.getElementById('timeLeft').textContent = yearsLeft.toFixed(2) + ' years';
    document.getElementById('timeLeftDays').textContent = Math.floor(daysLeft).toLocaleString() + ' days left to do cool stuff';

    document.getElementById('sleepYears').textContent = (ageYears / 3).toFixed(2) + ' years';

    const heartbeats = Math.floor(ageDays * 100000);
    document.getElementById('heartbeats').textContent = heartbeats.toLocaleString();
}

updateStats();
setInterval(updateStats, 1000);

let wastedSeconds = 0;
setInterval(() => {
    wastedSeconds++;
    document.getElementById('wastedTime').textContent = wastedSeconds;
    document.getElementById('wastedTime2').textContent = wastedSeconds;
}, 1000);
