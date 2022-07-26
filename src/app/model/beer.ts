export interface Beer {
    id: number;
    name: string;
    tagline: string;
    description: string;
    image_url: string;
    food_pairing: string[];
    ingredients: object;
    ph: number;
}
