import { fetchCategoryBySlug, type PageProps } from '#/lib/getCategories';

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">
        All {category.name}
      </div>
    </div>
  );
}
