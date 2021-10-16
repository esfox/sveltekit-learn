import { env } from '$lib/env';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export function get({ params })
{
  console.log(params);
  console.log(env.SECRET_VARIABLE);
  return { body: 'hello world' };
}