import { mockNews } from '$lib/components';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const current = mockNews.find((n) => n.slug === params.slug);
  return { current };
};
