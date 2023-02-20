interface ICategory {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    rank: number;
    image: {
      id: number;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: any;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any;
      createdAt: string;
      updatedAt: string;
    }
  }
  