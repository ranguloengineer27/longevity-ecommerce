import { SupabaseClient } from "@supabase/supabase-js";

export const getProductById = async (supabaseClient:SupabaseClient, id: string) => {
      const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .eq('id', id)
        .single()
    
      if (error) throw error
      return data
  };

export const getProducts = async (supabaseClient:SupabaseClient, page = 1, limit = 8) => {
  const offset = (page - 1) * limit;
  const { data, error } = await supabaseClient
    .from('products')
    .select('*')
    .range(offset, offset + limit - 1)

  if (error) throw error
  
  // Get total count for pagination
  const { count } = await supabaseClient
    .from('products')
    .select('*', { count: 'exact', head: true })

  return {
    data: data || [],
    nextPage: data && data.length === limit && offset + limit < (count || 0) ? page + 1 : null,
  }
}
