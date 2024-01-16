import { json } from '@sveltejs/kit';
import supabase_admin from '$lib/supabase/admin'

export async function GET({ params }) {

  const [{data, error}] = await Promise.all([
    supabase_admin.from('templates').select().filter('available', 'eq', true),
  ])

  if (error) return new Response(error.message)

  return json({
    templates: data,
  })

}