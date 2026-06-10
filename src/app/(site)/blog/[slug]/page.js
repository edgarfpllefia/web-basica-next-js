import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// "Oye Next.js, crea una página estática para cada uno de estos slugs"
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: { slug: true },
  });
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) notFound();

  return (
    <article className="space-y-4">
      <p className="text-sm uppercase tracking-wide text-blue-600">Blog</p>
      <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
      {post.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={640}
            height={360}
            className="object-cover"
          />
        </div>
      )}
      <p className="text-slate-600">{post.content}</p>
    </article>
  );
}
