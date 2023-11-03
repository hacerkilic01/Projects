import { readFile } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import Heading from "../../../components/Heading";
export default async function StardewValleyPage() {
  const text = await readFile("./content/reviews/stardew-valley.md", "utf8");
  const { content } = matter(text);
  const html = marked(content, { headerIds: false, mangle: false });
  // readFile fonksiyonu dosya yolunda asenkron olarak okur
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="max-w-screen-sm prose prose-slate"
      ></article>

      {/* doğrudan HTML olarak render edilmesi durumunda güvenlik açıklarına yol açabilir bu tür durumları önlemek için React, içeriği render etmeden önce otomatik olarak kaçınmak için güvenlik önlemleri uygular. dangerous bunun için kullanılır*/}
    </>
  );
}
