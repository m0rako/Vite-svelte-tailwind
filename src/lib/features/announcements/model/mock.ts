import type { Announcement } from './types'
export const mockAnnouncements: Announcement[] = [
  {
    slug: 'open-day',
    title: 'Кафедра "Таможенное право и служебная деятельность" проводит День открытых дверей',
    date: '11.07.2025',
    link: '#',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  },
  {
    title: 'Приглашаем ознакомиться с перечнем печатных и электронных периодических изданий на 2 полугодие 2025 года',
    date: '04.07.2025',
    link: '#',
    slug: 'open-day2',
    description: 'бббббббббббббббббббббббббббббббббббббббббббббббббббббббббббббб'
  },
  {
    title: 'Мастер-класс по регистрации в Электронно-библиотечных системах',
    date: '05.06.2025',
    link: '#',
    slug: 'open-day3',
    description: 'ВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВВ'
  },
  {
    title: 'Кафедра "Таможенное право и служебная деятельность" проводит День открытых дверей',
    date: '11.07.2025',
    link: '#',
    slug: 'open-day4',
    description: 'ГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГГ'
  },
  {
    title: 'Приглашаем ознакомиться с перечнем печатных и электронных периодических изданий на 2 полугодие 2025 года',
    date: '04.07.2025',
    link: '#',
    slug: 'open-day5',
    description: ''
  },

];
mockAnnouncements.forEach(card => card.link = `announcements/${card.slug}`);