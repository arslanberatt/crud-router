export interface Home {
  id: number;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  imageUrl: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
}

export interface CreateHomeData {
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  imageUrl: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
}

export interface UpdateHomeData extends Partial<CreateHomeData> {
  id: number;
}
