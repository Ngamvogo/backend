const { Pool } = require('pg');
require('dotenv').config();

const supabase = require('@supabase/supabase-js').createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// 📌 Connexion à la base de données
const pool = new Pool({
    connectionString: process.env.SUPABASE_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

module.exports = { supabase, pool };
