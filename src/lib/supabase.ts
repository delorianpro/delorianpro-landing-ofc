import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ofrhyyruhwcszxypmjvn.supabase.co';
const supabaseKey = 'sb_publishable_vHAYKqO0t2_ksJh3iUEthw_EkbHNuUg';

export const supabase = createClient(supabaseUrl, supabaseKey);