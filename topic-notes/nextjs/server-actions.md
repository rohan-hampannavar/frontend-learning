# Server Actions

Async functions that run on the server, called directly from components.

```ts
'use server';
export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  await db.posts.create({ data: { title } });
  revalidatePath('/posts');
}
```
