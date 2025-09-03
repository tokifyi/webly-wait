# 🚀 Supabase Setup for Webly Waitlist

## 📋 **Step 1: Create Supabase Account**

1. Go to [supabase.com](https://supabase.com)
2. Sign up for free account
3. Create new project

## 🗄️ **Step 2: Create Database Table**

1. Go to **SQL Editor** in your Supabase dashboard
2. Run this SQL to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'active'
);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);
```

## 🔑 **Step 3: Get API Keys**

1. Go to **Settings** → **API** in Supabase dashboard
2. Copy **Project URL** (starts with `https://`)
3. Copy **service_role** key (starts with `eyJ`)

## ⚙️ **Step 4: Set Environment Variables**

1. Create `.env.local` file in your project root
2. Add these variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🧪 **Step 5: Test the Form**

1. Run `npm run dev`
2. Fill out the waitlist form
3. Check Supabase dashboard → **Table Editor** → **waitlist**
4. You should see the email appear!

## 🎯 **Features Included:**

- ✅ **Email validation** (must contain @)
- ✅ **Duplicate prevention** (can't join twice)
- ✅ **Loading states** and error handling
- ✅ **Success messages** and form reset
- ✅ **Database storage** with timestamps

## 🔒 **Security Notes:**

- Uses **service_role** key (has full access)
- For production, consider using **anon** key with RLS policies
- Emails are stored securely in Supabase

## 📊 **View Submissions:**

- Go to **Table Editor** → **waitlist** in Supabase
- Export data as CSV
- Set up email notifications in Supabase dashboard

## 🚀 **Deploy:**

- Push to GitHub
- Deploy to Vercel/Netlify
- Add environment variables in deployment platform
- Form works immediately!

---

**Need help?** Check [Supabase docs](https://supabase.com/docs) or ask in the community!
