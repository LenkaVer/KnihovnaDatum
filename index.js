'use strict';

const meetYourMentor = dayjs('2021-04-28');
const today = dayjs();

if (today.isAfter(meetYourMentor)) {
  document.write('Setkání už proběhlo.');
} else {
  document.write('Brzy potkáš svého mentora.');
}
