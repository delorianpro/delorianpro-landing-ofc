export const runtime = 'nodejs';

import { supabase } from '@/lib/supabase';

export async function POST(req) {
  try {
    const formData = await req.formData();

    const nome = formData.get('nome');
    const telefone = formData.get('whatsapp');

    const telefoneLimpo = telefone.replace(/\D/g, '');


    console.log("Recebido:", nome, telefoneLimpo);

    if (!nome || !telefoneLimpo) {
      return new Response(JSON.stringify({ erro: 'Preencha tudo' }), {
        status: 400,
      });
    }

    const { error } = await supabase
      .from('clientes') // ou 'sindicos' se sua tabela for esse nome
      .insert([{ nome, telefone: telefoneLimpo }]);

    if (error) throw error;

    return new Response(JSON.stringify({ sucesso: true }), {
      status: 200,
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ erro: err.message }), {
      status: 500,
    });
  }
}