import { mockAnnouncements } from '$lib/components';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const current = mockAnnouncements.find(c => c.slug === params.slug);
  return { current };
};
