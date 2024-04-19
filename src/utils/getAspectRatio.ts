// utils/getAspectRatio.ts
const getAspectRatio = (imageUrl: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      resolve(aspectRatio);
    };
    img.onerror = reject;
    img.src = imageUrl;
  });
};

export default getAspectRatio;
