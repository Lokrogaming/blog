const DATA_URL = new URL('../data/blogs.json', import.meta.url);
const DRAFT_KEY = 'lokro-blog-drafts-v1';
export async function getBlogs() { const local = localStorage.getItem(DRAFT_KEY); if (local) try { return JSON.parse(local); } catch {} const response = await fetch(DATA_URL); if (!response.ok) throw new Error('Blogdaten konnten nicht geladen werden.'); return response.json(); }
export function saveLocal(blogs) { localStorage.setItem(DRAFT_KEY, JSON.stringify(blogs)); }
export function clearLocal() { localStorage.removeItem(DRAFT_KEY); }
export function byNewest(blogs) { return [...blogs].sort((a,b) => new Date(b.date) - new Date(a.date)); }
export function dateDe(date) { return new Intl.DateTimeFormat('de-DE',{day:'2-digit',month:'long',year:'numeric'}).format(new Date(`${date}T12:00:00`)); }
export function slugify(value) { return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
export function readingTime(markdown='') { return Math.max(1, Math.ceil(markdown.replace(/[#*_`\[\]()!-]/g,'').trim().split(/\s+/).filter(Boolean).length / 220)); }
