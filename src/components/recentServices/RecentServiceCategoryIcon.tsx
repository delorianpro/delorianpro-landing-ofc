import { Camera, MessageSquareText, Wrench } from "lucide-react";

export function RecentServiceCategoryIcon({ category }: { category: string }) {
  const normalizedCategory = category.toLocaleLowerCase("pt-BR");

  if (normalizedCategory.includes("câmera")) {
    return <Camera aria-hidden="true" />;
  }

  if (normalizedCategory.includes("interfone")) {
    return <MessageSquareText aria-hidden="true" />;
  }

  return <Wrench aria-hidden="true" />;
}
