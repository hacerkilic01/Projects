import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
// Markdown metni HTML'e dönüştürmek için kullanılır

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  // dosya yolu için
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  // readFile fonksiyonu dosya yolunda asenkron olarak okur
  return { title, date, image, body };
}
