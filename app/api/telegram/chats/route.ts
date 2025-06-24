import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: chats, error } = await supabase
      .from('telegram_chats')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching telegram chats:', error);
      return NextResponse.json({ error: 'Failed to fetch chats' }, { status: 500 });
    }

    return NextResponse.json({ chats });
  } catch (error) {
    console.error('Error in telegram chats API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}