import type { ImgHTMLAttributes } from "react";
import images from "../data/portfolio-images.json";

type Asset = { src: string; srcSet: string; small: string; width: number; height: number };
const assets: Record<string, Asset> = images;

export function portfolioImageUrl(src: string, small = false) {
  const asset = assets[src];
  return asset ? (small ? asset.small : asset.src) : src;
}

export default function PortfolioImage({ src, alt, sizes, ...props }: ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const asset = assets[src];
  const isCard = /^\/wuxing-(card|enemy)-/.test(src);
  return <img loading="lazy" decoding="async" width={asset?.width} height={asset?.height}
    {...props} src={asset?.src ?? src} srcSet={asset?.srcSet}
    sizes={sizes ?? (isCard ? "(max-width: 760px) 30vw, 16vw" : "(max-width: 760px) 94vw, 80vw")} alt={alt} />;
}
