import { readdir, readFile } from "node:fs/promises";
// dosyaların listesini alıyoruz, dosya içeriğini okuyoruz

import matter from "gray-matter";
import { marked } from "marked";
// Markdown dosyasının içeriğini ve verilerini çıkarıyoruz ve marked ile Markdown metni HTML'e dönüştürüyoruz
export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  // dosya yolu için
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, body };
}

export async function getReviews() {
  const files = await readdir("./content/reviews");
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    // Bu fonksiyon, belirli bir dosya ismi (slug) ile ilişkili olan inceleme verisini elde etmek için kullanılır
    reviews.push(review);
  }
  return reviews;
}
export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}
