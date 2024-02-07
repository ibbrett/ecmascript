import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_HEADER_TITLE } from '../consts';

const baseUrl = await import.meta.env.BASE_URL;

export async function GET(context) {
	const posts = await getCollection('features');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		header_title: SITE_HEADER_TITLE,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `${baseUrl}/features/${post.slug}/`,
		})),
	});
}
